import { motion } from "framer-motion";
import { ShieldCheck, Lock, Loader,Eye,EyeOff} from "lucide-react";
import { useState } from "react";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("admin@shivoham.com ");
  const [password, setPassword] = useState("admin@123");
  const [showPassword, setShowPassword] = useState(false);
  const[loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  const handleLogin = async(e) =>{
    try {
        e.preventDefault();
        setLoading(true);
        const {data} = await api.post("/admin/login",{email,password});
        if(data.success) {
            localStorage.setItem("adminToken", JSON.stringify(data.data));
            navigate("/admin")
        }else{
            navigate("/admin/login")
        }
    } catch (error) {
        setLoading(false)
        setError(error.message)
        console.log(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#F4C430] via-[#FFB300] to-[#FF9933] flex items-center justify-center p-6 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B4619]/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-4xl shadow-2xl border border-white px-8 py-6">
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#0B4619]/10 rounded-2xl mx-auto flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-[#0B4619]" />
            </div>

            <h1 className="text-4xl font-black text-[#0B4619]">
              SHIVOHAM
            </h1>

            <p className="text-sm tracking-[0.2em] text-slate-500 font-semibold mt-1">
              & ASSOCIATES
            </p>

            {/* <p className="mt-4 text-slate-600">
              Admin Content Management System
            </p> */}
          </div>

          <form className="space-y-5">
            
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="admin@shivoham.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B4619] outline-none"
              />
            </div>

             <div>
      <label className="text-sm font-semibold text-slate-700">
        Password
      </label>

      <div className="relative mt-2">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 focus:border-[#0B4619] outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
    </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0B4619] hover:bg-[#073010] text-white py-3 rounded-xl font-bold transition-all text-center flex justify-center"
              onClick={handleLogin}
            >
              {loading ? <Loader className="w-5 h-5 animate-spin" /> : 'Login to Dashboard'}
            </button>

            

          </form>

          <div className="text-red-500 text-center py-3">
            {error && error}
          </div>

          <div className=" flex items-center justify-center text-sm text-slate-500">
            <Lock className="w-4 h-4 mr-2" />
            Protected Admin Access
          </div>
        </div>
      </motion.div>
    </div>
  );
}