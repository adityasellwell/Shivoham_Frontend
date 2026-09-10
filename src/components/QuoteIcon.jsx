import React from "react";
import {
  FiShoppingCart,
  FiMessageCircle,
  FiCode,
  FiShield,
  FiBriefcase,
  FiFileText,
  FiGlobe,
  FiAward,
  FiTrendingUp,
  FiLayers,
  FiBox,
  FiCheckCircle,
  FiDollarSign,
  FiFolder,
  FiUsers,
  FiCpu,
  FiSettings,
} from "react-icons/fi";
import { Shield, Briefcase, FileCheck } from "lucide-react";

export const ICON_OPTIONS = [
  { value: "FiShoppingCart", label: "FiShoppingCart (Cart Icon)" },
  { value: "FiMessageCircle", label: "FiMessageCircle (Message Icon)" },
  { value: "FiCode", label: "FiCode (Code Icon)" },
  { value: "FiShield", label: "FiShield (Shield Icon)" },
  { value: "FiBriefcase", label: "FiBriefcase (Briefcase Icon)" },
  { value: "FiFileText", label: "FiFileText (File/Check Icon)" },
  { value: "FiGlobe", label: "FiGlobe (Globe Icon)" },
  { value: "FiAward", label: "FiAward (Award Icon)" },
  { value: "FiTrendingUp", label: "FiTrendingUp (Trending Icon)" },
  { value: "FiLayers", label: "FiLayers (Layers Icon)" },
  { value: "FiBox", label: "FiBox (Box Icon)" },
  { value: "FiCheckCircle", label: "FiCheckCircle (Check Circle)" },
  { value: "FiDollarSign", label: "FiDollarSign (Dollar/Finance)" },
  { value: "FiFolder", label: "FiFolder (Folder Icon)" },
  { value: "FiUsers", label: "FiUsers (Users Icon)" },
  { value: "FiCpu", label: "FiCpu (CPU/Tech Icon)" },
  { value: "FiSettings", label: "FiSettings (Settings Icon)" },
];

export default function QuoteIcon({ name, className = "w-5 h-5" }) {
  switch (name) {
    case "FiShoppingCart":
      return <FiShoppingCart className={className} />;
    case "FiMessageCircle":
      return <FiMessageCircle className={className} />;
    case "FiCode":
      return <FiCode className={className} />;
    case "FiShield":
    case "Shield":
      return <FiShield className={className} />;
    case "FiBriefcase":
    case "Briefcase":
      return <FiBriefcase className={className} />;
    case "FiFileText":
    case "FileCheck":
      return <FiFileText className={className} />;
    case "FiGlobe":
      return <FiGlobe className={className} />;
    case "FiAward":
      return <FiAward className={className} />;
    case "FiTrendingUp":
      return <FiTrendingUp className={className} />;
    case "FiLayers":
      return <FiLayers className={className} />;
    case "FiBox":
      return <FiBox className={className} />;
    case "FiCheckCircle":
      return <FiCheckCircle className={className} />;
    case "FiDollarSign":
      return <FiDollarSign className={className} />;
    case "FiFolder":
      return <FiFolder className={className} />;
    case "FiUsers":
      return <FiUsers className={className} />;
    case "FiCpu":
      return <FiCpu className={className} />;
    case "FiSettings":
      return <FiSettings className={className} />;
    default:
      return <FiShield className={className} />;
  }
}
