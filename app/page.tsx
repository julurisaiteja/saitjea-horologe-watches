"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <section className="swiss-hero mx-auto max-w-6xl border-x" style={{ borderColor: "var(--border)" }}>
        <div className="relative">
          <HeroFilm video={brand.heroVideo} image={brand.heroImage} />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-10">
          <h1 className="font-display text-5xl md:text-7xl">{brand.name}</h1>
          <p className="swiss-label mt-4">Luxury minimal swiss</p>
          <p className="mt-6 max-w-sm text-base leading-relaxed" style={{ color: "var(--muted)" }}>{brand.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/shop" className="swiss-cta">Enter vitrine</Link>
            <Link href="/atelier" className="swiss-cta ghost">Book atelier</Link>
          </div>
          <div className="swiss-rule mt-14 pt-6 grid grid-cols-2 gap-6">
            {brand.stats.slice(0, 2).map((s: { label: string; value: string }) => (
              <div key={s.label}>
                <p className="swiss-label">{s.label}</p>
                <p className="mt-2 font-display text-3xl">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dossier" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="swiss-label">Dossier</p>
        <h2 className="mt-3 font-display text-4xl">Quiet precision. No spectacle.</h2>
        <div className="swiss-grid mt-10">
          {["Case 39mm", "Sapphire", "Exhibition back", "Hand-wound feel", "Day / Soirée", "Private appoint.", "Strap atelier", "Service ledger", "Collection", "Warranty", "Boutique", "Catalog"].map((t, i) => (
            <div key={t} className="swiss-cell" style={{ gridColumn: "span " + (i % 5 === 0 ? 4 : 3) }}>
              <p className="swiss-label">0{i + 1}</p>
              <p className="mt-3 font-display text-2xl">{t}</p>
            </div>
          ))}
        </div>
        <div className="mt-14"><NicheTool /></div>
        <div className="mt-14 swiss-rule pt-10">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl">Current pieces</h2>
            <Link href="/shop" className="swiss-label" style={{ color: "var(--accent2)" }}>Full catalog · {products.length}</Link>
          </div>
          <div className="mt-8 grid gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <div key={p.id} className="bg-[var(--bg)] p-4"><ProductCard product={p} /></div>
            ))}
          </div>
        </div>
      </section>
      <OfferSpot />
      <StatRow />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
