import { EASE_OUT_EXPO } from "@/lib/motion";
import { wa } from "@/utils/WhatsApp";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EyebrowLabel } from "../primitives/EyebrowLabel";
import { Reveal } from "../shared/Reveal";
import { LeadFormData, leadFormSchema } from "@/lib/schema/leadformschema";
import Image from "next/image"; 

export function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<LeadFormData>({ resolver: zodResolver(leadFormSchema) });

  const onSubmit: SubmitHandler<LeadFormData> = useCallback(
    async (data) => {
      const msg = `Hi Parshwa Auto!\n\nName: ${data.name}\nPhone: ${data.phone}\nBike: ${data.brand} ${data.model} (${data.year})\n\nI'd like to sell my bike.`;
      window.open(wa(msg), "_blank");
      // Small delay before success state
      await new Promise((r) => setTimeout(r, 600));
    },
    [],
  );

  const inputCls =
    "w-full px-4 py-3.5 bg-[#F9F8F6] border border-gray-200 rounded-[14px] text-[14.5px] text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/12 focus:bg-white";

  return (
    <section
      id="sell"
      className="py-[120px] bg-white"
      aria-labelledby="form-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-14 lg:gap-20 items-start">

          {/* Left — image + proof */}
          <Reveal>
            {/* 📸 REPLACE WITH IMAGE */}
            <div className="relative bg-[#FFF7ED] rounded-[28px] overflow-hidden border border-gray-100 mb-5 aspect-square">
  <Image
    src="/images/seller_pune.png"
    alt="Sell your bike illustration"
    fill
    priority
    className="object-contain w-full h-full scale-110"
  />
</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[13px] text-gray-400">
                We usually respond within 30 minutes during business hours
              </p>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <EyebrowLabel>Get Started</EyebrowLabel>
            <h2
              id="form-heading"
              className="text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.03em] text-gray-900 mb-2"
            >
              Ready To Sell
              <br />
              <span className="text-[#F97316]">Your Bike?</span>
            </h2>
            <p className="text-[15.5px] text-gray-500 leading-[1.65] mb-8">
              Fill in a few answers and our team will contact you.
              No hidden charges.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitSuccessful ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                  className="bg-green-50 border border-green-200 rounded-[22px] p-10 text-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={22} className="text-green-600" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                    Request Sent!
                  </h3>
                  <p className="text-[14px] text-gray-500 mb-6">
                    We&apos;ll reach out via WhatsApp within 30 minutes.
                  </p>
                  <button
                    onClick={() => reset()}
                    className="text-[13px] text-[#F97316] font-semibold hover:text-[#EA6400]"
                  >
                    Submit another enquiry →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        {...register("name")}
                        placeholder="Your Name"
                        autoComplete="name"
                        className={inputCls}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p role="alert" className="text-[11px] text-red-500 mt-1 pl-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("phone")}
                        placeholder="Phone / WhatsApp"
                        type="tel"
                        autoComplete="tel"
                        className={inputCls}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p role="alert" className="text-[11px] text-red-500 mt-1 pl-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <select
                      {...register("brand")}
                      className={`${inputCls} appearance-none cursor-pointer`}
                      aria-invalid={!!errors.brand}
                    >
                      <option value="">Select Bike Brand</option>
                      {[
                        "Honda","Hero","Bajaj","Yamaha","TVS",
                        "Royal Enfield","KTM","Suzuki","Kawasaki",
                        "Triumph","Ola Electric","Ather","Other",
                      ].map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    {errors.brand && (
                      <p role="alert" className="text-[11px] text-red-500 mt-1 pl-1">
                        {errors.brand.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        {...register("model")}
                        placeholder="Bike Model"
                        className={inputCls}
                        aria-invalid={!!errors.model}
                      />
                      {errors.model && (
                        <p role="alert" className="text-[11px] text-red-500 mt-1 pl-1">
                          {errors.model.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <select
                        {...register("year")}
                        className={`${inputCls} appearance-none cursor-pointer`}
                        aria-invalid={!!errors.year}
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 15 }, (_, i) => 2024 - i).map((y) => (
                          <option key={y} value={String(y)}>{y}</option>
                        ))}
                      </select>
                      {errors.year && (
                        <p role="alert" className="text-[11px] text-red-500 mt-1 pl-1">
                          {errors.year.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#F97316] hover:bg-[#EA6400] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[15px] rounded-[18px] transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.28)] hover:shadow-[0_8px_28px_rgba(249,115,22,0.4)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F97316]"
                  >
                    {isSubmitting ? "Sending…" : "Submit →"}
                  </button>

                  <p className="text-[12px] text-gray-400 text-center leading-snug">
                    No spam. No hidden charges. We only call to help.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}