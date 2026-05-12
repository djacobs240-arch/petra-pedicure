"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
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
            href="#top"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.jpg"
              alt="Petra Pedicure Logo"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border border-[#E8E2DC] shadow-sm"
            />

            <span
              className="text-[22px] lg:text-3xl text-[#C1978D] font-light"
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

            <a href="#top" className="hover:text-[#C1978D] transition">
              Home
            </a>

            <a href="#behandelingen" className="hover:text-[#C1978D] transition">
              Behandelingen
            </a>

            <a href="#tarieven" className="hover:text-[#C1978D] transition">
              Tarieven
            </a>

            <a href="#over" className="hover:text-[#C1978D] transition">
              Over
            </a>

            <a href="#contact" className="hover:text-[#C1978D] transition">
              Contact
            </a>

          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/20 z-[9998]"
          />

          <div className="md:hidden fixed top-[78px] left-4 right-4 bg-[#FCFAF8] border border-[#E8E2DC] rounded-[2rem] shadow-2xl z-[9999] p-6">

            <div className="flex flex-col">

              <a
                href="#behandelingen"
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-[#ECE6DF] uppercase tracking-[0.12em] text-[15px]"
              >
                Behandelingen
              </a>

              <a
                href="#tarieven"
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-[#ECE6DF] uppercase tracking-[0.12em] text-[15px]"
              >
                Tarieven
              </a>

              <a
                href="#over"
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-[#ECE6DF] uppercase tracking-[0.12em] text-[15px]"
              >
                Over
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-[#ECE6DF] uppercase tracking-[0.12em] text-[15px]"
              >
                Contact
              </a>

            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4">

              <a
                href="tel:+31612345678"
                className="bg-[#D9B0A7] text-white text-center py-4 rounded-full text-lg"
              >
                Bel direct
              </a>

              <a
                href="https://wa.me/31612345678"
                target="_blank"
                className="border border-[#B8B89E] text-[#7F7F72] text-center py-4 rounded-full text-lg"
              >
                WhatsApp
              </a>

            </div>

          </div>
        </>
      )}

      {/* HERO */}
      <section className="relative pt-[130px] pb-20 px-6 lg:px-20 bg-gradient-to-br from-[#F7F4F1] via-[#FCFAF8] to-[#EEF0E7]">

        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#E7C7BF] opacity-15 blur-[60px] rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#DDE3D0] opacity-20 blur-[60px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#B78E84] mb-5">
              Pedicure aan huis
            </p>

            <h1 className="text-[2.3rem] sm:text-6xl lg:text-8xl leading-tight font-light text-[#6F745C]">
              Rust, verzorging & aandacht
            </h1>

            <p className="mt-8 text-lg leading-9 text-[#7E7E73] max-w-xl">
              Professionele pedicure aan huis in Almere en omstreken.
              Rust, persoonlijke aandacht en verzorging — gewoon bij jou thuis.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl">

              <a
                href="#contact"
                className="flex-1 flex items-center justify-center text-center bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white px-4 py-4 rounded-full text-lg min-h-[68px] shadow-lg"
              >
                Maak een afspraak
              </a>

              <a
                href="#behandelingen"
                className="flex-1 flex items-center justify-center text-center border border-[#AEB49A] px-4 py-4 rounded-full text-lg hover:bg-[#EEF0E7] transition min-h-[68px]"
              >
                Bekijk behandelingen
              </a>

            </div>

          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">

            <div className="bg-white/70 p-8 rounded-[2.5rem] shadow-2xl border border-[#E8E2DC]">

              <img
                src="/logo.jpg"
                alt="Petra Pedicure"
                className="w-full max-w-[260px] lg:max-w-[450px] object-cover rounded-[2rem]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* BEHANDELINGEN */}
      <section
        id="behandelingen"
        className="py-24 px-6 lg:px-20 bg-[#FCFAF8]"
      >

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
            Behandelingen
          </p>

          <h2 className="text-5xl font-light mb-16">
            Verzorging met aandacht
          </h2>

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

                <h3 className="text-3xl mb-4">{item.title}</h3>

                <p className="leading-8 text-[#7F7F72]">{item.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BEHANDELING UITLEG */}
      <section className="py-24 px-6 lg:px-20 bg-[#F7F4F1]">

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

              {/* TEKST */}
              <div className="text-[#7F7F72] leading-9 text-lg space-y-6">

                <p>
                  Nagels worden vakkundig geknipt en gefreesd zodat ze
                  weer netjes en verzorgd ogen.
                </p>

                <p>
                  Eelt wordt veilig verwijderd waardoor de voeten weer zacht,
                  licht en comfortabel aanvoelen.
                  Ook de nagelomgeving krijgt extra aandacht om problemen
                  te voorkomen en de gezondheid van de voeten te ondersteunen.
                </p>

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

        <div className="w-3 h-3 rounded-full bg-[#D9B0A7]"></div>

        <span className="text-lg text-[#7F7F72]">
          {item}
        </span>

      </div>

    ))}

  </div>

  <p className="text-center text-[#7F7F72] leading-8 mt-12 max-w-2xl mx-auto">
    Iedere behandeling wordt zorgvuldig en professioneel uitgevoerd
    met aandacht voor comfort, hygiëne en het verminderen van
    pijn- en drukklachten.
  </p>

