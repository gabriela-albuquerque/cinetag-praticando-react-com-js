# CineTag

CineTag é um projeto desenvolvido durante a formação em React da Alura, com o objetivo de criar uma aplicação para organização e exibição de vídeos e filmes favoritos.

## Funcionalidades

- **Página Inicial:** Exibe uma lista de vídeos obtidos de uma API.
- **Favoritos:** Permite ao usuário marcar ou desmarcar vídeos como favoritos.
- **Player:** Reprodução de vídeos a partir de suas URLs.
- **Roteamento:** Navegação entre diferentes páginas, incluindo uma página 404 personalizada.

## Tecnologias Utilizadas

- **React:** Biblioteca principal para criação da interface.
- **React Router:** Gerenciamento de rotas para criar uma aplicação de página única (SPA).
- **CSS Modules:** Estilização local para componentes.
- **Context API:** Gerenciamento de estado global para favoritos.

## Estrutura do Projeto

### Componentes Principais

- **Cabecalho:** Renderiza o cabeçalho da aplicação.
- **Rodape:** Exibe o rodapé.
- **Banner:** Mostra uma imagem representativa para cada página.
- **Card:** Componente reutilizável para exibição de vídeos.
- **Titulo:** Renderiza títulos estilizados para cada página.

### Contexto de Favoritos

O contexto de favoritos foi implementado utilizando a Context API do React. Este contexto permite:

- Adicionar ou remover vídeos da lista de favoritos.
- Compartilhar o estado de favoritos entre diferentes componentes da aplicação.

### Roteamento

A aplicação utiliza o React Router para gerenciar rotas:

- `/`: Página inicial com a lista de vídeos.
- `/favoritos`: Exibe os vídeos marcados como favoritos.
- `/:id`: Reproduz um vídeo específico no player.
- `/*`: Página 404 personalizada para rotas inexistentes.

### Integração com API

Os dados dos vídeos são obtidos de uma API simulada hospedada no [JSON Server](https://my-json-server.typicode.com/gabriela-albuquerque/cinetag-api/videos). As chamadas são realizadas com `fetch` e os dados são armazenados no estado local dos componentes.

## Conhecimentos Praticados

Durante o desenvolvimento do CineTag, foram praticados os seguintes conceitos:

1. **Componentização:** Criação de componentes reutilizáveis e organizados.
2. **Gerenciamento de Estado:** Uso de `useState` e Context API para controlar estados locais e globais.
3. **Ciclo de Vida de Componentes:** Uso de `useEffect` para realizar chamadas à API.
4. **Roteamento Dinâmico:** Configuração de rotas dinâmicas e aninhadas com React Router.
5. **Renderização Condicional:** Exibição de componentes com base em condições (ex.: tratamento de erros ao carregar vídeos).
6. **Estilização Modularizada:** Uso de CSS Modules para garantir escopo local de estilos.
7. **Boas Práticas:** Organização de código e separação de responsabilidades entre componentes.

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/cinetag.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
4. Acesse a aplicação em seu navegador:
   ```
   http://localhost:3000
   ```
