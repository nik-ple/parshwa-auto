import { CONFIG } from "@/lib/site";

export const wa = (msg = "Hi Parshwa Auto! I'd like to sell my bike.") =>
  `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(msg)}`;