"use client";

import { useState } from "react";
import BookingModal from "@/app/components/BookingModal";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);

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
      <section className="pt-[160px] pb-24 px-6 lg:px-20">

        <div className="max-w-7xl mx-auto">

          {/* TITEL */}
          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
              Behandelingen & tarieven
            </p>

            <h1 className="text-5xl lg:text-7xl font-light mb-8">
              Professionele verzorging met aandacht
            </h1>

            <p className="text-lg leading-9 text-[#7F7F72] max-w-3xl mx-auto">
              Ontspannende en professionele voetverzorging aan huis,
              afgestemd op jouw wensen en comfort.
            </p>

          </div>
          </div>

{/* HOOFDBEHANDELINGEN */}
<div className="grid lg:grid-cols-2 gap-8">

  {/* BASIS */}
  <div className="
bg-white
rounded-[2.5rem]
border
border-[#EEE8E1]
shadow-md
hover:shadow-2xl
hover:-translate-y-1
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
p-10
flex
flex-col
justify-between
">

    <div>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">

        <div>
          <h3 className="text-4xl font-light text-[#6F745C] mb-3">
            Pedicure Basis
          </h3>

          <p className="text-[#7F7F72]">
            30 – 45 minuten
          </p>
        </div>

        <div className="text-right">
          <p className="text-4xl text-[#C1978D] font-light">
            €50
          </p>

          <p className="text-sm text-[#7F7F72]">
            per persoon
          </p>
        </div>

      </div>

      <div className="space-y-4 text-[#7F7F72] mb-10">

        <div>• Desinfecteren van de voeten</div>
        <div>• Knippen en verzorgen van de teennagels</div>
        <div>• Reinigen van de nagelomgeving</div>
        <div>• Verwijderen van eelt en likdoorns</div>
        <div>• Behandelen van kloven en drukplekken</div>
        <div>• Verzorgen en gladmaken van de huid</div>
        <div>• Verzorgende crème</div>

      </div>

    </div>

    <button
      onClick={() => setSelectedTreatment("Pedicure Basis")}
      className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md"
    >
      Maak afspraak
    </button>

  </div>

  {/* DELUXE */}
<div className="
relative
overflow-hidden
bg-white
rounded-[2.5rem]
border
border-[#EEE8E1]
shadow-md
hover:shadow-2xl
hover:-translate-y-1
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
p-10
flex
flex-col
justify-between
">
    <div>

      <div className="absolute top-0 right-0 bg-[#D9B0A7] text-white px-6 py-2 rounded-bl-[1.5rem] text-sm uppercase tracking-[0.15em]">
        Populair
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">

        <div>
          <h3 className="text-4xl font-light text-[#6F745C] mb-3">
            Pedicure Deluxe
          </h3>

          <p className="text-[#7F7F72]">
            50 – 65 minuten
          </p>
        </div>

        <div className="text-right">
          <p className="text-4xl text-[#C1978D] font-light">
            €70
          </p>

          <p className="text-sm text-[#7F7F72]">
            per persoon
          </p>
        </div>

      </div>

      <div className="space-y-4 text-[#7F7F72] mb-10">

        <div>• Complete pedicurebehandeling</div>
        <div>• Verwijderen van eelt, likdoorns en drukplekken</div>
        <div>• Verzorgen van kloven en ruwe huid</div>
        <div>• Scrubbehandeling</div>
        <div>• Ontspannende voet- en onderbeenmassage</div>
        <div>• Intensieve verzorging met voedende crème</div>

      </div>

    </div>

    <button
      onClick={() => setSelectedTreatment("Pedicure Deluxe")}
      className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md"
    >
      Maak afspraak
    </button>

  </div>

  {/* SPA */}
  <div className="
bg-white
rounded-[2.5rem]
border
border-[#EEE8E1]
shadow-md
hover:shadow-2xl
hover:-translate-y-1
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
p-10
flex
flex-col
justify-between
">

    <div>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">

        <div>
          <h3 className="text-4xl font-light text-[#6F745C] mb-3">
            Spa Behandeling
          </h3>

          <p className="text-[#7F7F72]">
            30 minuten
          </p>
        </div>

        <div className="text-right">
          <p className="text-4xl text-[#C1978D] font-light">
            €40
          </p>

          <p className="text-sm text-[#7F7F72]">
            per persoon
          </p>
        </div>

      </div>

      <div className="space-y-4 text-[#7F7F72] mb-10">

        <div>• Warm voetbad met Dead Sea Salt Soak</div>
        <div>• Sugar Scrub behandeling</div>
        <div>• Moisture Mask & hydraterende verzorging</div>
        <div>• Verzorging van voeten en onderbenen</div>
        <div>• Ontspannende massage</div>
        <div>• Natuurlijke ingrediënten zonder parabenen</div>

      </div>

    </div>

    <button
      onClick={() => setSelectedTreatment("Spa Behandeling")}
      className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md"
    >
      Maak afspraak
    </button>

  </div>

  {/* COMBINATIE */}
  <div className="
bg-white
rounded-[2.5rem]
border
border-[#EEE8E1]
shadow-md
hover:shadow-2xl
hover:-translate-y-1
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
p-10
flex
flex-col
justify-between
">

    <div>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">

        <div>
          <h3 className="text-4xl font-light text-[#6F745C] mb-3">
            Spa + Pedicure
          </h3>

          <p className="text-[#7F7F72]">
            60 minuten
          </p>
        </div>

        <div className="text-right">
          <p className="text-4xl text-[#C1978D] font-light">
            €80
          </p>

          <p className="text-sm text-[#7F7F72]">
            per persoon
          </p>
        </div>

      </div>

      <div className="space-y-4 text-[#7F7F72] mb-10">

        <div>• Complete spa behandeling</div>
        <div>• 30 minuten basis pedicure</div>
        <div>• Verzorging van nagels en huid</div>
        <div>• Verwijderen van eelt en drukplekken</div>
        <div>• Ontspannende massage</div>
        <div>• Stressverminderend & betere doorbloeding</div>

      </div>

    </div>

    <button
      onClick={() => setSelectedTreatment("Spa + Pedicure")}
      className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md"
    >
      Maak afspraak
    </button>

  </div>

</div>

{/* EXTRA BEHANDELINGEN */}
<div className="
mt-20
bg-white
border
border-[#EEE8E1]
rounded-[2.5rem]
p-8
lg:p-14
shadow-md
hover:shadow-2xl
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
">

  <div className="text-center mb-14">

    <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
      Extra behandelingen
    </p>

    <h2 className="text-4xl lg:text-5xl font-light">
      Aanvullende opties
    </h2>

  </div>

  <div className="space-y-6">

    {[
      ["Meerprijs per 15 minuten", "€20"],
      ["Likdoorn verwijderen", "€25"],
      ["Ingroeiende nagel behandelen", "€25"],
      ["Kloof verwijderen", "€25"],
      ["Eelt verwijderen", "€25"],
      ["Onderbeen & voetmassage", "€20"],
    ].map(([title, price], index) => (

      <div
        key={index}
        className="flex items-center justify-between border-b border-[#EEE8E1] pb-5"
      >

        <span className="text-lg text-[#7F7F72]">
          {title}
        </span>

        <span className="text-2xl text-[#C1978D] font-light">
          {price}
        </span>

      </div>

    ))}

  </div>

</div>

{/* INFO BLOKKEN */}
<div className="grid lg:grid-cols-3 gap-8 mt-20">

  {/* STAFFELKORTING */}
  <div className="
bg-white
rounded-[2.5rem]
border
border-[#EEE8E1]
p-10
shadow-md
hover:shadow-2xl
hover:-translate-y-1
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
">

    <h3 className="text-3xl font-light mb-8 text-[#6F745C]">
      Staffelkorting
    </h3>

    <div className="space-y-5 text-[#7F7F72] leading-8">

      <p>• 1 klant — €50 p.p.</p>
      <p>• 2–3 klanten op 1 locatie — €45 p.p.</p>
      <p>• 4+ klanten op 1 locatie — €40 p.p.</p>

    </div>

  </div>

  {/* TERUGKOMACTIE */}
  <div className="
bg-white
rounded-[2.5rem]
border
border-[#EEE8E1]
p-10
shadow-md
hover:shadow-2xl
hover:-translate-y-1
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
">

    <h3 className="text-3xl font-light mb-8 text-[#6F745C]">
      Terugkomactie
    </h3>

    <p className="text-[#7F7F72] leading-8">
      Als dank voor het vertrouwen ontvangen vaste klanten
      20% korting op de 8e afspraak.
    </p>

  </div>

  {/* REISKOSTEN */}
  <div className="
bg-white
rounded-[2.5rem]
border
border-[#EEE8E1]
p-10
shadow-md
hover:shadow-2xl
hover:-translate-y-1
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
">

    <h3 className="text-3xl font-light mb-8 text-[#6F745C]">
      Kilometervergoeding
    </h3>

    <div className="space-y-5 text-[#7F7F72] leading-8">

      <p>• Binnen 20 km inbegrepen</p>
      <p>• Daarna €0,50 per kilometer</p>
      <p>• Buiten Almere bespreekbaar</p>
      <p>• Mogelijk bij meerdere personen op locatie</p>

    </div>

  </div>

</div>

{/* VOORWAARDEN */}
<div className="
mt-20
bg-white
border
border-[#EEE8E1]
rounded-[3rem]
p-10
lg:p-16
shadow-md
hover:shadow-2xl
hover:border-[#D9B0A7]
hover:bg-[#FFFCFA]
transition-all
duration-300
">

  <div className="max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
      Belangrijke informatie
    </p>

    <h2 className="text-4xl lg:text-5xl font-light mb-8 text-[#6F745C]">
      Voorwaarden & Annulering
    </h2>

    <p className="text-lg leading-9 text-[#7F7F72] max-w-2xl mx-auto">
      Bekijk hier onze algemene voorwaarden en het annuleringsbeleid.
      Bij het maken van een afspraak ga je akkoord met deze voorwaarden.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

      <a
        href="/voorwaarden"
        className="
        px-8
        py-4
        rounded-full
        bg-[#D9B0A7]
        hover:bg-[#c89b91]
        transition
        text-white
        text-lg
        shadow-sm
        "
      >
        Algemene voorwaarden
      </a>

      <a
        href="/annuleringsbeleid"
        className="
        px-8
        py-4
        rounded-full
        border
        border-[#B8B89E]
        text-[#6F745C]
        hover:bg-[#F7F4F1]
        transition
        text-lg
        "
      >
        Annuleringsbeleid
      </a>

    </div>

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

<BookingModal
  selectedTreatment={selectedTreatment}
  closeModal={() => setSelectedTreatment(null)}
/>
    </main>
  );
}