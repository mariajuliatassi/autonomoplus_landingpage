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
        

      <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100 shadow-xl shadow-blue-900/10 px-6 py-5 sm:py-7">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

          <a href="/" className="flex items-center shrink-0">
            <img
              src="/autonomologo-header.png"
              alt="Logo autonomo+"
              className="h-9 sm:h-14 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-10 text-base lg:text-lg font-semibold text-slate-500">
            <a href="/" className="relative py-1 hover:text-slate-900 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Home</a>
            <a href="/funcionalidades" className="relative py-1 hover:text-slate-900 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Funcionalidades</a>
            <a href="/sobre_nos" className="relative py-1 hover:text-slate-900 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">Sobre nós</a>
          </div>

          <div>
            <a
              href="https://autonomo-frontend-v2.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full px-5 py-2.5 sm:px-7 sm:py-3 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
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