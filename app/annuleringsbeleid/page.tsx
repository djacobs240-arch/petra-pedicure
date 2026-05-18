"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      id="top"
      className="bg-[#F7F4F1] text-[#6F745C] overflow-x-hidden"
    >

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#F7F4F1] border-b border-[#E8E2DC] px-4 lg:px-20 py-3 lg:py-5">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
<a
  href="/"
  onClick={() => setMenuOpen(false)}
  className="flex items-center gap-3"
>
  <img
    src="/logo.jpg"
    alt="Petra Pedicure Logo"
    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border border-[#E8E2DC] shadow-sm"
  />

  <span
    className="text-[24px] lg:text-4xl text-[#C1978D] font-light tracking-[0.03em]"
    style={{ fontFamily: "var(--font-heading)" }}
  >
    Petra Pedicure
  </span>
</a>

          {/* MOBILE BUTTON */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-[#6F745C] relative z-[10001]"
  aria-label="Menu openen"
  type="button"
>
  <span className="text-4xl leading-none">
    {menuOpen ? "✕" : "☰"}
  </span>
</button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.15em] text-[#7F7F72]">

<a href="/" className="hover:text-[#C1978D] transition">
  Home
</a>

            <a href="/behandelingen" className="hover:text-[#C1978D] transition">
              Behandelingen
            </a>

            <a href="/tarieven" className="hover:text-[#C1978D] transition">
              Tarieven
            </a>

            <a href="/over" className="hover:text-[#C1978D] transition">
              Over
            </a>

            <a href="/contact" className="hover:text-[#C1978D] transition">
              Contact
            </a>

          </div>

        </div>
      </nav>

{/* MOBILE MENU */}
{menuOpen && (
  <>
    {/* OVERLAY */}
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9990]"
    />

    {/* MENU */}
    <div
      className="
      md:hidden
      fixed
      top-[95px]
      left-1/2
      -translate-x-1/2
      w-[92%]
      bg-[#FCFAF8]/95
      backdrop-blur-xl
      border border-[#ECE6DF]
      rounded-[2.7rem]
      shadow-[0_25px_70px_rgba(0,0,0,0.08)]
      z-[10000]
      px-8
      py-8
      "
    >

{/* NAV LINKS */}
<div className="flex flex-col">
  {([
    ["Behandelingen", "/behandelingen"],
    ["Tarieven", "/tarieven"],
    ["Over", "/over"],
    ["Contact", "/contact"],
  ].map(([title, link], index) => (
    <a
      key={index}
      href={link}
      onClick={() => setMenuOpen(false)}
      className="
      py-7
      border-b
      border-[#EEE8E1]
      uppercase
      tracking-[0.22em]
      text-[15px]
      text-[#7F7F72]
      "
    >
      {title}
    </a>
  ))) as React.ReactNode}
</div>

{/* CONTACT INFO */}
<div className="mt-10 flex flex-col items-center gap-5 text-[#AEB49A]">

  <div className="flex items-center gap-4 text-[18px]">
    <FaPhoneAlt size={20} color="#C1978D" />
    <span>06 12 34 56 78</span>
  </div>

  <div className="flex items-center gap-4 text-[18px]">
    <FaEnvelope size={20} color="#C1978D" />
    <span>info@petrapedicure.nl</span>
  </div>

</div>

      {/* SUBTITLE */}
      <p
        className="
        mt-12
        text-center
        uppercase
        tracking-[0.28em]
        text-[15px]
        text-[#C1978D]
        "
      >
        Maak hier een afspraak
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col gap-5">

        <a
          href="tel:+31612345678"
          className="
          bg-[#D9B0A7]
          hover:bg-[#c89b91]
          transition
          text-white
          text-center
          py-5
          rounded-full
          text-xl
          shadow-sm
          "
        >
          Bel direct
        </a>

        <a
          href="https://wa.me/31612345678"
          target="_blank"
          className="
          border
          border-[#B8B89E]
          text-[#7F7F72]
          text-center
          py-5
          rounded-full
          text-xl
          hover:bg-[#F7F4F1]
          transition
          "
        >
          WhatsApp
        </a>

      </div>

    </div>
  </>
)}

      {/* CONTENT */}
      <section className="px-6 lg:px-20 py-24 pt-[160px]">

        <div className="max-w-4xl mx-auto">

          {/* TITEL */}
          <div className="text-center mb-14">

            <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
              Petra Pedicure
            </p>

            <h1 className="text-5xl lg:text-6xl font-light text-[#6F745C]">
              Annuleringsbeleid
            </h1>

          </div>

          {/* CONTENT */}
          <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] p-8 lg:p-14 shadow-sm space-y-12">

            <p className="leading-9 text-[#7F7F72] text-lg">
              Ik streef ernaar om mijn diensten zo goed mogelijk te plannen
              en beschikbaar te houden voor alle klanten.
              Daarom hanteer ik het volgende annuleringsbeleid.
            </p>

            {/* ITEM */}
            <div>
              <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
                1. Annuleren van afspraken
              </h2>

              <p className="leading-9 text-[#7F7F72]">
                Afspraken kunnen kosteloos worden geannuleerd of verplaatst
                tot 24 uur vóór de geplande afspraak.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
                2. Te late annulering
              </h2>

              <p className="leading-9 text-[#7F7F72]">
                Bij annuleringen binnen 24 uur vóór de afspraak behoud ik mij
                het recht voor om 100% van de kosten in rekening te brengen.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
                3. No-show (niet verschijnen)
              </h2>

              <p className="leading-9 text-[#7F7F72]">
                Indien u zonder bericht niet verschijnt op de afspraak,
                wordt 100% van de kosten in rekening gebracht.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
                4. Te laat komen
              </h2>

              <p className="leading-9 text-[#7F7F72]">
                Wanneer u te laat arriveert, kan de behandeltijd worden
                ingekort zonder prijsvermindering.
                In sommige gevallen kan de afspraak worden geannuleerd
                en als no-show worden beschouwd.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
                5. Overmacht
              </h2>

              <p className="leading-9 text-[#7F7F72]">
                In geval van overmacht zoals ziekte of onvoorziene omstandigheden
                kijken wij samen naar een passende oplossing.
                Neem hiervoor zo snel mogelijk contact met ons op.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-2xl lg:text-3xl mb-4 text-[#6F745C]">
                6. Annuleren door mij
              </h2>

              <p className="leading-9 text-[#7F7F72]">
                Ik behoud mij het recht voor om afspraken te verplaatsen
                of te annuleren in geval van onvoorziene omstandigheden.
                Uiteraard wordt er in overleg een nieuwe afspraak ingepland.
              </p>
            </div>

            {/* CONTACT */}
            <div className="pt-8 border-t border-[#EEE8E1]">

              <h2 className="text-2xl lg:text-3xl mb-6 text-[#6F745C]">
                7. Contact voor annuleringen
              </h2>

              <div className="space-y-4 text-[#7F7F72] text-lg">

                <p>
                  WhatsApp: 06 12 34 56 78
                </p>

                <p>
                  Telefoon: 06 12 34 56 78
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}