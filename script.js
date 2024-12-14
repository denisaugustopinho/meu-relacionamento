// Música inicial
const musicaInicial = document.getElementById("musica_inicial");
const musicaPosterior = new Audio("musica_posterior.mp3");

// Botão de surpresa
const surpriseBtn = document.getElementById("surpriseBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

// Ao clicar no botão "SURPRESA!!!"
surpriseBtn.addEventListener("click", function() {
  // Para a música inicial e toca a música posterior
  musicaInicial.pause();
  musicaPosterior.play();

  // Muda para a segunda página
  page1.style.display = "none";
  page2.style.display = "block";
});

// Contador de tempo do relacionamento
const inicioRelacionamento = new Date("2024-05-11T00:00:00"); // Data do início

function atualizarContador() {
  const agora = new Date();

  let anos = agora.getFullYear() - inicioRelacionamento.getFullYear();
  let meses = agora.getMonth() - inicioRelacionamento.getMonth();
  let dias = agora.getDate() - inicioRelacionamento.getDate();
  let horas = agora.getHours() - inicioRelacionamento.getHours();
  let minutos = agora.getMinutes() - inicioRelacionamento.getMinutes();
  let segundos = agora.getSeconds() - inicioRelacionamento.getSeconds();

  if (dias < 0) {
    meses -= 1;
    const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  if (horas < 0) {
    dias -= 1;
    horas += 24;
  }

  if (minutos < 0) {
    horas -= 1;
    minutos += 60;
  }

  if (segundos < 0) {
    minutos -= 1;
    segundos += 60;
  }

  const mensagem =
    (anos > 0 ? `${anos} anos, ` : "") +
    `${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

  document.getElementById("contador").innerText = mensagem;
}

// Atualizar o contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();
