"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", honey: "" });
  const [cooldown, setCooldown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cooldown) return setToast("Please wait before sending again!");
    if (!form.name || !form.email || !form.message) return setToast("Fill all fields!");

    setLoading(true);
    setToast("");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setToast("✅ Mail sent successfully!");
        setForm({ name: "", email: "", message: "", honey: "" });
        setCooldown(true);
        setTimeout(() => setCooldown(false), 15000);
      } else {
        setToast("❌ " + data.error);
      }
    } catch {
      setLoading(false);
      setToast("❌ Failed to send message.");
    }
  };

  return (
    <div className="sm:px-6 lg:px-8  ">
      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 bg-primary text-white border border-rose-300 rounded-2xl text-white px-5 py-3 rounded-lg shadow-lg z-50 font-medium"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
<div style={{zIndex:'-99'}}>
      <h2 className="text-4xl lg:text-3xl font-semibold text-primary mb-2 mt-4">Contact</h2>
      <p className="text-light section-description text-2xl text-gray-600">
        Want to know more about me, tell me about your project, or just say hello? Drop me a line and I will get back as soon as possible.
      </p>

      <form
        id="contact"
        onSubmit={handleSubmit}
        className="max-w-md form-shadow mx-auto p-6 mt-9 bg-surface text-primary border border-primary-2 rounded-xl space-y-4 relative"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full bg-secondary p-2 rounded focus:outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 bg-secondary rounded focus:outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-secondary focus:outline-none"
        ></textarea>

        {/* Honeypot */}
        <input type="text" name="honey" value={form.honey} onChange={handleChange} className="hidden" autoComplete="off" />

        <button
          type="submit"
          disabled={cooldown || loading}
          className="w-full btn btn-primary text-white p-2 rounded font-semibold flex justify-center items-center gap-2"
        >
          {loading && (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          Send Message
        </button>
      </form>
      </div>
    </div>
  );
}
