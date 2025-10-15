import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Catalog() {
  const [filters, setFilters] = useState({
    gender: "any",
    age: "any",
    size: "any",
    sort: "recent",
  });

  const pets = [
    {
      id: 1,
      name: "Luna",
      age: "2 anos",
      gender: "Fêmea",
      size: "Pequeno",
      img: "https://fotos.amomeupet.org/uploads/fotos/1748888712_683dec88effde_hd.jpeg",
    },
    {
      id: 2,
      name: "Nico",
      age: "1 ano",
      gender: "Macho",
      size: "Médio",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkcfZO3xqNVAr0z7IBVPioQ7mSnYWr2dWKg&s",
    },
    {
      id: 3,
      name: "Bidu",
      age: "4 anos",
      gender: "Macho",
      size: "Grande",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KLJmYYNu4D3DQLnGArtIQQQA34PwLcqDmw&s",
    },
    {
      id: 4,
      name: "Misha",
      age: "3 meses",
      gender: "Fêmea",
      size: "Pequeno",
      img: "https://www.shutterstock.com/image-photo/cute-gray-cat-kitten-looking-600nw-2386006989.jpg",
    },
    {
      id: 5,
      name: "Thor",
      age: "5 meses",
      gender: "Macho",
      size: "Pequeno",
      img: "https://cdn.awsli.com.br/600x450/370/370790/produto/255393271/pit-monster-filhotes-1024x510-28885ibich.jpg",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filtered = pets.filter((p) => {
    if (filters.gender !== "any" && p.gender.toLowerCase() !== filters.gender)
      return false;
    if (filters.size !== "any" && p.size.toLowerCase() !== filters.size)
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center w-full">
      <Header />

      {/* Banner (agora um pouco mais alto e responsivo) */}
      <img
        src="/assets/banner.png"
        alt="Banner"
        className="w-full h-64 sm:h-1/2 md:h-full object-cover object-center"
      />

      {/* Card de filtros responsivo */}
      <div className="bg-white shadow-xl rounded-2xl w-11/12 max-w-6xl -mt-10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 z-10 border border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          <FilterSelect
            label="Gênero"
            name="gender"
            value={filters.gender}
            onChange={handleChange}
            options={[
              { value: "any", label: "Todos" },
              { value: "macho", label: "Macho" },
              { value: "fêmea", label: "Fêmea" },
            ]}
          />
          <FilterSelect
            label="Idade"
            name="age"
            value={filters.age}
            onChange={handleChange}
            options={[
              { value: "any", label: "Todas" },
              { value: "baby", label: "Filhote" },
              { value: "young", label: "Jovem" },
              { value: "adult", label: "Adulto" },
            ]}
          />
          <FilterSelect
            label="Tamanho"
            name="size"
            value={filters.size}
            onChange={handleChange}
            options={[
              { value: "any", label: "Todos" },
              { value: "pequeno", label: "Pequeno" },
              { value: "médio", label: "Médio" },
              { value: "grande", label: "Grande" },
            ]}
          />
          <FilterSelect
            label="Sort by"
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            options={[
              { value: "recent", label: "Mais Recentes" },
              { value: "oldest", label: "Mais Antigos" },
              { value: "alphabetical", label: "A–Z" },
            ]}
          />
        </div>
      </div>

      {/* Sessão de recomendações */}
      <div className="w-11/12 max-w-6xl mt-12 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
          Você pode gostar destes...
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:scale-[1.03] hover:shadow-xl"
            >
              <img
                src={pet.img}
                alt={pet.name}
                className="w-full h-56 object-cover select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl text-gray-800">{pet.name}</h3>
                  <p className="text-gray-500 text-sm">{pet.age}</p>
                  <p className="text-gray-500 text-sm">
                    {pet.gender} • {pet.size}
                  </p>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition">
                  Adotar
                </button>
                <button className="mt-4 w-full border-2 border-indigo-600 text-indigo-600 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition">
                  Ver mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* Select estilizado */
function FilterSelect({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col items-start w-full">
      <label className="text-gray-700 text-sm font-medium mb-1">{label}</label>
      <div className="relative w-full">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none border border-gray-300 rounded-xl px-4 py-2 pr-8 text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer w-full"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
          ▼
        </span>
      </div>
    </div>
  );
}
