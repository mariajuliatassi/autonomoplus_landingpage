import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Autonomo + | Gerencie seu lucro com clareza.",
  description: "Landing page do sistema Autonomo+",
};

export default function RootLayout({ children }) {
  const ano = new Date().getFullYear();

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">


      <nav className="w-full bg-white backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-lg shadow-blue-900/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]"> 
          <a href="/" className="flex items-center justify-self-start">
            <img
              src="/autonomologo-header.png"
              alt="Logo autonomo+"
              className="h-10 sm:h-14 w-auto object-contain"
            />
          </a>

            <div className="hidden md:flex items-center space-x-10 text-base lg:text-lg font-semibold text-slate-500">
              <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
              <a href="/funcionalidades" className="hover:text-slate-900 transition-colors">Funcionalidades</a>
              <a href="/sobre_nos" className="hover:text-slate-900 transition-colors">Sobre nós</a>
            </div>

            <div className="md:justify-self-end">
              <a
                href="https://autonomo-frontend-v2.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 transition-all shadow-lg shadow-blue-600/30"
              > 
                Site oficial
              </a>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          {children}
        </main>

        {/* Rodapé */}
        <footer className="bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <img
                src="autonomologo-header.png"
                alt="Logo autonomo+"
                className="h-10 w-auto object-contain"
              />
              <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-sm">
                Ajudamos quem trabalha como autônomo a gerenciar o lucro com clareza.
              </p>
              <a
                href="https://autonomo-frontend-v2.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full px-5 py-2.5 transition-all shadow-lg shadow-blue-600/30"
              >
                Acessar o site oficial
              </a>
            </div>

            {/* Links de navegação */}
            <div>
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">Navegação</p>
              <ul className="mt-4 space-y-3 text-slate-500">
                <li><a href="/" className="hover:text-slate-900 transition-colors">Home</a></li>
                <li><a href="/funcionalidades" className="hover:text-slate-900 transition-colors">Funcionalidades</a></li>
                <li><a href="/sobre_nos" className="hover:text-slate-900 transition-colors">Sobre nós</a></li>
              </ul>
            </div>

            {/* Informações do projeto */}
            <div>
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">Projeto</p>
              <ul className="mt-4 space-y-3 text-slate-500">
                <li>Trabalho de Conclusão de Curso</li>
                <li>Etec João Belarmino (Amparo - SP)</li>
                <li>Orientação: Prof. Sergio Novais</li>
              </ul>
            </div>

          </div>

          {/* Linha final */}
          <div className="border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400">
              <p>© {ano} AUTONOMO+. Todos os direitos reservados.</p>
              <p>Feito por estudantes da Etec João Belarmino</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}