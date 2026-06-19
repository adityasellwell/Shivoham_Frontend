import React, { useState, useEffect, useRef} from "react";
import api from "../../config/api";
import { Edit2, Trash2 } from "lucide-react";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", designation: "", company: "", content: "", rating: 5, image: "", sortOrder: 0, isActive: true });
  const [editingId, setEditingId] = useState(null);

  const formRef = useRef(null);

  const fetchTestimonials = async () => {
    try {
      const res = await api.get("/admin/testimonials");
      setTestimonials(res.data.data);
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
    try {
      if (editingId) {
        await api.put(`/admin/testimonials/${editingId}`, formData);
      } else {
        await api.post("/admin/testimonials", formData);
      }
      setFormData({ name: "", designation: "", company: "", content: "", rating: 5, image: "", sortOrder: 0, isActive: true });
      setEditingId(null);
      fetchTestimonials();
    } catch (error) {
      console.error("Error saving testimonial", error);
    }
  };

  const handleEdit = (test) => {
    setEditingId(test.id);
    setFormData({ 
      name: test.name, designation: test.designation || "", company: test.company || "", 
      content: test.content, rating: test.rating, image: test.image || "", 
      sortOrder: test.sortOrder, isActive: test.isActive 
    });
      formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        await api.delete(`/admin/testimonials/${id}`);
        fetchTestimonials();
      } catch (error) {
        console.error("Error deleting testimonial", error);
      }
    }
  };

  return (
    <div ref={formRef} className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8">Manage Testimonials</h2>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
        <h3 className="text-lg font-semibold mb-4">{editingId ? "Edit Testimonial" : "Add New Testimonial"}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input type="text" required className="w-full border border-slate-300 rounded-lg p-2" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-2" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Designation/Role</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-2" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Rating (1-5)</label>
            <input type="number" min="1" max="5" required className="w-full border border-slate-300 rounded-lg p-2" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
            <textarea required rows="3" className="w-full border border-slate-300 rounded-lg p-2" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })}></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
            <input type="text" className="w-full border border-slate-300 rounded-lg p-2" placeholder="/img/testimonial-1.jpg" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Sort Order</label>
            <input type="number" className="w-full border border-slate-300 rounded-lg p-2" value={formData.sortOrder} onChange={(e) => setFormData({ ...formData, sortOrder: e.target.value })} />
          </div>
          <div className="md:col-span-2 flex items-center mt-2">
            <input type="checkbox" className="mr-2 h-4 w-4" checked={formData.isActive} onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })} />
            <label className="text-sm font-medium text-slate-700">Is Active</label>
          </div>
          <div className="md:col-span-2 flex justify-end gap-2 mt-4">
            {editingId && <button type="button" onClick={() => { setEditingId(null); setFormData({ name: "", designation: "", company: "", content: "", rating: 5, image: "", sortOrder: 0, isActive: true }); }} className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50">Cancel</button>}
            <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium">
              {editingId ? "Update Testimonial" : "Create Testimonial"}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold text-slate-600">Client</th>
                <th className="p-4 font-semibold text-slate-600">Review</th>
                <th className="p-4 font-semibold text-slate-600">Status</th>
                <th className="p-4 font-semibold text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan="4" className="p-4 text-center text-slate-500">Loading...</td></tr>
              ) : testimonials.length === 0 ? (
                <tr><td colSpan="4" className="p-4 text-center text-slate-500">No testimonials found.</td></tr>
              ) : (
                testimonials.map((test) => (
                  <tr key={test.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div className="font-medium text-slate-900">{test.name}</div>
                      <div className="text-sm text-slate-500">{test.designation} {test.company && `@ ${test.company}`}</div>
                    </td>
                    <td className="p-4 text-slate-600 text-sm max-w-md truncate">{test.content}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${test.isActive ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
                        {test.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="p-4 text-right whitespace-nowrap">
                      <button onClick={() => handleEdit(test)} className="text-blue-600 hover:text-blue-800 p-2"><Edit2 className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(test.id)} className="text-red-600 hover:text-red-800 p-2"><Trash2 className="w-4 h-4" /></button>
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
