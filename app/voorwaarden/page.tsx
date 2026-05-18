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
  {[
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
  ))}
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
      <section className="px-6 lg:px-20 py-20 pt-[160px]">

        <div className="max-w-4xl mx-auto">

          {/* TITEL */}
          <div className="mb-16 text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
              Petra Pedicure
            </p>

            <h1 className="text-5xl lg:text-6xl font-light mb-6">
              Algemene voorwaarden
            </h1>

            <p className="text-lg leading-8 text-[#7F7F72]">
              Transparante afspraken en duidelijke voorwaarden voor iedere behandeling.
            </p>

          </div>

          {/* CONTENT */}
          <div className="bg-white border border-[#EEE8E1] rounded-[2rem] p-8 lg:p-12 shadow-sm space-y-12">

            <div>
              <h2 className="text-3xl font-light mb-4">1. Algemeen</h2>

              <p className="text-[#7F7F72] leading-8">
                Deze voorwaarden zijn van toepassing op alle behandelingen en afspraken
                bij Petra Pedicure aan huis in Almere.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">2. Afspraken</h2>

              <p className="text-[#7F7F72] leading-8">
                Afspraken kunnen telefonisch of via WhatsApp worden gemaakt.
                Bij verhindering verzoek ik je om de afspraak minimaal
                24 uur van tevoren te annuleren.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">3. Annulering</h2>

              <p className="text-[#7F7F72] leading-8">
                Bij annulering binnen 24 uur voor de afspraak behoud ik mij
                het recht voor om kosten in rekening te brengen.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">4. Betaling</h2>

              <p className="text-[#7F7F72] leading-8">
                Betaling dient direct na de behandeling te worden voldaan,
                contant, contactloos of via betaalverzoek.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">
                5. Hygiëne en veiligheid
              </h2>

              <p className="text-[#7F7F72] leading-8">
                Ik werk volgens de geldende hygiënerichtlijnen.
                Van de klant verwacht ik dat de voeten schoon zijn
                bij aanvang van de behandeling.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">
                6. Aansprakelijkheid
              </h2>

              <p className="text-[#7F7F72] leading-8">
                Petra Pedicure is niet aansprakelijk voor schade,
                van welke aard ook, ontstaan doordat is uitgegaan
                van door de klant verstrekte onjuiste of onvolledige informatie.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">
                7. Medische informatie
              </h2>

              <p className="text-[#7F7F72] leading-8">
                De klant is zelf verantwoordelijk voor het melden van
                relevante medische aandoeningen zoals diabetes,
                huidproblemen of allergieën voorafgaand aan de behandeling.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">8. Overmacht</h2>

              <p className="text-[#7F7F72] leading-8">
                In geval van overmacht, zoals ziekte of onvoorziene omstandigheden,
                behoud ik mij het recht voor om afspraken te verzetten.
              </p>
            </div>

            {/* SLOT */}
            <div className="pt-6 border-t border-[#EEE8E1]">

              <p className="text-[#7F7F72] leading-8 text-lg">
                Door het maken van een afspraak ga je akkoord met deze voorwaarden.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}