import { CONFIG } from "@/lib/site";
import { Phone, ArrowRight } from "lucide-react";

export function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 sm:hidden grid grid-cols-2 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.07)]"
      role="navigation"
      aria-label="Mobile quick actions"
    >
      <a
        href={`tel:${CONFIG.phone}`}
        className="flex items-center justify-center gap-2 py-4 text-[14px] font-semibold text-gray-900 border-r border-gray-100 active:bg-gray-50 transition-colors"
      >
        <Phone size={14} />
        Call Now
      </a>
      <a
        href="#sell"
        className="flex items-center justify-center gap-2 py-4 bg-[#F97316] text-white text-[14px] font-semibold active:bg-[#EA6400] transition-colors"
      >
        <ArrowRight size={14} strokeWidth={2.5} />
        Sell My Bike
      </a>
    </div>
  );
}