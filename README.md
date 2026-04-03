# Booka — Marketplace de Agendamento de Serviços

Este repositório contém o front-end web do Booka, uma plataforma no modelo marketplace (multi-tenant) desenvolvida para conectar profissionais independentes a clientes que desejam agendar serviços de forma simples, segura e eficiente.

A aplicação foi construída com Angular e utiliza Tailwind CSS para oferecer uma interface moderna, responsiva e orientada à usabilidade.

---

## Visão Geral

O sistema foi projetado com foco em experiência do usuário (UX) e resiliência, garantindo funcionamento consistente mesmo em cenários onde a API não está disponível.

A aplicação permite que usuários encontrem serviços, visualizem perfis de profissionais e realizem agendamentos de forma dinâmica, enquanto profissionais podem gerenciar sua presença na plataforma.

---

## Funcionalidades

### Vitrine dinâmica
As rotas principais (`/` e `/explorar`) funcionam como um mecanismo de busca que permite aos usuários localizar serviços com base em categoria e localização.

### Agendamento dinâmico
A rota `/agendar/:id` apresenta uma interface de agendamento totalmente dinâmica, onde:
- Os dados são carregados com base no profissional selecionado
- O calendário é gerado automaticamente
- Os serviços disponíveis são exibidos conforme o contexto

### Controle de acesso (RBAC)
O sistema possui controle de acesso baseado em papéis:
- CLIENTE
- PROFISSIONAL

O roteamento direciona usuários conforme seu perfil:
- Clientes acessam o fluxo de busca e agendamento
- Profissionais são direcionados para o dashboard

### Resiliência (Fallback UI)
A aplicação utiliza interceptadores de erro (`catchError`) nos serviços Angular.  
Caso a API esteja indisponível:
- Dados simulados são utilizados automaticamente
- A navegação continua funcional
- A interface não é comprometida

---

## Tecnologias

- Angular (Standalone Components)
- Tailwind CSS
- TypeScript
- HTML5
- Material Symbols Outlined
- Google Fonts (Inter)

---

## Pré-requisitos

- Node.js (versão 18 ou superior)
- Angular CLI

Instalação do Angular CLI:
```bash
npm install -g @angular/cli