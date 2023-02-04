// Menu Mobile

function menuMobile() {
  const btnMobile = document.getElementById('btn-mobile');

  if (btnMobile) {
    function toggleMenu(event) {
      if (event.type === 'touchstart') event.preventDefault();
      const nav = document.getElementById('nav');
      nav.classList.toggle('active');
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
  }
}
menuMobile();

//ScrollRevel
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
});

sr.reveal('.sobre-texto', { delay: 300 });
sr.reveal('.myimg', { delay: 300 });
sr.reveal('.projetos-box', { delay: 300 });
sr.reveal('.conhecimentos-wrapper', { delay: 300 });
sr.reveal('.descricao', { delay: 300 });
sr.reveal('.introducao', { delay: 300 });
sr.reveal('.wrapper-btn', { delay: 300 });

// Efeito Máquina de Escrever
function maqEscrever() {
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => (elemento.innerHTML += letra), 100 * i);
    });
  }

  const build = document.querySelector('#build');
  if (build) {
    typeWriter(build);
  }
}

maqEscrever();

//Muda Descrição
function mudaDescricao(nameCard, text) {
  var mudaDescricao = document.querySelector('.mudaDescricao');

  if (mudaDescricao) {
    document.querySelector(nameCard).addEventListener('mouseover', () => {
      mudaDescricao.innerHTML = text;
    });
    document.querySelector(nameCard).addEventListener('mouseout', () => {
      mudaDescricao.innerHTML = `*passe o cursor no card para saber mais sobre meus conhecimentos*`;
    });
  }
}

mudaDescricao(
  '.html',
  'Conhecimento em estrutura de layouts, principais tags, HTML semântico, criação de tabelas e formulários.'
);
mudaDescricao(
  '.css',
  'Conhecimento em estilização de layouts, positions, box model, display, CSS grid, flexbox, pseudo-classes.'
);
mudaDescricao(
  '.js',
  'Conhecimento em  manipulação de DOM, objetos, métodos, funções, eventos, loops, fetch API e async/await.'
);

mudaDescricao(
  '.react',
  'Conhecimento em criação de componentes funcionais, React Hooks, React Router, requisição de API, CSS modules.'
);

mudaDescricao(
  '.styled-components',
  'Conhecimento em construção de componentes de estilo para projetos em ReactJS.'
);

mudaDescricao(
  '.typescript',
  "Conhecimento sobre tipos primitivos, funções, objetos, type, interfaces, union, generics. E também TypeScript com foco em React, como tipagem de componente, estados e resposta de API's"
);

mudaDescricao(
  '.git',
  'Conhecimento em versionamento e principais comandos, como: git status, git add, git commit, git push e pull, git clone, git merge e branch. '
);

mudaDescricao('.sass', 'Conhecimento em uso de variáveis, mixins e extends.');
