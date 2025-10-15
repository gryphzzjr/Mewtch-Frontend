import React from "react";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 w-full h-16 flex items-center px-8 shadow-sm border-b border-gray-100">
      {/* Logo + Nome */}
      <div className="flex items-center gap-3 cursor-pointer select-none">
        <img
          src="/assets/logo.png"
          alt="Mewtch Logo"
          className="w-11 h-11 object-contain drop-shadow-lg"
        />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#F86B47] to-[#ff9f70] text-transparent bg-clip-text tracking-tight">
          Mewtch
        </h1>
      </div>

      {/* Navegação */}
      <nav className="ml-auto hidden md:flex items-center gap-8 text-lg">
        {["Início", "Sobre", "Blog", "Contato"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Botões */}
      <div className="ml-8 flex items-center gap-4">
        <button className="font-semibold border border-orange-400 text-orange-500 text-sm md:text-base px-4 py-2 rounded-md hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
          <a href="/signin">Entrar</a>
        </button>
        <button className="font-semibold bg-gradient-to-r from-orange-400 to-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-md shadow-md hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer">
          <a href="/catalog">Começar a Adotar</a>
        </button>
      </div>
    </header>
  );
}
