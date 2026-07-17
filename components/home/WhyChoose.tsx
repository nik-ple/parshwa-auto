import { WHY_FEATURES } from "@/lib/constants";
import { MessageCircle, Star } from "lucide-react";
import { EyebrowLabel } from "../primitives/EyebrowLabel";
import { AnimatedCounter } from "../shared/AnimatedCounter";
import { Reveal } from "../shared/Reveal";

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="bg-[#111111] py-[120px]"
      aria-labelledby="why-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        {/* Header */}
        <Reveal className="text-center max-w-[640px] mx-auto mb-14">
          <EyebrowLabel light>Why Choose Parshwa Auto</EyebrowLabel>
          <h2
            id="why-heading"
            className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.06] tracking-[-0.035em] text-white mb-4"
          >
            Trusted By Riders.<br />
            Chosen For <span className="text-[#F97316]">Experience.</span>
          </h2>
          <p className="text-[16px] text-gray-400 leading-[1.7]">
            From fair valuations to instant payments, everything we do is
            designed to make buying, selling and exchanging motorcycles
            effortless.
          </p>
        </Reveal>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {/* Instagram community */}
          <Reveal>
            <div className="bg-white/[0.05] border border-white/[0.08] rounded-[28px] p-8 hover:bg-white/[0.08] transition-colors duration-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-amber-400 flex items-center justify-center">
                  <MessageCircle size={14} className="text-white" />
                </div>
                <span className="text-[12px] font-medium text-gray-400">Instagram</span>
              </div>
              <p className="text-[clamp(40px,5vw,52px)] font-bold text-white leading-none tracking-tight mb-2">
                <AnimatedCounter target={48} suffix="K+" />
              </p>
              <p className="text-[15px] font-semibold text-white mb-1">
                Instagram Community
              </p>
              <p className="text-[13px] text-gray-500">
                Trusted riders across PCMC and Pune
              </p>
            </div>
          </Reveal>

          {/* Google rating */}
          <Reveal delay={0.08}>
            <div className="bg-[#F97316] rounded-[28px] p-8 h-full">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-white fill-white" />
                ))}
              </div>
              <p className="text-[clamp(50px,7vw,64px)] font-bold text-white leading-none tracking-tight mb-2">
                4.8
              </p>
              <p className="text-[15px] font-semibold text-white mb-1">Google Rating</p>
              <p className="text-[13px] text-white/60">Based on 200+ verified reviews</p>
            </div>
          </Reveal>

          {/* Feature checklist */}
          <Reveal delay={0.16}>
            <div className="bg-white/[0.05] border border-white/[0.08] rounded-[28px] p-7 h-full flex flex-col justify-center gap-5">
              {WHY_FEATURES.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-[14.5px] font-semibold text-white leading-none mb-0.5">
                      {label}
                    </p>
                    <p className="text-[12px] text-gray-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* BUY · SELL · EXCHANGE banner */}
        <Reveal>
          <div className="bg-white/[0.04] border border-white/[0.07] rounded-[28px] py-7 flex items-center justify-center">
            <p className="text-[clamp(16px,2.8vw,26px)] font-bold text-white tracking-[0.34em] uppercase select-none">
              BUY{" "}
              <span className="text-[#F97316] mx-1">•</span>{" "}
              SELL{" "}
              <span className="text-[#F97316] mx-1">•</span>{" "}
              EXCHANGE
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}