</div>
              {/* EXTRA */}
              <div className="text-[#7F7F72] leading-9 text-lg space-y-6">

                <p>
                  Je kunt kiezen uit een basisbehandeling of een luxebehandeling,
                  speciaal voor voeten die extra aandacht verdienen.
                </p>

                <p>
                  Daarnaast kun je de behandeling uitbreiden met een heerlijk
                  geurend spa voetenbad of een ontspannende voeten-
                  en onderbeenmassage.
                </p>

                <p>
                  De behandeling wordt afgesloten met een voedende crème
                  die de huid hydrateert en ontspant.
                </p>

              </div>

            </div>

            {/* SLOT */}
            <div className="mt-16 pt-10 border-t border-[#EEE8E1] text-center">

              <p className="text-3xl text-[#C1978D] font-light mb-6 leading-relaxed">
                Je loopt weer weg op lichte,
                verzorgde en gezonde voeten
              </p>

              <p className="text-[#7F7F72] text-lg mb-6">
                Ik kijk ernaar uit om je te mogen verwelkomen.
              </p>

            </div>

          </div>

        </div>

      </section>

{/* TARIEVEN */}
<section
  id="tarieven"
  className="py-24 px-6 lg:px-20 bg-[#FCFAF8]"
>

  <div className="max-w-7xl mx-auto">

    {/* TITEL */}
    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
        Behandelingen & tarieven
      </p>

      <h2 className="text-5xl font-light mb-8">
        Professionele verzorging met aandacht
      </h2>

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

          <p className="text-[#7F7F72] leading-8 mb-8">
            Een complete basisbehandeling voor gezonde,
            verzorgde en comfortabele voeten.
          </p>

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
          className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md"
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

          <p className="text-[#7F7F72] leading-8 mb-8">
            Luxe en uitgebreide voetverzorging inclusief ontspannende massage.
          </p>

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
          className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md"
        >
          Maak afspraak
        </button>

      </div>

      {/* SPA */}
      <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] shadow-sm p-10 flex flex-col justify-between">

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

          <p className="text-[#7F7F72] leading-8 mb-8">
            Ontspannende wellness behandeling voor voeten en onderbenen
            met natuurlijke spa verzorging.
          </p>

          <div className="space-y-4 text-[#7F7F72] mb-10">

            <div>• Warm voetenbad met Dead Sea Salt</div>
            <div>• Sugar Scrub exfoliatie</div>
            <div>• Moisture Mask hydratatie</div>
            <div>• Ontspannende massage</div>
            <div>• Botanische & natuurlijke ingrediënten</div>

          </div>

        </div>

        <button
          onClick={() => setSelectedTreatment("Spa Behandeling")}
          className="w-full bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white py-4 rounded-full text-lg shadow-md"
        >
          Maak afspraak
        </button>

      </div>

      {/* SPA + PEDICURE */}
      <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] shadow-sm p-10 flex flex-col justify-between">

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

          <p className="text-[#7F7F72] leading-8 mb-8">
            Complete wellness behandeling inclusief pedicure,
            spa verzorging en ontspannende massage.
          </p>

          <div className="space-y-4 text-[#7F7F72] mb-10">

            <div>• Basis pedicure behandeling</div>
            <div>• Warm spa voetenbad</div>
            <div>• Sugar scrub & hydratatie</div>
            <div>• Massage voeten & onderbenen</div>
            <div>• Vermindert stress & spierspanning</div>

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
  
  {/* DEELBEHANDELINGEN */}
