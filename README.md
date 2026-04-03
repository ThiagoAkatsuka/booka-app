# Booka — Marketplace de Agendamento de Serviços

Este repositório contém o front-end web do Booka, uma plataforma no modelo marketplace (multi-tenant) desenvolvida para conectar profissionais independentes a clientes que desejam agendar serviços de forma simples, segura e eficiente.

A aplicação foi construída com Angular e utiliza Tailwind CSS para oferecer uma interface moderna, responsiva e orientada à usabilidade.

## Instalação

Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd booka-frontend

Instale as dependências:

npm install

## Execução

Inicie o servidor de desenvolvimento:

ng serve

Acesse no navegador:

http://localhost:4200

## Fluxo de navegação (sem backend)

Mesmo sem o backend em execução, é possível testar a aplicação utilizando dados simulados.

Acesse a home (/) e realize uma busca  
Navegue até a página de exploração (/explorar)  
Selecione um profissional  
Acesse a tela de agendamento (/agendar/:id)  
Escolha serviço, data e horário  
Teste as telas de login e cadastro (/login e /cadastro)

## Integração com backend

O frontend está preparado para consumir uma API RESTful.

A URL base pode ser configurada em:

src/environments/environment.development.ts

Endpoint padrão:

http://localhost:3000/api/

## Considerações

O projeto foi estruturado para suportar crescimento e escalabilidade em um ambiente multi-tenant, com foco em organização de código, separação de responsabilidades e manutenção de uma boa experiência de uso mesmo em cenários de falha.