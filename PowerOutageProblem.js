import React from "react";
import { AlertTriangle, Zap, Heart, Users, Shield, TrendingDown } from "lucide-react";

export default function PowerOutageProblem() {
  return (
    <div className="bg-[#FAFAF9]">
      {/* Hero */}
      <section className="bg-[#FF006E] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12 rotate-1">
            <div className="-rotate-1">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-16 h-16" strokeWidth={3} />
                <h1 className="text-4xl md:text-6xl font-bold">THE PROBLEM</h1>
              </div>
              <p className="text-xl md:text-2xl font-medium">
                Power outages are a matter of life and death for medically vulnerable Austinites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Crisis */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">WINTER STORM URI: A WAKE-UP CALL</h2>
            <div className="bg-black neo-border neo-shadow p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-5xl font-bold text-[#FF006E] mb-2">700+</div>
                  <p className="text-lg">Deaths in Texas</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#00F0FF] mb-2">4.5M</div>
                  <p className="text-lg">Homes without power</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#FFED4E] mb-2">4 DAYS</div>
                  <p className="text-lg">Average outage duration</p>
                </div>
              </div>
              <p className="text-xl leading-relaxed">
                In February 2021, Winter Storm Uri exposed the deadly vulnerability of our power grid. 
                Many who died were medically dependent on electricity—people on ventilators, oxygen concentrators, 
                dialysis machines, and those in hospice care.
              </p>
            </div>
          </div>

          {/* Who's At Risk */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">WHO IS AT RISK?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#FFED4E] neo-border neo-shadow-sm p-6 hover:-rotate-1 transition-transform">
                <Heart className="w-10 h-10 mb-4" strokeWidth={3} />
                <h3 className="text-xl font-bold mb-3">HOSPICE PATIENTS</h3>
                <p className="leading-relaxed">
                  People receiving end-of-life care at home often depend on oxygen concentrators, 
                  pain medication refrigeration, and climate control.
                </p>
              </div>

              <div className="bg-[#00F0FF] neo-border neo-shadow-sm p-6 hover:rotate-1 transition-transform">
                <Users className="w-10 h-10 mb-4" strokeWidth={3} />
                <h3 className="text-xl font-bold mb-3">VENTILATOR USERS</h3>
                <p className="leading-relaxed">
                  Individuals with ALS, muscular dystrophy, and respiratory conditions require 
                  continuous power for life-sustaining breathing equipment.
                </p>
              </div>

              <div className="bg-[#FF006E] neo-border neo-shadow-sm p-6 hover:-rotate-1 transition-transform text-white">
                <Shield className="w-10 h-10 mb-4" strokeWidth={3} />
                <h3 className="text-xl font-bold mb-3">DIALYSIS PATIENTS</h3>
                <p className="leading-relaxed">
                  Home dialysis equipment requires reliable electricity, and missed treatments 
                  can quickly become life-threatening.
                </p>
              </div>

              <div className="bg-white neo-border neo-shadow-sm p-6 hover:rotate-1 transition-transform">
                <TrendingDown className="w-10 h-10 mb-4" strokeWidth={3} />
                <h3 className="text-xl font-bold mb-3">MEDICATION-DEPENDENT</h3>
                <p className="leading-relaxed">
                  Insulin, chemotherapy drugs, and many other medications require refrigeration. 
                  Loss of power means loss of life-saving medication.
                </p>
              </div>
            </div>
          </div>

          {/* The Gap */}
          <div className="bg-white neo-border neo-shadow p-8 md:p-12 -rotate-1">
            <div className="rotate-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF006E]">THE DEADLY GAP</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Despite knowing the risks, <strong>most medically vulnerable households have no backup power plan.</strong>
                </p>
                <p>
                  Backup generators cost $3,000-$15,000—out of reach for many families already burdened 
                  by medical expenses. Battery systems are more affordable but require knowledge and planning.
                </p>
                <p>
                  Utility companies don't prioritize medical needs during rolling blackouts. 
                  Even those registered on "critical care" lists often lose power.
                </p>
                <p className="font-bold text-xl text-[#FF006E]">
                  This is a solvable problem. No one should die because the lights went out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Keeps Happening */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">WHY THIS KEEPS HAPPENING</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FFED4E] neo-border p-6 text-black">
              <Zap className="w-10 h-10 mb-4" strokeWidth={3} />
              <h3 className="text-xl font-bold mb-3">AGING INFRASTRUCTURE</h3>
              <p>Texas's power grid is outdated and isolated from national grids, making it vulnerable.</p>
            </div>
            <div className="bg-[#00F0FF] neo-border p-6 text-black">
              <AlertTriangle className="w-10 h-10 mb-4" strokeWidth={3} />
              <h3 className="text-xl font-bold mb-3">EXTREME WEATHER</h3>
              <p>Climate change is increasing the frequency and severity of both heat waves and winter storms.</p>
            </div>
            <div className="bg-[#FF006E] neo-border p-6 text-white">
              <Users className="w-10 h-10 mb-4" strokeWidth={3} />
              <h3 className="text-xl font-bold mb-3">NO SAFETY NET</h3>
              <p>There's no systematic support for medically vulnerable residents during outages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-[#00F0FF]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12 rotate-1">
            <div className="-rotate-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">OUR SOLUTIONS</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold">01</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">BACKUP POWER ACCESS</h3>
                    <p>Advocate for subsidized generator and battery programs for medically vulnerable households.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold">02</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">CONTINGENCY PLANNING</h3>
                    <p>Teach families how to prepare emergency plans, including shelter locations and medication backup.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold">03</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">POLICY CHANGE</h3>
                    <p>Push for legislation requiring utilities to protect medically dependent customers during outages.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold">04</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">COMMUNITY EDUCATION</h3>
                    <p>Host workshops and create resources so every family knows what to do when the power goes out.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
