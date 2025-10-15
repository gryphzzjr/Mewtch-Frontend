import React from "react";

export default function Hero() {
  const handleContextMenu = (e) => e.preventDefault();
  const handleDragStart = (e) => e.preventDefault();

  return (
    <section className="relative flex flex-col md:flex-row w-full h-auto md:h-[calc(100vh-4rem)] overflow-hidden bg-orange-50">
      {/* Retângulo inclinado (apenas desktop) */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-[30vw] bg-orange-50 transform -skew-x-6 origin-left z-10"></div>

      {/* Imagem do cachorro */}
      <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-full order-2 md:order-2">
        <img
          src="/assets/dog.png"
          alt="Cachorro fofo"
          draggable="false"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          className="absolute right-0 top-0 w-full h-full object-cover object-center select-none"
          style={{ userSelect: "none" }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-30 flex flex-col justify-center h-full px-6 sm:px-10 md:px-20 py-12 md:py-0 w-full md:w-1/2 text-center md:text-left order-1 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-xl mx-auto md:mx-0 drop-shadow-sm">
          Adote com o{" "}
          <span className="bg-gradient-to-r from-[#F86B47] to-[#ff9f70] text-transparent bg-clip-text">
            Mewtch
          </span>
        </h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
          Encontre seu companheiro perfeito e dê a ele um lar cheio de amor.{" "}
          O <span className="text-orange-500 font-semibold">Mewtch</span> conecta pessoas e animais que merecem uma nova chance 🐾
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center md:justify-start">
          <button className="bg-gradient-to-r from-[#F86B47] to-[#ff9f70] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-all duration-200 cursor-pointer">
            Começar agora
          </button>
          <button className="border-2 border-orange-400 text-orange-500 font-semibold px-6 py-3 rounded-lg hover:bg-orange-100 transition-all duration-200 cursor-pointer">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}
