// Música inicial
const musicaInicial = document.getElementById("musica_inicial");
const musicaPosterior = new Audio("musica_posterior.mp3");

// Botão surpresa
const surpriseBtn = document.getElementById("surpriseBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

surpriseBtn.addEventListener("click", function() {
  musicaInicial.pause();
  musicaPosterior.play();
  page1.style.display = "none";
  page2.style.display = "block";
});

// Contador de tempo
const inicioRelacionamento = new Date("2024-05-11T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - inicioRelacionamento;

  const segundos = Math.floor(diferenca / 1000 % 60);
  const minutos = Math.floor(diferenca / 1000 / 60 % 60);
  const horas = Math.floor(diferenca / 1000 / 60 / 60 % 24);
  const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);

  document.getElementById("contador").innerText =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Slider de Fotos
const sliderItems = document.querySelectorAll(".slider-item");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let sliderInterval;

function showSlide(index) {
  sliderItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

function startSlider() {
  sliderInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
  }, 5000);
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    clearInterval(sliderInterval);
    showSlide(parseInt(dot.dataset.index));
    startSlider();
  });
});

showSlide(currentIndex);
startSlider();
