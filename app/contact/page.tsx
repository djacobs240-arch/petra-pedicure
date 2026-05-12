"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#FCFAF8] text-[#6F745C] min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#F7F4F1]/95 backdrop-blur-md border-b border-[#E8E2DC] px-4 lg:px-20 py-3 lg:py-5">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <a
            href="/"
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
            className="md:hidden text-[#6F745C]"
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
              Over Petra
            </a>

            <a href="/contact" className="text-[#C1978D]">
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
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
            z-[9999]
            px-8
            py-8
            "
          >

            {/* NAV LINKS */}
            <div className="flex flex-col">

              {[
                ["Home", "/"],
                ["Behandelingen", "/behandelingen"],
                ["Tarieven", "/tarieven"],
                ["Over", "/over"],
                ["Contact", "/contact"],
              ].map(([title, link], index) => (
                <a
                  key={index}
                  href={link as string}
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
    rounded-[2.5rem]
    p-8
    text-center
    backdrop-blur-md
    hover:bg-white/15
    hover:-translate-y-1
    transition
    duration-300
    "
  >

    <div className="w-20 h-20 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-3xl mb-7">
      <FaPhoneAlt />
    </div>

    <h3 className="text-3xl font-light mb-4">
      Bel direct
    </h3>

    <p className="text-white/80 leading-8 mb-8">
      Neem telefonisch contact op voor vragen of afspraken.
    </p>

    <div
      className="
      inline-flex
      items-center
      justify-center
      px-7
      py-3
      rounded-full
      border
      border-white/30
      bg-white/10
      text-white
      text-lg
      tracking-[0.04em]
      backdrop-blur-sm
      "
    >
      +31 6 12345678
    </div>

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
    rounded-[2.5rem]
    p-8
    text-center
    backdrop-blur-md
    hover:bg-white/15
    hover:-translate-y-1
    transition
    duration-300
    "
  >

    <div className="w-20 h-20 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-3xl mb-7">
      <FaWhatsapp />
    </div>

    <h3 className="text-3xl font-light mb-4">
      WhatsApp
    </h3>

    <p className="text-white/80 leading-8 mb-8">
      Stuur eenvoudig een bericht via WhatsApp.
    </p>

    <div
      className="
      inline-flex
      items-center
      justify-center
      px-7
      py-3
      rounded-full
      border
      border-white/30
      bg-white/10
      text-white
      text-lg
      tracking-[0.04em]
      backdrop-blur-sm
      "
    >
      Stuur bericht
    </div>

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
    rounded-[2.5rem]
    p-8
    text-center
    backdrop-blur-md
    hover:bg-white/15
    hover:-translate-y-1
    transition
    duration-300
    "
  >

    <div className="w-20 h-20 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-3xl mb-7">
      <FaEnvelope />
    </div>

    <h3 className="text-3xl font-light mb-4">
      E-mail
    </h3>

    <p className="text-white/80 leading-8 mb-8">
      Mail gerust voor informatie of beschikbaarheid.
    </p>

    <div
      className="
      inline-flex
      items-center
      justify-center
      px-7
      py-3
      rounded-full
      border
      border-white/30
      bg-white/10
      text-white
      text-lg
      tracking-[0.04em]
      backdrop-blur-sm
      "
    >
      info@petrapedicure.nl
    </div>

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