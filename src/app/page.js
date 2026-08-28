export default function Home() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      
      {/* Hero section*/}
      <section className="bg-white pt-20 pb-12 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Título */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl">
          Gerencie seu lucro com <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">clareza.</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
          Voce trabalha como autônomo e sente dificuldade para gerenciar seu lucro? Nosso site pode te auxiliar!
        </p>

        {/* Container da Imagem do Gráfico Oficial */}
        <div className="mt-16 w-full max-w-3xl flex justify-center">
          <img 
            src="/grafico.png" 
            alt="Gráfico de Desempenho da Receita" 
            className="w-full h-auto rounded-2xl shadow-xl shadow-slate-100/50 object-contain border border-slate-100"
          />
        </div>

      </section>
    </div>
  );
}