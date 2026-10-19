# Portfólio Pessoal Retro (Anos 2000) - Heitor.dev

## 📖 Descrição do Projeto
Este projeto consiste no desenvolvimento de um portfólio web pessoal e blog com uma forte identidade visual inspirada na internet dos anos 2000 e nas clássicas janelas do Microsoft Internet Explorer. 

O objetivo não é apenas apresentar experiências, competências e links de contato, mas também resgatar a personalização e a autenticidade da "web antiga", onde o design refletia diretamente a personalidade do criador. O portfólio funciona como uma Single Page Application (SPA), permitindo uma navegação fluida entre as páginas de "Home", "Sobre Mim" e "Projetos" sem recarregar o navegador, e inclui funcionalidades dinâmicas como um leitor de música integrado e um gestor de projetos no estilo *timeline*.

## 🖼️ Imagens dos Protótipos
*(Nota: Substitua os links abaixo pelas imagens reais do protótipo gerado no Figma ou capturas de tela do site em funcionamento).*

* **Página Inicial (Blog & Music Player):**  
  ![Protótipo Home](./docs/prototipo-home.png)

* **Página Sobre Mim:**  
  ![Protótipo Sobre Mim](./docs/prototipo-sobre.png)

* **Página de Projetos:**  
  ![Protótipo Projetos](./docs/prototipo-projetos.png)

## 💻 Tecnologias Previstas
As seguintes ferramentas e tecnologias foram definidas para o desenvolvimento da aplicação:

* **Vue.js 3 (Composition API):** Framework JavaScript principal para a construção das interfaces dinâmicas e reativas.
* **Vite:** Ferramenta de build de frontend rápida e moderna.
* **TypeScript:** Adição de tipagem estática ao JavaScript para maior segurança no código e escalabilidade.
* **Tailwind CSS:** Framework de CSS utilitário utilizado para desenhar toda a interface retro, sombras e cores (CSS "Vanilla" simulado via classes).
* **Vue Router:** Gestor de rotas oficial do Vue para navegação estilo SPA.
* **Vercel:** Plataforma de hospedagem para deploy contínuo (requer configuração no `vercel.json` para histórico do Router).

## 🗂️ Estrutura Inicial do Site
A estrutura base do código está organizada da seguinte forma:

```text
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
```

## 🚀 Instruções de Instalação e Execução

Para rodar este projeto na sua máquina localmente, certifique-se de ter o **Node.js** instalado e siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O terminal mostrará a porta local (normalmente `http://localhost:5173/`). Clique no link para ver a aplicação a rodar.*

4. **Para gerar a versão de produção (Build):**
   ```bash
   npm run build
   ```