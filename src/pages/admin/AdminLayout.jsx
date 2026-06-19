import React, { useState } from "react";
import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import { LayoutDashboard, BarChart3, MessageSquare, LogOut, Menu, X } from "lucide-react";

export default function AdminLayout() {
   const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: "Stats", href: "/admin/stats", icon: BarChart3 },
    { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
    { name: "Quotes", href: "/admin/quotes", icon: LayoutDashboard },
    { name: "Consultations", href: "/admin/consultations", icon: MessageSquare },
  ];

  function handleLogout(){
    localStorage.removeItem("adminToken");
  }

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white flex flex-col
        transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-xl font-bold font-display tracking-tight text-white">Admin Panel</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-slate-300 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? "bg-primary-600 text-white" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800" onClick={handleLogout}>
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-white transition-colors text-sm">
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="font-medium">Exit Admin</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-slate-900">Admin Panel</h1>
          <button onClick={() => setIsSidebarOpen(true)} className="text-slate-600 hover:text-slate-900">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
