import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Logo e descrição */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Mewtch Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#F86B47] to-[#ff9f70] text-transparent bg-clip-text tracking-tight">Mewtch</h1>
          </div>
          <p className="text-gray-600 max-w-sm">
            Conectando pets e adotantes de forma fácil, segura e divertida.
            Seu amigo peludo está a um clique de distância!
          </p>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-900 mb-2">Links</h3>
          <a href="/" className="text-gray-600 hover:text-orange-400 transition">Home</a>
          <a href="/catalog" className="text-gray-600 hover:text-orange-400 transition">Catálogo</a>
          <a href="/about" className="text-gray-600 hover:text-orange-400 transition">Sobre</a>
          <a href="/contact" className="text-gray-600 hover:text-orange-400 transition">Contato</a>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-900 mb-2">Siga-nos</h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-orange-400 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-orange-400 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-orange-400 transition"><FaTwitter size={20} /></a>
          </div>
        </div>

      </div>

      {/* Créditos */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Mewtch. Todos os direitos reservados.
      </div>
    </footer>
  );
}
