import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 w-full h-16 flex items-center px-6 md:px-8 shadow-sm border-b border-gray-100">
      {/* Logo + Nome */}
      <div className="flex items-center gap-3 cursor-pointer select-none">
        <img
          src="/assets/logo.png"
          alt="Mewtch Logo"
          draggable="false"
          className="w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-lg"
        />
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#F86B47] to-[#ff9f70] text-transparent bg-clip-text tracking-tight">
          Mewtch
        </h1>
      </div>

      {/* Navegação Desktop */}
      <nav className="ml-auto hidden md:flex items-center gap-8 text-lg">
        {["Início", "Sobre", "Contato"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Botões Desktop */}
      <div className="ml-8 hidden md:flex items-center gap-4">
        <button className="font-semibold border border-orange-400 text-orange-500 text-sm md:text-base px-4 py-2 rounded-md hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
          <a href="/signin">Entrar</a>
        </button>
        <button className="font-semibold bg-gradient-to-r from-orange-400 to-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-md shadow-md hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer">
          <a href="/catalog">Começar a Adotar</a>
        </button>
      </div>

      {/* Botão Menu Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="ml-auto md:hidden text-gray-700 text-2xl focus:outline-none"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col items-center py-4 space-y-4 md:hidden animate-fadeIn">
          {["Início", "Sobre", "Contato"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col w-full px-6 gap-3 mt-3">
            <button className="w-full font-semibold border border-orange-400 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
              <a href="/signin">Entrar</a>
            </button>
            <button className="w-full font-semibold bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer">
              <a href="/catalog">Começar a Adotar</a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
