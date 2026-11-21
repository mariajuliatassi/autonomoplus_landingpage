# AUTONOMO+ | Landing Page

> Gerencie seu lucro com clareza.

Landing page de divulgação do **AUTONOMO+**, um sistema criado para ajudar profissionais autônomos a organizar atendimentos, clientes, despesas e pagamentos, e acompanhar o lucro real do seu trabalho.

🔗 **Sistema oficial:** [autonomo-frontend-v2.vercel.app](https://autonomo-frontend-v2.vercel.app/login)

---

## 🎓 Sobre o projeto

O AUTONOMO+ é o Trabalho de Conclusão de Curso do Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas da **Etec João Belarmino (Amparo - SP)**, orientado pelo **Prof. Sergio Novais**.

- Foco em atendimentos recorrentes
- Lucro real calculado automaticamente
- Feito para uso no celular, em campo

---

## 📄 Páginas

| Página | Rota | Conteúdo |
| --- | --- | --- |
| Home | `/` | Apresentação do sistema, imagem do dashboard, botão para as funcionalidades e seção "Sobre o projeto" com as tecnologias utilizadas |
| Funcionalidades | `/funcionalidades` | Cards com os principais recursos do sistema |
| Sobre nós | `/sobre_nos` | Cards com os integrantes da equipe, suas funções e redes |

Todas as páginas compartilham o mesmo header (logo, navegação e botão para o site oficial) e o mesmo rodapé.

---

## ⚙️ Funcionalidades do sistema

- Cálculo de lucro
- Organização de rotas
- Cadastro de clientes
- Cadastro de produtos
- Cadastro de atendimentos
- Gerenciamento de pagamentos
- Cadastro de despesas
- Criação de lembretes
- Dashboard
- Notificações

---

## 🛠️ Tecnologias

### Landing page

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)

### Sistema AUTONOMO+

React · TypeScript · Tailwind CSS · Node.js · MySQL · Pusher · Google OAuth · Vercel · Aiven

---

## 🚀 Como rodar o projeto

**Pré-requisitos:** [Node.js](https://nodejs.org) 20.9 ou superior e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/mariajuliatassi/autonomoplus_landingpage.git

# 2. Entre na pasta do projeto
cd autonomoplus_landingpage

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000) no navegador.

> **Windows / PowerShell:** se aparecer o erro *"a execução de scripts foi desabilitada neste sistema"*, use `npm.cmd run dev` ou rode uma vez `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

### Scripts disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Roda a versão de produção (depois do `build`) |
| `npm run lint` | Verifica o código com o ESLint |

---

## 📁 Estrutura de pastas

```
autonomoplus_landingpage/
├── public/                  # Imagens: logo, gráfico do dashboard e fotos da equipe
└── src/
    └── app/
        ├── layout.js        # Header e rodapé (compartilhados por todas as páginas)
        ├── page.js          # Home
        ├── globals.css      # Estilos globais e configuração do Tailwind
        ├── funcionalidades/
        │   └── page.js      # Página de funcionalidades
        └── sobre_nos/
            └── page.js      # Página da equipe
```

---

## 👥 Equipe

| Integrante | Função | Links |
| --- | --- | --- |
| Pedro Santos | Full-Stack Developer | [LinkedIn](https://www.linkedin.com/in/pedro-hrsantos) · [GitHub](https://github.com/DevPH-Santos) |
| Maria Júlia Tassi | Front-end & Database Developer | [LinkedIn](https://linkedin.com/in/mariajuliatasi) · [GitHub](https://github.com/mariajuliatasi) |
| Lívia Gabrielly Oliveira | Analista de qualidade & Modelagem de dados | [LinkedIn](https://linkedin.com/in/liviagabrielly) |
| Victoria da Silva | Documentação | — |
| Emanuel Muzy | Diário de bordo | — |

**Orientação:** Prof. Sergio Novais

---

<p align="center">
  Feito por estudantes da Etec João Belarmino · Amparo - SP
</p>
