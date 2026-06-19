import React, { useState, useEffect, useRef} from "react";
import api from "../../config/api";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function AdminStats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ label: "", value: "", suffix: "+", sortOrder: 0, isActive: true });
  const [editingId, setEditingId] = useState(null);

  const formRef = useRef(null);

  const fetchStats = async () => {
    try {
      const res = await api.get("/admin/stats");
      setStats(res.data.data);
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
    try {
      if (editingId) {
        await api.put(`/admin/stats/${editingId}`, formData);
      } else {
        await api.post("/admin/stats", formData);
      }
      setFormData({ label: "", value: "", suffix: "+", sortOrder: 0, isActive: true });
      setEditingId(null);
      fetchStats();
    } catch (error) {
      console.error("Error saving stat", error);
    }
  };

  const handleEdit = (stat) => {
    setEditingId(stat.id);
    setFormData({ label: stat.label, value: stat.value, suffix: stat.suffix, sortOrder: stat.sortOrder, isActive: stat.isActive });
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this stat?")) {
      try {
        await api.delete(`/admin/stats/${id}`);
        fetchStats();
      } catch (error) {
        console.error("Error deleting stat", error);
      }
    }
  };

  return (
    <div ref={formRef} className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">Manage Stats</h2>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
        <h3 className="text-lg font-semibold mb-4">{editingId ? "Edit Stat" : "Add New Stat"}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Label</label>
            <input type="text" required className="w-full border border-slate-300 rounded-lg p-2" value={formData.label} onChange={(e) => setFormData({ ...formData, label: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Value</label>
            <input type="number" required className="w-full border border-slate-300 rounded-lg p-2" value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Suffix (e.g., +, %)</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-2" value={formData.suffix} onChange={(e) => setFormData({ ...formData, suffix: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Sort Order</label>
            <input type="number" className="w-full border border-slate-300 rounded-lg p-2" value={formData.sortOrder} onChange={(e) => setFormData({ ...formData, sortOrder: e.target.value })} />
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2 h-4 w-4" checked={formData.isActive} onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })} />
            <label className="text-sm font-medium text-slate-700">Is Active</label>
          </div>
          <div className="md:col-span-2 flex justify-end gap-2 mt-4">
            {editingId && <button type="button" onClick={() => { setEditingId(null); setFormData({ label: "", value: "", suffix: "+", sortOrder: 0, isActive: true }); }} className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50">Cancel</button>}
            <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium">
              {editingId ? "Update Stat" : "Create Stat"}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Label</th>
                <th className="p-4 font-semibold text-slate-600">Value</th>
                <th className="p-4 font-semibold text-slate-600">Order</th>
                <th className="p-4 font-semibold text-slate-600">Status</th>
                <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan="5" className="p-4 text-center text-slate-500">Loading...</td></tr>
              ) : stats.length === 0 ? (
                <tr><td colSpan="5" className="p-4 text-center text-slate-500">No stats found.</td></tr>
              ) : (
                stats.map((stat) => (
                  <tr key={stat.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-slate-900">{stat.label}</td>
                    <td className="p-4 text-slate-600">{stat.value}{stat.suffix}</td>
                    <td className="p-4 text-slate-600">{stat.sortOrder}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${stat.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                        {stat.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button onClick={() => handleEdit(stat)} className="text-blue-600 hover:text-blue-800 p-2 cursor-pointer"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(stat.id)} className="text-red-600 hover:text-red-800 p-2"><Trash2 className="w-4 h-4" /></button>
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
