import React, { useState } from "react";
import { X, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function AuthModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col w-full max-w-lg mx-4 p-10 relative animate-fadeIn">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={22} />
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
          Crie sua conta
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Junte-se à nossa comunidade e ajude um animal a encontrar um lar 🐾
        </p>

        {/* Botões sociais */}
        <div className="flex flex-col gap-4 w-full">
          <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-medium shadow-md">
            <FaFacebook className="w-6 h-6" />
            Continuar com Facebook
          </button>

          <button className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-lg transition font-medium shadow-md">
            <FcGoogle className="w-6 h-6" />
            Continuar com Google
          </button>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-3 w-full my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-sm font-medium">ou</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Campo de e-mail */}
        <div className="flex flex-col gap-3 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-gray-700"
          />

          <button
            onClick={() => {
              navigate("/signup");
              onClose();
            }}
            disabled={!email}
            className={`flex items-center justify-center gap-3 py-3 rounded-lg font-medium transition-all shadow-md ${
              email
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Mail className="w-5 h-5" />
            Continuar com Email
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-8 text-center">
          Ao continuar, você concorda com nossos{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Termos de Uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Política de Privacidade
          </a>.
        </p>
      </div>
    </div>
  );
}
