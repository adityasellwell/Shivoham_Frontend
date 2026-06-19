import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, ArrowLeft, RefreshCw, LayoutGrid, List, ChevronLeft, ChevronRight } from 'lucide-react';
import api from '../config/api.js';
import TrademarkDetailModal from "../components/TrademarkDetailModal.jsx"

export default function SearchResults() {

  const location = useLocation();
  const navigate = useNavigate();
  
  const [query, setQuery] = useState(location.state?.query || '');
  const [results, setResults] = useState(location.state?.data || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // New states for toggles, pagination, and modal
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const [selectedAppId, setSelectedAppId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reset page when results change
  useEffect(() => {
    setCurrentPage(1);
  }, [results]);

  const performSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await api.post('/search', { word_mark: searchQuery });
      // The backend returns the data object which contains a 'results' array
      setResults(res.data.data?.results || []);
      // Also update the route state so refreshing keeps the data
      window.history.replaceState({}, '', location.pathname);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch search results.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    performSearch(query);
  };

  useEffect(() => {
    if (!results && query) {
      performSearch(query);
    }
  }, []);

  const openTrademarkDetail = (appId) => {
    setSelectedAppId(appId);
    setIsModalOpen(true);
  };

  // Pagination calculations
  const totalItems = results ? results.length : 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentResults = results ? results.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-sm text-slate-500 hover:text-primary-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8">
          <h1 className="text-xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Search Trademarks
          </h1>
          
          <form onSubmit={handleSearchSubmit} className="flex gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl leading-5 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                placeholder="Enter word mark (e.g., Apple)"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : 'Search'}
            </button>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 flex items-center">
            {error}
          </div>
        )}

        {results && !loading && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                Results for "{query}" <span className="text-sm font-normal text-slate-500">({totalItems} found)</span>
              </h2>
              
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setViewMode('table')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition ${
                    viewMode === 'table' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <List className="w-4 h-4" /> Table
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition ${
                    viewMode === 'list' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" /> Card
                </button>
              </div>
            </div>
            
            {results.length === 0 ? (
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400">No trademarks found.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {viewMode === 'list' ? (
                  <div className="grid gap-6">
                    {currentResults.map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition">
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {item.word_mark || 'Unknown Mark'}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            item.status?.toLowerCase() === 'registered' ? 'bg-green-100 text-green-800' :
                            item.status?.toLowerCase() === 'abandoned' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.status || 'Pending'}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
                          App No: 
                          <button 
                            onClick={() => openTrademarkDetail(item.application_number)}
                            className="text-primary-600 hover:text-primary-700 hover:underline font-bold cursor-pointer"
                          >
                            {item.application_number}
                          </button> 
                          • Class: {item.class_number}
                        </p>
                      </div>
                      
                      {item.proprietor_name && (
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold">Proprietor</p>
                          <p className="text-slate-800 dark:text-slate-200">{item.proprietor_name}</p>
                        </div>
                      )}
                    </div>
                    
                    {item.tm_image_url && (
                      <div className="w-full md:w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden border border-slate-200 flex items-center justify-center">
                        <img src={item.tm_image_url} alt={item.word_mark} className="max-w-full max-h-full object-contain" />
                      </div>
                    )}
                  </div>
                ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm border-b border-slate-200 dark:border-slate-700">
                          {/* <th className="px-4 py-3 font-semibold"><input type="checkbox" className="rounded border-slate-300" /></th> */}
                          <th className="px-4 py-3 font-semibold">App. Num</th>
                          <th className="px-4 py-3 font-semibold">Word Mark</th>
                          <th className="px-4 py-3 font-semibold">Class</th>
                          <th className="px-4 py-3 font-semibold">App. Date</th>
                          <th className="px-4 py-3 font-semibold">Status</th>
                          <th className="px-4 py-3 font-semibold">Proprietor</th>
                          <th className="px-4 py-3 font-semibold">Tags</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                        {currentResults.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                            {/* <td className="px-4 py-4 align-middle">
                              <input type="checkbox" className="rounded border-slate-300" />
                            </td> */}
                            <td className="px-4 py-4 align-middle font-mono text-sm">
                              <button 
                                onClick={() => openTrademarkDetail(item.application_number)}
                                className="text-primary-600 hover:text-primary-700 hover:underline font-bold cursor-pointer"
                              >
                                {item.application_number}
                              </button>
                            </td>
                            <td className="px-4 py-4 align-middle">
                              <div className="flex items-center gap-3">
                                {item.image ? (
                                  <div className="w-10 h-10 rounded border border-slate-200 bg-white flex items-center justify-center overflow-hidden shrink-0">
                                    <img src={item.image} alt="TM" className="max-w-full max-h-full object-contain" />
                                  </div>
                                ) : (
                                  <div className="w-10 h-10 rounded border border-slate-200 bg-slate-100 flex items-center justify-center shrink-0">
                                    <span className="text-xs text-slate-400 font-bold uppercase">{item.word_mark?.substring(0, 2)}</span>
                                  </div>
                                )}
                                <span className="font-semibold text-sm text-slate-900 dark:text-white max-w-37.5 truncate" title={item.word_mark}>{item.word_mark || 'Unknown'}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 align-middle text-sm text-slate-600 dark:text-slate-400">
                              <span className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{item.class_number}</span>
                            </td>
                            <td className="px-4 py-4 align-middle text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
                              {item.application_date || '-'}
                            </td>
                            <td className="px-4 py-4 align-middle">
                              <span className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap border ${
                                item.status?.toLowerCase() === 'registered' ? 'bg-green-50 text-green-700 border-green-200' :
                                item.status?.toLowerCase() === 'abandoned' ? 'bg-red-50 text-red-700 border-red-200' :
                                'bg-emerald-50 text-emerald-700 border-emerald-200'
                              }`}>
                                {item.status || 'Pending'}
                              </span>
                            </td>
                            <td className="px-4 py-4 align-middle text-sm text-slate-700 dark:text-slate-300 max-w-50 truncate" title={item.proprietor_name}>
                              {item.proprietor_name || '-'}
                            </td>
                            <td className="px-4 py-4 align-middle text-sm text-slate-400 italic">
                              No tags
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm text-slate-500">
                      Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of <span className="font-medium">{totalItems}</span> results
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      
                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          // Simple windowed pagination for up to 5 pages shown
                          let pageNum = currentPage;
                          if (currentPage <= 3) pageNum = i + 1;
                          else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                          else pageNum = currentPage - 2 + i;
                          
                          if (pageNum < 1 || pageNum > totalPages) return null;
                          
                          return (
                            <button
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum)}
                              className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                                currentPage === pageNum 
                                  ? 'bg-primary-600 text-white' 
                                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <TrademarkDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        applicationNumber={selectedAppId} 
      />
    </div>
  );
}
