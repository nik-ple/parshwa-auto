import { CONFIG } from "@/lib/site";
import { wa } from "@/utils/WhatsApp";
import { MessageCircle, Star } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.05] pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-[9px] bg-[#F97316] flex items-center justify-center">
                <span className="text-white text-[11px] font-black tracking-[-0.03em]">PA</span>
              </div>
              <span className="text-[15px] font-bold tracking-[-0.02em] text-white">
                PARSHWA<span className="text-[#F97316]">AUTO</span>
              </span>
            </div>
            <p className="text-[13px] text-gray-500 leading-[1.7] mb-1">
              Buy · Sell · Exchange
            </p>
            <p className="text-[13px] text-gray-500 leading-[1.7] max-w-[220px]">
              Pune&apos;s most trusted pre-owned motorcycle destination in PCMC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-gray-500 mb-4">
              Quick Links
            </h5>
            <nav className="space-y-2.5">
              {[
                ["Sell Process",  "#process"],
                ["Why Choose Us","#why-us"],
                ["Exchange",      "#exchange"],
                ["Reviews",       "#reviews"],
                ["Contact",       "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-[13.5px] text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-gray-500 mb-4">
              Contact Details
            </h5>
            <div className="space-y-2.5">
              <p className="text-[13.5px] text-gray-400">{CONFIG.address}</p>
              <a
                href={`tel:${CONFIG.phone}`}
                className="block text-[13.5px] text-gray-400 hover:text-white transition-colors"
              >
                +91 83905 58079
              </a>
              <p className="text-[13.5px] text-gray-400">{CONFIG.hours}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-gray-500 mb-4">
              Social Links
            </h5>
            <div className="space-y-2.5">
              <a
                href={CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13.5px] text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle size={13} />
                Instagram
              </a>
              <a
                href={CONFIG.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13.5px] text-gray-400 hover:text-white transition-colors"
              >
                <Star size={13} />
                Google Reviews
              </a>
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13.5px] text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-[12px] text-gray-600">
            © Parshwa Auto {year}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[12px] text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[12px] text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}