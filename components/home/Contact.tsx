import { CONFIG } from "@/lib/site";
import { wa } from "@/utils/WhatsApp";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { EyebrowLabel } from "../primitives/EyebrowLabel";
import { Reveal } from "../shared/Reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-[120px] bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Map embed — 📸 REPLACE WITH REAL EMBED */}
          <Reveal>
            <div className="rounded-[28px] overflow-hidden border border-gray-100 aspect-video shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <iframe
                src={CONFIG.mapsEmbed}
                title="Parshwa Auto Showroom Location"
                width="100%"
                height="100%"
                className="border-0 block"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1}>
            <EyebrowLabel>Visit Us</EyebrowLabel>
            <h2
              id="contact-heading"
              className="text-[clamp(28px,3.8vw,42px)] font-bold leading-[1.15] tracking-[-0.025em] text-gray-900 mb-5"
            >
              Visit Our Showroom.
              <br />
              Let&apos;s Find Your Next Ride.
            </h2>
            <p className="text-[16px] text-gray-500 leading-[1.7] mb-8 max-w-[400px]">
              Whether you&apos;re selling, buying or exchanging — our team is
              ready to help you find the best deal.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: CONFIG.address,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 83905 58079",
                  href: `tel:${CONFIG.phone}`,
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: CONFIG.hours,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#FFF4ED] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[14.5px] font-medium text-gray-800 hover:text-[#F97316] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[14.5px] font-medium text-gray-800">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={CONFIG.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 border border-gray-200 rounded-[18px] text-[14px] font-semibold text-gray-700 hover:border-gray-300 hover:text-gray-900 transition-all duration-200"
              >
                <MapPin size={13} />
                Locate Us
              </a>
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[14px] font-semibold rounded-[18px] transition-all duration-200 shadow-[0_3px_12px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle size={13} />
                WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}