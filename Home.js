import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Zap, Heart, Users, BookOpen, ArrowRight, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#00F0FF] py-20 md:py-32 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF006E] rotate-12 neo-border"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#FFED4E] -rotate-12 neo-border hidden md:block"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12 -rotate-1">
            <div className="rotate-1">
              <div className="inline-block bg-[#FF006E] px-4 py-2 neo-border mb-6 -rotate-2">
                <p className="text-white font-bold text-sm">URGENT ADVOCACY</p>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none">
                POWER OUTAGES<br />
                COST LIVES.
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-8 max-w-2xl">
                We fight for backup power for medically vulnerable Austinites who depend on electricity to survive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("About")}>
                  <button className="neo-button bg-[#FFED4E] px-8 py-4 font-bold text-lg hover:bg-[#FFE500]">
                    LEARN MORE →
                  </button>
                </Link>
                <Link to={createPageUrl("Contact")}>
                  <button className="neo-button bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-900">
                    GET INVOLVED
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-24 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#FF006E] neo-border neo-shadow p-8 md:p-12 rotate-1 mb-12">
            <div className="-rotate-1">
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle className="w-12 h-12 text-white" strokeWidth={3} />
                <h2 className="text-3xl md:text-5xl font-bold text-white">THE CRISIS</h2>
              </div>
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                People in hospice care, on ventilators, with oxygen concentrators, and other life-sustaining medical equipment lose their lives when the power goes out. This is preventable.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white neo-border neo-shadow-sm p-6 hover:-rotate-1 transition-transform">
              <div className="bg-[#FFED4E] w-12 h-12 neo-border flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3">BACKUP GENERATORS</h3>
              <p className="text-gray-700 leading-relaxed">
                We advocate for access to backup generators and battery systems for vulnerable households.
              </p>
            </div>

            <div className="bg-white neo-border neo-shadow-sm p-6 hover:rotate-1 transition-transform">
              <div className="bg-[#00F0FF] w-12 h-12 neo-border flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3">WORKSHOPS</h3>
              <p className="text-gray-700 leading-relaxed">
                Free workshops help families create contingency plans for power outages and medical emergencies.
              </p>
            </div>

            <div className="bg-white neo-border neo-shadow-sm p-6 hover:-rotate-1 transition-transform">
              <div className="bg-[#FF006E] w-12 h-12 neo-border flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-bold mb-3">ADVOCACY</h3>
              <p className="text-gray-700 leading-relaxed">
                We work with policymakers and utility companies to prioritize medically vulnerable residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FFED4E] mb-2">500+</div>
              <p className="text-white font-medium text-lg">FAMILIES EDUCATED</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#00F0FF] mb-2">50+</div>
              <p className="text-white font-medium text-lg">WORKSHOPS HOSTED</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#FF006E] mb-2">100%</div>
              <p className="text-white font-medium text-lg">VOLUNTEER-RUN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 md:py-24 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">LATEST ARTICLES</h2>
            <Link to={createPageUrl("Articles")}>
              <button className="neo-button bg-white px-6 py-3 font-bold flex items-center gap-2">
                VIEW ALL <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
          
          <div className="bg-[#FFED4E] neo-border neo-shadow p-8 text-center">
            <Users className="w-16 h-16 mx-auto mb-4" strokeWidth={3} />
            <p className="text-xl font-bold mb-4">Check out our latest advocacy updates and resources</p>
            <Link to={createPageUrl("Articles")}>
              <button className="neo-button bg-black text-white px-8 py-4 font-bold">
                READ ARTICLES →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#00F0FF]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white neo-border neo-shadow p-8 md:p-12 rotate-1">
            <div className="-rotate-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">READY TO MAKE A DIFFERENCE?</h2>
              <p className="text-xl font-medium mb-8">
                Join us in advocating for backup power access for medically vulnerable Austinites.
              </p>
              <Link to={createPageUrl("Contact")}>
                <button className="neo-button bg-[#FF006E] text-white px-10 py-5 font-bold text-xl hover:bg-[#E6006A]">
                  CONTACT US NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
