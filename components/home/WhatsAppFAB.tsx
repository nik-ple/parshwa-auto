import { EASE_OUT_EXPO } from "@/lib/motion";
import { wa } from "@/utils/WhatsApp";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-5 z-50 hidden sm:flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[14px] font-semibold rounded-full shadow-[0_8px_28px_rgba(37,211,102,0.45)] transition-all duration-200"
          initial={{ opacity: 0, y: 24, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.38, ease: EASE_OUT_EXPO }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <MessageCircle size={16} className="fill-white" />
          Chat on WhatsApp
        </motion.a>
      )}
    </AnimatePresence>
  );
}