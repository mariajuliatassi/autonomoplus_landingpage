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
  return (
    <html
      lang="pt-BR" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        

      <nav className="w-full bg-white backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 px-1 py-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          <div className="flex items-center space-x-2">
            <img
              src="/autonomologo.png" 
              alt="Logo autonomo+"
              className="w-56 h-46 object-contain" 
            />
          </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
              <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
              <a href="/funcionalidades" className="hover:text-slate-900 transition-colors">Funcionalidades</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Sobre nós</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Documentação</a>
            </div>

            <div>
              <a 
                href="https://autonomo-frontend-v2.vercel.app/login" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full px-5 py-2.5 transition-all shadow-md shadow-blue-100"
              >
                Site oficial
              </a>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}