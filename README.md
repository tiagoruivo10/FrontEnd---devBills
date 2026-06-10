# 💰 devBills Web

Frontend da plataforma **devBills**, uma aplicação de gerenciamento financeiro pessoal desenvolvida para auxiliar usuários no controle de receitas, despesas e análise de gastos através de dashboards intuitivos e gráficos interativos.

Construído com React, TypeScript e Tailwind CSS, o projeto oferece uma experiência moderna, responsiva e integrada à API devBills.

---

# 📖 Sobre o Projeto

O devBills Web foi desenvolvido para proporcionar uma forma simples e eficiente de acompanhar a vida financeira.

A aplicação permite registrar movimentações financeiras, acompanhar saldos, visualizar relatórios gráficos e analisar hábitos de consumo por categoria.

Toda a comunicação com os dados é realizada através da API devBills, garantindo segurança, escalabilidade e separação entre frontend e backend.

---

# 🚀 Tecnologias Utilizadas

## Frontend

* React 19
* TypeScript
* Vite

## Estilização

* Tailwind CSS 4

## Roteamento

* React Router

## Requisições HTTP

* Axios

## Autenticação

* Firebase Authentication

## Visualização de Dados

* Recharts

## Feedback ao Usuário

* React Toastify

## Ícones

* Lucide React

---

# ✨ Funcionalidades

## Autenticação

* Login utilizando conta Google
* Persistência de sessão
* Rotas privadas protegidas
* Integração com Firebase Authentication

## Dashboard Financeiro

* Visualização do saldo atual
* Total de receitas
* Total de despesas
* Resumo financeiro mensal
* Análise por categoria

## Relatórios Gráficos

* Gráfico de despesas por categoria
* Gráfico de movimentações mensais
* Indicadores financeiros visuais

## Gerenciamento de Transações

* Cadastro de receitas
* Cadastro de despesas
* Consulta de movimentações
* Exclusão de transações
* Histórico completo

## Filtros Inteligentes

* Seleção por mês
* Seleção por ano
* Busca de movimentações
* Atualização dinâmica dos dados

## Experiência do Usuário

* Interface responsiva
* Navegação intuitiva
* Feedback visual para operações
* Componentização reutilizável

---

# 🏗️ Arquitetura do Projeto

A aplicação segue uma arquitetura modular baseada em componentes.

```text
src/
├── assets/
├── components/
├── config/
├── context/
├── layout/
├── pages/
├── routes/
├── services/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## Assets

Armazena imagens e recursos visuais.

## Components

Componentes reutilizáveis da interface.

Exemplos:

* Button
* Card
* Input
* Select
* Header
* Footer
* MonthYearSelect

## Context

Gerenciamento global de autenticação.

## Pages

Páginas principais da aplicação.

* Home
* Login
* Dashboard
* Transactions
* TransactionsForm

## Services

Camada responsável pela comunicação com a API.

## Routes

Controle de navegação e proteção de rotas.

## Utils

Funções auxiliares para formatação de datas e valores monetários.

---

# 📱 Páginas da Aplicação

## Home

Landing page responsável pela apresentação da plataforma.

### Destaques

* Controle financeiro
* Relatórios visuais
* Organização por categorias
* Histórico de transações

---

## Login

Tela de autenticação integrada ao Firebase.

### Recursos

* Login com Google
* Persistência de sessão
* Redirecionamento automático

---

## Dashboard

Painel principal de acompanhamento financeiro.

### Informações Exibidas

* Saldo atual
* Receitas totais
* Despesas totais
* Gastos por categoria
* Histórico mensal

---

## Transações

Listagem completa das movimentações financeiras.

### Recursos

* Pesquisa de registros
* Filtros por período
* Exclusão de movimentações
* Visualização organizada

---

## Nova Transação

Cadastro de movimentações financeiras.

### Recursos

* Receita
* Despesa
* Seleção de categoria
* Validação de dados
* Integração com API

---

# 🔐 Segurança

A autenticação é realizada através do Firebase Authentication.

Principais benefícios:

* Login seguro
* Tokens de autenticação
* Controle de acesso às rotas privadas
* Integração com backend protegido

---

# 📊 Dashboard Analítico

A aplicação utiliza a biblioteca Recharts para construção de gráficos financeiros.

Indicadores disponíveis:

* Distribuição de gastos por categoria
* Evolução financeira mensal
* Comparação entre receitas e despesas
* Percentual de participação por categoria

---

# 🌐 Integração com Backend

O frontend consome os serviços disponibilizados pela API devBills.

Principais recursos consumidos:

* Categorias
* Transações
* Resumo financeiro
* Histórico mensal
* Autenticação

---

# ⚙️ Instalação

## Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

## Entrar na pasta do projeto

```bash
cd devBills-web
```

## Instalar dependências

```bash
npm install
```

ou

```bash
yarn install
```

---

# 🔐 Variáveis de Ambiente

Crie um arquivo:

```env
.env
```

Exemplo:

```env
VITE_API_URL=http://localhost:3000

VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

# ▶️ Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

---

# 📦 Build de Produção

Gerar versão otimizada:

```bash
npm run build
```

Visualizar build localmente:

```bash
npm run preview
```

---

# 🎯 Objetivos do Projeto

* Desenvolver uma interface moderna utilizando React.
* Aplicar conceitos avançados de componentização.
* Integrar frontend e backend através de APIs REST.
* Trabalhar com autenticação segura utilizando Firebase.
* Criar dashboards financeiros com visualização de dados.
* Aplicar boas práticas de desenvolvimento utilizando TypeScript.

---

# 👨‍💻 Autor

Desenvolvido por Tiago Ruivo.

Projeto desenvolvido para compor portfólio profissional e demonstrar conhecimentos em React, TypeScript, Tailwind CSS, Firebase Authentication, consumo de APIs REST e visualização de dados.
