<template>
  <!-- Usa font-mono do Tailwind para um visual consistente em todo o lado -->
  <div class="relative min-h-screen p-2 sm:p-4 flex justify-center items-start font-mono text-black">
    
    <!-- Fundo Xadrez (mantido) -->
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
          <span>heitor.dev :: sobre mim - Microsoft Internet Explorer</span>
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

      <!-- IE Address Bar -->
      <div class="flex items-center gap-2 px-2 py-1 bg-ie-bg border-b-2 border-ie-border-dark text-xs">
        <span class="text-gray-700 select-none">Endereço:</span>
        <div class="flex-1 bg-white border-ie-inset px-2 py-0.5 text-xs flex items-center gap-1">
          <span class="text-gray-400">🌐</span>
          <span class="text-black select-all">http://www.heitor.dev/sobre.php</span>
        </div>
        <button class="border-ie-outset px-2 py-0.5 bg-ie-bg font-bold flex items-center gap-1 active:border-ie-inset">
          <span class="text-green-600">➔</span> Ir
        </button>
      </div>

      <!-- ========================================== -->
      <!-- WEBPAGE INNER CONTENT AREA                 -->
      <!-- ========================================== -->
      <!-- Usando a cor azul de fundo presente na imagem de referência -->
      <div class="bg-[#80a4df] p-6 sm:p-8 text-sm leading-relaxed border-t-2 border-black min-h-[500px]">
        
        <!-- HEADER DE NAVEGAÇÃO -->
        <nav class="flex flex-wrap gap-4 mb-8 pb-4 border-b-2 border-black font-bold text-base md:text-lg">
          <!-- Os links que já existem usam RouterLink -->
          <RouterLink to="/" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Home</RouterLink>
          
          <!-- Os links pendentes usam tag <a> normal até criar as páginas -->
          <RouterLink to="/projetos" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Projetos</RouterLink>
          <a href="#" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Arte</a>
          <a href="#" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Textos</a>
          <a href="#" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Arquivos</a>
          
          <RouterLink to="/sobre" class="text-blue-900 hover:text-red-600 hover:bg-yellow-100 px-2 uppercase tracking-wide">Sobre Mim</RouterLink>
        </nav>

        <h1 class="text-2xl font-bold uppercase tracking-wider mb-6 pb-2">
          SOBRE MIM
        </h1>
        
        <div class="flex flex-col md:flex-row gap-6 items-start mb-8">
          
          <!-- Foto de Perfil -->
          <div class="w-48 h-48 border-2 border-black bg-white flex shrink-0 shadow-[2px_2px_0px_#ccc] overflow-hidden">
              <img src="/yui1.jpg" alt="Heitor" class="w-full h-full object-cover" />
          </div>
          
          <!-- Texto de Apresentação -->
          <div class="flex-1 space-y-4">
            <h2 class="font-bold text-lg">HEITOR!</h2>
            <p>
              Prazer sou Heitor, um dev graduando em ciência da computação na universidade da PUC Minas, estou no segundo período, gosto muito de música, cinema, idiomas e computadores também. Falo 3 idiomas em variáveis níveis, Inglês e espanhol (C1) e Alemão (B1), e estudei alguns outros. Me formei em 2024 fazendo curso técnico colégio COTEMIG.
            </p>
            <p>
            No final de 2024 comecei a trabalhar em uma livraria e apesar de nao ter relacao com minha area de atuacao agora foi de longe umas experiencias que mais me fez amadurecer. Nada como um trabalho 6x1 para criar carater, alem de todas as pessoas incriveis (ou nao) que pude conhecer enquanto trabalhava la.               inclusive se tive a ideia de criar o site dessa maneira ou o fato de usar arch e vim foi gracas ao meu amigo e ex-coworker Adriel. Na area de TI pretendo trabalhar no back-end e com uma programacao low level.
            </p>
            <p class="font-bold pt-2">
              Se gostar me contrate por favor :)
            </p>
          </div>
        </div>
        <!-- Secção de Experiências -->
        <div class="mb-10">
          <h2 class="font-bold text-lg uppercase mb-4 border-b border-black inline-block">Experiências</h2>
          <ul class="list-disc list-inside space-y-2 pl-2">
            <li><strong>Livreiro (2024 - 2025):</strong>Atendente e Organizador de estoque na Scriptum</li>
            <li><strong>Projetos Académicos:</strong> Desenvolvimento de sistemas em C/C++/Java/JS na PUC Minas.</li>
          </ul>
        </div>

        <!-- Secção Inferior: Links e Contatos lado a lado -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          
          <!-- Bloco Meus Links (Formatado estilo Tahoma/Verdana) -->
          <div class="border border-black bg-gray-100 p-4 shadow-[2px_2px_0px_#ccc]">
            <div class="font-bold text-black text-sm tracking-wider mb-2 border-b border-gray-300 pb-1 uppercase font-sans">
              Meus Links:
            </div>
            <ul class="space-y-2 font-sans">
              <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» GitHub</a></li>
              <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» LinkedIn</a></li>
              <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» Currículo (.pdf)</a></li>
            </ul>
          </div>

          <!-- Bloco Contatos (Formatado estilo Tahoma/Verdana) -->
          <div class="border border-black bg-gray-100 p-4 shadow-[2px_2px_0px_#ccc]">
            <div class="font-bold text-black text-sm tracking-wider mb-2 border-b border-gray-300 pb-1 uppercase font-sans">
              Contatos:
            </div>
            <ul class="space-y-2 font-sans">
              <li><a href="mailto:heitor@email.com" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» E-mail: heitorcaetanofs@email.com</a></li>
              <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» Twitter / X</a></li>
              <li><a href="#" class="text-blue-700 underline hover:text-red-600 hover:bg-yellow-100 text-sm">» Discord: PandaZorrao</a></li>
            </ul>
          </div>

        </div>

      </div>

      <!-- IE Status Bar -->
      <div class="bg-ie-bg border-t border-ie-border-dark px-2 py-0.5 text-[11px] text-gray-700 flex justify-between select-none font-sans">
        <div class="flex items-center gap-1">
          <span class="text-blue-800">e</span> Concluído
        </div>
        <div class="flex gap-4">
          <span>Sobre Mim</span>
          <span>100%</span>
        </div>
      </div>

    </div>
  </div>
</template>