<div className="mt-14 bg-white rounded-[2.5rem] border border-[#EEE8E1] p-10 lg:p-14 shadow-sm">

<div className="text-center mb-10">

  <p className="uppercase tracking-[0.25em] text-sm text-[#C1978D] mb-4">
    Aanvullende behandelingen
  </p>

  <h3 className="text-4xl font-light text-[#6F745C]">
    Specifieke deelbehandelingen
  </h3>

</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

  {[
    ["Likdoorn verwijderen", "€25"],
    ["Ingroeiende nagel behandelen", "€25"],
    ["Kloof behandelen", "€25"],
    ["Eelt verwijderen", "€25"],
    ["Onderbeen & voetmassage", "€20"],
    ["Meerprijs per 15 minuten", "€20"],
  ].map(([title, price], index) => (

    <div
      key={index}
      className="bg-[#FCFAF8] rounded-2xl border border-[#EEE8E1] px-6 py-5 flex items-center justify-between shadow-sm hover:shadow-md transition duration-300"
    >

      <div className="flex items-center gap-4">

        <div className="w-3 h-3 rounded-full bg-[#D9B0A7]"></div>

        <span className="text-lg text-[#7F7F72]">
          {title}
        </span>

      </div>

      <span className="text-[#C1978D] text-xl font-light">
        {price}
      </span>

    </div>

  ))}

</div>

</div>

{/* EXTRA INFO BLOKKEN */}
<div className="grid lg:grid-cols-3 gap-8 mt-12">

  {/* STAFFELKORTING */}
  <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] p-10 shadow-sm hover:shadow-xl transition duration-300">

  <div className="mb-6 text-center">

<h3 className="text-3xl font-light text-[#6F745C]">
        Staffelkorting
      </h3>

    </div>

    <div className="space-y-5">

      {[
        "1 klant: €50 p.p.",
        "2–3 klanten: €45 p.p.",
        "4+ klanten: €40 p.p.",
      ].map((item, index) => (

        <div
          key={index}
          className="bg-[#FCFAF8] rounded-2xl border border-[#EEE8E1] px-5 py-4 flex items-center gap-4 shadow-sm hover:shadow-md transition duration-300"
        >

          <div className="w-3 h-3 rounded-full bg-[#D9B0A7]"></div>

          <span className="text-[#7F7F72] text-lg">
            {item}
          </span>

        </div>

      ))}

    </div>

  </div>

  {/* TERUGKOMACTIE */}
  <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] p-10 shadow-sm hover:shadow-xl transition duration-300">

  <div className="mb-6 text-center">

<h3 className="text-3xl font-light text-[#6F745C]">
        Terugkomactie
      </h3>

    </div>

    <div className="bg-[#FCFAF8] rounded-2xl border border-[#EEE8E1] px-6 py-5 shadow-sm hover:shadow-md transition duration-300">

      <p className="text-[#7F7F72] leading-8 text-lg">
        Als dank voor het vertrouwen ontvangen vaste klanten
        20% korting op de 8e afspraak.
      </p>

    </div>

  </div>

  {/* REISKOSTEN */}
  <div className="bg-white rounded-[2.5rem] border border-[#EEE8E1] p-10 shadow-sm hover:shadow-xl transition duration-300">

  <div className="mb-6 text-center">

<h3 className="text-3xl font-light text-[#6F745C]">
        Reiskosten
      </h3>

    </div>

    <div className="bg-[#FCFAF8] rounded-2xl border border-[#EEE8E1] px-6 py-5 shadow-sm hover:shadow-md transition duration-300">

      <p className="text-[#7F7F72] leading-8 text-lg">
        Binnen 20 km zijn reiskosten inbegrepen.
        Daarna geldt €0,50 per kilometer.
        Behandelingen buiten Almere zijn bespreekbaar.
      </p>

    </div>

  </div>

