const tecnologias = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "Pusher",
  "Google OAuth",
  "Vercel",
  "Aiven",
];

const destaques = [
  "Foco em atendimentos recorrentes",
  "Lucro real calculado automaticamente",
  "Interface simples e intuitiva",
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">

      {/* Hero section: texto e imagem lado a lado */}
      <section className="bg-white pt-20 pb-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

        {/* Coluna do texto */}
        <div className="text-center lg:text-left lg:col-span-2">

          {/* Título */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Gerencie seu lucro com <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">clareza.</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Voce trabalha como autônomo e sente dificuldade para gerenciar seu lucro? Nosso site pode te auxiliar!
          </p>

          {/* Botão para a página de funcionalidades */}
          <a
            href="/funcionalidades"
            className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full px-7 py-3 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all"
          >
            Conheça as funcionalidades
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

        </div>

        {/* Container da Imagem do Gráfico Oficial, com sombra azul */}
        <div className="relative w-full flex justify-center lg:col-span-3">
          {/* Brilho azul atrás da imagem */}
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-600/40 via-sky-400/30 to-indigo-500/40 blur-2xl"></div>

          <img
            src="/autonomo dashboard.png"
            alt="Gráfico de Desempenho da Receita"
            className="relative w-full h-auto rounded-2xl shadow-2xl shadow-blue-600/40 object-contain border border-blue-100"
          />
        </div>

      </section>

      {/* Sobre o projeto */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Coluna do texto */}
          <div>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              Sobre nosso projeto
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Nascido em sala de aula,<br className="hidden sm:block" /> pensado para o dia a dia.
            </h2>

            <p className="mt-5 text-slate-500 leading-relaxed max-w-xl">
              O AUTONOMO+ é o Trabalho de Conclusão de Curso do Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas da{" "}
              <strong className="text-slate-900">Etec João Belarmino (Amparo - SP)</strong>, orientado pelo{" "}
              <strong className="text-slate-900">Prof. Sergio Novais</strong>. Nossas funcionalidades foram criadas com base em pesquisas e entrevistas com autônomos, buscando entender suas necessidades e dores, para que possamos oferecer uma solução prática e eficiente para a rotina desses profissionais.
            </p>

            {/* Lista com os destaques */}
            <ul className="mt-6 space-y-3">
              {destaques.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card das tecnologias */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg shadow-slate-200/60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-10 h-10 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              Tecnologias utilizadas
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {tecnologias.map((tec) => (
                <span
                  key={tec}
                  className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700"
                >
                  {tec}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}