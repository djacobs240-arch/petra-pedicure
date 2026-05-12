"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import BookingModal from "../components/BookingModal";

export default function BehandelingenPage() {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#F7F4F1] text-[#6F745C] min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#F7F4F1]/95 backdrop-blur-md border-b border-[#E8E2DC] px-4 lg:px-20 py-3 lg:py-5">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

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

            <a href="/behandelingen" className="text-[#C1978D]">
              Behandelingen
            </a>

            <a href="/tarieven" className="hover:text-[#C1978D] transition">
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
      <section
        id="behandelingen"
        className="pt-[160px] pb-24 px-6 lg:px-20 bg-[#FCFAF8]"
      >

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
            Behandelingen
          </p>

          <h1 className="text-5xl lg:text-7xl font-light mb-16">
            Verzorging met aandacht
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: "🌿",
                title: "Basis Pedicure",
                text: "Nagels knippen, verzorgen van de huid en verwijderen van eelt.",
              },
              {
                icon: "🤍",
                title: "Medische Pedicure",
                text: "Professionele behandeling voor gevoelige of probleemvoeten.",
              },
              {
                icon: "✨",
                title: "Wellness Behandeling",
                text: "Extra ontspanning inclusief massage en verzorgende crème.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 border border-[#EEE8E1] shadow-md hover:shadow-2xl transition"
              >

                <div className="text-4xl mb-6">{item.icon}</div>

                <h3 className="text-3xl mb-4">
                  {item.title}
                </h3>

                <p className="leading-8 text-[#7F7F72]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BEHANDELING UITLEG */}
      <section className="pb-24 px-6 lg:px-20 bg-[#F7F4F1]">

        <div className="max-w-5xl mx-auto">

          {/* TITEL */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
              Professionele voetverzorging
            </p>

            <h2 className="text-5xl font-light mb-8">
              Verzorging in jouw vertrouwde omgeving
            </h2>

            <p className="text-lg leading-9 text-[#7F7F72] max-w-3xl mx-auto">
              Gun jezelf een moment van ontspanning en professionele verzorging
              met een pedicurebehandeling aan huis.
            </p>

          </div>

          {/* CONTENT BOX */}
          <div className="bg-white border border-[#EEE8E1] rounded-[2.5rem] p-8 lg:p-14 shadow-sm">

            <div className="space-y-12">

              {/* INTRO */}
              <div className="text-[#7F7F72] leading-9 text-lg space-y-6">

                <p>
                  Gun jezelf een moment van ontspanning en professionele verzorging
                  in jouw vertrouwde omgeving.
                </p>

                <p>
                  Goede voetverzorging wordt in de drukte van het dagelijks leven
                  vaak vergeten, terwijl gezonde en verzorgde voeten juist essentieel zijn
                  voor comfort en welzijn.
                </p>

              </div>

              {/* HIGHLIGHTS */}
              <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-[#FCFAF8] rounded-[2rem] p-8 border border-[#EEE8E1]">

                  <div className="text-4xl mb-5">💧</div>

                  <h3 className="text-2xl text-[#6F745C] mb-4">
                    Moderne nattechniek
                  </h3>

                  <p className="text-[#7F7F72] leading-8">
                    Tijdens de behandeling werk ik met moderne nattechniek
                    waarbij een verkoelende spray zorgt voor minder stofvorming
                    en extra comfort.
                  </p>

                </div>

                <div className="bg-[#FCFAF8] rounded-[2rem] p-8 border border-[#EEE8E1]">

                  <div className="text-4xl mb-5">✨</div>

                  <h3 className="text-2xl text-[#6F745C] mb-4">
                    Verzorging & hygiëne
                  </h3>

                  <p className="text-[#7F7F72] leading-8">
                    Je voeten worden zorgvuldig gereinigd, gedesinfecteerd
                    en professioneel behandeld voor optimale verzorging.
                  </p>

                </div>

                <div className="bg-[#FCFAF8] rounded-[2rem] p-8 border border-[#EEE8E1]">

                  <div className="text-4xl mb-5">🤍</div>

                  <h3 className="text-2xl text-[#6F745C] mb-4">
                    Persoonlijke aandacht
                  </h3>

                  <p className="text-[#7F7F72] leading-8">
                    Iedere behandeling wordt rustig en persoonlijk uitgevoerd,
                    volledig afgestemd op jouw wensen en comfort.
                  </p>

                </div>

              </div>

              {/* PROBLEMEN */}
              <div className="bg-gradient-to-br from-[#FCFAF8] to-[#F7F4F1] rounded-[2.5rem] p-10 lg:p-14 border border-[#EEE8E1] shadow-sm">

                <div className="text-center mb-12">

                  <p className="uppercase tracking-[0.25em] text-sm text-[#C1978D] mb-4">
                    Specialistische voetverzorging
                  </p>

                  <h3 className="text-4xl font-light text-[#6F745C] leading-tight">
                    Deskundige behandeling van voetklachten
                  </h3>

                </div>

                <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">

                  {[
                    "Ingroeiende nagels",
                    "Kloven",
                    "Eelt",
                    "Kalknagels",
                    "Likdoorns",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-[#EEE8E1] px-6 py-5 flex items-center gap-4 shadow-sm hover:shadow-md transition duration-300"
                    >

                      <div className="min-w-[12px] min-h-[12px] rounded-full bg-[#D9B0A7] flex-shrink-0"></div>

                      <span className="text-lg text-[#7F7F72]">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

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