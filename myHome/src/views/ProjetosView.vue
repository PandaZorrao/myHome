<script setup lang="ts">
import { ref } from 'vue'

// ==========================================
// ESTADO DOS PROJETOS (Lógica de Adicionar/Remover)
// ==========================================
const projetos = ref([
  {
    id: 3,
    data: 'Sexta-feira, 16 de outubro de 2026', // Estilo da imagem
    numero: '#003',
    nome: 'Vaivém V2',
    descricao: 'Plataforma abrangente para gestão de frotas e motoristas. Inclui relatórios detalhados, dashboard interativo e sistema de permissões. Gosto muito da cultura da internet dos anos 2000, onde o algoritmo não tinha planificado tudo.',
    tecnologias: 'Vue 3, Tailwind CSS',
    status: 'Em desenvolvimento',
    github: '#',
    imagem: '/imagem_projeto3.png'
  },
  {
    id: 2,
    data: 'Quarta-feira, 10 de maio de 2024',
    numero: '#002',
    nome: 'Autenticação Auth',
    descricao: 'Sistema completo de login e registo seguro utilizando tokens JWT. Foco em segurança e proteção de rotas privadas.\n\nAqui você vai encontrar coisas que gosto e decido salvo aqui, projetos pessoais meus.',
    tecnologias: 'Node.js, Express, JWT',
    status: 'Concluído',
    github: '#',
    imagem: '/imagem_projeto2.jpg'
  },
  {
    id: 1,
    data: 'Segunda-feira, 12 de março de 2023',
    numero: '#001',
    nome: 'Primeiro Script CSS',
    descricao: 'Os meus primeiros passos no desenvolvimento web. Um conjunto de scripts e estilos para personalizar páginas estáticas com animações simples.',
    tecnologias: 'HTML, CSS Vanilla',
    status: 'Concluído',
    github: '#',
    imagem: '/imagem_projeto1.gif'
  }
])

// Variáveis para o formulário de novo projeto
const mostrarFormulario = ref(false)
const novoProjeto = ref({
  nome: '',
  descricao: '',
  tecnologias: '',
  github: ''
})

function adicionarProjeto() {
  if (!novoProjeto.value.nome) {
    alert("O nome do projeto é obrigatório!")
    return
  }

  // Descobrir o próximo ID e Número
  const proximoId = projetos.value.length ? Math.max(...projetos.value.map(p => p.id)) + 1 : 1
  const numeroFormatado = `#${String(proximoId).padStart(3, '0')}`
  
  // Gerar data atual no formato extenso
  const dataAtual = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const dataFormatada = dataAtual.charAt(0).toUpperCase() + dataAtual.slice(1)

  // Adicionar ao início da lista (unshift)
  projetos.value.unshift({
    id: proximoId,
    data: dataFormatada,
    numero: numeroFormatado,
    nome: novoProjeto.value.nome,
    descricao: novoProjeto.value.descricao || 'Sem descrição.',
    tecnologias: novoProjeto.value.tecnologias || 'N/A',
    status: 'Em desenvolvimento',
    github: novoProjeto.value.github || '#',
    imagem: '/placeholder.png' // Imagem padrão
  })

  // Limpar e fechar formulário
  novoProjeto.value = { nome: '', descricao: '', tecnologias: '', github: '' }
  mostrarFormulario.value = false
}

function removerProjeto(id: number) {
  if (confirm("Tem certeza que deseja apagar este projeto?")) {
    projetos.value = projetos.value.filter(p => p.id !== id)
  }
}
</script>

