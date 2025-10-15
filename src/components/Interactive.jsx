import React, { useState } from "react";

export default function ExploreCatalog() {
  const [filters, setFilters] = useState({
    breed: "",
    maxAge: "",
    size: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleExplore = () => {
    // Redireciona para a página de catálogo com query string
    const query = new URLSearchParams(filters).toString();
    window.location.href = `/catalog?${query}`;
  };

  return (
    <section className="relative bg-orange-50 pt-24 px-8 md:px-16 overflow-hidden border-b-3 border-orange-100">

      {/* Semicírculo sólido branco no topo */}
      <div className="absolute top-0 left-0 w-full flex justify-center inset-0">
        <div className="bg-white w-full h-24 rounded-b-full shadow-md"></div>
      </div>

      {/* Enfeites */}
      <div className="absolute top-16 left-8 w-32 h-32 bg-yellow-200 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-40 right-16 w-24 h-24 bg-pink-300 rounded-full filter blur-2xl opacity-40 animate-pulse"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 py-16">

        {/* Lado esquerdo - Texto e filtros */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Encontre seu Pet Ideal
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Use os filtros abaixo para escolher raça, idade, tamanho e muito mais!
          </p>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <select
              name="breed"
              value={filters.breed}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Selecione a raça</option>
              <option value="labrador">Labrador</option>
              <option value="poodle">Poodle</option>
              <option value="bulldog">Bulldog</option>
            </select>

            <select
              name="maxAge"
              value={filters.maxAge}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Idade máxima</option>
              <option value="1">1 ano</option>
              <option value="3">3 anos</option>
              <option value="5">5 anos</option>
              <option value="10">10 anos</option>
            </select>

            <select
              name="size"
              value={filters.size}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Tamanho</option>
              <option value="small">Pequeno</option>
              <option value="medium">Médio</option>
              <option value="large">Grande</option>
            </select>
          </div>

          <button
            onClick={handleExplore}
            className="mt-6 px-8 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition"
          >
            Explorar Catálogo
          </button>
        </div>

        {/* Lado direito - Ilustração */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <img
            src="/assets/splash.png"
            alt="Pet ilustrativo"
            className="w-90 md:w-96 rounded-3xl relative z-10"
          />
          {/* Bolhas flutuantes */}
          <div className="absolute -top-10 -right-10 w-16 h-16 bg-yellow-200 rounded-full filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute top-16 right-16 w-10 h-10 bg-pink-300 rounded-full filter blur-lg opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 right-8 w-12 h-12 bg-orange-300 rounded-full filter blur-xl opacity-40 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
