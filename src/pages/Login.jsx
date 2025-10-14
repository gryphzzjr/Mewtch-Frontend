import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bem-vindo de volta! Email: ${form.email}`);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Lado esquerdo - imagem */}
      <div className="hidden md:flex w-1/2 bg-white">
        <img
          src="/assets/temquelevanarisca.png"
          alt="Ilustração de pets"
          className="w-2xl h-screen object-cover"
        />
      </div>

      {/* Lado direito - formulário aprimorado */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8 relative overflow-hidden">
        {/* Enfeites animados sutis */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-300 rounded-full opacity-15 blur-2xl animate-pulse"></div>

        <div className="w-full max-w-md py-16 relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/assets/logo.png" alt="Mewtch Logo" className="w-16 h-16 object-contain" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Entrar</h2>
          <p className="text-gray-600 text-center mb-8">
            Entre na sua conta e comece a encontrar seu novo amigo peludo!
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
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Senha"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white transition"
            />

            <button
              type="submit"
              className="w-full py-3 bg-orange-400 text-white font-semibold rounded-xl hover:bg-orange-500 transition"
            >
              Entrar
            </button>
          </form>

          {/* Links auxiliares */}
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <a href="/forgot-password" className="hover:text-orange-400 transition">
              Esqueceu a senha?
            </a>
            <a href="/register" className="hover:text-orange-400 transition">
              Criar Conta
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">ou</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Login social */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              <FcGoogle /> Entrar com Google
            </button>
            <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
              <FaFacebook className="text-blue-500" /> Entrar com Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
