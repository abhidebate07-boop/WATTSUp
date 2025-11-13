import React from "react";
import { Users, ExternalLink, Heart, Building2 } from "lucide-react";

export default function PartnerOrganizations() {
  const partners = [
    {
      name: "Austin Energy",
      type: "Utility Company",
      description: "Collaborating on critical care customer programs and outage response initiatives to protect medically vulnerable residents.",
      color: "#00F0FF"
    },
    {
      name: "City of Austin",
      type: "Municipal Government",
      description: "Partnering with city officials to develop emergency preparedness policies and programs for medical equipment users.",
      color: "#FFED4E"
    },
    {
      name: "Representative John Carter",
      type: "Texas House District 31",
      description: "Working with our district representative to advocate for legislative protections and funding for backup power systems.",
      color: "#FF006E"
    }
  ];

  return (
    <div className="bg-[#FAFAF9]">
      {/* Hero */}
      <section className="bg-[#00F0FF] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-black neo-border neo-shadow p-8 md:p-12 -rotate-1">
            <div className="rotate-1">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-16 h-16 text-white" strokeWidth={3} />
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  PARTNER ORGANIZATIONS
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-[#00F0FF] font-medium">
                Working together to protect medically vulnerable Austinites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">STRONGER TOGETHER</h2>
            <p className="text-lg leading-relaxed mb-4">
              Watts Up Austin collaborates with utility companies, government officials, and community organizations across Central Texas.
            </p>
            <p className="text-lg leading-relaxed">
              Together, we're building a safety net for people who depend on electricity for medical life support.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
            OUR PARTNERS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const rotation = index % 2 === 0 ? '-rotate-1' : 'rotate-1';
              return (
                <div 
                  key={index}
                  className={`neo-border neo-shadow-sm p-8 hover:rotate-0 transition-transform ${rotation}`}
                  style={{ backgroundColor: partner.color }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Building2 className="w-8 h-8 flex-shrink-0" strokeWidth={3} />
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{partner.name}</h3>
                      <p className="text-sm font-bold opacity-75">{partner.type}</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Collaborate */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">HOW WE COLLABORATE</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#FFED4E] neo-border neo-shadow-sm p-6">
              <div className="bg-black w-12 h-12 neo-border flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#FFED4E]" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3">SHARED RESOURCES</h3>
              <p>We connect families with partner services, equipment programs, and emergency support.</p>
            </div>

            <div className="bg-[#00F0FF] neo-border neo-shadow-sm p-6">
              <div className="bg-black w-12 h-12 neo-border flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#00F0FF]" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3">JOINT ADVOCACY</h3>
              <p>Together we push for policy changes and improved emergency response systems.</p>
            </div>

            <div className="bg-[#FF006E] neo-border neo-shadow-sm p-6 text-white">
              <div className="bg-white w-12 h-12 neo-border flex items-center justify-center mb-4">
                <ExternalLink className="w-6 h-6 text-black" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3">EDUCATION</h3>
              <p>We co-host workshops and create educational materials for vulnerable populations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 md:py-24 bg-[#FFED4E]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12 text-center rotate-1">
            <div className="-rotate-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">WANT TO PARTNER WITH US?</h2>
              <p className="text-xl mb-8 leading-relaxed">
                If your organization shares our mission to protect medically vulnerable residents 
                during power outages, we'd love to collaborate.
              </p>
              <a href="mailto:wattsupaustin@gmail.com">
                <button className="neo-button bg-black text-white px-10 py-5 font-bold text-xl hover:bg-gray-900">
                  GET IN TOUCH
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
