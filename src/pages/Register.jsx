import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ email: "", fullname: "", password: "", confirmPassword: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Conta criada! Email: ${form.email}`);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Lado esquerdo - formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-md py-16">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/assets/logo.png" alt="Mewtch Logo" className="w-16 h-16 object-contain" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Criar Conta</h2>
          <p className="text-gray-600 text-center mb-8">
            Cadastre-se e encontre seu novo amigo peludo!
          </p>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white transition"
            />
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Nome completo"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white transition"
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Senha"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white transition"
            />
            <input
              type="text"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar Senha"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white transition"
            />

            <button
              type="submit"
              className="w-full py-3 bg-orange-400 text-white font-semibold rounded-xl hover:bg-orange-500 transition"
            >
              Criar Conta
            </button>
          </form>
        </div>
      </div>

      {/* Lado direito - imagem */}
      <div className="hidden md:flex bg-white ml-auto">
        <img
          src="/assets/naoadiantaserfa.png"
          alt="Ilustração de pets"
          className="w-2xl h-screen object-cover"
        />
      </div>
    </div>
  );
}
