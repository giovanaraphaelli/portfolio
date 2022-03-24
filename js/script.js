// Menu Mobile

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//ScrollRevel

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

sr.reveal(".sobre-texto", { delay: 300 });
sr.reveal(".myimg", { delay: 300 });
sr.reveal(".projetos-box", { delay: 300 });
sr.reveal(".conhecimentos-wrapper", { delay: 300 });
sr.reveal(".descricao", { delay: 300 });
sr.reveal(".introducao", { delay: 300 });

// Efeito Máquina de Escrever
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 100 * i);
  });
}

const build = document.querySelector("#build");
typeWriter(build);

//Muda Descrição

function mudaDescricao(nameCard, text) {
  var mudaDescricao = document.querySelector(".mudaDescricao");

  document.querySelector(nameCard).addEventListener("mouseover", () => {
    mudaDescricao.innerHTML = text;
  });
  document.querySelector(nameCard).addEventListener("mouseout", () => {
    mudaDescricao.innerHTML = `*passe o cursor do mouse no card para saber meus conhecimentos sobre a linguagem*`;
  });
}

mudaDescricao(
  ".html",
  "Conhecimento intermediário em estrutura de layouts, principais tags, HTML semântico, criação de tabelas e formulários."
);
mudaDescricao(
  ".css",
  "Conhecimento intermediário em estilização de layouts, positions, box model, display, CSS grid, flexbox, pseudo-classes e responsividade com media queries."
);
mudaDescricao(
  ".js",
  "Conhecimento básico em  manipulação de DOM, tipo de dados, objetos, métodos, funções e eventos."
);

mudaDescricao(
  ".git",
  "Conhecimento em versionamento e principais comandos. Como: git status, git add, git commit, git push e pull, git clone, git merge e branch. "
);