<template>
  <div class="relative min-h-screen p-2 sm:p-4 flex justify-center items-start font-mono text-black">
    
    <!-- Fundo Xadrez -->
    <div class="fixed inset-0 -z-20 bg-neutral-900 bg-[url('/outra_imagem.jpg')] bg-repeat bg-[length:200px_200px]"></div>
    <div class="fixed inset-0 -z-10 bg-[url('/image_eda422.jpg')] bg-repeat bg-[length:200px_200px]" 
         style="
           mask-image: conic-gradient(#000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%); 
           mask-size: 400px 400px; 
           -webkit-mask-image: conic-gradient(#000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%); 
           -webkit-mask-size: 400px 400px;
         ">
    </div>

    <!-- Internet Explorer Frame -->
    <div class="relative z-10 w-full max-w-4xl bg-ie-bg border-ie-outset shadow-[10px_10px_0px_rgba(0,0,0,0.5)]">
      
      <!-- IE Title Bar -->
      <div class="bg-gradient-to-r from-ie-blue to-ie-blue-light text-white font-bold px-2 py-1 flex items-center justify-between text-xs select-none">
        <div class="flex items-center gap-1">
          <span class="text-yellow-300 italic font-bold">e</span>
          <span>heitor.dev :: projetos - Microsoft Internet Explorer</span>
        </div>
        <div class="flex gap-1">
          <button class="w-4 h-4 bg-ie-bg text-black border-ie-outset text-[10px] flex items-center justify-center font-bold active:border-ie-inset">_</button>
          <button class="w-4 h-4 bg-ie-bg text-black border-ie-outset text-[10px] flex items-center justify-center font-bold active:border-ie-inset">□</button>
          <button class="w-4 h-4 bg-ie-bg text-black border-ie-outset text-[10px] flex items-center justify-center font-bold active:border-ie-inset">X</button>
        </div>
      </div>

      <!-- IE Menu Bar -->
      <div class="flex gap-4 px-2 py-0.5 text-xs bg-ie-bg border-b border-ie-border-dark select-none">
        <span class="hover:bg-ie-blue hover:text-white px-1 cursor-pointer"><u>A</u>rquivo</span>
        <span class="hover:bg-ie-blue hover:text-white px-1 cursor-pointer"><u>E</u>ditar</span>
        <span class="hover:bg-ie-blue hover:text-white px-1 cursor-pointer"><u>E</u>xibir</span>
        <span class="hover:bg-ie-blue hover:text-white px-1 cursor-pointer">F<u>a</u>voritos</span>
        <span class="hover:bg-ie-blue hover:text-white px-1 cursor-pointer">Ferramen<u>t</u>as</span>
        <span class="hover:bg-ie-blue hover:text-white px-1 cursor-pointer">A<u>j</u>uda</span>
      </div>

      <!-- IE Address Bar -->
      <div class="flex items-center gap-2 px-2 py-1 bg-ie-bg border-b-2 border-ie-border-dark text-xs">
        <span class="text-gray-700 select-none">Endereço:</span>
        <div class="flex-1 bg-white border-ie-inset px-2 py-0.5 text-xs flex items-center gap-1">
          <span class="text-gray-400">🌐</span>
          <span class="text-black select-all">http://www.heitor.dev/projetos.php</span>
        </div>
        <button class="border-ie-outset px-2 py-0.5 bg-ie-bg font-bold flex items-center gap-1 active:border-ie-inset">
          <span class="text-green-600">➔</span> Ir
        </button>
      </div>

      <!-- WEBPAGE INNER CONTENT AREA -->
      <div class="bg-[#80a4df] p-4 sm:p-6 text-sm leading-relaxed border-t-2 border-black min-h-[500px]">
        
        <!-- HEADER DE NAVEGAÇÃO -->
        <nav class="flex flex-wrap gap-4 mb-6 pb-4 border-b-2 border-black font-bold text-base">
          <RouterLink to="/" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Home</RouterLink>
          <RouterLink to="/projetos" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Projetos</RouterLink>
          <a href="#" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Arte</a>
          <a href="#" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Textos</a>
          <a href="#" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Arquivos</a>
          <RouterLink to="/sobre" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Sobre Mim</RouterLink>
        </nav>

        <!-- PAINEL DE ADMINISTRAÇÃO (Adicionar Projeto) -->
        <div class="mb-8">
          <button @click="mostrarFormulario = !mostrarFormulario" class="bg-ie-bg border-ie-outset px-4 py-1 text-xs font-bold font-sans active:border-ie-inset">
            {{ mostrarFormulario ? '[-] Cancelar Novo Projeto' : '[+] Adicionar Novo Projeto' }}
          </button>
          
          <div v-if="mostrarFormulario" class="mt-2 border-2 border-black bg-gray-100 p-4 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
            <h3 class="font-bold mb-3 uppercase border-b border-gray-400 pb-1">Novo Projeto</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold mb-1">Nome:</label>
                <input v-model="novoProjeto.nome" type="text" class="w-full border-ie-inset px-2 py-1 bg-white text-sm" />
              </div>
              <div>
                <label class="block text-xs font-bold mb-1">Tecnologias (separadas por vírgula):</label>
                <input v-model="novoProjeto.tecnologias" type="text" class="w-full border-ie-inset px-2 py-1 bg-white text-sm" />
              </div>
              <div class="md:col-span-2">
                <label class="block text-xs font-bold mb-1">Descrição:</label>
                <textarea v-model="novoProjeto.descricao" rows="3" class="w-full border-ie-inset px-2 py-1 bg-white text-sm"></textarea>
              </div>
              <div class="md:col-span-2">
                <label class="block text-xs font-bold mb-1">Link do GitHub:</label>
                <input v-model="novoProjeto.github" type="text" class="w-full border-ie-inset px-2 py-1 bg-white text-sm" />
              </div>
            </div>
            <div class="mt-4 text-right">
              <button @click="adicionarProjeto" class="bg-ie-bg border-ie-outset px-6 py-1 font-bold font-sans active:border-ie-inset">
                Gravar / Publicar
              </button>
            </div>
          </div>
        </div>

        <!-- LISTA DE PROJETOS (Estilo Blog anos 2000) -->
        <div class="space-y-10 max-w-3xl mx-auto">
          
          <div v-for="projeto in projetos" :key="projeto.id" class="border border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            
            <!-- Header do Post (Barra Azul) -->
            <div class="bg-[#000080] text-white font-bold px-3 py-1 flex justify-between items-center text-xs sm:text-sm">
              <span>{{ projeto.data }}</span>
              <span>{{ projeto.numero }}</span>
            </div>

            <!-- Corpo do Post -->
            <div class="p-5">
              <h2 class="font-bold text-xl mb-4">"{{ projeto.nome }}"</h2>

              <!-- Bloco de Informações (Baseado no Ouvindo/Humor) -->
              <div class="border-l-2 border-[#4169E1] bg-[#f4f4f4] p-3 text-xs sm:text-sm mb-5 w-fit pr-10">
                <div class="mb-1"><span class="font-bold">Tecnologias:</span> {{ projeto.tecnologias }}</div>
                <div><span class="font-bold">Status:</span> {{ projeto.status }}</div>
              </div>

              <!-- Descrição -->
              <p class="leading-relaxed mb-6 whitespace-pre-wrap">{{ projeto.descricao }}</p>

              <!-- Imagem do Projeto (Com borda simples) -->
              <div class="border border-black p-1 bg-gray-50 mb-6 max-w-lg">
                <img :src="projeto.imagem" :alt="'Screenshot do ' + projeto.nome" class="w-full h-auto object-cover" />
              </div>

              <!-- Assinatura clássica -->
              <p class="italic text-gray-700 text-sm">
                xoxo,<br>
                Heitor
              </p>
            </div>

            <!-- Rodapé do Post (Links) -->
            <div class="border-t border-black px-3 py-1 text-right text-[11px] sm:text-xs bg-gray-50 font-sans">
              <button @click="removerProjeto(projeto.id)" class="text-blue-700 hover:text-red-600 hover:bg-yellow-100 underline cursor-pointer bg-transparent border-none p-0 uppercase">Remover Projeto</button>
              <span class="mx-2 text-black font-bold">//</span>
              <a :href="projeto.github" target="_blank" class="text-blue-700 hover:text-red-600 hover:bg-yellow-100 underline uppercase">Link Repositório GitHub</a>
            </div>

          </div>

        </div>

      </div>

      <!-- IE Status Bar -->
      <div class="bg-ie-bg border-t border-ie-border-dark px-2 py-0.5 text-[11px] text-gray-700 flex justify-between select-none font-sans">
        <div class="flex items-center gap-1">
          <span class="text-blue-800">e</span> Concluído
        </div>
        <div class="flex gap-4">
          <span>{{ projetos.length }} Projetos listados</span>
          <span>100%</span>
        </div>
      </div>

    </div>
  </div>
</template>
