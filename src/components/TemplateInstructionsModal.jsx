import React, { useEffect } from "react";
import { X, Download, Upload, FileSpreadsheet, CheckCircle2, Info, FileText, AlertCircle } from "lucide-react";

/**
 * Reusable Template & Bulk Upload Instructions Modal
 * 
 * Props:
 * - isOpen: boolean
 * - onClose: function () => void
 * - onDownload: function () => void (optional action)
 * - onUpload: function () => void (optional action)
 * - title: string (optional)
 * - subtitle: string (optional)
 * - steps: Array of step objects { title, description, badge, icon }
 */
export default function TemplateInstructionsModal({
  isOpen,
  onClose,
  onDownload,
  onUpload,
  title = "CSV Template & Bulk Upload Guide",
  subtitle = "Follow these instructions to format, fill, and upload your data seamlessly.",
  steps = [
    {
      num: "1",
      title: "Download Template File",
      description: "Click 'Download Template' to get a clean CSV pre-formatted with column headers (category, question, answer, sortOrder, isActive).",
      badge: "Header Row Provided",
      icon: Download,
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      num: "2",
      title: "Fill Data in Excel or Sheets",
      description: "Open the file and add your FAQ entries starting from Row 2. Do not change or remove the top header row.",
      badge: "Start from Row 2",
      icon: FileSpreadsheet,
      color: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      num: "3",
      title: "Save as CSV UTF-8",
      description: "In Excel, choose 'Save As > CSV UTF-8 (Comma delimited)' to preserve formatting, quotes, and special characters.",
      badge: "Format: CSV UTF-8",
      icon: FileText,
      color: "bg-violet-50 text-violet-700 border-violet-200",
    },
    {
      num: "4",
      title: "Upload & Validate",
      description: "Click 'Upload File'. The system will parse each row, check for missing fields, show a preview table, and save to database.",
      badge: "Instant Validation",
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ],
}) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Dark Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-2xl overflow-hidden z-10 my-auto transform transition-all animate-scaleUp">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B4619] via-[#0f5420] to-[#0B4619] text-white p-5 sm:p-6 flex items-start justify-between relative overflow-hidden">
          <div className="space-y-1 z-10 pr-8">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F4C430] text-[#0B4619] text-[10px] font-black uppercase tracking-wider">
                GUIDE & INSTRUCTIONS
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-emerald-100/90 leading-relaxed max-w-lg">
              {subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition cursor-pointer z-10"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Decorative background accent circle */}
          <div className="absolute -right-8 -bottom-10 w-40 h-40 bg-[#F4C430]/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Modal Body - Steps */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {steps.map((step) => {
              const IconComp = step.icon || Info;
              return (
                <div
                  key={step.num}
                  className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 space-y-2 flex flex-col justify-between hover:border-slate-300 transition shadow-2xs"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#0B4619] text-white font-black text-xs flex items-center justify-center shrink-0">
                          {step.num}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">
                          {step.title}
                        </h4>
                      </div>
                      <IconComp className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {step.badge && (
                    <div className={`py-1 px-2.5 rounded-lg border text-[10px] font-bold text-center w-fit ${step.color || "bg-slate-100 text-slate-700 border-slate-200"}`}>
                      {step.badge}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Important Tip Box */}
          <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-bold text-amber-950">Important Tip for Excel Users:</p>
              <p className="text-[11px] text-amber-800 leading-relaxed">
                If your CSV contains special characters or non-English text, make sure to save it as <span className="font-bold">CSV UTF-8 (Comma delimited)</span> so no characters get corrupted during bulk import.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onDownload && (
              <button
                type="button"
                onClick={() => {
                  onDownload();
                }}
                className="px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl font-bold text-xs transition cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Template
              </button>
            )}

            {onUpload && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onUpload();
                }}
                className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white rounded-xl font-bold text-xs transition cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <Upload className="w-4 h-4" />
                Upload CSV File
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs transition cursor-pointer ml-auto"
          >
            Got It, Close
          </button>
        </div>
      </div>
    </div>
  );
}
