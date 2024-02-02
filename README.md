# Coffee Delivery - Desafio Ignite

![Coffee Delivery](./assets/banner.jpeg)

Este projeto é um desafio do curso Ignite da Rocketseat. O objetivo é criar uma aplicação completa de delivery de café, utilizando React, TypeScript e as melhores práticas de desenvolvimento.

## Sobre o Projeto

A aplicação Coffee Delivery permite que os usuários:

- Naveguem por um catálogo de cafés: com fotos, descrições e preços.
- Personalizem seus pedidos: escolhendo o tipo de café, moagem, quantidade e outros adicionais.
- Adicione pedidos ao carrinho: visualizando o total e podendo editar ou remover itens.
- Façam login e se cadastrem: para salvar seus endereços e informações de pagamento.
- Concluam a compra: escolhendo o endereço de entrega e forma de pagamento.
- Acompanhem o status do pedido: desde a confirmação até a entrega.

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind
- React Router
- Context API

## Como Executar o Projeto

1. Clone o repositório:

  ```bash
  git clone https://github.com/FabioFiorita/ignite-challenge-reactjs-coffee-delivery.git
  ```

2. Acesse a pasta do projeto:

  ```bash
  cd ignite-challenge-reactjs-coffee-delivery
  ```
  3. Instale as dependências:

  ```bash
  npm install
  ```

4. Execute o projeto:

  ```bash
  npm run dev
  ```

5. Agora, abra o navegador e navegue até ```http://localhost:3000/``` para ver a aplicação em execução.

## Estrutura do Projeto
O projeto segue a estrutura padrão de um projeto React com Typescript:
- [src](./src/): pasta onde se encontra o código fonte da aplicação
  - [components](./src/components/): Este diretório contém todos os componentes React utilizados na aplicação.
  - [contexts](./src/contexts/): Este diretório contém os contextos utilizados na aplicação.
  - [pages](./src/pages/): Este diretório contém as páginas da aplicação.
  - [layouts](./src/layouts/): Este diretório contém os layouts da aplicação.
  - [utils](./src/utils/): Este diretório contém funções utilitárias utilizadas na aplicação.
  - [App.tsx](./src/App.tsx): Este é o componente principal da aplicação.
  - [main.tsx](./src/main.tsx): Este é o ponto de entrada da aplicação.
- [package.json](./package.json): Arquivo de configuração do NPM.
- [tailwind.config.js](./tailwind.config.js): Arquivo de configuração do Tailwind CSS.