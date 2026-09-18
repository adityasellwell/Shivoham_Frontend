import React, { useEffect } from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Request",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
  type = "danger",
  isLoading = false,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-200 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-800 dark:text-slate-100 animate-scaleUp">
        
        {/* Header Bar */}
        <div className="bg-slate-50 dark:bg-slate-950/80 px-6 py-5 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
              type === 'danger'
                ? 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
            }`}>
              {type === 'danger' ? <Trash2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Confirmation required
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Body */}
        <div className="p-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <p>{message}</p>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-end gap-3">
          {cancelText && (
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm transition cursor-pointer disabled:opacity-50"
            >
              {cancelText}
            </button>
          )}
          <button
            type="button"
            onClick={onConfirm || onClose}
            disabled={isLoading}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-2 text-white ${
              type === 'danger'
                ? 'bg-red-600 hover:bg-red-700 shadow-red-500/20'
                : 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/20'
            } disabled:opacity-50`}
          >
            {type === 'danger' && <Trash2 className="w-4 h-4" />}
            {confirmText}
          </button>
        </div>

      </div>
    </div>
  );
}
