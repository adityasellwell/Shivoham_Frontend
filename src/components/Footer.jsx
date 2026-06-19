import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Shield, Briefcase, FileCheck } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

/* ================= DATA OBJECTS ================= */

const services = [
  { name: "Trademark Registration", link: "/services/trademark", icon: Shield },
  { name: "Patent Filings", link: "/services/patent", icon: Shield },
  { name: "Private Limited Company", link: "/services/private-limited", icon: Briefcase },
  { name: "LLP Incorporation", link: "/services/llp", icon: Briefcase },
  { name: "GST Filings", link: "/services/gst", icon: FileCheck },
  { name: "Shop Act / Gumasta", link: "/services/shop-act-gumasta", icon: FileCheck },
];

const socialLinks = [
  { icon: FaFacebook, label: "Facebook" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaLinkedin, label: "LinkedIn" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Shivoham and Associates, Dadar, Mumbai, Maharashtra, India",
    type: "text",
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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className=" bg-[#052E1F] text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ================= BRAND ================= */}
        <div className="space-y-6">
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg">SHIVOHAM</span>
            <span className="text-xs text-yellow-300 font-semibold">
              LAW & ASSOCIATES
            </span>
          </div>

          <p className="text-sm text-white/80 leading-relaxed">
            Shivoham & Associates is India’s premier professional services platform offering legal, compliance, and business solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-4">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a key={i} href="#" className="hover:text-yellow-300 transition">
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div>
          <h3 className="font-bold mb-6">Key Service Areas</h3>

          <ul className="space-y-3 text-sm">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-yellow-300" />
                  <Link to={item.link} className="hover:text-yellow-300">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="font-bold mb-6">Contact Us</h3>

          <ul className="space-y-4 text-sm">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;

              return (
                <li key={i} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-yellow-300 mt-1" />

                  {item.link ? (
                    <a href={item.link} className="hover:text-yellow-300">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/80">{item.text}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div className="space-y-6">
          <h3 className="font-bold">Newsletter</h3>

          <p className="text-sm text-white/70">
            Get legal updates and compliance alerts.
          </p>

          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-black px-4 py-3 rounded-xl"
            />

            <button className="absolute right-2 top-2 bg-black text-white p-2 rounded-lg">
              <Send className="w-4 h-4" />
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-yellow-300">
              Thanks for subscribing!
            </p>
          )}
        </div>

      </div>
    </footer>
  );
}