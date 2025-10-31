
"use client";

import { useState } from "react";

export default function Contact(){
    
const [form, setForm] = useState({ name: "", email: "", message: "", honey: "" });
  const [status, setStatus] = useState("");
  const [cooldown, setCooldown] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cooldown) return setStatus("Please wait before sending again!");
    if (!form.name || !form.email || !form.message)
      return setStatus("Please fill in all fields!");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "", honey: "" });
        setCooldown(true);
        setTimeout(() => setCooldown(false), 15000);
      } else {
        setStatus("❌ " + data.error);
      }
    } catch {
      setStatus("❌ Failed to send message.");
    }
  };

    return(
         <div className="sm:px-6 lg:px-8">
        <h2 className="text-4xl  lg:text-3xl font-semibold text-primary mb-5 mt-4 mb-2">Contact</h2>
        <p className="text-light section-description text-2xl text-gray-600">
         Want to know more about me, tell me about your project or just to say hello? Drop me a line and I will get back as soon as possible.
        </p>

         <form
      id="contact"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-800 focus:outline-none"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-800 focus:outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        value={form.message}
        onChange={handleChange}
        className="w-full p-2 rounded bg-gray-800 focus:outline-none"
      ></textarea>

      {/* Honeypot (anti-bot hidden field) */}
      <input
        type="text"
        name="honey"
        value={form.honey}
        onChange={handleChange}
        className="hidden"
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={cooldown}
        className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
      >
        Send Message
      </button>

      {status && <p className="text-center mt-3 text-sm">{status}</p>}
    </form>
        </div>
        )
}