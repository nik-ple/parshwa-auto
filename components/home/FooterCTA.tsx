import { wa } from "@/utils/WhatsApp";
import { MessageCircle } from "lucide-react";
import { EyebrowLabel } from "../primitives/EyebrowLabel";
import { Reveal } from "../shared/Reveal";

export function FooterCTA() {
  return (
    <section className="bg-[#111111] py-20 overflow-hidden relative" aria-label="Ready to sell your bike">
      {/* Subtle orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 70% at 50% 110%, rgba(249,115,22,0.12) 0%, transparent 65%)",
        }}
      />
      <Reveal>
        <div className="relative max-w-[620px] mx-auto px-5 text-center">
          <EyebrowLabel light>Ready</EyebrowLabel>
          <h2 className="text-[clamp(36px,6vw,68px)] font-bold leading-[1.03] tracking-[-0.04em] text-white mb-4">
            Ready To Sell<br />Your <span className="text-[#F97316]">Bike?</span>
          </h2>
          <p className="text-[16px] text-gray-400 leading-[1.68] mb-9">
            Fair valuation, transparent process, instant payment.
          </p>
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-13 px-8 py-4 bg-[#F97316] hover:bg-[#EA6400] text-white font-semibold text-[16px] rounded-[18px] transition-all duration-200 shadow-[0_8px_32px_rgba(249,115,22,0.4)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.52)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-[#111]"
          >
            <MessageCircle size={16} />
            Talk On WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}