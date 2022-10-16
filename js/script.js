const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
};

links.forEach(ativarLink);

const parametro = new URLSearchParams(location.search);

parametro.forEach((item) => {
  const element = document.querySelector(`[type="radio"][value="${item}"]`);
  if (element) element.checked = true;
});

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expended", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", () => {
    if (matchMedia("(min-width: 1000px)").matches) {
      galeriaContainer.prepend(img);
    }
  });
});

// plugin

if (window.SimpleAnime) {
  new SimpleAnime();
}