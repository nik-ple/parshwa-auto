import { Check, FileText, Zap } from "lucide-react";

export const SELL_STEPS = [
  {
    n: "01",
    title: "Share Your Bike Details",
    body: "Tell us your bike's brand, model, year and condition. Takes under 60 seconds.",
  },
  {
    n: "02",
    title: "Receive a Fair Valuation",
    body: "We assess against live market data and give you the highest fair price.",
  },
  {
    n: "03",
    title: "Inspection at Your Convenience",
    body: "Visit our PCMC showroom, or we come to your place — your choice entirely.",
  },
  {
    n: "04",
    title: "Get Paid Instantly",
    body: "Accept the deal and receive instant bank transfer. RC transfer — on us.",
  },
] as const;

export const EXCHANGE_STEPS = [
  { n: "1", title: "Current Bike",      body: "Share your bike details and get started." },
  { n: "2", title: "Fair Valuation",    body: "We evaluate and give you the best price." },
  { n: "3", title: "Choose Your Upgrade", body: "Pick your new ride from our wide range." },
  { n: "4", title: "Ride Home",         body: "We handle all paperwork. You just ride." },
] as const;

export const REVIEWS = [
  {
    stars: 5,
    text: "Rx135 got me good value. The process was smooth and the team was incredibly professional throughout.",
    name: "Shubham Patil",
    bike: "Yamaha RX135",
  },
  {
    stars: 5,
    text: "I sold my Royal Enfield Continental GT 650 to Parshwa Auto and had a very smooth experience. Pushkar was professional, offered a fair price, and completed the payment and paperwork quickly. Highly recommended for anyone looking to sell their bike hassle-free 👍",
    name: "Azim Kazi",
    bike: "Royal Enfield Continental GT 650",
  },
  {
    stars: 5,
    text: "I recently sold my motorcycle to Parshwa Auto, and the entire experience was smooth, transparent, and hassle-free. The dealer was professional, offered a fair price, and handled all the paperwork quickly. It’s rare to find someone in the used vehicle market who’s this straightforward and honest. Highly recommend them if you’re looking to sell or buy a used motorcycle!",
    name: "Kunal Bagga",
    bike: "Seller",
  },
  {
    stars: 5,
    text: "Had a great experience purchasing my Yamaha Aerox from Parshwa Auto. The entire process was smooth, transparent, and hassle-free. The staff was professional, courteous, and answered all my queries patiently. The vehicle was delivered in excellent condition, and all the documentation was handled properly.",
    name: "Tushar Bhalerao",
    bike: "Yamaha Aerox",
  },
  {
    stars: 5,
    text: "Smooth, fast, and fair. Got more than I expected. The team is genuinely trustworthy.",
    name: "Rahul Kumbhar",
    bike: "KTM Duke 200",
  },
] as const;

export const ACCEPTED_BRANDS = [
  "YAMAHA", "KTM", "Royal Enfield", "HONDA",
  "BAJAJ", "TVS", "SUZUKI", "HERO",
] as const;

export const FAQ_ITEMS = [
  {
    q: "How long does the valuation take?",
    a: "Most motorcycles are evaluated within 15–20 minutes of inspection. We do a thorough check so you get the best price without delay.",
  },
  {
    q: "Do I need to visit the showroom?",
    a: "Not necessarily. We can arrange a pickup or home visit at your convenience. Visiting the showroom typically gives the fastest turnaround.",
  },
  {
    q: "How is payment made?",
    a: "Instant bank transfer or UPI the moment the deal is finalised. No cheques, no waiting, no follow-ups required.",
  },
  {
    q: "What documents do I need to bring?",
    a: "RC Book, insurance papers, and a valid government ID. We take care of all transfer documentation from there.",
  },
  {
    q: "Do you accept bikes with active loans?",
    a: "Yes. We evaluate bikes with running loans and will guide you through the best path to closing it as part of the deal.",
  },
] as const;

export const WHY_FEATURES = [
  { icon: Check,    label: "Instant Payment",          sub: "Same-day bank transfer" },
  { icon: FileText, label: "Full RC Transfer Support",  sub: "100% handled by our team" },
  { icon: Zap,      label: "15 Min Deal Time",          sub: "Fastest in PCMC" },
] as const;