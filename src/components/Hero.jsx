import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row w-full h-[calc(100vh-4rem)] overflow-hidden bg-orange-50">

      {/* retangulo inclinado. */}
      <div className="absolute left-85 top-0 h-full w-[30vw] bg-orange-50 transform -skew-x-6 origin-left z-3"></div>

      {/* imagem do cachorrinho loco */}
      <div className="relative w-full md:w-1/2 h-full ml-auto">
        <img
          src="/assets/dog.png"
          alt="Cachorro fofo"
          className="absolute right-0 top-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* conteudo principal da landing */}
      <div className="absolute left-0 top-0 z-30 flex flex-col justify-center h-full px-8 md:px-20 w-full md:w-1/2 text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-xl drop-shadow-sm">
          Adote com o{" "}
          <span className="bg-gradient-to-r from-[#F86B47] to-[#ff9f70] text-transparent bg-clip-text">
            Mewtch
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-md">
          Encontre seu companheiro perfeito e dê a ele um lar cheio de amor.
          O <span className="text-orange-500">Mewtch</span> conecta pessoas e animais que merecem uma nova chance 🐾
        </p>
        <div className="flex gap-4 pt-6">
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
