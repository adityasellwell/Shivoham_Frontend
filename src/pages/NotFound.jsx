import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="font-sans min-h-[70vh] flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-950/20 text-center px-4 transition-all">
      <div className="max-w-md bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
        <div className="w-16 h-16 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-2xl flex items-center justify-center mx-auto">
          <AlertCircle className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="font-display font-black text-3xl text-slate-900 dark:text-white leading-tight">Page Not Found</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
            The page you are looking for does not exist, has been renamed, or is temporarily unavailable.
          </p>
        </div>
        <div className="pt-2">
          <Link 
            to="/" 
            className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-1.5 cursor-pointer text-sm"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
