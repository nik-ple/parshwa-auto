/**
 * Parshwa Auto — Homepage
 * ─────────────────────────────────────────────────────
 * Stack:    Next.js 15 · TypeScript · Tailwind CSS v4
 *           Framer Motion · React Hook Form · Zod · Lucide React
 *
 * Install:  npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react
 *
 * Font:     Add to app/layout.tsx →
 *           import { Geist } from "next/font/google"
 *           const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
 *           <body className={geist.variable}>
 * ─────────────────────────────────────────────────────
 */

"use client";


// ─────────────────────────────────────────────────────
// SECTION: Navbar
// ─────────────────────────────────────────────────────

import Navbar from "@/components/home/Navbar"


// ─────────────────────────────────────────────────────
// SECTION: Hero
// ─────────────────────────────────────────────────────

import { Hero } from "@/components/home/Hero";

// ─────────────────────────────────────────────────────
// SECTION: Trust Stats Strip
// ─────────────────────────────────────────────────────

import { TrustStrip } from "@/components/home/TrustStrip";

// ─────────────────────────────────────────────────────
// SECTION: Sell Process — 4 Steps
// ─────────────────────────────────────────────────────

import { SellProcess } from "@/components/home/SellProcess";

// ─────────────────────────────────────────────────────
// SECTION: Exchange Program
// ─────────────────────────────────────────────────────

import { ExchangeSection } from "@/components/home/ExcahngeSection";

// ─────────────────────────────────────────────────────
// SECTION: Why Choose — Dark
// ─────────────────────────────────────────────────────

import { WhyChoose } from "@/components/home/WhyChoose";

// ─────────────────────────────────────────────────────
// SECTION: Reviews — Firsty-style stacked cards
// ─────────────────────────────────────────────────────

import { ReviewsSection } from "@/components/home/ReviewsSection";

// ─────────────────────────────────────────────────────
// SECTION: Bike Evaluation / What We Buy
// ─────────────────────────────────────────────────────

import { BikeEvalSection } from "@/components/home/BikeEvaluation";

// ─────────────────────────────────────────────────────
// SECTION: Lead Form
// ─────────────────────────────────────────────────────

import { LeadForm } from "@/components/home/LeadForm";

// ─────────────────────────────────────────────────────
// SECTION: FAQ Accordion
// ─────────────────────────────────────────────────────

import { FAQSection } from "@/components/home/FAQ";

// ─────────────────────────────────────────────────────
// SECTION: Contact / Visit Us
// ─────────────────────────────────────────────────────

import { ContactSection } from "@/components/home/Contact";

// ─────────────────────────────────────────────────────
// SECTION: Footer CTA — Dark
// ─────────────────────────────────────────────────────

import { FooterCTA } from "@/components/home/FooterCTA";

// ─────────────────────────────────────────────────────
// SECTION: Footer
// ─────────────────────────────────────────────────────

import { Footer } from "@/components/home/Footer";

// ─────────────────────────────────────────────────────
// FLOATING: WhatsApp FAB
// ─────────────────────────────────────────────────────

import { WhatsAppFAB } from "@/components/home/WhatsAppFAB";

// ─────────────────────────────────────────────────────
// FLOATING: Mobile sticky bottom bar
// ─────────────────────────────────────────────────────

import { MobileStickyBar } from "@/components/home/MobileStickyBar";

// ─────────────────────────────────────────────────────
// JSON-LD Structured Data
// ─────────────────────────────────────────────────────

import { JsonLdSchema } from "@/components/seo/JsonLD";

// ─────────────────────────────────────────────────────
// PAGE — assembles all sections
// ─────────────────────────────────────────────────────

export default function ParshwaAutoHomePage() {
  return (
    <>
      <JsonLdSchema />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <SellProcess />
        <ExchangeSection />
        <WhyChoose />
        <ReviewsSection />
        <BikeEvalSection />
        <LeadForm />
        <FAQSection />
        <ContactSection />
        <FooterCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
      <MobileStickyBar />
    </>
  );
}
