<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb
} from 'radix-vue'

// Shoutbox Interactive State
const shoutboxName = ref('')
const shoutboxMsg = ref('')
const comments = ref([
  { id: 1, user: 'lorem_user', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, user: 'ipsum_fan', text: 'Pellentesque habitant morbi tristique senectus et netus.' },
  { id: 3, user: 'dolor_sit', text: 'Aenean commodo ligula eget dolor. Aenean massa.' },
  { id: 4, user: 'amet_99', text: 'Donec pede justo, fringilla vel, aliquet nec.' }
])

function submitShout() {
  if (!shoutboxMsg.value.trim()) return
  comments.value.push({
    id: Date.now(),
    user: shoutboxName.value.trim() || 'anonimo',
    text: shoutboxMsg.value.trim()
  })
  shoutboxMsg.value = ''
}
const playlist = ref([
  {
    id: 1,
    title: 'A estos hombres tristes',
    artist: 'Almendra',
    audioUrl: '/musica1.mp3', // Nome do ficheiro MP3 na pasta public
    imageUrl: '/miyako1.jpg' // A capa que adicionámos
  },
  {
    id: 2,
    title: 'Fascination Street',
    artist: 'The Cure',
    audioUrl: '/musica2.mp3', // A sua segunda música
    imageUrl: '/capa_the_cure.jpg' // Imagem da segunda música
  },
  {
    id: 3,
    title: 'Everlong',
    artist: 'Foo Fighters',
    audioUrl: '/musica3.mp3',
    imageUrl: '/capa_foo.jpg'
  }
])

const currentTrackIndex = ref(0)
// Computed property para saber sempre qual é a música atual
const currentTrack = computed(() => playlist.value[currentTrackIndex.value])

const isPlaying = ref(false)
const progress = ref(0)
const audioRef = ref<HTMLAudioElement | null>(null)

function togglePlay() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play()
  }
  isPlaying.value = !isPlaying.value
}

function updateProgress(e: Event) {
  const audio = e.target as HTMLAudioElement
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100
  }
}

// Função para mudar a música (Avançar ou Recuar)
async function changeTrack(direction: 'next' | 'prev') {
  if (direction === 'next') {
    // Se estiver na última, volta para a primeira
    currentTrackIndex.value = (currentTrackIndex.value + 1) % playlist.value.length
  } else {
    // Se estiver na primeira, vai para a última
    currentTrackIndex.value = (currentTrackIndex.value - 1 + playlist.value.length) % playlist.value.length
  }
  
  progress.value = 0 // Reinicia a barra
  
  // Se já estava a tocar, continua a tocar a nova música automaticamente
  if (isPlaying.value) {
    await nextTick() // Espera o Vue atualizar a tag <audio> com a nova música
    if (audioRef.value) {
      audioRef.value.play()
    }
  }
}
</script>

