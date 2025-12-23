import React from "react";
import heroImg from "../../assets/sundarii-hero.png";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Sundarii Lane hero"
        className="w-full h-[420px] md:h-[560px] lg:h-[720px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-transparent">
        <div className="h-full max-w-6xl mx-auto px-4 md:px-8 flex items-center">
          <div className="max-w-xl text-white space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase">
              Sundarii 
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Soft, Stunning &amp; So Sundarii
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-white/80">
              Tiny details, huge compliments. Scrunchies, bows, and jewels
              made for your soft-girl era.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link  to="#" className="px-5 py-2.5 rounded-full text-sm md:text-base font-medium bg-white text-black hover:bg-white/90 transition">
                Shop the collection
              </Link>
              <button className="px-5 py-2.5 rounded-full text-sm md:text-base border border-white/60 text-white hover:bg-white/10 transition">
                Explore new arrivals
              </button>
            </div>

            <p className="text-[11px] md:text-xs text-white/60">
              Free shipping on orders over ₹999 • Made with love in India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
