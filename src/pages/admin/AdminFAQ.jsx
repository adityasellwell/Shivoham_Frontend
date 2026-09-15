import React, { useState, useEffect, useRef } from "react";
import api from "../../config/api";
import { Plus, Edit2, Trash2, Loader2, Download, Upload, FileSpreadsheet, CheckCircle2, AlertTriangle, X, Info, Search, ChevronLeft, ChevronRight } from "lucide-react";

const EMPTY_FORM = { category: "", question: "", answer: "", sortOrder: 0, isActive: true };

export default function AdminFAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const formRef = useRef(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);
  const fileInputRef = useRef(null);

  // Bulk Upload Modal State
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [bulkData, setBulkData] = useState([]);    // parsed rows
  const [bulkErrors, setBulkErrors] = useState([]); // validation errors
  const [bulkUploading, setBulkUploading] = useState(false);
  const [bulkResult, setBulkResult] = useState(null); // { success: N, failed: N }

  const fetchFaqs = async () => {
    try {
      const res = await api.get("/admin/faqs");
      setFaqs(res.data.data || []);
    } catch (error) {
      console.error("Error fetching FAQs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.question.trim() || !formData.answer.trim()) {
      return alert("Please fill in question and answer.");
    }
    setSaving(true);
    try {
      const payload = {
        ...formData,
        sortOrder: parseInt(formData.sortOrder) || 0,
      };
      if (editingId) {
        await api.put(`/admin/faqs/${editingId}`, payload);
      } else {
        await api.post("/admin/faqs", payload);
      }
      setFormData(EMPTY_FORM);
      setEditingId(null);
      fetchFaqs();
    } catch (error) {
      console.error("Error saving FAQ", error);
      alert(error.response?.data?.message || "Failed to save FAQ");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (faq) => {
    setEditingId(faq.id);
    setFormData({
      category: faq.category || "",
      question: faq.question || "",
      answer: faq.answer || "",
      sortOrder: faq.sortOrder || 0,
      isActive: faq.isActive !== undefined ? faq.isActive : true,
    });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this FAQ?")) return;
    try {
      await api.delete(`/admin/faqs/${id}`);
      fetchFaqs();
    } catch (error) {
      console.error("Error deleting FAQ", error);
    }
  };

  const handleToggle = async (faq) => {
    try {
      await api.put(`/admin/faqs/${faq.id}`, { ...faq, isActive: !faq.isActive });
      fetchFaqs();
    } catch (error) {
      console.error("Error toggling FAQ", error);
    }
  };

  const cancel = () => {
    setEditingId(null);
    setFormData(EMPTY_FORM);
  };

  // ==================== BULK UPLOAD LOGIC ====================

  // Generate & download CSV template (only headers, no data rows)
  const downloadTemplate = () => {
    const headers = ["category", "question", "answer", "sortOrder", "isActive"];
    let csvContent = "\uFEFF" + headers.join(",") + "\n";

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "faq_template.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  // Parse CSV text into array of objects (Robust parser)
  const parseCSV = (rawText) => {
    // Remove BOM and invisible characters
    const cleanText = rawText.replace(/^\uFEFF/, "").replace(/[\u200B-\u200D\uFEFF]/g, "");
    const lines = cleanText.split(/\r\n|\r|\n/).filter(line => line.trim());

    if (lines.length === 0) {
      return { rows: [], errors: ["The uploaded file is completely empty."] };
    }

    if (lines.length < 2) {
      return { 
        rows: [], 
        errors: ["The file contains only column headers but no data rows. Please add your FAQ entries under the header row (starting from line 2) and upload again."] 
      };
    }

    // Auto-detect delimiter (comma vs semicolon vs tab)
    const firstLine = lines[0];
    let delimiter = ",";
    const commaCount = (firstLine.match(/,/g) || []).length;
    const semiCount = (firstLine.match(/;/g) || []).length;
    const tabCount = (firstLine.match(/\t/g) || []).length;
    if (semiCount > commaCount && semiCount > tabCount) delimiter = ";";
    else if (tabCount > commaCount && tabCount > semiCount) delimiter = "\t";

    // Parse header and normalize names
    const rawHeaders = parseCSVLine(lines[0], delimiter);
    const headers = rawHeaders.map(h => {
      let clean = h.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
      if (clean === "questions" || clean === "faq" || clean === "faqs") return "question";
      if (clean === "answers" || clean === "res" || clean === "response") return "answer";
      if (clean === "categories" || clean === "cat") return "category";
      if (clean === "order" || clean === "sort" || clean === "seq") return "sortorder";
      if (clean === "active" || clean === "status" || clean === "enabled") return "isactive";
      return clean;
    });

    const requiredCols = ["category", "question", "answer"];
    const missingCols = requiredCols.filter(c => !headers.includes(c));
    if (missingCols.length > 0) {
      return { 
        rows: [], 
        errors: [
          `Missing required columns: ${missingCols.join(", ")}.`,
          `Detected columns in your file: [${rawHeaders.map(h => h.trim() || "(empty)").join(", ")}].`,
          `Please make sure line 1 contains headers: category, question, answer, sortOrder, isActive`
        ] 
      };
    }

    const rows = [];
    const errors = [];

    for (let i = 1; i < lines.length; i++) {
      const cells = parseCSVLine(lines[i], delimiter);
      // Skip empty lines or lines with all empty values
      if (cells.every(c => !c.trim())) continue;

      const row = {};
      headers.forEach((h, idx) => {
        row[h] = (cells[idx] || "").trim();
      });

      // Validate each row
      const rowErrors = [];
      if (!row.category) rowErrors.push("Category is required");
      if (!row.question) rowErrors.push("Question is required");
      if (!row.answer) rowErrors.push("Answer is required");

      if (rowErrors.length > 0) {
        errors.push(`Row ${i + 1}: ${rowErrors.join(", ")}`);
      }

      const activeVal = (row.isactive || "").toLowerCase();
      const isActiveBool = activeVal === "" || activeVal === "true" || activeVal === "1" || activeVal === "yes" || activeVal === "active";

      rows.push({
        category: row.category || "",
        question: row.question || "",
        answer: row.answer || "",
        sortOrder: parseInt(row.sortorder || "0") || 0,
        isActive: isActiveBool,
        _rowNum: i + 1,
        _hasError: rowErrors.length > 0,
      });
    }

    return { rows, errors };
  };

  // Parse a single CSV line handling quoted fields and configurable delimiter
  const parseCSVLine = (line, delimiter = ",") => {
    const result = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inQuotes) {
        if (ch === '"') {
          if (i + 1 < line.length && line[i + 1] === '"') {
            current += '"';
            i++; // skip escaped quote
          } else {
            inQuotes = false;
          }
        } else {
          current += ch;
        }
      } else {
        if (ch === '"') {
          inQuotes = true;
        } else if (ch === delimiter) {
          result.push(current);
          current = "";
        } else {
          current += ch;
        }
      }
    }
    result.push(current);
    return result;
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFileName(file.name);
    setBulkResult(null);

    const fileNameLower = file.name.toLowerCase();
    if (!fileNameLower.endsWith(".csv") && !fileNameLower.endsWith(".txt")) {
      setBulkErrors(["Invalid file format. Please upload a .csv file. (If using Microsoft Excel, click 'File > Save As' and select 'CSV UTF-8')."]);
      setBulkData([]);
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result || "";

      // Check if file is binary (e.g. .xlsx saved with .csv extension or raw Excel format)
      if (text.startsWith("PK\x03\x04") || text.includes("\0")) {
        setBulkErrors(["This file appears to be an Excel workbook (.xlsx). Please save/export it as CSV UTF-8 (Comma Separated Values) before uploading."]);
        setBulkData([]);
        return;
      }

      const { rows, errors } = parseCSV(text);
      setBulkData(rows);
      setBulkErrors(errors);
    };
    reader.readAsText(file);

    // Reset file input value so re-uploading the same file triggers onChange
    e.target.value = "";
  };

  // Save all valid bulk rows
  const handleBulkSave = async () => {
    const validRows = bulkData.filter(r => !r._hasError);
    if (validRows.length === 0) return;

    setBulkUploading(true);
    let successCount = 0;
    let failCount = 0;

    for (const row of validRows) {
      try {
        await api.post("/admin/faqs", {
          category: row.category,
          question: row.question,
          answer: row.answer,
          sortOrder: row.sortOrder,
          isActive: row.isActive,
        });
        successCount++;
      } catch {
        failCount++;
      }
    }

    setBulkUploading(false);
    setBulkResult({ success: successCount, failed: failCount });
    fetchFaqs();
  };

  const closeBulkModal = () => {
    setShowBulkModal(false);
    setSelectedFileName("");
    setBulkData([]);
    setBulkErrors([]);
    setBulkResult(null);
  };

  // ==================== RENDER ====================

  return (
    <div ref={formRef} className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 pb-28">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Manage FAQs
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Create, edit, and organize frequently asked questions displayed across the website.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowBulkModal(true)}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition cursor-pointer flex items-center gap-2 self-start sm:self-auto"
        >
          <Upload className="w-4 h-4" />
          Bulk Upload FAQs
        </button>
      </div>

      {/* ==================== MANUAL FORM CARD ==================== */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
        {/* Form Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50/80 to-white flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-700 text-[11px] font-black uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                {editingId ? "Edit FAQ" : "Add New FAQ"}
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Configure question and answer details displayed on client-facing pages.
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
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Category <span className="text-amber-600 font-semibold">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., General, IPR & Trademarks, GST"
                className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Section grouping for the question.</p>
            </div>

            {/* Sort Order Index */}
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
              <p className="text-[11px] text-slate-400 mt-1">Lower numbers display first (e.g. 0, 1, 2).</p>
            </div>
          </div>

          {/* Question */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Question Title <span className="text-amber-600 font-semibold">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              placeholder="e.g., How long does the trademark registration process take in India?"
              className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400"
            />
            <p className="text-[11px] text-slate-400 mt-1">Headline question shown in the FAQ accordion.</p>
          </div>

          {/* Answer */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Answer Description <span className="text-amber-600 font-semibold">*</span>
            </label>
            <textarea
              required
              rows="2"
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              placeholder="Comprehensive and concise answer explaining the topic to the client..."
              className="w-full px-3.5 py-2.5 bg-slate-50/60 hover:bg-white focus:bg-white text-slate-800 text-sm font-medium border border-slate-200 rounded-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 placeholder:text-slate-400 resize-none"
            />
          </div>

          {/* Submit Footer with Active Toggle and Action Button */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            {/* Active Toggle Switch */}
            <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500 relative transition-colors"></div>
              <span className="text-xs font-bold text-slate-700">
                {formData.isActive ? "Active" : "Inactive"}
              </span>
            </label>

            {/* Buttons */}
            <div className="flex items-center gap-2.5">
              {editingId && (
                <button
                  type="button"
                  onClick={cancel}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition shadow-2xs"
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
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                {editingId ? "Update FAQ" : "Add FAQ"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* ==================== TABLE: Configured FAQs ==================== */}
      {(() => {
        const term = searchTerm.toLowerCase().trim();
        const filteredFaqs = faqs.filter((faq) => {
          const matchesSearch =
            !term ||
            (faq.question && faq.question.toLowerCase().includes(term)) ||
            (faq.answer && faq.answer.toLowerCase().includes(term)) ||
            (faq.category && faq.category.toLowerCase().includes(term));
          const matchesCategory =
            selectedCategory === "ALL" ||
            (faq.category || "General").toLowerCase() === selectedCategory.toLowerCase();
          return matchesSearch && matchesCategory;
        });

        const categoriesList = Array.from(
          new Set(faqs.map((f) => f.category || "General").filter(Boolean))
        ).sort();

        const ITEMS_PER_PAGE = 20;
        const totalPages = Math.ceil(filteredFaqs.length / ITEMS_PER_PAGE) || 1;
        const safeCurrentPage = Math.min(currentPage, totalPages);
        const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
        const paginatedFaqs = filteredFaqs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

        return (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">Configured FAQs</h2>
                <p className="text-xs text-slate-500">Live frequently asked questions currently available.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Search Bar */}
                <div className="relative flex-1 sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search FAQs by question or answer..."
                    className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Category Dropdown */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition cursor-pointer"
                >
                  <option value="ALL">All Categories ({faqs.length})</option>
                  {categoriesList.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>

                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-2 rounded-xl shrink-0">
                  {filteredFaqs.length} / {faqs.length} Total
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50/70 border-b border-slate-200">
                  <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <th className="p-4">Category</th>
                    <th className="p-4">Question & Answer</th>
                    <th className="p-4">Order</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-400 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                          Loading FAQs...
                        </div>
                      </td>
                    </tr>
                  ) : filteredFaqs.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-400 text-sm">
                        {searchTerm || selectedCategory !== "ALL"
                          ? "No FAQs match your search or filter criteria."
                          : "No FAQs added yet. Create your first FAQ using the form above."}
                      </td>
                    </tr>
                  ) : (
                    paginatedFaqs.map((faq) => (
                  <tr key={faq.id} className="hover:bg-slate-50/70 transition">
                    <td className="p-4 align-top whitespace-nowrap">
                      <span className="font-bold text-slate-800 text-sm">
                        {faq.category || "General"}
                      </span>
                    </td>
                    <td className="p-4 align-top max-w-md">
                      <p className="font-semibold text-slate-900 text-sm leading-snug">{faq.question}</p>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">{faq.answer}</p>
                    </td>
                    <td className="p-4 align-top text-slate-600 font-medium">
                      {faq.sortOrder}
                    </td>
                    <td className="p-4 align-top">
                      <button
                        type="button"
                        onClick={() => handleToggle(faq)}
                        title="Click to toggle status"
                        className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase cursor-pointer border transition ${
                          faq.isActive
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                            : "bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200"
                        }`}
                      >
                        {faq.isActive ? "ACTIVE" : "INACTIVE"}
                      </button>
                    </td>
                    <td className="p-4 align-top text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(faq)}
                          title="Edit FAQ"
                          className="w-8 h-8 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center transition cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(faq.id)}
                          title="Delete FAQ"
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

          {/* Pagination Controls */}
          {filteredFaqs.length > 0 && (
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 font-medium">
                Showing <strong className="text-slate-800">{startIndex + 1}</strong> to <strong className="text-slate-800">{Math.min(startIndex + ITEMS_PER_PAGE, filteredFaqs.length)}</strong> of <strong className="text-slate-800">{filteredFaqs.length}</strong> FAQs
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={safeCurrentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer flex items-center gap-1 shadow-2xs"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Previous
                </button>

                <div className="flex items-center gap-1 px-1 overflow-x-auto max-w-[200px] sm:max-w-none">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer ${
                        safeCurrentPage === pageNum
                          ? "bg-amber-500 text-white shadow-xs"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={safeCurrentPage >= totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer flex items-center gap-1 shadow-2xs"
                >
                  Next
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      );
    })()}

      {/* ==================== BULK UPLOAD MODAL ==================== */}
      {showBulkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity" 
            onClick={closeBulkModal} 
          />

          {/* Modal Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-xl p-6 sm:p-8 space-y-5 z-10 my-auto transform transition-all animate-scaleUp">
            
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Bulk Upload FAQs
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Upload a CSV or Excel file with columns: <strong className="text-slate-800 font-bold">category, question, answer, sortOrder, isActive</strong>. Existing questions are kept; new ones are added.
                </p>
              </div>
              <button
                type="button"
                onClick={closeBulkModal}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-700 flex items-center justify-center transition cursor-pointer shrink-0 shadow-2xs"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Download Sample Format Button */}
            <div>
              <button
                type="button"
                onClick={downloadTemplate}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl flex items-center gap-2 transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                Download Sample Format
              </button>
            </div>

            {/* Dashed File Upload Box */}
            <div className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-4 sm:p-5 transition bg-slate-50/50">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-lg text-xs font-semibold shadow-2xs transition cursor-pointer"
                >
                  Choose File
                </button>
                <span className="text-xs text-slate-600 font-medium truncate max-w-[280px]">
                  {selectedFileName || "No file chosen"}
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv, .txt, text/csv, application/csv, text/comma-separated-values"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Validation Errors Alert */}
            {bulkErrors.length > 0 && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  Validation Issues ({bulkErrors.length})
                </div>
                <ul className="text-xs text-rose-600 space-y-1 max-h-32 overflow-y-auto">
                  {bulkErrors.map((err, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-400">•</span>
                      <span>{err}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Preview Status Alert */}
            {bulkData.length > 0 && bulkErrors.length === 0 && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-800">
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>File validated: {bulkData.filter(r => !r._hasError).length} FAQs ready to import</span>
                </div>
              </div>
            )}

            {/* Success Result Banner */}
            {bulkResult && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-xs font-bold text-emerald-800">
                      Bulk Upload Complete
                    </p>
                    <p className="text-[11px] text-emerald-600">
                      {bulkResult.success} FAQ{bulkResult.success !== 1 ? 's' : ''} added successfully
                      {bulkResult.failed > 0 && `, ${bulkResult.failed} failed`}.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={closeBulkModal}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleBulkSave}
                disabled={bulkUploading || bulkData.length === 0 || bulkData.filter(r => !r._hasError).length === 0}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs transition shadow-sm cursor-pointer flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {bulkUploading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4" />
                )}
                {bulkUploading ? "Uploading..." : "Upload"}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
