"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function OverPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#FCFAF8] text-[#6F745C] min-h-screen overflow-x-hidden">

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

            <a href="/behandelingen" className="hover:text-[#C1978D] transition">
              Behandelingen
            </a>

            <a href="/tarieven" className="hover:text-[#C1978D] transition">
              Tarieven
            </a>

            <a href="/over" className="text-[#C1978D]">
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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
              alt="Petra Pedicure aan huis"
              className="rounded-[2.5rem] shadow-2xl object-cover h-[720px] w-full"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#C1978D] mb-4">
              Over Petra
            </p>

            <h1 className="text-5xl lg:text-7xl leading-tight font-light mb-8">
              Professionele voetverzorging met persoonlijke aandacht
            </h1>

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

              <p
                className="mt-4 text-[#C1978D] text-3xl font-light"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Petra Pedicure
              </p>

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

    </main>
  );
}