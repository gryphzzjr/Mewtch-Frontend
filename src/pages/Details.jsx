import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Heart,
  MapPin,
  Calendar,
  Ruler,
  PawPrint,
  Share2,
} from "lucide-react";
import AuthenticationModal from "../components/AuthModal";
import AuthModal from "../components/AuthModal";

export default function AnimalInfo() {
  const [open, setOpen] = useState(false);

  const animal = {
    name: "Luna",
    species: "Cachorra",
    breed: "Border Collie",
    gender: "Fêmea",
    age: "2 anos",
    size: "Médio porte",
    location: "Recife - PE",
    image: "https://fotos.amomeupet.org/uploads/fotos/1748888712_683dec88effde_hd.jpeg",
    description:
      "Luna é uma cachorrinha dócil, cheia de energia e muito carinhosa. Adora correr, brincar com bolinhas e receber carinho. Ideal para famílias ativas que gostem de passear e se divertir ao ar livre.",
  };

  const isFemale = animal.gender.toLowerCase().includes("fêmea");
  const adoptColor = isFemale ? "bg-pink-500 hover:bg-pink-600" : "bg-blue-500 hover:bg-blue-600";

  const recommendations = [
    {
      name: "Thor",
      breed: "Golden Retriever",
      image: "https://cdn.awsli.com.br/600x450/370/370790/produto/255393271/pit-monster-filhotes-1024x510-28885ibich.jpg",
      age: "3 anos",
      gender: "Macho",
    },
    {
      name: "Maya",
      breed: "SRD",
      image: "https://www.shutterstock.com/image-photo/cute-gray-cat-kitten-looking-600nw-2386006989.jpg",
      age: "1 ano",
      gender: "Fêmea",
    },
    {
      name: "Bolt",
      breed: "Husky Siberiano",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KLJmYYNu4D3DQLnGArtIQQQA34PwLcqDmw&s",
      age: "2 anos",
      gender: "Macho",
    },
    {
      name: "Nina",
      breed: "Poodle",
      image: "https://fotos.amomeupet.org/uploads/fotos/1748888712_683dec88effde_hd.jpeg",
      age: "4 anos",
      gender: "Fêmea",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Seção principal */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 px-6 lg:px-20 py-16 max-w-7xl mx-auto w-full">
        {/* Imagem */}
        <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-[480px] object-cover"
          />
          <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md hover:scale-105 transition-transform">
            <Heart className="w-6 h-6 text-pink-500" />
          </button>
        </div>

        {/* Infos */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            {animal.name}
          </h1>
          <p className="text-gray-500 text-lg font-medium">
            {animal.species} • {animal.breed}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 shadow-sm">
              <PawPrint className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">{animal.gender}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 shadow-sm">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span className="text-gray-700">{animal.age}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 shadow-sm">
              <Ruler className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">{animal.size}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mt-6 text-justify">
            {animal.description}
          </p>

          <div className="flex items-center gap-2 text-gray-500 mt-4">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>{animal.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setOpen(true)}
              className={`${adoptColor} text-white font-semibold px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg`}
            >
              Adotar {animal.name}
            </button>
            <button className="border border-blue-500 text-blue-500 font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-50 transition-all">
              <Share2 className="w-5 h-5" /> Compartilhar
            </button>
          </div>
        </div>
      </section>

      {/* Recomendações */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Você pode gostar destes...
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {recommendations.map((pet, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {pet.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{pet.breed}</p>
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                    <span>{pet.age}</span>
                    <span
                      className={`font-medium ${
                        pet.gender === "Fêmea"
                          ? "text-pink-500"
                          : "text-blue-500"
                      }`}
                    >
                      {pet.gender}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuthModal isOpen={open} onClose={() => setOpen(false)} />
      <Footer />
    </div>
  );
}
