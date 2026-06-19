import React, { useState, useEffect } from "react";
import api from "../../config/api";
import { Trash2 } from "lucide-react";

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      const res = await api.get("/admin/quotes");
      setQuotes(res.data.data);
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

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this quote request?")) {
      try {
        await api.delete(`/admin/quotes/${id}`);
        fetchQuotes();
      } catch (error) {
        console.error("Error deleting quote", error);
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
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">Quote Requests</h2>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Date</th>
                <th className="p-4 font-semibold text-slate-600">Client Info</th>
                <th className="p-4 font-semibold text-slate-600">Business Details</th>
                <th className="p-4 font-semibold text-slate-600">Requirements</th>
                <th className="p-4 font-semibold text-slate-600">Status</th>
                <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan="6" className="p-4 text-center text-slate-500">Loading...</td></tr>
              ) : quotes.length === 0 ? (
                <tr><td colSpan="6" className="p-4 text-center text-slate-500">No quote requests found.</td></tr>
              ) : (
                quotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-sm text-slate-600 whitespace-nowrap">
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-slate-900">{quote.contactName}</div>
                      <div className="text-sm text-slate-500">{quote.contactEmail}</div>
                      <div className="text-sm text-slate-500">{quote.contactPhone}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-slate-900">{quote.businessName}</div>
                      <div className="text-sm text-slate-500 max-w-xs truncate" title={quote.businessDesc}>{quote.businessDesc}</div>
                      <div className="text-xs text-slate-400 mt-1">Turnover: {quote.turnover}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm font-medium text-slate-700">{quote.category}</div>
                      <div className="text-xs text-slate-500 max-w-xs flex flex-wrap gap-1 mt-1">
                        {Array.isArray(quote.services) && quote.services.map((s, i) => (
                          <span key={i} className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">{s}</span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      {getStatusBadge(quote.status)}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <select 
                          className="text-sm border border-slate-300 rounded p-1"
                          value={quote.status}
                          onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button
                          onClick={() => handleDelete(quote.id)}
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