<template>
 <div class="relative min-h-screen p-2 sm:p-4 flex justify-center items-start font-mono">
    
    <!-- Fundo Xadrez (mantido) -->
    <div class="fixed inset-0 -z-20 bg-neutral-900 bg-[url('/elliot1.jpg')] bg-repeat bg-[length:200px_200px]"></div>
    <div class="fixed inset-0 -z-10 bg-[url('/mbv1.jpg')] bg-repeat bg-[length:200px_200px]" 
         style="
           mask-image: conic-gradient(#000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%); 
           mask-size: 400px 400px; 
           -webkit-mask-image: conic-gradient(#000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%); 
           -webkit-mask-size: 400px 400px;
         ">
    </div>

    <!-- Internet Explorer Frame -->
    <div class="relative z-10 w-full max-w-6xl bg-ie-bg border-ie-outset shadow-[10px_10px_0px_rgba(0,0,0,0.5)] text-black">      <!-- IE Title Bar -->
      <div class="bg-gradient-to-r from-ie-blue to-ie-blue-light text-white font-bold px-2 py-1 flex items-center justify-between text-xs select-none">
        <div class="flex items-center gap-1">
          <span class="text-yellow-300 italic font-bold">e</span>
          <span>heitor.dev :: blog - Microsoft Internet Explorer</span>
        </div>
        <div class="flex gap-1">
          <button class="w-4 h-4 bg-ie-bg text-black border-ie-outset text-[10px] leading-none flex items-center justify-center font-bold active:border-ie-inset">_</button>
          <button class="w-4 h-4 bg-ie-bg text-black border-ie-outset text-[10px] leading-none flex items-center justify-center font-bold active:border-ie-inset">□</button>
          <button class="w-4 h-4 bg-ie-bg text-black border-ie-outset text-[10px] leading-none flex items-center justify-center font-bold active:border-ie-inset">X</button>
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

      <!-- IE Navigation Bar -->
      <div class="flex items-center gap-2 px-2 py-1 bg-ie-bg border-b border-ie-border-dark text-xs overflow-x-auto select-none">
        <button class="flex items-center gap-1 border-ie-outset px-1.5 py-0.5 bg-ie-bg active:border-ie-inset">
          <span class="text-green-700 font-bold">◄</span> Voltar
        </button>
        <button class="flex items-center gap-1 border-ie-outset px-1 py-0.5 bg-ie-bg active:border-ie-inset">
          <span class="text-green-700 font-bold">►</span>
        </button>
        <button class="border-ie-outset px-1.5 py-0.5 bg-ie-bg active:border-ie-inset text-red-600 font-bold">✖</button>
        <button class="border-ie-outset px-1.5 py-0.5 bg-ie-bg active:border-ie-inset text-green-600 font-bold">↻</button>
        <button class="border-ie-outset px-1.5 py-0.5 bg-ie-bg active:border-ie-inset">🏠</button>
        <div class="h-4 w-px bg-gray-500 mx-1"></div>
        <button class="border-ie-outset px-1.5 py-0.5 bg-ie-bg active:border-ie-inset">🔍 Pesquisar</button>
        <button class="border-ie-outset px-1.5 py-0.5 bg-ie-bg active:border-ie-inset">⭐ Favoritos</button>
        <button class="border-ie-outset px-1.5 py-0.5 bg-ie-bg active:border-ie-inset">📜 Histórico</button>
      </div>

      <!-- IE Address Bar -->
      <div class="flex items-center gap-2 px-2 py-1 bg-ie-bg border-b-2 border-ie-border-dark text-xs">
        <span class="text-gray-700 select-none">Endereço:</span>
        <div class="flex-1 bg-white border-ie-inset px-2 py-0.5 text-xs flex items-center gap-1">
          <span class="text-gray-400">🌐</span>
          <span class="text-black select-all">http://www.heitor.dev/blog/index.php</span>
        </div>
        <button class="border-ie-outset px-2 py-0.5 bg-ie-bg font-bold flex items-center gap-1 active:border-ie-inset">
          <span class="text-green-600">➔</span> Ir
        </button>
      </div>

      <!-- ========================================== -->
      <!-- WEBPAGE INNER CONTENT AREA                 -->
      <!-- ========================================== -->
      <!-- REMOVIDO: font-mono e font-letter daqui -->
      <div class="bg-blue-500/50 text-black p-3 sm:p-4 text-xs leading-relaxed">
        
        <!-- TOP LAYOUT: 3 COLUMNS -->
        <div class="flex flex-col md:flex-row gap-4">
          
          <!-- 1. LEFT SIDEBAR (Navegação & Quote) -->
          <!-- REMOVIDO: font-letter daqui -->
          <aside class="w-full md:w-72 shrink-0 flex flex-col min-h-full">
            <div class="border border-black bg-gray-100 p-4 text-center shadow-[2px_2px_0px_#ccc] flex flex-col h-full flex-1">
              
              <div class="border border-gray-400 bg-white h-48 flex justify-center items-center mb-8 overflow-hidden">
                <img src="/yui1.jpg" alt="Foto do Heitor" class="w-full h-full object-cover colored" />
              </div>

              <!-- Índices (Fonte corrigida e layout ajustado) -->
              <nav class="flex flex-col space-y-5 text-left px-4 font-bold text-lg mb-8 border-l-4 border-black">
                <RouterLink to="/" class="text-blue-700 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase block tracking-wide">Home</RouterLink>                
                <RouterLink to="/projetos" class="text-blue-700 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase block tracking-wide">Projetos</RouterLink>
                <a href="#" class="text-blue-700 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase block tracking-wide">Arte</a>
                <a href="#" class="text-blue-700 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase block tracking-wide">Textos</a>
                <a href="#" class="text-blue-700 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase block tracking-wide">Arquivos</a>
                <RouterLink to="/sobre" class="text-blue-700 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase block tracking-wide">Sobre Mim</RouterLink>
              </nav>

              <hr class="border-gray-300 mb-6">

              <!-- Quote (Apenas itálico, herdará Letter Gothic) -->
              <p class="italic text-gray-700 text-base leading-relaxed px-2 text-center break-words">
                "Die Philosophen haben die Welt nur verschieden interpretiert; es kommt aber darauf an, sie zu verändern."
              </p>
            </div>
          </aside>
          <!-- 2. MAIN CONTENT (Apenas Posts) -->
          <main class="flex-1 flex flex-col gap-4 min-w-0">
            
            <!-- ANNOUNCEMENT TICKER -->
            <div class="bg-yellow-50 border border-yellow-400 text-black px-3 py-1 text-[11px] flex flex-wrap items-center gap-1 shadow-sm">
              <span class="text-red-600 font-bold uppercase">NOVO!</span> ★ Saiu o post do 
              <a href="#" class="text-blue-700 underline hover:text-red-600">Lorem Ipsum Dolor</a> ★ Assine meu 
              <a href="#" class="text-blue-700 underline hover:text-red-600">guestbook!!</a>
            </div>

            <!-- BLOG POST 1 -->
            <article class="border border-black bg-white shadow-[2px_2px_0px_#ccc]">
              <div class="p-3 space-y-3">
                <img src="/fn10.jpg" alt="Heitor" class="w-full h-full object-cover" />
              </div>
              <div class="bg-gray-100 px-3 py-1.5 border-t border-black text-[10px] text-gray-700 flex justify-end gap-2">
                <span>Postado por <a href="#" class="text-blue-700 underline hover:text-red-600">Heitor</a> às 21:15</span> //
                <a href="#" class="text-blue-700 underline hover:text-red-600">3 comentários</a> //
                <a href="#" class="text-blue-700 underline hover:text-red-600">link permanente</a>
              </div>
            </article>

            <article class="border border-black bg-white shadow-[2px_2px_0px_#ccc]">
              <div class="bg-ie-blue text-white px-2 py-1 font-bold text-xs flex justify-between">
                <span>Sexta-feira, 16 de outubro de 2026</span>
                <span>#001</span>
              </div>
              <div class="p-3 space-y-3">
                <h2 class="text-sm font-bold text-black">"Nao repare na bagunca ainda esta em desenvolvimento"</h2>
                
                <div class="bg-gray-100 p-2 border-l-2 border-blue-800 text-[10px] space-y-0.5 text-gray-800 inline-block">
                  <div><strong class="text-black">Ouvindo:</strong> Lorem Ipsum - Dolor</div>
                  <div><strong class="text-black">Humor:</strong> sit amet</div>
                </div>

                <p class="text-black leading-normal">
                  Desde que um amigo meu apresentou um site que ele tinha hospedado para subir suas coisas e usar como uma 
                  home sua da internet, tive interesse em fazer algo parecido o que combina mais com um blog pessoal do que a estetica anos 2000 da internet.  e esse e um projeto pessoal meu que a muito
                  queria tirar do papel, gosto muito da cultura da internet dos anos 2000, onde o algoritimo nao tinha planificado tudo e cada lugar na internet ainda
                  carregava a personalidade das pessoas que o criaram.  

                </p>
                <p class="text-black leading-normal">
                  Aqui voce vai encotrar coisas que gosto e decido salvo aqui, projetos pessoais meus e as atualizacoes sobre o site, e de quebra ainda consegue escutar musica boa.           
                </p>
                <p class="text-gray-700 italic">xoxo,<br>Heitor</p>
              </div>

              <div class="bg-gray-100 px-3 py-1.5 border-t border-black text-[10px] text-gray-700 flex justify-end gap-2">
                <a href="#" class="text-blue-700 underline hover:text-red-600">3 comentários</a> //
                <a href="#" class="text-blue-700 underline hover:text-red-600">link permanente</a>
              </div>
            </article>

          </main>

          <!-- 3. RIGHT SIDEBAR -->
          <!-- REMOVIDO: font-letter daqui -->
          <aside class="w-full md:w-52 shrink-0 space-y-4">
            
            
            <!-- MUSIC PLAYER -->
            <div class="border border-black bg-gray-100 p-2 shadow-[2px_2px_0px_#ccc] space-y-2">
              
              <!-- Tag de Áudio (Dinâmica) -->
              <audio ref="audioRef" :src="currentTrack.audioUrl" @timeupdate="updateProgress" @ended="changeTrack('next')"></audio>

              <div class="font-bold text-black text-[10px] tracking-wider text-center border-b border-gray-300 pb-1">
                ♫ MUSIC PLAYER
              </div>
              
              <!-- Capa da Música Dinâmica -->
              <div class="border border-black bg-white aspect-square flex items-center justify-center overflow-hidden">
                <img :src="currentTrack.imageUrl" :alt="currentTrack.title" class="w-full h-full object-cover transition-opacity duration-300" />
              </div>
              
              <!-- Texto Dinâmico -->
              <div class="text-center">
                <div class="font-bold text-blue-800 text-[11px] truncate">{{ currentTrack.title }}</div>
                <div class="text-[9px] text-gray-600 truncate">{{ currentTrack.artist }}</div>
              </div>
              
              <!-- Player Controls (Com botões Next e Prev funcionais) -->
              <div class="flex justify-center items-center gap-1">
                <button @click="changeTrack('prev')" class="border-ie-outset bg-gray-200 px-1.5 py-0.5 text-[9px] active:border-ie-inset text-black cursor-pointer">⏮</button>
                <button @click="togglePlay" class="border-ie-outset bg-gray-200 px-3 py-0.5 text-[10px] active:border-ie-inset text-black cursor-pointer">
                  {{ isPlaying ? '⏸' : '▶️' }}
                </button>
                <button @click="changeTrack('next')" class="border-ie-outset bg-gray-200 px-1.5 py-0.5 text-[9px] active:border-ie-inset text-black cursor-pointer">⏭</button>
              </div>
              
              <!-- Progress Bar Dinâmica -->
              <div class="h-2 w-full border border-gray-500 bg-white">
                <div class="h-full bg-blue-800 transition-all duration-100" :style="{ width: progress + '%' }"></div>
              </div>
            </div>
            <!-- PROJETOS -->
            <div class="border border-black bg-gray-100 p-2 shadow-[2px_2px_0px_#ccc]">
              <div class="font-bold text-black text-[10px] tracking-wider mb-1 border-b border-gray-300 pb-1">
                PROJETOS:
              </div>
              <ul class="space-y-1 text-black pl-1">
                <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100">» Trilho</a></li>
                <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100">» Xadrez.c</a></li>
                <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100">» Tratamento de dados e Ordenacao</a></li>
              </ul>
            </div>

            <!-- SHOUTBOX -->
            <div class="border border-black bg-gray-100 p-2 shadow-[2px_2px_0px_#ccc] space-y-2">
              <div class="font-bold text-black text-[10px] tracking-wider border-b border-gray-300 pb-1">SHOUTBOX:</div>
              
              <ScrollAreaRoot class="w-full h-32 border border-black bg-white p-1 overflow-hidden">
                <ScrollAreaViewport class="w-full h-full">
                  <div class="space-y-1.5 text-[10px]">
                    <div v-for="c in comments" :key="c.id" class="leading-tight">
                      <span class="text-blue-800 font-bold">[{{ c.user }}]:</span>
                      <span class="text-black"> {{ c.text }}</span>
                    </div>
                  </div>
                </ScrollAreaViewport>
                <ScrollAreaScrollbar class="flex select-none touch-none p-0.5 bg-gray-200 w-2 border-l border-gray-300" orientation="vertical">
                  <ScrollAreaThumb class="flex-1 bg-gray-400 relative rounded-sm border border-gray-500" />
                </ScrollAreaScrollbar>
              </ScrollAreaRoot>

              <form @submit.prevent="submitShout" class="space-y-1 text-[9px]">
                <div class="flex items-center gap-1">
                  <label class="w-8 text-black">Nome:</label>
                  <input v-model="shoutboxName" type="text" class="flex-1 border border-gray-400 px-1 py-0.5 focus:outline-none focus:border-blue-700">
                </div>
                <div class="flex items-center gap-1">
                  <label class="w-8 text-black">Msg:</label>
                  <input v-model="shoutboxMsg" type="text" class="flex-1 border border-gray-400 px-1 py-0.5 focus:outline-none focus:border-blue-700">
                </div>
                <div class="flex justify-end gap-1 pt-1">
                  <button type="submit" class="border-ie-outset bg-gray-200 text-black px-1.5 py-0.5 active:border-ie-inset">Gritar!</button>
                  <button type="button" @click="shoutboxMsg = ''" class="border-ie-outset bg-gray-200 text-black px-1.5 py-0.5 active:border-ie-inset">Limpar</button>
                </div>
              </form>
            </div>

            <!-- VISITANTES -->
            <div class="border border-black bg-gray-100 p-2 shadow-[2px_2px_0px_#ccc] text-center space-y-1">
              <div class="font-bold text-black text-[10px] tracking-wider mb-1">VISITANTES:</div>
              <div class="inline-flex gap-0.5 bg-gray-300 border border-black p-1 text-red-600 font-bold text-sm tracking-widest shadow-inner">
                <span class="border-t border-l border-gray-600 border-b border-r border-white px-1 bg-black">0</span>
                <span class="border-t border-l border-gray-600 border-b border-r border-white px-1 bg-black">0</span>
                <span class="border-t border-l border-gray-600 border-b border-r border-white px-1 bg-black">4</span>
                <span class="border-t border-l border-gray-600 border-b border-r border-white px-1 bg-black">8</span>
                <span class="border-t border-l border-gray-600 border-b border-r border-white px-1 bg-black">1</span>
                <span class="border-t border-l border-gray-600 border-b border-r border-white px-1 bg-black">5</span>
              </div>
              <div class="text-[9px] text-gray-600 mt-1">você é o visitante nº 4815!</div>
            </div>

            <!-- SITE STATS -->
            <div class="border border-black bg-gray-100 p-2 shadow-[2px_2px_0px_#ccc] text-[10px] space-y-0.5 text-black">
              <div class="font-bold text-black border-b border-gray-300 pb-1 mb-1">SITE STATS:</div>
              <div><strong>DESDE</strong> Outubro de 2026</div>
              <div><strong>VERSÃO</strong> 3.0 (Light)</div>
              <div><strong>HOST</strong> [<a href="#" class="text-blue-700 underline hover:text-red-600">sua hospedagem</a>]</div>
            </div>

          </aside>

        </div>

        <!-- ========================================== -->
        <!-- BOTTOM SECTION: SOBRE MIM                  -->
        <!-- ========================================== -->
        <section class="mt-8 border-t-2 border-black pt-8 pb-12">
          <h2 class="text-2xl font-bold text-black pb-2 mb-6 uppercase tracking-wide">
            Sobre Mim
          </h2>
          
          <div class="flex flex-col md:flex-row gap-8 items-start">
            
            <div class="w-40 h-56 border-2 border-black bg-white flex shrink-0 p-1 shadow-[2px_2px_0px_#ccc] overflow-hidden">
              <img src="/kc1.jpg" alt="Heitor" class="w-full h-full object-cover" />
            </div>
            
            <div class="flex-1 flex flex-col space-y-8 text-base w-full">
              <div class="space-y-6">
                <p class="text-black leading-loose">
                  <strong>HEITOR!</strong><br>
                  Prazer sou Heitor, um dev graduando em ciencia da computacao na universidade da PUC Minas, estou no segundo periodo,
                  gosto muito de musica, cinema, idiomas e computadores tambem. Falo 3 idiomas em variaveis niveis, Ingles e espanhol(C1) e Alemao(B1), e estudei alguns outros.
                  Me formei em 2024 fazendo curso tecnico colegio COTEMIG.
                     
                </p>
                <p class="text-black leading-loose">
                  Se gostar me contrate por favor :)
                </p>

              </div>

              <!-- Links formatados de acordo com a imagem de referência -->
              <div class="border border-black bg-gray-100 p-4 shadow-[2px_2px_0px_#ccc] w-full max-w-sm">
                <div class="font-bold text-black text-sm tracking-wider mb-2 border-b border-gray-300 pb-1">
                  MEUS LINKS:
                </div>
                <ul class="space-y-2 text-black">
                  <li><a href="https://github.com/PandaZorrao" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/heitor-caetano-985b56415/" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» LinkedIn</a></li>
                  <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» Currículo (.pdf)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- IE Status Bar -->
      <div class="bg-ie-bg border-t border-ie-border-dark px-2 py-0.5 text-[11px] text-gray-700 flex justify-between select-none">
        <div class="flex items-center gap-1">
          <span class="text-blue-800">e</span> Concluído
        </div>
        <div class="flex gap-4">
          <span>Página Principal</span>
          <span>100%</span>
        </div>
      </div>

    </div>

  </div>
</template>
