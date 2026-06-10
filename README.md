# 💻 devBills Web

Frontend da plataforma devBills, uma aplicação de gerenciamento financeiro pessoal desenvolvida para auxiliar usuários no controle de receitas, despesas e análise de gastos através de dashboards intuitivos e gráficos interativos.

Construído com React, TypeScript e Tailwind CSS, o projeto oferece uma experiência moderna, responsiva e totalmente integrada à **devBills API**.

---

## 📖 Sobre o Projeto

O devBills Web foi desenvolvido para proporcionar uma forma simples e eficiente de acompanhar a vida financeira. A aplicação permite registrar movimentações financeiras, acompanhar saldos, visualizar relatórios gráficos e analisar hábitos de consumo por categoria.

Toda a comunicação com os dados é realizada através da API devBills, garantindo segurança, escalabilidade e total separação entre frontend e backend.

---

## 🚀 Tecnologias Utilizadas

### Core & Compilador
*   **Framework:** React 19
*   **Linguagem:** TypeScript
*   **Build Tool:** Vite

### Estilização & UI
*   **Estilização:** Tailwind CSS 4
*   **Ícones:** Lucide React
*   **Feedbacks:** React Toastify

### Integração & Dados
*   **Roteamento:** React Router
*   **Requisições HTTP:** Axios
*   **Autenticação:** Firebase Authentication
*   **Gráficos:** Recharts

---

## 🏗️ Arquitetura do Projeto

A aplicação segue uma arquitetura modular baseada em componentes reutilizáveis:

```text
src/
├── assets/       # Imagens e recursos visuais estáticos
├── components/   # Componentes globais da interface (Button, Card, Input, etc.)
├── config/       # Configurações do Firebase e serviços externos
├── context/      # Gerenciamento global de estado (Autenticação)
├── layout/       # Estruturas de layout das páginas (Sidebar, Header, etc.)
├── pages/        # Páginas principais da aplicação
├── routes/       # Controle de navegação e proteção de rotas privadas
├── services/     # Camada responsável pela comunicação com a API (Axios)
├── types/        # Definições de tipos e interfaces do TypeScript
├── utils/        # Funções auxiliares (Formatação de datas e moedas)
├── App.tsx       # Componente raiz com o provedor de rotas
└── main.tsx      # Ponto de entrada do React
