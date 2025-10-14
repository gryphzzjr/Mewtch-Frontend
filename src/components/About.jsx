import React from "react";

export default function About() {
  return (
    <section className="relative bg-white min-h-screen border-t-4 border-orange-100 flex flex-col md:flex-row items-center px-8 md:px-16 py-20">

      {/* Conteúdo à esquerda */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Como o <span className="bg-gradient-to-r from-[#F86B47] to-[#ff9f70] text-transparent bg-clip-text">Mewtch</span> conecta você ao seu novo amigo
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-md">
          Encontre, publique, conheça, doe e adote pets com facilidade. Nossa plataforma foi criada para conectar pessoas e animais que merecem um lar cheio de amor. É rápido, intuitivo e seguro. Em apenas 3 etapas, você tem um novo parceiro para seguir a vida!
        </p>

        {/* 3 Cards de Features */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <div className="flex-1 bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Escolha seu Pet</h3>
            <p className="text-gray-600 text-sm">Veja perfis detalhados de animais esperando por um lar e encontre o que combina com você.</p>
          </div>
          <div className="flex-1 bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Conecte-se com o Tutor</h3>
            <p className="text-gray-600 text-sm">Envie mensagens seguras e marque encontros para conhecer melhor o seu futuro melhor amigo.</p>
          </div>
          <div className="flex-1 bg-orange-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Adote com Amor</h3>
            <p className="text-gray-600 text-sm">Finalize a adoção de forma simples e dê ao seu pet um lar cheio de carinho e muito amor!</p>
          </div>
        </div>
      </div>

      {/* Imagem à direita */}
      <div className="md:w-1/2 ml-auto mt-12 md:mt-0">
        <img
          src="/assets/illustration.png"
          alt="Ilustração sobre adoção"
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
}