</div>

    {/* KLEINE INFO */}
    <div className="mt-16 pt-10 border-t border-[#E8E2DC] text-center max-w-4xl mx-auto">

      <p className="text-[#7F7F72] leading-8 text-lg">

        Bij het maken van een afspraak ga je akkoord met het{" "}

        <a
          href="/annuleringsbeleid"
          className="inline-block text-[#C1978D] hover:text-[#b57f73] transition underline underline-offset-4"
        >
          annuleringsbeleid
        </a>

        {" "}en de{" "}

        <a
          href="/voorwaarden"
          className="inline-block text-[#C1978D] hover:text-[#b57f73] transition underline underline-offset-4"
        >
          algemene voorwaarden
        </a>

        <br />

        <span className="text-[#9A9A90] text-base">
          van Petra Pedicure aan huis.
        </span>

      </p>

    </div>

  </div>

</section>

{/* OVER */}
<section
  id="over"
  className="py-24 px-6 lg:px-20 bg-[#FCFAF8]"
>

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

    {/* IMAGE */}
    <div className="relative">

      <div>

        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
          alt="Petra Pedicure aan huis"
          className="rounded-[2.5rem] shadow-2xl object-cover h-[720px] w-full"
        />

      </div>

    </div>

    {/* CONTENT */}
    <div>

      <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
        Over Petra
      </p>

      <h2 className="text-5xl leading-tight font-light mb-8">
        Professionele voetverzorging met persoonlijke aandacht
      </h2>

      <div className="space-y-6 text-lg leading-9 text-[#7F7F72]">

        <p>
          Welkom bij Petra Pedicure aan huis Almere.
        </p>

        <p>
          Mijn naam is Petra en met veel liefde, aandacht en oog voor detail
          bied ik professionele voetverzorging en ontspanningsbehandelingen
          aan huis in Almere en omgeving.
        </p>

        <p>
          Sinds 2019 ben ik gediplomeerd pedicure en help ik klanten
          in hun eigen vertrouwde omgeving. Ideaal wanneer je minder mobiel bent
          of simpelweg wilt genieten van comfort en gemak aan huis.
        </p>

        <p>
          Daarnaast ben ik sinds 2017 werkzaam binnen de wellnessbranche,
          waar ik veel ervaring heb opgedaan in ontspanning,
          massage en persoonlijke verzorging.
        </p>

      </div>

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 gap-6 mt-12">

        <div className="bg-white rounded-[2rem] p-6 border border-[#EEE8E1] shadow-sm">

          <h3 className="text-3xl text-[#C1978D] mb-3">
            Sinds 2019
          </h3>

          <p className="text-[#7F7F72] leading-7">
            Gediplomeerd pedicure met ervaring in professionele voetverzorging.
          </p>

        </div>

        <div className="bg-white rounded-[2rem] p-6 border border-[#EEE8E1] shadow-sm">

          <h3 className="text-3xl text-[#C1978D] mb-3">
            Wellness
          </h3>

          <p className="text-[#7F7F72] leading-7">
            Ervaring in ontspanningsmassages en wellnessbehandelingen.
          </p>

        </div>

      </div>

      {/* EXTRA */}
      <div className="mt-12 space-y-6 text-lg leading-9 text-[#7F7F72]">

        <p>
          In 2021 heb ik mijn opleiding Zweedse ontspanningsmassage
          met anatomie succesvol afgerond bij Mood Massage.
          Daarnaast heb ik diverse aanvullende trainingen gevolgd,
          waaronder Hotstone massage, Ayurvedische massage,
          Lomi Lomi massage, zwangerschapsmassage en stoelmassage.
        </p>

        <p>
          Dankzij mijn ervaring binnen de wellnessbranche combineer ik
          deskundigheid met een warme en ontspannen benadering.
          Comfort, hygiëne en kwaliteit staan hierbij altijd centraal.
        </p>

      </div>

      {/* SLOT */}
      <div className="mt-14 pt-8 border-t border-[#EEE8E1]">

        <p className="text-2xl text-[#C1978D] font-light leading-relaxed mb-5">
          Gun jezelf de zorg en aandacht die je verdient —
          gewoon bij jou thuis.
        </p>

        <p className="text-[#7F7F72] text-lg">
          Graag tot ziens!
        </p>

        <p className="mt-4 text-[#C1978D] text-2xl font-light">
          Petra Pedicure
        </p>

      </div>

    </div>

  </div>

