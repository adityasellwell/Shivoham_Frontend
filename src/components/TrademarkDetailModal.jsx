import React, { useState, useEffect, useRef } from 'react';
import { X, Download, FileText, Loader2,Printer } from 'lucide-react';
import api from '../config/api';
// import html2pdf from 'html2pdf.js';
import { useReactToPrint } from 'react-to-print';

export default function TrademarkDetailModal({ isOpen, onClose, applicationNumber }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pdfRef = useRef(null);

  useEffect(() => {
    if (isOpen && applicationNumber) {
      fetchTrademarkDetail();
    }
  }, [isOpen, applicationNumber]);

  const fetchTrademarkDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get(`/search/${applicationNumber}`);
      if (res.data.status) {
        setData(res.data.message);
      } else {
        setError(res.data.message || 'Failed to fetch details');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching trademark details');
    } finally {
      setLoading(false);
    }
  };

  // const handleDownloadPdf = () => {
  //   const element = pdfRef.current;
  //   if (!element) return;

  //   const opt = {
  //     margin: 0.5,
  //     filename: `Trademark_${applicationNumber}.pdf`,
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2, useCORS: true },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  //   };

  //   html2pdf().from(element).set(opt).save();
  // };

  const handleDownloadPdf = useReactToPrint({
    contentRef: pdfRef,
    documentTitle: `Trademark_${applicationNumber}`,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Trademark Details</h2>
              <p className="text-sm text-slate-500">App No: {applicationNumber}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!loading && !error && data && (
              <button
                // onClick={handleDownloadPdf}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition"
              >
                 <Printer className="w-4 h-4" />
                 <a href={data?.documents[0]?.file}  target="_blank"
  rel="noopener noreferrer">Print / Save PDF</a>
                
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
              <p className="text-slate-500">Fetching trademark registry data...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 flex items-center justify-center mb-2">
                <X className="w-8 h-8" />
              </div>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">Error Loading Details</p>
              <p className="text-red-500 max-w-md">{error}</p>
            </div>
          ) : data ? (
            <div ref={pdfRef} className="bg-white p-8 max-w-3xl mx-auto shadow-sm border border-slate-200 rounded-xl">
              {/* PDF Header */}
              <div className="text-center mb-8 pb-6 border-b-2 border-slate-200">
                <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wider mb-2">Government of India</h1>
                <h2 className="text-lg font-bold text-slate-700 uppercase">Trade Marks Registry</h2>
                <p className="text-sm text-slate-500 mt-2">Application Details</p>
              </div>

              {/* Main Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Application Number</p>
                    <p className="text-base font-semibold text-slate-900">{data.application_number || '-'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Word Mark</p>
                    <p className="text-base font-bold text-slate-900">{data.word_mark || '-'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Class</p>
                    <p className="text-base font-semibold text-slate-900">{data.class_number || '-'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
                    <p className="text-base font-semibold text-slate-900">{data.status || '-'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Application Date</p>
                    <p className="text-base font-semibold text-slate-900">{data.application_date || '-'}</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  {data.image && (
                    <div className="w-48 h-48 border-2 border-slate-200 rounded-lg p-2 flex items-center justify-center bg-slate-50">
                     <img src={data.image} alt={data.word_mark} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                  )}
                </div>
              </div>

              {/* Details sections */}
              <div className="space-y-6">
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                    <h3 className="font-bold text-slate-800">Proprietor Details</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Name</p>
                      <p className="text-sm font-semibold text-slate-900">{data.proprietor_name || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</p>
                      <p className="text-sm text-slate-800">{data.proprietor_address || '-'}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">State</p>
                        <p className="text-sm text-slate-800">{data.state || '-'}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Country</p>
                        <p className="text-sm text-slate-800">{data.country || '-'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                    <h3 className="font-bold text-slate-800">Attorney Details</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Attorney Name</p>
                      <p className="text-sm font-semibold text-slate-900">{data.attorney_name || 'Not Available'}</p>
                    </div>
                    {data.attorney_address && (
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Attorney Address</p>
                        <p className="text-sm text-slate-800">{data.attorney_address}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
                    <h3 className="font-bold text-slate-800">Filing & Classification</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filing Mode</p>
                        <p className="text-sm text-slate-800">{data.filing_mode || '-'}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">TM Type / Category</p>
                        <p className="text-sm text-slate-800">{data.tm_type || '-'} / {data.tm_category || '-'}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Appropriate Office</p>
                      <p className="text-sm text-slate-800">{data.appropriate_office || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">User Detail</p>
                      <p className="text-sm text-slate-800">{data.user_detail || '-'}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Class Detail</p>
                      <p className="text-sm text-slate-800 leading-relaxed text-justify">{data.class_detail || '-'}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
