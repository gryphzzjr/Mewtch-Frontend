import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ThankYouPage() {
  const handleGoHome = () => (window.location.href = "/");
  const handleWhatsapp = () => {
    const phone = "5511999999999"; // seu número
    const text = encodeURIComponent("Olá! Quero adotar um pet 😊");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: "url('/assets/dontmakefunonmashi.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay levemente escuro para contraste */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Container central */}
      <div className="relative z-10 bg-white w-full max-w-xl shadow-md rounded-md flex flex-col items-center p-6 sm:p-12">
        <div className="text-center text-gray-800 font-medium text-3xl sm:text-4xl mt-4 sm:mt-8">
          <h1>Obrigado!</h1>
        </div>

        <div className="text-center text-gray-600 font-normal text-base sm:text-lg px-4 sm:px-8 mt-2">
          <p>Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!</p>
        </div>

        <img
          src="/assets/illustration.png"
          className="w-48 sm:w-64 my-6"
          alt="Ilustração"
        />

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto border-2 border-gray-400 text-gray-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-all duration-200"
          >
            Voltar para a página inicial
          </button>
          <button
            onClick={handleWhatsapp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200"
          >
            <FaWhatsapp className="w-5 h-5" />
            Falar via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
