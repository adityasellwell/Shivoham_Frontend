import React, { useState, useEffect, useRef } from "react";
import api from "../../config/api";
import { Edit2, Trash2, Plus, X, Loader2 } from "lucide-react";
import QuoteIcon, { ICON_OPTIONS } from "../../components/QuoteIcon";

const EMPTY_CAT = {
  keyId: "",
  title: "",
  description: "",
  icon: "FiShoppingCart",
  sortOrder: 0,
  isActive: true,
};

const EMPTY_SVC = {
  quoteCategoryId: "",
  title: "",
  sortOrder: 1,
  isActive: true,
};

const EMPTY_TURNOVER = {
  label: "",
  sortOrder: 1,
  isActive: true,
};

export default function AdminQuoteConfig() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [turnovers, setTurnovers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Category Form State
  const [catForm, setCatForm] = useState(EMPTY_CAT);
  const [editingCatId, setEditingCatId] = useState(null);
  const [catSaving, setCatSaving] = useState(false);

  // Service Form State
  const [selectedStep2CatId, setSelectedStep2CatId] = useState("");
  const [svcForm, setSvcForm] = useState(EMPTY_SVC);
  const [svcSaving, setSvcSaving] = useState(false);

  // Turnover Form State
  const [turnoverForm, setTurnoverForm] = useState(EMPTY_TURNOVER);
  const [editingTurnoverId, setEditingTurnoverId] = useState(null);
  const [turnoverSaving, setTurnoverSaving] = useState(false);

  const catFormRef = useRef(null);
  const turnoverFormRef = useRef(null);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [catRes, svcRes, turnRes] = await Promise.all([
        api.get("/admin/quote-config/categories"),
        api.get("/admin/quote-config/services"),
        api.get("/admin/quote-config/turnovers"),
      ]);

      const catList = catRes.data?.data || [];
      const svcList = svcRes.data?.data || [];
      const turnList = turnRes.data?.data || [];

      setCategories(catList);
      setServices(svcList);
      setTurnovers(turnList);

      // Keep or set default category for Step 2
      if (catList.length > 0) {
        setSelectedStep2CatId((prev) => {
          if (prev && catList.some((c) => String(c.id) === String(prev))) return prev;
          return String(catList[0].id);
        });
      }
    } catch (err) {
      console.error("Error fetching quote config", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  /* ============================================================
     STEP 1: CATEGORIES
     ============================================================ */
  const handleCatSubmit = async (e) => {
    e.preventDefault();
    if (!catForm.title.trim()) return alert("Please provide a category title");
    setCatSaving(true);
    try {
      const payload = {
        ...catForm,
        keyId: catForm.keyId?.trim() || catForm.title.trim().toLowerCase().replace(/\s+/g, "-"),
        sortOrder: parseInt(catForm.sortOrder) || 0,
      };

      if (editingCatId) {
        await api.put(`/admin/quote-config/categories/${editingCatId}`, payload);
      } else {
        await api.post("/admin/quote-config/categories", payload);
      }
      setCatForm(EMPTY_CAT);
      setEditingCatId(null);
      await fetchAll();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to save category");
    } finally {
      setCatSaving(false);
    }
  };

  const handleEditCat = (cat) => {
    setCatForm({
      keyId: cat.keyId || "",
      title: cat.title,
      description: cat.description || "",
      icon: cat.icon || "FiShoppingCart",
      sortOrder: cat.sortOrder || 0,
      isActive: cat.isActive !== undefined ? cat.isActive : true,
    });
    setEditingCatId(cat.id);
    catFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCatToggle = async (cat) => {
    try {
      await api.put(`/admin/quote-config/categories/${cat.id}`, {
        isActive: !cat.isActive,
      });
      fetchAll();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCatDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category and all its filing services?")) return;
    try {
      await api.delete(`/admin/quote-config/categories/${id}`);
      fetchAll();
    } catch (err) {
      console.error(err);
    }
  };

  /* ============================================================
     STEP 2: SERVICE CHECKBOXES (CHIPS)
     ============================================================ */
  const handleSvcSubmit = async (e) => {
    e.preventDefault();
    const catId = selectedStep2CatId || (categories[0] && categories[0].id);
    if (!catId) return alert("Please select a category");
    if (!svcForm.title.trim()) return alert("Please enter filing service name");

    setSvcSaving(true);
    try {
      await api.post("/admin/quote-config/services", {
        quoteCategoryId: parseInt(catId),
        title: svcForm.title.trim(),
        sortOrder: parseInt(svcForm.sortOrder) || 1,
        isActive: true,
      });
      setSvcForm((prev) => ({ ...prev, title: "", sortOrder: (parseInt(prev.sortOrder) || 1) + 1 }));
      await fetchAll();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to add service");
    } finally {
      setSvcSaving(false);
    }
  };

  const handleSvcDelete = async (id, title) => {
    if (!window.confirm(`Remove "${title}" from checklist?`)) return;
    try {
      await api.delete(`/admin/quote-config/services/${id}`);
      fetchAll();
    } catch (err) {
      console.error(err);
    }
  };

  const activeStep2Category = categories.find((c) => String(c.id) === String(selectedStep2CatId));
  const categoryChecklist = services.filter(
    (s) => String(s.quoteCategoryId) === String(selectedStep2CatId)
  );

  /* ============================================================
     STEP 3: TURNOVER OPTIONS
     ============================================================ */
  const handleTurnoverSubmit = async (e) => {
    e.preventDefault();
    if (!turnoverForm.label.trim()) return alert("Please enter bracket label");
    setTurnoverSaving(true);
    try {
      const payload = {
        label: turnoverForm.label.trim(),
        sortOrder: parseInt(turnoverForm.sortOrder) || 1,
        isActive: Boolean(turnoverForm.isActive),
      };

      if (editingTurnoverId) {
        await api.put(`/admin/quote-config/turnovers/${editingTurnoverId}`, payload);
      } else {
        await api.post("/admin/quote-config/turnovers", payload);
      }

      setTurnoverForm(EMPTY_TURNOVER);
      setEditingTurnoverId(null);
      await fetchAll();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to save turnover option");
    } finally {
      setTurnoverSaving(false);
    }
  };

  const handleEditTurnover = (turn) => {
    setTurnoverForm({
      label: turn.label,
      sortOrder: turn.sortOrder || 1,
      isActive: turn.isActive !== undefined ? turn.isActive : true,
    });
    setEditingTurnoverId(turn.id);
    turnoverFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTurnoverToggle = async (turn) => {
    try {
      await api.put(`/admin/quote-config/turnovers/${turn.id}`, {
        isActive: !turn.isActive,
      });
      fetchAll();
    } catch (err) {
      console.error(err);
    }
  };

  const handleTurnoverDelete = async (id, label) => {
    if (!window.confirm(`Delete turnover bracket "${label}"?`)) return;
    try {
      await api.delete(`/admin/quote-config/turnovers/${id}`);
      fetchAll();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 pb-28">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Get Quote Config
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage dynamic options for Step 1 (Categories), Step 2 (Filing Checkboxes), and Step 3 (Turnover Brackets).
        </p>
      </div>

      {loading ? (
        <div className="p-16 flex flex-col items-center justify-center text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin text-amber-600 mb-2" />
          <p className="text-sm">Loading configurations...</p>
        </div>
      ) : (
        <>
          {/* ============================================================
              STEP 1: ADD NEW CATEGORY
              ============================================================ */}
          <div ref={catFormRef} className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
            {/* Form Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 text-[11px] font-black uppercase tracking-wider">
                    Step 1
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    {editingCatId ? "Edit Category" : "Add New Category"}
                  </h2>
                </div>
                <p className="text-xs text-slate-500">
                  Configure business categories shown on the first step of the Get Quote wizard.
                </p>
              </div>

              {editingCatId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingCatId(null);
                    setCatForm(EMPTY_CAT);
                  }}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition shadow-2xs"
                >
                  Cancel Edit
                </button>
              )}
            </div>

            {/* Form Body */}
            <form onSubmit={handleCatSubmit} className="p-5 sm:p-6 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Unique Key ID */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Category Key ID <span className="text-slate-400 font-normal">(URL & Database Slug)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={catForm.keyId}
                    onChange={(e) =>
                      setCatForm({
                        ...catForm,
                        keyId: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                      })
                    }
                    placeholder="e.g., ecommerce"
                    className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Unique identifier without spaces.</p>
                </div>

                {/* Display Title */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Display Title <span className="text-amber-600 font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={catForm.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setCatForm((prev) => ({
                        ...prev,
                        title,
                        keyId: prev.keyId ? prev.keyId : title.toLowerCase().replace(/\s+/g, "-"),
                      }));
                    }}
                    placeholder="e.g., E-Commerce & Marketplaces"
                    className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">User-facing category label.</p>
                </div>

                {/* Feather Icon Component Name */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Category Icon
                    </label>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 font-semibold text-xs border border-amber-200/60">
                      <QuoteIcon name={catForm.icon} className="w-3.5 h-3.5 text-amber-600" /> Preview
                    </span>
                  </div>
                  <select
                    value={catForm.icon}
                    onChange={(e) => setCatForm({ ...catForm, icon: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 cursor-pointer"
                  >
                    {ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Order Index */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Sort Order Index
                  </label>
                  <input
                    type="number"
                    value={catForm.sortOrder}
                    onChange={(e) => setCatForm({ ...catForm, sortOrder: e.target.value })}
                    placeholder="0"
                    className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Lower numbers display first (e.g. 1, 2, 3).</p>
                </div>
              </div>

              {/* Description Subtitle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Description Subtitle
                </label>
                <textarea
                  rows="2"
                  value={catForm.description}
                  onChange={(e) => setCatForm({ ...catForm, description: e.target.value })}
                  placeholder="Short description displayed under category card in the wizard..."
                  className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-3 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={catSaving}
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl font-bold text-sm transition shadow-sm hover:shadow-md hover:shadow-amber-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {catSaving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                  {editingCatId ? "Update Category" : "Add Category"}
                </button>
              </div>
            </form>
          </div>

          {/* Table: Services Categories */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Configured Categories</h2>
                <p className="text-xs text-slate-500">Live categories currently available in Step 1.</p>
              </div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {categories.length} Total
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50/70 border-b border-slate-200">
                  <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <th className="p-4">Key ID</th>
                    <th className="p-4">Category Title</th>
                    <th className="p-4">Icon</th>
                    <th className="p-4">Order</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {categories.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="p-8 text-center text-slate-400">
                        No categories found. Use the form above to add your first category.
                      </td>
                    </tr>
                  ) : (
                    categories.map((cat) => (
                      <tr key={cat.id} className="hover:bg-slate-50/70 transition">
                        <td className="p-4 font-mono text-xs text-slate-600 font-medium">
                          {cat.keyId || `cat-${cat.id}`}
                        </td>
                        <td className="p-4 font-bold text-slate-800">{cat.title}</td>
                        <td className="p-4 font-mono text-xs text-slate-600">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                            <QuoteIcon name={cat.icon} className="w-3.5 h-3.5 text-amber-600" />
                            {cat.icon || "FiShoppingCart"}
                          </span>
                        </td>
                        <td className="p-4 text-slate-600 font-medium">{cat.sortOrder}</td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => handleCatToggle(cat)}
                            title="Click to toggle status"
                            className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase cursor-pointer border transition ${
                              cat.isActive
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                                : "bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200"
                            }`}
                          >
                            {cat.isActive ? "ACTIVE" : "INACTIVE"}
                          </button>
                        </td>
                        <td className="p-4 text-right">
                          <div className="inline-flex items-center gap-2">
                            <button
                              onClick={() => handleEditCat(cat)}
                              title="Edit Category"
                              className="w-8 h-8 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center transition cursor-pointer"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleCatDelete(cat.id)}
                              title="Delete Category"
                              className="w-8 h-8 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center transition cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
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

          {/* ============================================================
              STEP 2: MANAGE SERVICE FILING CHECKBOXES
              ============================================================ */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 text-[11px] font-black uppercase tracking-wider">
                Step 2
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Service Filing Checklists
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Form */}
              <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-slate-200/90 p-6 space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold text-slate-900">Add Checklist Service</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Attach specific service checkboxes to each category.</p>
                </div>

                <form onSubmit={handleSvcSubmit} className="space-y-4">
                  {/* Select Category */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Select Target Category
                    </label>
                    <select
                      value={selectedStep2CatId}
                      onChange={(e) => setSelectedStep2CatId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 cursor-pointer"
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Filing Service Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Filing Service Name <span className="text-amber-600 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={svcForm.title}
                      onChange={(e) => setSvcForm({ ...svcForm, title: e.target.value })}
                      placeholder="e.g., GST Registration & Filing"
                      className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Order Index */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Sort Order Index
                    </label>
                    <input
                      type="number"
                      value={svcForm.sortOrder}
                      onChange={(e) => setSvcForm({ ...svcForm, sortOrder: e.target.value })}
                      placeholder="1"
                      className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Add Filing Option Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={svcSaving || !categories.length}
                      className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl font-bold text-sm transition shadow-sm hover:shadow-md hover:shadow-amber-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {svcSaving ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                      Add Service Option
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Chips Display */}
              <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200/90 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {activeStep2Category
                        ? `${activeStep2Category.title} Checklist`
                        : "Checklist"}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Live options displayed when this category is clicked.</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/60 rounded-full">
                    {categoryChecklist.length} item{categoryChecklist.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="min-h-[160px] p-5 bg-slate-50/60 border border-slate-200/80 rounded-xl">
                  {categoryChecklist.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center py-10 text-slate-400 text-sm text-center">
                      <p className="font-medium">No checklist items found for this category.</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Use the form on the left to add filing options.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2.5">
                      {categoryChecklist.map((svc) => (
                        <span
                          key={svc.id}
                          className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs transition"
                        >
                          <span>{svc.title}</span>
                          <button
                            type="button"
                            onClick={() => handleSvcDelete(svc.id, svc.title)}
                            title="Remove filing option"
                            className="text-slate-400 hover:text-rose-600 ml-1 font-bold text-base leading-none p-0.5 rounded-md hover:bg-rose-50 transition cursor-pointer"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              STEP 3: ADD NEW TURNOVER OPTION
              ============================================================ */}
          <div
            ref={turnoverFormRef}
            className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 text-[11px] font-black uppercase tracking-wider">
                    Step 3
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    {editingTurnoverId
                      ? "Edit Turnover Bracket"
                      : "Add New Turnover Bracket"}
                  </h2>
                </div>
                <p className="text-xs text-slate-500">
                  Annual business turnover tiers selectable in Step 3 of the wizard.
                </p>
              </div>

              {editingTurnoverId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingTurnoverId(null);
                    setTurnoverForm(EMPTY_TURNOVER);
                  }}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition shadow-2xs"
                >
                  Cancel Edit
                </button>
              )}
            </div>

            <form onSubmit={handleTurnoverSubmit} className="p-6 sm:p-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-end">
                {/* Bracket Label */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Bracket Label <span className="text-amber-600 font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={turnoverForm.label}
                    onChange={(e) => setTurnoverForm({ ...turnoverForm, label: e.target.value })}
                    placeholder="e.g., ₹40 Lakhs to ₹1.5 Crores"
                    className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
                  />
                </div>

                {/* Sort Order */}
                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={turnoverForm.sortOrder}
                    onChange={(e) => setTurnoverForm({ ...turnoverForm, sortOrder: e.target.value })}
                    placeholder="1"
                    className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
                  />
                </div>

                {/* Action button */}
                <div className="sm:col-span-3 flex sm:justify-end">
                  <button
                    type="submit"
                    disabled={turnoverSaving}
                    className="w-full px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl font-bold text-sm transition shadow-sm hover:shadow-md hover:shadow-amber-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {turnoverSaving ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                    {editingTurnoverId ? "Update Option" : "Add Bracket"}
                  </button>
                </div>
              </div>

              {/* Is Active Checkbox */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <input
                  type="checkbox"
                  id="turnoverIsActive"
                  checked={turnoverForm.isActive}
                  onChange={(e) => setTurnoverForm({ ...turnoverForm, isActive: e.target.checked })}
                  className="w-4 h-4 text-amber-600 rounded-md border-slate-300 focus:ring-amber-500 cursor-pointer accent-amber-600"
                />
                <label
                  htmlFor="turnoverIsActive"
                  className="text-xs font-bold text-slate-700 cursor-pointer select-none"
                >
                  Active and visible in Quote Wizard
                </label>
              </div>
            </form>

            {/* Turnover Options Table */}
            <div className="overflow-x-auto border-t border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50/70 border-b border-slate-200">
                  <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <th className="p-4">Bracket Label</th>
                    <th className="p-4">Order</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {turnovers.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-slate-400">
                        No turnover options configured yet.
                      </td>
                    </tr>
                  ) : (
                    turnovers.map((turn) => (
                      <tr key={turn.id} className="hover:bg-slate-50/70 transition">
                        <td className="p-4 font-semibold text-slate-800">{turn.label}</td>
                        <td className="p-4 text-slate-600 font-medium">{turn.sortOrder}</td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => handleTurnoverToggle(turn)}
                            title="Click to toggle status"
                            className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase cursor-pointer border transition ${
                              turn.isActive
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                                : "bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200"
                            }`}
                          >
                            {turn.isActive ? "ACTIVE" : "INACTIVE"}
                          </button>
                        </td>
                        <td className="p-4 text-right">
                          <div className="inline-flex items-center gap-2">
                            <button
                              onClick={() => handleEditTurnover(turn)}
                              title="Edit Option"
                              className="w-8 h-8 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center transition cursor-pointer"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleTurnoverDelete(turn.id, turn.label)}
                              title="Delete Option"
                              className="w-8 h-8 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center transition cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
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
        </>
      )}
    </div>
  );
}
