import React, { useState, useEffect, useRef } from "react";
import api from "../../config/api";
import { Plus, Edit2, Trash2, Loader2, BarChart3 } from "lucide-react";

export default function AdminStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ label: "", value: "", suffix: "+", sortOrder: 0, isActive: true });
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const formRef = useRef(null);

  const fetchStats = async () => {
    try {
      const res = await api.get("/admin/stats");
      setStats(res.data.data || []);
    } catch (error) {
      console.error("Error fetching stats", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.label.trim() || formData.value === "") {
      return alert("Please fill in statistic label and value.");
    }
    setSaving(true);
    try {
      const payload = {
        ...formData,
        value: parseInt(formData.value) || 0,
        sortOrder: parseInt(formData.sortOrder) || 0,
      };
      if (editingId) {
        await api.put(`/admin/stats/${editingId}`, payload);
      } else {
        await api.post("/admin/stats", payload);
      }
      setFormData({ label: "", value: "", suffix: "+", sortOrder: 0, isActive: true });
      setEditingId(null);
      fetchStats();
    } catch (error) {
      console.error("Error saving stat", error);
      alert(error.response?.data?.message || "Failed to save statistic");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (stat) => {
    setEditingId(stat.id);
    setFormData({
      label: stat.label || "",
      value: stat.value || "",
      suffix: stat.suffix || "+",
      sortOrder: stat.sortOrder || 0,
      isActive: stat.isActive !== undefined ? stat.isActive : true,
    });
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this stat?")) return;
    try {
      await api.delete(`/admin/stats/${id}`);
      fetchStats();
    } catch (error) {
      console.error("Error deleting stat", error);
    }
  };

  const cancel = () => {
    setEditingId(null);
    setFormData({ label: "", value: "", suffix: "+", sortOrder: 0, isActive: true });
  };

  return (
    <div ref={formRef} className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 pb-24">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Manage Stats
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Display live numerical milestones and achievements across homepage counters.
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        {/* Form Header */}
        <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 text-[11px] font-black uppercase tracking-wider">
                Milestone
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {editingId ? "Edit Statistic" : "Add New Statistic"}
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Configure metric labels, counts, and displayed symbols (e.g. 500+ Startups).
            </p>
          </div>

          {editingId && (
            <button
              type="button"
              onClick={cancel}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition shadow-2xs"
            >
              Cancel Edit
            </button>
          )}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Label */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Stat Metric Label <span className="text-amber-600 font-semibold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.label}
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                placeholder="e.g. Startups Consulted, Trademarks Filed"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Title displayed underneath the number.</p>
            </div>

            {/* Numerical Value */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Value <span className="text-amber-600 font-semibold">*</span>
              </label>
              <input
                type="number"
                required
                value={formData.value}
                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                placeholder="e.g. 500"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Base integer number.</p>
            </div>

            {/* Suffix */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Suffix Symbol
              </label>
              <input
                type="text"
                value={formData.suffix}
                onChange={(e) => setFormData({ ...formData, suffix: e.target.value })}
                placeholder="+, %, K, etc."
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Appended directly to the number (e.g. +).</p>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Sort Order Index
              </label>
              <input
                type="number"
                value={formData.sortOrder}
                onChange={(e) => setFormData({ ...formData, sortOrder: e.target.value })}
                placeholder="0"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Lower numbers display first.</p>
            </div>
          </div>

          {/* Active Status & Submit Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            {/* Active Toggle */}
            <label className="inline-flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500 relative transition-colors"></div>
              <span className="text-xs font-bold text-slate-700">
                {formData.isActive ? "Active (Visible on Website)" : "Inactive (Hidden)"}
              </span>
            </label>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {editingId && (
                <button
                  type="button"
                  onClick={cancel}
                  className="px-5 py-2.5 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold text-sm transition cursor-pointer"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl font-bold text-sm transition shadow-sm hover:shadow-md hover:shadow-amber-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : editingId ? (
                  <Edit2 className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                {editingId ? "Update Stat" : "Add Stat"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Table: Configured Stats */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Configured Milestones</h2>
              <p className="text-xs text-slate-500">Numerical stats shown on the live website.</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {stats.length} Total
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/70 border-b border-slate-200">
              <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4">Label</th>
                <th className="p-4">Formatted Value</th>
                <th className="p-4 text-center">Order</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-slate-400 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                      Loading stats...
                    </div>
                  </td>
                </tr>
              ) : stats.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-slate-400 text-sm">
                    No stats added yet. Add one above.
                  </td>
                </tr>
              ) : (
                stats.map((stat) => (
                  <tr key={stat.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 align-top font-bold text-slate-900 text-sm">
                      {stat.label}
                    </td>
                    <td className="p-4 align-top">
                      <span className="inline-block px-3 py-1 rounded-lg bg-amber-50 text-amber-900 font-extrabold text-sm border border-amber-200/60">
                        {stat.value}{stat.suffix}
                      </span>
                    </td>
                    <td className="p-4 align-top text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">
                        {stat.sortOrder}
                      </span>
                    </td>
                    <td className="p-4 align-top text-center">
                      {stat.isActive ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-500 border border-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="p-4 align-top text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => handleEdit(stat)}
                          title="Edit Stat"
                          className="p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(stat.id)}
                          title="Delete Stat"
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition cursor-pointer"
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
    </div>
  );
}
