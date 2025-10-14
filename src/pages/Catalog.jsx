import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const petsData = Array.from({ length: 24 }, (_, i) => ({
  name: `Pet ${i + 1}`,
  breed: ["Labrador", "Poodle", "Bulldog"][i % 3],
  age: Math.floor(Math.random() * 10) + 1,
  size: ["Pequeno", "Médio", "Grande"][i % 3],
  photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpWQPJ-OkGEW28SIQYZMgBv9DPM4tGK2s8M5fpd93BxBGWi4GccMmTnVBMZVs9cbPkL0&usqp=CAU`,
}));

export default function Catalog() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ age: '', size: '' });

  const handleChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  const filteredPets = petsData.filter((pet) => {
    return (
      pet.breed.toLowerCase().includes(search.toLowerCase()) &&
      (filters.age === '' || pet.age <= Number(filters.age)) &&
      (filters.size === '' || pet.size === filters.size)
    );
  });

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* título di cria + pesquisa */}
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8">
        <h1 className="text-gray-900 font-bold text-3xl md:text-4xl mb-4 md:mb-0">
          Encontre o seu match!
        </h1>
        <input
          type="text"
          placeholder="Pesquisar raça..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
        />
      </div>

      <div className="flex px-12 gap-8">
        {/* Grid de pets */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.length > 0 ? (
            filteredPets.map((pet, index) => (
              <div
                key={index}
                className="bg-orange-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 relative flex flex-col items-center text-center"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pet.age} anos
                </div>
                <div className="absolute top-4 right-4 bg-yellow-300 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {pet.size}
                </div>

                <img
                  src={pet.photo}
                  alt={pet.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-900">{pet.name}</h3>
                  <p className="text-gray-600">{pet.breed}</p>
                  <button className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition transform hover:scale-105">
                    Doar / Adotar
                  </button>
                </div>

                {/* Bolhas sutis */}
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-300 rounded-full opacity-30 filter blur-md animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-200 rounded-full opacity-25 filter blur-xl animate-pulse"></div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">Nenhum pet encontrado.</p>
          )}
        </div>

        {/* Menu lateral de filtros */}
        <aside className="w-64 hidden lg:flex flex-col gap-6 sticky top-32">
          <h2 className="font-semibold text-gray-900 text-lg">Filtros</h2>
          <select
            name="age"
            value={filters.age}
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
            <option value="Pequeno">Pequeno</option>
            <option value="Médio">Médio</option>
            <option value="Grande">Grande</option>
          </select>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
