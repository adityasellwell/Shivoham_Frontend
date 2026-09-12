import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Shield, FileCheck, FileText, AlertTriangle, Lock, RotateCcw } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

/* ================= DATA OBJECTS ================= */

const services = [
  { name: "Trademark Registration", link: "/legal-services/trademark-registration-in-mumbai", icon: Shield },
  { name: "Copyright Registration", link: "/legal-services/copyright-registration-in-mumbai", icon: Shield },
  { name: "Patent & Design Filings", link: "/legal-services/patent-registration-in-mumbai", icon: Shield },
  { name: "FSSAI (Food License)", link: "/business-registration/fssai-food-license-in-mumbai", icon: FileCheck },
];

const legalLinks = [
  { name: "DISCLAIMER", link: "/disclaimer", icon: AlertTriangle },
  { name: "PRIVACY POLICY", link: "/privacy-policy", icon: Lock },
  { name: "TERMS AND CONDITIONS", link: "/terms-and-conditions", icon: FileText },
  { name: "REFUND POLICY", link: "/refund-policy", icon: RotateCcw },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Ground Floor, Shivoham & Associates, Parasmani Commercial Complex, Flignite, Dadar East, Dadar, Mumbai, Maharashtra 400014",
    type: "map",
    link: "https://www.google.com/maps/place/SHIVOHAM+AND+ASSOCIATES/@19.015854,72.8437095,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf1ed58c1157:0xd909cce553d3833f!8m2!3d19.015854!4d72.8437095!16s%2Fg%2F11whfm7hz1?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Phone,
    text: "+91 9137282042",
    type: "tel",
    link: "tel:+919137282042",
  },
  {
    icon: Mail,
    text: "diptish@shivoham.biz",
    type: "mail",
    link: "mailto:diptish@shivoham.biz",
  },
];

/* ================= COMPONENT ================= */

export default function Footer() {
  return (
    <footer className="bg-[#052E1F] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* ================= BRAND ================= */}
        <div className="space-y-6">
          <Link to="/" className="inline-block group">
            <div className="flex flex-col leading-none select-none">
              <span className="font-black text-2xl sm:text-3xl text-white tracking-normal group-hover:text-slate-100 transition">
                SHIVOHAM
              </span>
              <span className="text-xs sm:text-sm text-yellow-300 font-bold tracking-wide uppercase mt-1.5 group-hover:text-yellow-200 transition">
                &amp; ASSOCIATES
              </span>
            </div>
          </Link>

          <p className="text-sm text-white/80 leading-relaxed">
            Shivoham &amp; Associates is India's premier professional services platform offering legal, compliance, and business solutions.
          </p>

          {/* LINKEDIN ONLY */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/diptish-khot-b8a213a8/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-400 hover:text-slate-900 transition duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="font-bold mb-6 text-yellow-300 text-lg">Key Services</h3>
          <ul className="space-y-3 text-sm">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-yellow-300 shrink-0" />
                  <Link to={item.link} className="hover:text-yellow-300 transition">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= LEGAL & POLICIES ================= */}
        <div>
          <h3 className="font-bold mb-6 text-yellow-300 text-lg">Legal &amp; Policies</h3>
          <ul className="space-y-3.5 text-sm">
            {legalLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="flex items-center gap-2.5 text-white/90 hover:text-yellow-300 font-bold text-xs sm:text-sm tracking-wider uppercase transition group"
                  >
                    <Icon className="w-4 h-4 text-yellow-300 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="font-bold mb-6 text-yellow-300 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.type === "map" ? "_blank" : undefined}
                      rel={item.type === "map" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3 hover:text-yellow-300 transition group cursor-pointer"
                    >
                      <Icon className="w-5 h-5 text-yellow-300 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-white/90 group-hover:text-yellow-300 transition">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-yellow-300 mt-1 shrink-0" />
                      <span className="text-white/80">{item.text}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      {/* ================= BOTTOM COPYRIGHT BAR ================= */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} Shivoham &amp; Associates. All rights reserved.</p>
      </div>
    </footer>
  );
}