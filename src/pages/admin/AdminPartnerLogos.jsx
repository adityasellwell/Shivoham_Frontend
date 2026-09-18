import React, { useState, useEffect, useRef } from "react";
import api from "../../config/api";
import { Edit2, Trash2, Plus, Loader2, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import ConfirmModal from "../../components/ConfirmModal";

export default function AdminPartnerLogos() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    sortOrder: 0,
    isActive: true,
  });
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const formRef = useRef(null);

  const [noticeModal, setNoticeModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "warning",
  });

  const fetchLogos = async () => {
    try {
      const res = await api.get("/admin/partner-logos");
      setLogos(res.data.data || []);
    } catch (error) {
      console.error("Error fetching partner logos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.image.trim()) {
      return setNoticeModal({
        isOpen: true,
        title: "Required Fields Missing",
        message: "Please enter brand name and logo image path.",
        type: "warning",
      });
    }
    setSaving(true);
    try {
      const payload = {
        ...formData,
        sortOrder: parseInt(formData.sortOrder) || 0,
      };
      if (editingId) {
        await api.put(`/admin/partner-logos/${editingId}`, payload);
      } else {
        await api.post("/admin/partner-logos", payload);
      }
      setFormData({
        name: "",
        image: "",
        sortOrder: 0,
        isActive: true,
      });
      setEditingId(null);
      fetchLogos();
    } catch (error) {
      console.error("Error saving partner logo", error);
      setNoticeModal({
        isOpen: true,
        title: "Action Failed",
        message: error.response?.data?.message || "Failed to save partner logo.",
        type: "warning",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name || "",
      image: item.image || "",
      sortOrder: item.sortOrder || 0,
      isActive: item.isActive !== undefined ? item.isActive : true,
    });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;
    setIsDeleting(true);
    try {
      await api.delete(`/admin/partner-logos/${itemToDelete.id}`);
      fetchLogos();
    } catch (error) {
      console.error("Error deleting partner logo", error);
    } finally {
      setIsDeleting(false);
      setItemToDelete(null);
    }
  };

  const cancel = () => {
    setEditingId(null);
    setFormData({
      name: "",
      image: "",
      sortOrder: 0,
      isActive: true,
    });
  };

  const formatImgSrc = (src) => {
    if (!src) return "";
    if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) return src;
    return `/${src}`;
  };

  return (
    <div ref={formRef} className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Manage Partner & Client Logos
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage corporate client brand logos displayed in the "Empowering Industry Leaders" website marquee.
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 text-[11px] font-black uppercase tracking-wider">
                Brand Logo
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {editingId ? "Edit Partner Logo" : "Add New Partner Logo"}
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Add corporate partner brand name, image path, and display sequence.
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
            {/* Brand Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Brand / Partner Name <span className="text-amber-600 font-semibold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Airpride or Bhatkar"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Name of client brand or partner.</p>
            </div>

            {/* Logo Image Path */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Logo Image URL / Path <span className="text-amber-600 font-semibold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="e.g. /img/Airpride.png or https://..."
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Relative path (e.g. /img/Airpride.png) or full image URL.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <p className="text-[11px] text-slate-400 mt-1">Lower numbers appear first in marquee.</p>
            </div>

            {/* Image Preview */}
            {formData.image.trim() && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Logo Live Preview
                </label>
                <div className="h-12 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-3">
                  <img
                    src={formatImgSrc(formData.image)}
                    alt="Preview"
                    className="h-8 max-w-[120px] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="text-xs text-slate-500 font-mono truncate">{formData.image}</span>
                </div>
              </div>
            )}
          </div>

          {/* Active Status & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
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
                {editingId ? "Update Partner Logo" : "Add Partner Logo"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Configured Partner Logos</h2>
              <p className="text-xs text-slate-500">Live client brand logos displayed in website footer/hero marquee.</p>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {logos.length} Total
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50/70 border-b border-slate-200">
              <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-4">Logo Preview</th>
                <th className="p-4">Brand Name</th>
                <th className="p-4">Image Path</th>
                <th className="p-4 text-center">Order</th>
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
                      Loading partner logos...
                    </div>
                  </td>
                </tr>
              ) : logos.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-400 text-sm">
                    No partner logos configured yet.
                  </td>
                </tr>
              ) : (
                logos.map((logo) => (
                  <tr key={logo.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 align-middle">
                      <div className="w-16 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 flex items-center justify-center border border-slate-200/80">
                        <img
                          src={formatImgSrc(logo.image)}
                          alt={logo.name}
                          className="max-h-8 max-w-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </td>
                    <td className="p-4 align-middle font-bold text-slate-900">{logo.name}</td>
                    <td className="p-4 align-middle text-xs text-slate-500 font-mono max-w-xs truncate">
                      {logo.image}
                    </td>
                    <td className="p-4 align-middle text-center font-semibold text-slate-700">
                      {logo.sortOrder}
                    </td>
                    <td className="p-4 align-middle text-center">
                      {logo.isActive ? (
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
                    <td className="p-4 align-middle text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => handleEdit(logo)}
                          title="Edit Partner Logo"
                          className="p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(logo)}
                          title="Delete Partner Logo"
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

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={Boolean(itemToDelete)}
        onClose={() => setItemToDelete(null)}
        onConfirm={handleConfirmDelete}
        title="Delete Partner Logo"
        message="Are you sure you want to delete this brand logo? It will be removed from the website marquee."
        confirmText="Delete Logo"
        isLoading={isDeleting}
      />

      {/* Notification Alert Modal */}
      <ConfirmModal
        isOpen={noticeModal.isOpen}
        onClose={() => setNoticeModal({ ...noticeModal, isOpen: false })}
        onConfirm={() => setNoticeModal({ ...noticeModal, isOpen: false })}
        title={noticeModal.title}
        message={noticeModal.message}
        type={noticeModal.type}
        confirmText="OK"
        cancelText={null}
      />
    </div>
  );
}
