import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar API ou backend
    alert(`Obrigado, ${form.name}! Sua mensagem foi enviada.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative bg-white py-24 px-8 md:px-16 overflow-hidden">
      {/* Enfeites animados */}
      <div className="absolute top-16 left-8 w-32 h-32 bg-yellow-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-pink-300 rounded-full filter blur-2xl opacity-30 animate-pulse"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Fale Conosco
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          Tem dúvidas ou quer saber mais? Envie uma mensagem e entraremos em contato.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nome"
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-1 md:col-span-2"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-1 md:col-span-2"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mensagem"
            required
            rows={5}
            className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 col-span-1 md:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 px-8 py-4 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
