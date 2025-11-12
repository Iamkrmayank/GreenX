import { Leaf } from "lucide-react";
import logo from "figma:asset/79eab8a38dab2c66f445d140873418f5b421e79d.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 border-t border-emerald-200/50 py-6 mt-auto">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="GreenXchain" className="h-8 w-auto" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center">
            © 2025 GreenXchain. All rights reserved.
          </div>

          {/* Tagline */}
          <div className="text-xs text-gray-500 hidden sm:block">
            Building a sustainable future 🌱
          </div>
        </div>
      </div>
    </footer>
  );
}
