import React, { useState, useEffect, useRef } from "react";
import api from "../../config/api";
import { Edit2, Trash2, Plus, Star, Loader2, MessageSquareQuote } from "lucide-react";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company: "",
    content: "",
    rating: 5,
    image: "",
    sortOrder: 0,
    isActive: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const formRef = useRef(null);

  const fetchTestimonials = async () => {
    try {
      const res = await api.get("/admin/testimonials");
      setTestimonials(res.data.data || []);
    } catch (error) {
      console.error("Error fetching testimonials", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.content.trim()) {
      return alert("Please fill in client name and review content.");
    }
    setSaving(true);
    try {
      const payload = {
        ...formData,
        rating: parseInt(formData.rating) || 5,
        sortOrder: parseInt(formData.sortOrder) || 0,
      };
      if (editingId) {
        await api.put(`/admin/testimonials/${editingId}`, payload);
      } else {
        await api.post("/admin/testimonials", payload);
      }
      setFormData({
        name: "",
        designation: "",
        company: "",
        content: "",
        rating: 5,
        image: "",
        sortOrder: 0,
        isActive: true,
      });
      setEditingId(null);
      fetchTestimonials();
    } catch (error) {
      console.error("Error saving testimonial", error);
      alert(error.response?.data?.message || "Failed to save testimonial");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (test) => {
    setEditingId(test.id);
    setFormData({
      name: test.name || "",
      designation: test.designation || "",
      company: test.company || "",
      content: test.content || "",
      rating: test.rating || 5,
      image: test.image || "",
      sortOrder: test.sortOrder || 0,
      isActive: test.isActive !== undefined ? test.isActive : true,
    });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      await api.delete(`/admin/testimonials/${id}`);
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial", error);
    }
  };

  const cancel = () => {
    setEditingId(null);
    setFormData({
      name: "",
      designation: "",
      company: "",
      content: "",
      rating: 5,
      image: "",
      sortOrder: 0,
      isActive: true,
    });
  };

  return (
    <div ref={formRef} className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Manage Testimonials
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Display social proof and reviews from satisfied corporate clients and startups.
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
                Review
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {editingId ? "Edit Testimonial" : "Add New Testimonial"}
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Add genuine feedback, ratings, and client corporate details.
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
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Client Name <span className="text-amber-600 font-semibold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Varma"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Full name of the client or reviewer.</p>
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. TechNova Solutions"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Company name or brand name.</p>
            </div>

            {/* Designation */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Designation / Role
              </label>
              <input
                type="text"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="e.g. Founder & CEO"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Designation or client title.</p>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Rating (1 - 5 Stars) <span className="text-amber-600 font-semibold">*</span>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="1"
                  max="5"
                  required
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                  className="w-24 px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500"
                />
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(Number(formData.rating) || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Default is 5-star rating.</p>
            </div>
          </div>

          {/* Review Content */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Review Content <span className="text-amber-600 font-semibold">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="What the client said about Shivoham & Associates services..."
              className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400 resize-y"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Image URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Client Avatar URL <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="e.g. /img/testimonial-1.jpg or https://..."
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
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
                {editingId ? "Update Testimonial" : "Add Testimonial"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Table: Configured Testimonials */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
              <MessageSquareQuote className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Configured Testimonials</h2>
              <p className="text-xs text-slate-500">Live client reviews displayed on homepage and about page.</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {testimonials.length} Total
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/70 border-b border-slate-200">
              <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4">Client Details</th>
                <th className="p-4">Review Snippet</th>
                <th className="p-4 text-center">Rating</th>
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
                      Loading testimonials...
                    </div>
                  </td>
                </tr>
              ) : testimonials.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-slate-400 text-sm">
                    No testimonials added yet. Add one above.
                  </td>
                </tr>
              ) : (
                testimonials.map((test) => (
                  <tr key={test.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 align-top">
                      <div className="font-bold text-slate-900 text-sm">{test.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {[test.designation, test.company].filter(Boolean).join(" • ") || "Client"}
                      </div>
                    </td>
                    <td className="p-4 align-top max-w-md">
                      <p className="text-sm text-slate-700 line-clamp-2 leading-relaxed italic">
                        "{test.content}"
                      </p>
                    </td>
                    <td className="p-4 align-top text-center whitespace-nowrap">
                      <div className="inline-flex items-center gap-0.5 text-amber-400">
                        {[...Array(test.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 align-top text-center">
                      {test.isActive ? (
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
                          onClick={() => handleEdit(test)}
                          title="Edit Testimonial"
                          className="p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(test.id)}
                          title="Delete Testimonial"
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
