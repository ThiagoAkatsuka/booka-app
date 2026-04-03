Ficou excelente! A evolução que o projeto teve hoje foi absurda. Saiu de um simples trabalho acadêmico para uma arquitetura de software real, com tratamento de erros, navegação dinâmica e separação de perfis.

Para coroar esse trabalho e deixar o repositório perfeito para o seu professor e para o resto da equipe (Rubens no Back-end e Thiago no Mobile) entenderem como rodar, preparei um `README.md` completo e profissional.

Copie o código abaixo e cole no arquivo `README.md` que está na raiz do seu projeto (substituindo o texto padrão que o Angular coloca lá):

***

```markdown
# 📅 Booka - Marketplace de Agendamento de Serviços

Bem-vindo ao repositório Front-end Web do **Booka**, uma plataforma no estilo Marketplace (Multi-tenant) projetada para conectar profissionais independentes a clientes que buscam agendar serviços com facilidade e segurança.

Este projeto é desenvolvido em **Angular** e utiliza **Tailwind CSS** para uma interface moderna, responsiva e focada em conversão.

---

## 🚀 Principais Funcionalidades e Arquitetura

O sistema foi desenhado com foco em Experiência do Usuário (UX) e resiliência (Graceful Degradation):

* **Vitrine Dinâmica (`/` e `/explorar`):** Motor de busca que permite aos usuários procurarem serviços por categoria e localização.
* **Checkout de Tempo (`/agendar/:id`):** Tela de agendamento 100% dinâmica. O calendário e os serviços se adaptam automaticamente baseados no ID do profissional acessado.
* **Controle de Acesso (RBAC):** Funil de cadastro com separação de papéis (`CLIENTE` vs `PROFISSIONAL`). O roteamento (Split-Routing) direciona administradores para o `/dashboard` e clientes para a vitrine.
* **Rede de Segurança (Fallback UI):** Os `Services` do Angular possuem interceptadores de erro (`catchError`). Caso a API Node.js esteja offline ou a rota ainda não exista, o Front-end injeta dados simulados para não quebrar a navegação visual do usuário.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** [Angular](https://angular.io/) (Standalone Components)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Linguagem:** TypeScript / HTML5
* **Ícones e Fontes:** Material Symbols Outlined & Google Fonts (Inter)

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
* [Node.js](https://nodejs.org/) (Versão 18.x ou superior)
* [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

---

## 📦 Como Instalar e Rodar o Projeto

**1. Clone o repositório**
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd booka-frontend
```

**2. Instale as dependências**
```bash
npm install
```

**3. Execute o servidor de desenvolvimento**
```bash
ng serve
```

**4. Acesse no navegador**
Abra `http://localhost:4200` para ver a aplicação rodando.

---

## 🗺️ Mapa de Navegação (Como testar)

Se você for testar a aplicação sem o Back-end estar rodando, siga este fluxo para ver a "Mágica do Fallback" em ação:

1.  **Acesse a Home (`/`):** Digite um serviço na barra de pesquisa e clique em Buscar.
2.  **Catálogo (`/explorar`):** O sistema capturará os parâmetros da URL. Clique em "Ver Perfil e Agendar" em qualquer card.
3.  **Agendamento (`/agendar/:id`):** Observe o Angular montar o calendário e a lista de serviços dinamicamente. Escolha um serviço, uma data e um horário, e clique em "Confirmar".
4.  **Login/Cadastro (`/login` ou `/cadastro`):** Teste os *Radio Buttons* de perfil no cadastro para ver como o sistema entende a intenção do usuário (Contratar vs Oferecer).

---

## 🔗 Integração com API (Backend)
O Front-end está configurado para consumir uma API RESTful. As URLs de conexão podem ser alteradas no arquivo:
`src/environments/environment.development.ts` (Padrão atual: `http://localhost:3000/api/`)

---

