import React, { useState, useEffect } from "react";
import api from "../../config/api";
import { Trash2, Loader2, FileText, CheckCircle2, Clock, PhoneCall } from "lucide-react";
import ConfirmModal from "../../components/ConfirmModal";

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quoteToDelete, setQuoteToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchQuotes = async () => {
    try {
      const res = await api.get("/admin/quotes");
      setQuotes(res.data.data || []);
    } catch (error) {
      console.error("Error fetching quotes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/admin/quotes/${id}/status`, { status: newStatus });
      fetchQuotes();
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  const handleDeleteClick = (quote) => {
    setQuoteToDelete(quote);
  };

  const handleConfirmDelete = async () => {
    if (!quoteToDelete) return;
    setIsDeleting(true);
    try {
      await api.delete(`/admin/quotes/${quoteToDelete.id}`);
      fetchQuotes();
    } catch (error) {
      console.error("Error deleting quote", error);
    } finally {
      setIsDeleting(false);
      setQuoteToDelete(null);
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
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 pb-24">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Quote Requests
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Incoming inquiries and customized package estimates submitted from the Get Quote wizard.
          </p>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Received Submissions</h2>
              <p className="text-xs text-slate-500">Live feed of clients requesting services.</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {quotes.length} Total
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/70 border-b border-slate-200">
              <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4">Date</th>
                <th className="p-4">Client Contact</th>
                <th className="p-4">Business Details</th>
                <th className="p-4">Services Selected</th>
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
                      Loading quote requests...
                    </div>
                  </td>
                </tr>
              ) : quotes.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-400 text-sm">
                    No quote requests submitted yet.
                  </td>
                </tr>
              ) : (
                quotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 align-top text-xs font-semibold text-slate-500 whitespace-nowrap">
                      {new Date(quote.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-4 align-top">
                      <div className="font-bold text-slate-900 text-sm">{quote.contactName}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{quote.contactEmail}</div>
                      <div className="text-xs font-medium text-amber-700 mt-0.5">{quote.contactPhone}</div>
                    </td>
                    <td className="p-4 align-top max-w-xs">
                      <div className="font-bold text-slate-800 text-sm">{quote.businessName || "Unnamed Business"}</div>
                      {quote.businessDesc && (
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed" title={quote.businessDesc}>
                          {quote.businessDesc}
                        </p>
                      )}
                      {quote.turnover && quote.turnover !== "N/A" && (
                        <div className="mt-1.5 inline-block text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          Turnover: {quote.turnover}
                        </div>
                      )}
                    </td>
                    <td className="p-4 align-top max-w-xs">
                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60 text-xs font-bold mb-1.5">
                        {quote.category}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {Array.isArray(quote.services) && quote.services.length > 0 ? (
                          quote.services.map((s, i) => (
                            <span
                              key={i}
                              className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-[10px] font-medium"
                            >
                              {s}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-slate-400 italic">No specific services</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 align-top text-center whitespace-nowrap">
                      {getStatusBadge(quote.status)}
                    </td>
                    <td className="p-4 align-top text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <select
                          className="text-xs font-semibold text-slate-700 bg-slate-50/80 hover:bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500/20 cursor-pointer transition"
                          value={quote.status}
                          onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button
                          onClick={() => handleDeleteClick(quote)}
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
        isOpen={Boolean(quoteToDelete)}
        onClose={() => setQuoteToDelete(null)}
        onConfirm={handleConfirmDelete}
        title="Delete Quote Request"
        message="Are you sure you want to delete this quote request? This action cannot be undone."
        confirmText="Delete Quote"
        isLoading={isDeleting}
      />
    </div>
  );
}
