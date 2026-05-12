"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import BookingModal from "../components/BookingModal";

export default function TarievenPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
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

            <a href="/tarieven" className="text-[#C1978D]">
              Tarieven
            </a>

            <a href="/over" className="hover:text-[#C1978D] transition">
              Over Petra
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

          {/* HOOFDBEHANDELINGEN */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* BASIS */}
            <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] shadow-sm p-10 flex flex-col justify-between">

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
                  <div>• Verzorgende crème</div>

                </div>

              </div>

              <button
                onClick={() => setSelectedTreatment("Pedicure Basis")}
                className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md text-center block"
              >
                Maak afspraak
              </button>

            </div>

            {/* DELUXE */}
            <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] shadow-sm p-10 relative overflow-hidden flex flex-col justify-between">

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
                  <div>• Verwijderen van eelt & drukplekken</div>
                  <div>• Verzorgen van ruwe huid & kloven</div>
                  <div>• Scrubbehandeling</div>
                  <div>• Ontspannende voet- en onderbeenmassage</div>
                  <div>• Intensieve verzorging met voedende crème</div>

                </div>

              </div>

              <button
                onClick={() => setSelectedTreatment("Pedicure Deluxe")}
                className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md text-center block"
              >
                Maak afspraak
              </button>

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
