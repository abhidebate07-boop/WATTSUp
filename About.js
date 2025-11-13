import React from "react";
import { Heart, Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#FAFAF9]">
      {/* Hero */}
      <section className="bg-[#FFED4E] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-black neo-border neo-shadow p-8 md:p-12 -rotate-1">
            <div className="rotate-1">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ABOUT WATTS UP AUSTIN
              </h1>
              <p className="text-xl md:text-2xl text-[#FFED4E] font-medium">
                A grassroots nonprofit fighting for power equity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#FF006E] neo-border neo-shadow p-8 rotate-1">
                <div className="-rotate-1">
                  <Heart className="w-16 h-16 text-white mb-4" strokeWidth={3} />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">OUR MISSION</h2>
                  <p className="text-white text-lg leading-relaxed">
                    To ensure that every Austinite who depends on electricity for medical life support has access to backup power solutions and emergency preparedness resources.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white neo-border neo-shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4">WHO WE SERVE</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">→</span>
                    <span>People in hospice care at home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">→</span>
                    <span>Individuals on ventilators and oxygen concentrators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">→</span>
                    <span>Patients with temperature-sensitive medications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">→</span>
                    <span>Anyone with medical equipment requiring continuous power</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            OUR FOUNDERS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Abhiram - Founder */}
            <div className="bg-white neo-border neo-shadow-sm p-8 hover:-rotate-1 transition-transform">
              <div className="mb-6 neo-border overflow-hidden">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6915278fa1b3b4d20e0c5860/6be960fe5_image.png"
                  alt="Abhiram Bhupatiraju"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="bg-[#FFED4E] neo-border p-4 mb-4">
                <h3 className="text-2xl font-bold">ABHIRAM BHUPATIRAJU</h3>
                <p className="font-bold text-sm">FOUNDER</p>
              </div>
              <p className="text-lg leading-relaxed">
                I founded Watts Up Austin along with my friend Pranshu after seeing firsthand the effects of a power outage when seeing someone super close to me pass away after the device that she was medically reliant on got cut off. I now aspire to become an electrical engineer and aspire to come up with innovative solutions to make grids more resilient.
              </p>
            </div>

            {/* Pranshu - Co-Founder */}
            <div className="bg-white neo-border neo-shadow-sm p-8 hover:rotate-1 transition-transform">
              <div className="mb-6 neo-border overflow-hidden">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6915278fa1b3b4d20e0c5860/e607355d5_image.png"
                  alt="Pranshu Brahmbhatt"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="bg-[#00F0FF] neo-border p-4 mb-4">
                <h3 className="text-2xl font-bold">PRANSHU BRAHMBHATT</h3>
                <p className="font-bold text-sm">CO-FOUNDER</p>
              </div>
              <p className="text-lg leading-relaxed">
                Pranshu is pursuing mechanical engineering with a focus on designing resilient power systems and emergency infrastructure. He's passionate about developing mechanical solutions for backup power systems that can withstand extreme weather conditions and save lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            WHAT WE DO
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FFED4E] neo-border neo-shadow-sm p-6 hover:-rotate-2 transition-transform">
              <div className="bg-black w-12 h-12 neo-border flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-[#FFED4E]" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3">EDUCATION</h3>
              <p className="leading-relaxed">
                Host free workshops teaching families how to create power outage contingency plans and prepare for emergencies.
              </p>
            </div>

            <div className="bg-[#00F0FF] neo-border neo-shadow-sm p-6 hover:rotate-2 transition-transform">
              <div className="bg-black w-12 h-12 neo-border flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#00F0FF]" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3">ADVOCACY</h3>
              <p className="leading-relaxed">
                Work with city officials, utility companies, and healthcare providers to prioritize medically vulnerable residents.
              </p>
            </div>

            <div className="bg-[#FF006E] neo-border neo-shadow-sm p-6 hover:-rotate-2 transition-transform">
              <div className="bg-black w-12 h-12 neo-border flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#FF006E]" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">RESOURCES</h3>
              <p className="leading-relaxed text-white">
                Connect families with backup generator programs, battery systems, and emergency funding resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">OUR STORY</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Watts Up Austin was founded in response to the devastating Winter Storm Uri in 2021, when hundreds of Texans lost their lives during widespread power outages. Many of these deaths were preventable.
              </p>
              <p>
                We recognized that people dependent on medical equipment were especially vulnerable during these crises. Hospice patients, individuals on ventilators, and those requiring temperature-controlled medications faced life-threatening situations with no backup plan.
              </p>
              <p className="font-bold text-[#FF006E]">
                We believe that access to reliable power is a matter of life and death—and everyone deserves a contingency plan.
              </p>
              <p>
                Through grassroots organizing, community workshops, and tireless advocacy, we're working to ensure that no one else loses their life simply because the power went out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#00F0FF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12 -rotate-1">
            <div className="rotate-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">OUR VALUES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FFED4E] neo-border p-6">
                  <h3 className="text-xl font-bold mb-2">EQUITY</h3>
                  <p>Everyone deserves access to life-saving resources, regardless of income.</p>
                </div>
                <div className="bg-[#FFED4E] neo-border p-6">
                  <h3 className="text-xl font-bold mb-2">URGENCY</h3>
                  <p>Lives are at stake. We act with speed and determination.</p>
                </div>
                <div className="bg-[#FFED4E] neo-border p-6">
                  <h3 className="text-xl font-bold mb-2">COMMUNITY</h3>
                  <p>We believe in grassroots power and collective action.</p>
                </div>
                <div className="bg-[#FFED4E] neo-border p-6">
                  <h3 className="text-xl font-bold mb-2">PREVENTION</h3>
                  <p>Preparedness saves lives. We empower families before crisis strikes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
