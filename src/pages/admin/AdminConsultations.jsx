import React, { useState, useEffect } from "react";
import api from "../../config/api";
import { Trash2 } from "lucide-react";

export default function AdminConsultations() {
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchConsultations = async () => {
    try {
      const res = await api.get("/admin/consultations");
      setConsultations(res.data.data);
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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this consultation request?")) {
      try {
        await api.delete(`/admin/consultations/${id}`);
        fetchConsultations();
      } catch (error) {
        console.error("Error deleting consultation", error);
      }
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Pending</span>;
      case "contacted":
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Contacted</span>;
      case "completed":
        return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Completed</span>;
      default:
        return <span className="px-2 py-1 bg-slate-100 text-slate-800 rounded-full text-xs font-medium">{status}</span>;
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">Consultations & Inquiries</h2>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Date</th>
                <th className="p-4 font-semibold text-slate-600">Client Info</th>
                <th className="p-4 font-semibold text-slate-600">Source / Subject</th>
                <th className="p-4 font-semibold text-slate-600">Message</th>
                <th className="p-4 font-semibold text-slate-600">Status</th>
                <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan="6" className="p-4 text-center text-slate-500">Loading...</td></tr>
              ) : consultations.length === 0 ? (
                <tr><td colSpan="6" className="p-4 text-center text-slate-500">No consultation requests found.</td></tr>
              ) : (
                consultations.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-sm text-slate-600 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-slate-900">{item.name}</div>
                      <div className="text-sm text-slate-500">{item.email}</div>
                      <div className="text-sm text-slate-500">{item.phone}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-xs font-bold text-slate-500 uppercase">{item.source}</div>
                      <div className="text-sm font-medium text-slate-700 mt-1">{item.subject || "No Subject"}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-slate-600 max-w-xs truncate" title={item.message}>{item.message}</div>
                    </td>
                    <td className="p-4">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <select 
                          className="text-sm border border-slate-300 rounded p-1"
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700 transition"
                          title="Delete Request"
                        >
                          <Trash2 className="w-5 h-5" />
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
    </div>
  );
}
