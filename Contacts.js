import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: "wattsupaustin@gmail.com",
        subject: `Website Contact: ${formData.subject}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
        `
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try emailing us directly at wattsupaustin@gmail.com");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#FAFAF9]">
      {/* Hero */}
      <section className="bg-[#FFED4E] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-black neo-border neo-shadow p-8 md:p-12 rotate-1">
            <div className="-rotate-1">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="w-16 h-16 text-white" strokeWidth={3} />
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  CONTACT US
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-[#FFED4E] font-medium">
                Get in touch with Watts Up Austin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {submitted ?
              <div className="bg-[#00F0FF] neo-border neo-shadow p-8 md:p-12 text-center">
                  <CheckCircle className="w-16 h-16 mx-auto mb-6" strokeWidth={3} />
                  <h3 className="text-3xl font-bold mb-4">MESSAGE SENT!</h3>
                  <p className="text-lg mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                  onClick={() => setSubmitted(false)}
                  className="neo-button bg-black text-white px-6 py-3 font-bold">

                    SEND ANOTHER MESSAGE
                  </button>
                </div> :

              <div className="bg-white neo-border neo-shadow p-8">
                  <h2 className="text-3xl font-bold mb-6">SEND US A MESSAGE</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block font-bold mb-2 text-sm">YOUR NAME *</label>
                      <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="neo-border h-12 font-medium"
                      placeholder="John Doe" />

                    </div>

                    <div>
                      <label className="block font-bold mb-2 text-sm">EMAIL ADDRESS *</label>
                      <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="neo-border h-12 font-medium"
                      placeholder="john@example.com" />

                    </div>

                    <div>
                      <label className="block font-bold mb-2 text-sm">SUBJECT *</label>
                      <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="neo-border h-12 font-medium"
                      placeholder="What's this about?" />

                    </div>

                    <div>
                      <label className="block font-bold mb-2 text-sm">MESSAGE *</label>
                      <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="neo-border min-h-[150px] font-medium"
                      placeholder="Tell us more..." />

                    </div>

                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className="neo-button bg-[#FF006E] text-white px-8 py-4 font-bold text-lg w-full flex items-center justify-center gap-3">

                      {isSubmitting ?
                    <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                          SENDING...
                        </> :

                    <>
                          SEND MESSAGE
                          <Send className="w-5 h-5" strokeWidth={3} />
                        </>
                    }
                    </button>
                  </form>
                </div>
              }
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#FFED4E] neo-border neo-shadow p-8 -rotate-1">
                <div className="rotate-1">
                  <Mail className="w-12 h-12 mb-4" strokeWidth={3} />
                  <h3 className="text-2xl font-bold mb-2">EMAIL</h3>
                  <a href="mailto:wattsupaustin@gmail.com" className="text-lg hover:underline">wattsupaustin@gmail.com

                  </a>
                </div>
              </div>

              <div className="bg-[#00F0FF] neo-border neo-shadow p-8 rotate-1">
                <div className="-rotate-1">
                  <MapPin className="w-12 h-12 mb-4" strokeWidth={3} />
                  <h3 className="text-2xl font-bold mb-2">LOCATION</h3>
                  <p className="text-lg">Austin, Texas</p>
                </div>
              </div>

              <div className="bg-[#FF006E] neo-border neo-shadow p-8 -rotate-1 text-white">
                <div className="rotate-1">
                  <Phone className="w-12 h-12 mb-4" strokeWidth={3} />
                  <h3 className="text-2xl font-bold mb-2">PHONE</h3>
                  <p className="text-lg">737-230-7893
                  </p>
                </div>
              </div>

              <div className="bg-white neo-border neo-shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4">GET INVOLVED</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Whether you need help, want to volunteer, or are interested in partnering with us, 
                  we want to hear from you.
                </p>
                <ul className="space-y-2 text-lg">
                  <li>→ Request a workshop</li>
                  <li>→ Volunteer opportunities</li>
                  <li>→ Partnership inquiries</li>
                  <li>→ Media requests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);
}
