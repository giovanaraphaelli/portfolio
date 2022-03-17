const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

ScrollReveal({ reset: true });
ScrollReveal().reveal(".sobre-texto", { delay: 400 });
ScrollReveal().reveal(".myimg", { delay: 400 });
ScrollReveal().reveal(".projetos-box", { delay: 400 });
ScrollReveal().reveal(".conhecimentos-wrapper", { delay: 400 });
ScrollReveal().reveal(".introducao", { delay: 400 });
