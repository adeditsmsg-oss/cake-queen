"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/shared";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", phone: "", occasion: "", cakeType: "", weight: "", date: "", mode: "Delivery", message: "", address: ""
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🎂 *CAKE ORDER — CAKE QUEEN*\n━━━━━━━━━━━━━━━━\n👤 Name: ${form.name}\n📱 Phone: ${form.phone}\n🎉 Occasion: ${form.occasion}\n🍰 Cake Type: ${form.cakeType}\n⚖️ Weight: ${form.weight} kg\n📅 Date: ${form.date}\n🚚 Mode: ${form.mode}\n✉️ Message: ${form.message}\n📍 Address: ${form.address}\n━━━━━━━━━━━━━━━━\nSent via cakequeen.in`
    );
    window.open(`https://wa.me/918918499216?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader badge="Contact & Order" title="Place Your Order" titleHighlight="or Visit Us" subtitle="Ready to order? Fill in the form and we'll get started on your dream cake. আপনার কেক অর্ডার করুন!" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-4xl p-8 shadow-card">
              <h3 className="font-heading font-800 text-xl text-text-dark mb-6">Get in Touch</h3>
              <div className="flex flex-col gap-5">
                <a href="tel:+918918499216" className="flex items-center gap-4 group hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-700 text-sm text-text-dark group-hover:text-primary">Call Us</p>
                    <p className="font-body text-sm text-text-mid">+91 89184 99216</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/918918499216?text=Hi%20Cake%20Queen!"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:text-green-600 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-700 text-sm text-text-dark">WhatsApp</p>
                    <p className="font-body text-sm text-text-mid">+91 89184 99216 — We reply in 2 hrs</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-700 text-sm text-text-dark">Visit Us</p>
                    <p className="font-body text-sm text-text-mid">Plot 1446, Keranitola, Station Road,<br />Midnapore, West Bengal – 721101</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-700 text-sm text-text-dark">Opening Hours</p>
                    <p className="font-body text-sm text-text-mid">Monday – Sunday: 9:30 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div id="map" className="rounded-4xl overflow-hidden shadow-card h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.089!2d87.3196116!3d22.4198533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b8b6ace0ef9%3A0x1c01f0329dd57dfd!2sCake+Queen!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cake Queen location on Google Maps"
              />
            </div>
          </div>

          {/* Order Form */}
          {!sent ? (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-4xl p-8 shadow-card flex flex-col gap-4"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-800 text-xl text-text-dark mb-2">Cake Order Form</h3>
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Your Name *" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                  className="col-span-2 sm:col-span-1 border border-border rounded-2xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors" />
                <input required placeholder="Phone Number *" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                  className="col-span-2 sm:col-span-1 border border-border rounded-2xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <select value={form.occasion} onChange={e => setForm(f => ({...f, occasion: e.target.value}))}
                className="border border-border rounded-2xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors bg-white text-text-mid">
                <option value="">Select Occasion</option>
                {["Birthday","Wedding","Anniversary","Baby Shower","Corporate","Festival","Custom Design","Other"].map(o => <option key={o}>{o}</option>)}
              </select>
              <input placeholder="Cake Type / Flavour (e.g. Chocolate Birthday Cake)" value={form.cakeType} onChange={e => setForm(f => ({...f, cakeType: e.target.value}))}
                className="border border-border rounded-2xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <input type="number" min="0.5" step="0.5" placeholder="Weight (kg)" value={form.weight} onChange={e => setForm(f => ({...f, weight: e.target.value}))}
                  className="border border-border rounded-2xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors" />
                <input type="date" value={form.date} onChange={e => setForm(f => ({...f, date: e.target.value}))}
                  className="border border-border rounded-2xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Delivery", "Pickup"].map(mode => (
                  <button
                    key={mode} type="button"
                    onClick={() => setForm(f => ({...f, mode}))}
                    className={`py-3 rounded-2xl font-heading font-700 text-sm border-2 transition-all ${form.mode === mode ? "bg-primary text-white border-primary" : "border-border text-text-mid hover:border-primary"}`}
                  >{mode}</button>
                ))}
              </div>
              <input placeholder="Message on Cake (optional)" value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                className="border border-border rounded-2xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors" />
              <textarea rows={2} placeholder="Delivery Address (if applicable)" value={form.address} onChange={e => setForm(f => ({...f, address: e.target.value}))}
                className="border border-border rounded-2xl px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
              <button type="submit" id="order-form-submit"
                className="flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-heading font-800 py-4 rounded-2xl shadow-btn hover:shadow-btn-hover transition-all hover:scale-[1.02] mt-2">
                <Send className="w-4 h-4" />
                Send Order via WhatsApp 🎂
              </button>
              <p className="font-body text-xs text-text-muted text-center">By submitting, you agree to be contacted by Cake Queen on WhatsApp.</p>
            </motion.form>
          ) : (
            <motion.div
              className="bg-white rounded-4xl p-10 shadow-card flex flex-col items-center justify-center text-center gap-4"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500" />
              <h3 className="font-heading font-900 text-2xl text-text-dark">Order Sent!</h3>
              <p className="font-body text-text-muted">আমরা WhatsApp-এ আপনার সাথে যোগাযোগ করব। We'll confirm your cake order within 2 hours. 🎂</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