</section>

{/* CONTACT */}
<section
  id="contact"
  className="px-6 lg:px-20 pb-24 bg-[#FCFAF8]"
>

  <div className="max-w-5xl mx-auto bg-[#AEB49A] rounded-[3rem] p-12 lg:p-16 text-center text-white shadow-2xl">

    <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-4">
      Contact
    </p>

    <h2 className="text-5xl font-light mb-6">
      Gun jouw voeten de aandacht die ze verdienen
    </h2>

    <p className="text-lg leading-9 max-w-2xl mx-auto text-white/90 mb-10">
      Neem eenvoudig contact op voor een afspraak aan huis in Almere en omstreken.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="tel:+31612345678"
        className="bg-white text-[#6F745C] px-8 py-4 rounded-full text-lg hover:scale-105 hover:bg-[#F7F4F1] transition duration-300 shadow-lg"
      >
        Bel direct
      </a>

      <a
        href="https://wa.me/31612345678"
        target="_blank"
        className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white/10 hover:scale-105 transition duration-300"
      >
        WhatsApp
      </a>

    </div>

  </div>

</section>

{/* BOEKINGS MODAL */}
{selectedTreatment && (
  <div className="fixed inset-0 z-[99999] flex items-center justify-center px-6">

    <div
      onClick={() => setSelectedTreatment(null)}
      className="absolute inset-0 bg-black/40"
    />

    <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-[#EEE8E1]">

      <button
        onClick={() => setSelectedTreatment(null)}
        className="absolute top-6 right-6 text-3xl text-[#7F7F72]"
      >
        ✕
      </button>

      <p className="uppercase tracking-[0.25em] text-sm text-[#C1978D] mb-4">
        Afspraak aanvragen
      </p>

      <h2 className="text-4xl font-light text-[#6F745C] mb-6">
        {selectedTreatment}
      </h2>

      <p className="text-[#7F7F72] leading-8 text-lg mb-10">
        Kies hoe je jouw afspraak wilt aanvragen.
      </p>

      <div className="flex flex-col gap-5">

        <a
          href={`https://wa.me/31612345678?text=${encodeURIComponent(
`Hallo Petra,

Ik wil graag een afspraak maken voor:

• ${selectedTreatment}

Mijn gegevens:
Naam:
Adres:
Telefoonnummer:

Voorkeursdatum:
Voorkeurstijd:

Met vriendelijke groet,`
          )}`}
          target="_blank"
          className="bg-[#D9B0A7] hover:bg-[#c89b91] transition text-white text-center py-5 rounded-full text-lg"
        >
          Afspraak via WhatsApp
        </a>

        <a
          href={`mailto:info@petrapedicure.nl?subject=${encodeURIComponent(
            `Afspraak aanvraag ${selectedTreatment}`
          )}&body=${encodeURIComponent(
`Hallo Petra,

Ik wil graag een afspraak maken voor:

• ${selectedTreatment}

Mijn gegevens:
Naam:
Adres:
Telefoonnummer:

Voorkeursdatum:
Voorkeurstijd:

Met vriendelijke groet,`
          )}`}
          className="border border-[#AEB49A] text-[#6F745C] text-center py-5 rounded-full text-lg hover:bg-[#EEF0E7] transition"
        >
          Afspraak via e-mail
        </a>

      </div>

    </div>

  </div>
)}

{/* FOOTER */}
<footer className="border-t border-[#E5DDD5] bg-[#FCFAF8] py-14 px-6 lg:px-20">

  <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

    <h3 className="text-4xl text-[#C1978D] font-light">
      Petra Pedicure
    </h3>

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