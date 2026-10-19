

📖 myHome

Este projeto consiste no desenvolvimento de um portfólio web pessoal e blog com uma forte identidade visual inspirada na internet dos anos 2000 e nas clássicas janelas do Microsoft Internet Explorer.


🖼️ Imagens dos Protótipos


Página Inicial (Blog & Music Player):(images/HomeView.png)

Página Sobre Mim:(images/AboutView.png)

Página de Projetos:(images/ProjetosView.png)

💻 Tecnologias Previstas

As seguintes ferramentas e tecnologias foram definidas para o desenvolvimento da aplicação:

Vue.js 3 (Composition API): Framework JavaScript principal para a construção das interfaces dinâmicas e reativas.

Vite: Ferramenta de build de frontend rápida e moderna.

TypeScript: Adição de tipagem estática ao JavaScript para maior segurança no código e escalabilidade.

Tailwind CSS: Framework de CSS utilitário utilizado para desenhar toda a interface retro, sombras e cores (CSS "Vanilla" simulado via classes).

Vue Router: Gestor de rotas oficial do Vue para navegação estilo SPA.

Vercel: Plataforma de hospedagem para deploy contínuo (requer configuração no vercel.json para histórico do Router).

🗂️ Estrutura Inicial do Site

A estrutura base do código está organizada da seguinte forma:

/
├── public/                 # Imagens estáticas (fotos de perfil, ícones, músicas mp3, texturas de fundo)
├── src/
│   ├── assets/             # Arquivos CSS globais (ex: Tailwind directives)
│   ├── router/
│   │   └── index.ts        # Mapeamento das rotas (/sobre, /projetos, /)
│   ├── views/
│   │   ├── HomeView.vue    # Layout principal com feed estilo blog e leitor de música dinâmico
│   │   ├── AboutView.vue   # Apresentação do autor, experiências, links e contatos
│   │   └── ProjectsView.vue# Linha do tempo interativa de projetos (com opções de adicionar/remover)
│   ├── App.vue             # Componente raiz que contém o <RouterView>
│   └── main.ts             # Ponto de entrada da aplicação, onde o Vue e o Router são instanciados
├── vercel.json             # Regras de reescrita de rotas para o deploy na Vercel
├── tailwind.config.js      # Configurações de design system personalizadas (cores do IE)
└── package.json            # Dependências do projeto e scripts de execução


🚀 Instruções de Instalação e Execução

Para rodar este projeto na sua máquina localmente, certifique-se de ter o Node.js instalado e siga os passos abaixo:

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


O terminal mostrará a porta local (normalmente http://localhost:5173/). Clique no link para ver a aplicação a rodar.

Para gerar a versão de produção (Build):

npm run build
