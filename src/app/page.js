import Reveal from "./components/Reveal";

const tecnologias = [
  { nome: "React", cor: "bg-sky-400", link: "https://react.dev" },
  { nome: "TypeScript", cor: "bg-blue-600", link: "https://www.typescriptlang.org" },
  { nome: "Tailwind CSS", cor: "bg-cyan-400", link: "https://tailwindcss.com" },
  { nome: "Node.js", cor: "bg-green-500", link: "https://nodejs.org" },
  { nome: "MySQL", cor: "bg-orange-400", link: "https://www.mysql.com" },
  { nome: "Pusher", cor: "bg-violet-500", link: "https://pusher.com" },
  { nome: "Google OAuth", cor: "bg-red-500", link: "https://developers.google.com/identity/protocols/oauth2" },
  { nome: "Vercel", cor: "bg-slate-900", link: "https://vercel.com" },
  { nome: "Aiven", cor: "bg-rose-500", link: "https://aiven.io" },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans overflow-x-hidden">

      {/* Hero section: texto e imagem lado a lado */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

        <Reveal className="text-center lg:text-left">
          {/* Título */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Gerencie seu lucro com <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">clareza.</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Voce trabalha como autônomo e sente dificuldade para gerenciar seu lucro? Nosso site pode te auxiliar!
          </p>
        </Reveal>

        {/* Imagem do gráfico com sombreado azul */}
        <Reveal delay={150} className="relative w-full max-w-2xl mx-auto">
          <div aria-hidden="true" className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-tr from-blue-600/50 via-sky-400/40 to-indigo-500/50 blur-2xl" />
          <img
            src="/grafico.png"
            alt="Gráfico de Desempenho da Receita"
            className="relative w-full h-auto rounded-2xl object-contain border border-blue-100 shadow-2xl shadow-blue-600/40"
          />
        </Reveal>

      </section>

      {/* Sobre o projeto + tecnologias */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <Reveal>
          <div className="relative bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-xl shadow-blue-900/10 overflow-hidden">
            <div aria-hidden="true" className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>

            <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Nascido em sala de aula, pensado para o{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">dia a dia.</span>
            </h2>

            <p className="mt-4 text-slate-500 leading-relaxed">
              O AUTONOMO+ é o Trabalho de Conclusão de Curso do Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas da Etec João Belarmino (Amparo - SP), orientado pelo Prof. Sergio Novais.
            </p>
          </div>
        </Reveal>

        <div className="text-center lg:text-left">
          <Reveal>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Tecnologias que utilizamos</p>
          </Reveal>

          <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            {tecnologias.map((tec, i) => (
              <Reveal key={tec.nome} delay={i * 80}>
                <span className="block animate-float" style={{ animationDelay: `${i * 0.35}s` }}>
                  <a
                    href={tec.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm sm:text-base font-semibold text-slate-700 shadow-md shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/40"
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className={`absolute inline-flex h-full w-full rounded-full ${tec.cor} opacity-60 animate-ping`} />
                      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${tec.cor} group-hover:bg-white transition-colors`} />
                    </span>
                    {tec.nome}
                  </a>
                </span>
              </Reveal>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
