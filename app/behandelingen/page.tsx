"use client";

import { useState } from "react";
import BookingModal from "@/app/components/BookingModal";

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
<section className="pt-10 pb-28 px-6 lg:px-20 bg-[#F7F4F1]">

  <div className="max-w-6xl mx-auto">

    {/* TITEL */}
    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-5">
        Professionele voetverzorging
      </p>

      <h2 className="text-5xl lg:text-6xl font-light mb-10 leading-tight">
        Verzorging in jouw vertrouwde omgeving
      </h2>

      <p className="text-xl leading-10 text-[#7F7F72] max-w-4xl mx-auto">
        Gun jezelf een moment van ontspanning en verzorging
        met een professionele pedicurebehandeling aan huis.
      </p>

    </div>

    {/* CONTENT */}
    <div className="
      bg-white
      rounded-[3rem]
      border
      border-[#EEE8E1]
      shadow-md
      hover:shadow-2xl
      transition-all
      duration-300
      p-10
      lg:p-16
    ">

      <div className="max-w-4xl mx-auto">

        <div className="space-y-10 text-lg leading-10 text-[#7F7F72]">

          <p>
            In de drukte van het dagelijkse leven wordt goede voetverzorging
            vaak vergeten, terwijl gezonde en verzorgde voeten juist zo belangrijk zijn.
          </p>

          <p>
            Ik maak gebruik van nattechniek met machine waarbij een verkoelende
            spray of nevel van water en vloeistof wordt toegepast. Hierdoor blijven
            huid en nagels gekoeld en ontstaat er minder stof tijdens de behandeling.
          </p>

          <p>
            Tijdens de behandeling worden je voeten eerst zorgvuldig gereinigd
            en gedesinfecteerd voor een frisse en hygiënische start.
            Vervolgens worden de nagels vakkundig geknipt en gefreesd,
            zodat ze weer netjes en verzorgd uitzien.
          </p>

          <p>
            Eelt wordt op een veilige en effectieve manier verwijderd,
            waardoor je voeten weer zacht en comfortabel aanvoelen.
            Ook de nagelomgeving krijgt de nodige aandacht en verzorging
            om problemen te voorkomen en de gezondheid van je voeten te ondersteunen.
          </p>

          {/* PROBLEMEN */}
          <div className="
            bg-[#FCFAF8]
            rounded-[2rem]
            border
            border-[#EEE8E1]
            p-8
          ">

            <h3 className="text-3xl font-light text-[#6F745C] mb-8">
              Indien nodig worden deskundig behandeld:
            </h3>

            <div className="grid sm:grid-cols-2 gap-5 text-[#7F7F72]">

              <div>• Ingroeiende nagels</div>
              <div>• Kloven</div>
              <div>• Eelt</div>
              <div>• Kalknagels</div>
              <div>• Likdoorns</div>

            </div>

          </div>

          <p>
            Je kunt kiezen uit een basisbehandeling of een luxebehandeling,
            speciaal voor voeten die extra aandacht nodig hebben of wanneer
            je jezelf wilt verwennen met een moment van pure ontspanning.
          </p>

          <p>
            Daarnaast kun je de behandeling uitbreiden met een heerlijk
            geurende spa voetenbad behandeling met de verzorgende,
            parabenenvrije BCL-lijn of kiezen voor een ontspannende
            voeten- en onderbeenmassage.
          </p>

          <p>
            De behandeling wordt afgesloten met een voedende crème
            die de huid hydrateert en je voeten heerlijk laat ontspannen.
          </p>

          {/* SLOT */}
          <div className="
            text-center
            pt-10
            border-t
            border-[#EEE8E1]
          ">

            <p className="text-2xl lg:text-3xl font-light text-[#6F745C] leading-relaxed">
              Je loopt weer weg op lichte,
              verzorgde en gezonde voeten.
            </p>

            <p className="mt-10 text-[#7F7F72]">
              Ik kijk ernaar uit om je te mogen verwelkomen.
            </p>

            <p className="mt-4 text-2xl text-[#C1978D] font-light">
              Liefs,<br />
              Petra
            </p>

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