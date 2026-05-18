"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
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

      {/* HERO */}
      <section className="pt-[160px] pb-24 px-6 lg:px-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
            Contact
          </p>

          <h1 className="text-5xl lg:text-7xl font-light mb-8">
            Neem contact op
          </h1>

          <p className="text-lg leading-9 text-[#7F7F72] max-w-3xl mx-auto">
            Heb je vragen of wil je direct een afspraak maken?
            Neem gerust contact op via telefoon, WhatsApp of e-mail.
          </p>

        </div>

      </section>

      {/* CONTACT BOX */}
      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-5xl mx-auto bg-[#AEB49A] rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-4">
              Petra Pedicure
            </p>

            <h2 className="text-4xl lg:text-6xl font-light mb-6">
              Gun jouw voeten de aandacht die ze verdienen
            </h2>

            <p className="text-lg leading-9 max-w-2xl mx-auto text-white/90">
              Professionele pedicure aan huis in Almere en omgeving.
            </p>

          </div>

          {/* CONTACT OPTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">

            {/* PHONE */}
            <a
              href="tel:+31612345678"
              className="
              w-full
              max-w-[360px]
              bg-white/10
              border
              border-white/20
              rounded-[2rem]
              p-8
              text-center
              hover:bg-white/15
              transition
              duration-300
              "
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center text-2xl mb-6">
                <FaPhoneAlt />
              </div>

              <h3 className="text-2xl font-light mb-3">
                Bel direct
              </h3>

              <p className="text-white/80 leading-7 mb-6">
                Neem telefonisch contact op voor vragen of afspraken.
              </p>

              <span
  className="
  inline-block
  bg-[#6F745C]
  hover:bg-[#5f6450]
  transition-all
  duration-300
  text-white
  px-7
  py-3
  rounded-full
  text-lg
  shadow-md
  hover:shadow-xl
  "
>
                Bel direct
              </span>

            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/31612345678"
              target="_blank"
              className="
              w-full
              max-w-[360px]
              bg-white/10
              border
              border-white/20
              rounded-[2rem]
              p-8
              text-center
              hover:bg-white/15
              transition
              duration-300
              "
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center text-2xl mb-6">
                <FaWhatsapp />
              </div>

              <h3 className="text-2xl font-light mb-3">
                WhatsApp
              </h3>

              <p className="text-white/80 leading-7 mb-6">
                Stuur eenvoudig een bericht via WhatsApp.
              </p>

              <span
  className="
  inline-block
  bg-[#6F745C]
  hover:bg-[#5f6450]
  transition-all
  duration-300
  text-white
  px-7
  py-3
  rounded-full
  text-lg
  shadow-md
  hover:shadow-xl
  "
              >
                WhatsApp
              </span>

            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@petrapedicure.nl"
              className="
              w-full
              max-w-[360px]
              bg-white/10
              border
              border-white/20
              rounded-[2rem]
              p-8
              text-center
              hover:bg-white/15
              transition
              duration-300
              "
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center text-2xl mb-6">
                <FaEnvelope />
              </div>

              <h3 className="text-2xl font-light mb-3">
                E-mail
              </h3>

              <p className="text-white/80 leading-7 mb-6">
                Mail gerust voor informatie of beschikbaarheid.
              </p>

              <span
  className="
  inline-block
  bg-[#6F745C]
  hover:bg-[#5f6450]
  transition-all
  duration-300
  text-white
  px-7
  py-3
  rounded-full
  text-lg
  shadow-md
  hover:shadow-xl
  "
              >
                Mail ons
              </span>

            </a>

          </div>

        </div>

      </section>

{/* FOOTER */}
<footer className="border-t border-[#E5DDD5] bg-[#FCFAF8] py-14 px-6 lg:px-20">

  <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

<span
  className="text-[24px] lg:text-4xl text-[#C1978D] font-light tracking-[0.03em]"
  style={{ fontFamily: "var(--font-heading)" }}
>
  Petra Pedicure
</span>

    <p className="mt-3 text-[#7F7F72] max-w-md leading-7">
      Professionele pedicure aan huis in Almere en omstreken
    </p>

    {/* SOCIALS */}
    <div className="mt-8 flex items-center justify-center gap-8 text-3xl text-[#AEB49A]">

      <a
        href="#"
        className="hover:text-[#C1978D] hover:scale-110 transition duration-300"
      >
        <FaFacebookF />
      </a>

      <a
        href="#"
        className="hover:text-[#C1978D] hover:scale-110 transition duration-300"
      >
        <FaInstagram />
      </a>

      <a
        href="#"
        className="hover:text-[#C1978D] hover:scale-110 transition duration-300"
      >
        <FaLinkedinIn />
      </a>

    </div>

    {/* LINKS */}
    <div className="mt-6 flex justify-center">

      <div className="flex items-center gap-4 text-sm text-[#8A8A80]">

        <a
          href="/annuleringsbeleid"
          className="hover:text-[#C1978D] transition"
        >
          Annuleringsbeleid
        </a>

        <span className="text-[#CFC7BF]">•</span>

        <a
          href="/voorwaarden"
          className="hover:text-[#C1978D] transition"
        >
          Algemene voorwaarden
        </a>

      </div>

    </div>

  </div>

  {/* SEO TEKST */}
  <div className="mt-12 pt-8 border-t border-[#E5DDD5] text-center max-w-3xl mx-auto">

    <p className="text-sm leading-7 text-[#8A8A80]">
      Petra Pedicure biedt professionele pedicure aan huis in Almere en omgeving.
      Gespecialiseerd in voetverzorging, eelt verwijderen, likdoorns behandelen,
      kalknagels verzorgen, spa voetbehandelingen en ontspannende voetmassages.
    </p>

  </div>

  {/* COPYRIGHT */}
  <div className="mt-10 pt-6 border-t border-[#E5DDD5] text-center text-sm text-[#9A9A90]">

    © 2026 Petra Pedicure • Alle rechten voorbehouden

  </div>

</footer>

    </main>
  );
}