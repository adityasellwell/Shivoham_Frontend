import React, { useState, useEffect } from "react";
import api from "../../config/api";
import { Trash2, Loader2, MessageSquare, Clock, PhoneCall, CheckCircle2 } from "lucide-react";
import ConfirmModal from "../../components/ConfirmModal";

export default function AdminConsultations() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchConsultations = async () => {
    try {
      const res = await api.get("/admin/consultations");
      setConsultations(res.data.data || []);
    } catch (error) {
      console.error("Error fetching consultations", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConsultations();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/admin/consultations/${id}/status`, { status: newStatus });
      fetchConsultations();
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;
    setIsDeleting(true);
    try {
      await api.delete(`/admin/consultations/${itemToDelete.id}`);
      fetchConsultations();
    } catch (error) {
      console.error("Error deleting consultation", error);
    } finally {
      setIsDeleting(false);
      setItemToDelete(null);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-500" />
            Pending
          </span>
        );
      case "contacted":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <PhoneCall className="w-3 h-3 text-blue-500" />
            Contacted
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Completed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Consultations & Inquiries
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review inquiries submitted through the contact page and consultation forms.
          </p>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Incoming Inquiries</h2>
              <p className="text-xs text-slate-500">Live feed of consultation requests.</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {consultations.length} Total
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/70 border-b border-slate-200">
              <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4">Date</th>
                <th className="p-4">Client Contact</th>
                <th className="p-4">Subject & Source</th>
                <th className="p-4">Message</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-400 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                      Loading inquiries...
                    </div>
                  </td>
                </tr>
              ) : consultations.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-400 text-sm">
                    No consultation requests found.
                  </td>
                </tr>
              ) : (
                consultations.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 align-top text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-4 align-top">
                      <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.email}</div>
                      <div className="text-xs font-medium text-amber-700 mt-0.5">{item.phone}</div>
                    </td>
                    <td className="p-4 align-top max-w-xs">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 text-[11px] font-bold uppercase tracking-wider mb-1">
                        {item.source || "Website"}
                      </span>
                      <div className="text-xs font-semibold text-slate-800">
                        {item.subject || "General Legal Consultation"}
                      </div>
                    </td>
                    <td className="p-4 align-top max-w-sm">
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed" title={item.message}>
                        {item.message}
                      </p>
                    </td>
                    <td className="p-4 align-top text-center whitespace-nowrap">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="p-4 align-top text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <select
                          className="text-xs font-semibold text-slate-700 bg-slate-50/80 hover:bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer transition"
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button
                          onClick={() => handleDeleteClick(item)}
                          title="Delete Request"
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={Boolean(itemToDelete)}
        onClose={() => setItemToDelete(null)}
        onConfirm={handleConfirmDelete}
        title="Delete Consultation Request"
        message="Are you sure you want to delete this consultation request? This action cannot be undone."
        confirmText="Delete Consultation"
        isLoading={isDeleting}
      />
    </div>
  );
}
