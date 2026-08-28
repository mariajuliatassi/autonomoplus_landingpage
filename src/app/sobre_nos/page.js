export default function Sobre_nos() {

  const team = [
    {
      name: "Pedro Santos",
      role: "Full-Stack Developer",
      description: "Responsável pelo desenvolvimento full-stack",
      linkedin: "https://www.linkedin.com/in/pedro-hrsantos?",
      github: "utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Maria Júlia Tassi",
      role: "Front-end Developer & Database Developer",
      description: "Responsável pelo desenvolvimento frontend, modelagem e desenvolvimento do banco de dados",
      linkedin: "https://linkedin.com/in/mariajuliatasi",
      github: "https://github.com/mariajuliatasi",
    },
    {
      name: "Lívia Gabrielly Oliveira",
      role: "Quality Assurance & Data Modeler",
      description: "Responsável pela qualidade do nosso sistema e modelagem de dados",
      linkedin: "https://linkedin.com/in/liviagabrielly",
      github: "https://github.com/liviagabrielly",
    },
    {
      name: "Victoria da Silva",
      role: "Documentação",
      description: "Responsável pela documentação do sistema",
      linkedin: "https://linkedin.com/in/victoriadasilva",
      github: "https://github.com/victoriadasilva",
    },
    {
      name: "Emanuel Muzy",
      role: "Diário de bordo",
      description: "Responsável pela organização das tarefas",
      linkedin: "https://linkedin.com/in/emanuelmuzy",
      github: "https://github.com/emanuelmuzy",
    },
  ];

  return (
    <section className="bg-white min-h-screen w-full flex flex-col items-center pt-20 pb-12 px-6 text-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl">
        Nosso time de{" "}
        <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
          Desenvolvimento.
        </span>
      </h1>

      <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
        Somos estudantes do 3º ano do curso técnico de desenvolvimento de sistemas e estamos apresentando nosso trabalho de conclusão de curso!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto mt-12">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div>
              <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1">{member.role}</p>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">{member.description}</p>
            </div>

            <div className="flex gap-4 mt-2">

              {/* LinkedIn */}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}