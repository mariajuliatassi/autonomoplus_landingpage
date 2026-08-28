export default function Funcionalidades() {
  return (
    <section className="bg-white min-h-screen w-full flex flex-col items-center pt-20 pb-12 px-6 text-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl">
        Tudo o que você <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">precisa.</span>
      </h1>

      <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
        Funcionalidades pensadas por quem entende a rotina dos autônomos, garantindo um gerenciamento real e simplificado.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">

        {/* Cálculo de lucro */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Cálculo de lucro</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Cálculo automático do lucro mensal com base em receitas e despesas cadastradas.</p>
          </div>
        </div>

        {/* Organização de rotas */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Organização de rotas</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Organize as suas rotas do dia de forma eficiente.</p>
          </div>
        </div>

        {/* Cadastro de clientes */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Cadastro de clientes</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Cadastre seus clientes com nome, frequência, observações, endereço, telefone e status.</p>
          </div>
        </div>

        {/* Cadastro de produtos */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Cadastro de produtos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Cadastre os produtos utilizados nos atendimentos.</p>
          </div>
        </div>

        {/* Cadastro de atendimentos */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Cadastro de atendimentos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Cadastre os atendimentos realizados na semana.</p>
          </div>
        </div>

        {/* Gerenciamento de pagamentos */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Gerenciamento de pagamentos</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Gerencie os pagamentos em total recebido, valor a receber e pagamentos em atraso.</p>
          </div>
        </div>

        {/* Cadastro de despesas */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Cadastro de despesas</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Cadastre suas despesas para uma melhor organização financeira.</p>
          </div>
        </div>

        {/* Criação de Lembretes */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Criação de Lembretes</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Crie lembretes para casos que talvez estivessem fora do planejamento.</p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Dashboard</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Dashboard com todas informações de lucro, total de atendimentos, clientes e um gráfico para acompanhar seu crescimento!</p>
          </div>
        </div>

        {/* Notificações */}
        <div className="max-w-md bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Notificações</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Notificações automáticas quando houver atraso de clientes.</p>
          </div>
        </div>

      </div>
    </section>
  );
}