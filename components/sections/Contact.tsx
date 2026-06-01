"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section className="py-24 px-6 bg-black text-white">
      <section id="contact" className="scroll-mt-24"></section>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-400">
          Let’s build something amazing together
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-4"
      >
        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white/5 border border-white/10"
          required
        />

        <input
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-white/5 border border-white/10"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 rounded bg-white/5 border border-white/10 h-32"
          required
        />
<div className="glass p-6 hover:scale-105 transition duration-300"></div>
        <button
          type="submit"
          className="w-full bg-cyan-500 py-3 rounded font-semibold hover:bg-cyan-400 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-400 text-center">
            Message sent successfully ✔
          </p>
        )}
      </motion.form>

    </section>
  );
}