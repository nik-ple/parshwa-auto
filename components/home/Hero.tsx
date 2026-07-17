import { fadeUp, EASE_OUT_EXPO, staggerContainer } from "@/lib/motion";
import { CONFIG } from "@/lib/site";
import {motion} from "framer-motion";
import { ArrowRight, Star, FileText, Zap, Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100svh-1px)] pt-16 bg-white overflow-hidden flex items-center"
      aria-label="Hero — Sell your bike in 15 minutes"
    >
      {/* Hero Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* Dot Grid */}

    <div
      className="absolute inset-0 opacity-[0.22]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(15,23,42,0.12) 1px, transparent 1px)",
        backgroundSize: "22px 22px",

        maskImage:
          "radial-gradient(circle at center, black 45%, transparent 95%)",

        WebkitMaskImage:
          "radial-gradient(circle at center, black 45%, transparent 95%)",
      }}
    />

  {/* Orange Glow */}

  <div
    className="
      absolute
      -top-52
      -right-44
      w-[620px]
      h-[620px]
      rounded-full
      bg-orange-400/15
      blur-[170px]
    "
  />

  {/* Grey Glow */}

  <div
    className="
      absolute
      -bottom-64
      -left-48
      w-[500px]
      h-[500px]
      rounded-full
      bg-slate-400/10
      blur-[170px]
    "
  />

</div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 py-20 md:py-28 grid md:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

        {/* ── Left — copy ── */}
        <motion.div
          className="max-w-[560px]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Trust badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-200 bg-[#FFF4ED] text-[#F97316] text-[12px] font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse flex-shrink-0" />
              #1 Trusted Across PCMC and Pune
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(40px,5.8vw,68px)] font-extrabold leading-[1.03] tracking-[-0.05em] text-gray-900 mb-5"
          >
            Sell Your Bike<br />
            In Just <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent animate-gradient">15 Minutes.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-[17px] leading-[1.72] text-gray-500 mb-9 max-w-[440px]"
          >
            Fair valuation, instant payment, bike exchange and complete RC
            transfer support — all handled by experts you can trust, right here
            in PCMC, Pune.
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <a
              href="#sell"
              className="inline-flex items-center gap-2 h-12 px-6 bg-[#F97316] hover:bg-[#EA6400] text-white font-semibold text-[15px] rounded-[18px] transition-all duration-200 shadow-[0_8px_24px_rgba(249,115,22,0.32)] hover:shadow-[0_12px_32px_rgba(249,115,22,0.46)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F97316]"
            >
              Sell My Bike
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href={`tel:+${CONFIG.phone}`}
              className="inline-flex items-center    gap-2    h-12    px-6    rounded-[18px]  text-gray-900   border    border-gray-200    bg-white    hover:bg-gray-50    shadow-sm
              transition-all"><Phone size={18}/> Call Now
            </a>
            <p className="text-[13.5px] text-gray-400">
              Looking for an upgrade?{" "}
              <a
                href="#exchange"
                className="text-[#F97316] hover:text-[#EA6400] font-medium underline underline-offset-3 decoration-orange-200 hover:decoration-orange-400 transition-all"
              >
                Explore our Bike Exchange program →
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* ── Right — showroom image + floating cards ── */}
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, x: 28, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT_EXPO }}
        >
          {/* Main image — 📸 REPLACE WITH IMAGE */}
          <div className="relative rounded-[28px] overflow-hidden bg-gray-100 aspect-[4/3] shadow-[0_24px_64px_rgba(0,0,0,0.11),0_0_0_1px_rgba(0,0,0,0.04)]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2">
              <Image
                src="/images/hero_pcmc_pune_baner_wakad.png"
                alt="Parshwa Auto showroom"
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* Subtle inner shadow at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Floating card — Google Rating */}
          <motion.div
            className="absolute top-4 right-4 flex items-center gap-2.5 bg-white rounded-[16px] px-3.5 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.12)] border border-black/[0.04]"
            initial={{ opacity: 0, y: -12, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.65, duration: 0.42, ease: EASE_OUT_EXPO }}
          >
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
              <Star size={14} className="text-amber-500 fill-amber-500" />
            </div>
            <div>
              <p className="text-[12.5px] font-bold text-gray-900 leading-none">4.8 Stars</p>
              <p className="text-[10.5px] text-gray-400 mt-0.5">Google Review</p>
            </div>
          </motion.div>

          {/* Floating card — RC Transfer */}
          <motion.div
            className="absolute bottom-12 -left-5 flex items-center gap-2.5 bg-white rounded-[16px] px-3.5 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.12)] border border-black/[0.04]"
            initial={{ opacity: 0, x: -16, scale: 0.88 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.42, ease: EASE_OUT_EXPO }}
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <FileText size={14} className="text-blue-500" />
            </div>
            <div>
              <p className="text-[12.5px] font-bold text-gray-900 leading-none">RC Transfer</p>
              <p className="text-[10.5px] text-gray-400 mt-0.5">Assistance</p>
            </div>
          </motion.div>

          {/* Floating card — Instant Payment */}
          <motion.div
            className="absolute bottom-4 right-4 flex items-center gap-2.5 bg-[#F97316] rounded-[16px] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(249,115,22,0.4)]"
            initial={{ opacity: 0, y: 12, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.95, duration: 0.42, ease: EASE_OUT_EXPO }}
          >
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Zap size={14} className="text-white" />
            </div>
            <div>
              <p className="text-[12.5px] font-bold text-white leading-none">Instant Payment</p>
              <p className="text-[10.5px] text-white/70 mt-0.5">Same day</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}