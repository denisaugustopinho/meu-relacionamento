// Selecionar elementos
const botaoSurpresa = document.getElementById("botao-surpresa");
const primeiraTela = document.getElementById("primeira-tela");
const segundaTela = document.getElementById("segunda-tela");

// Carregar músicas
const musicaInicial = new Audio("musica_inicial.mp3");
const musicaPosterior = new Audio("musica_posterior.mp3");

// Tocar música inicial automaticamente ao carregar a página
musicaInicial.loop = true;
musicaInicial.play().catch(() => {
  console.log("O navegador bloqueou a reprodução automática.");
});

// Função para mudar para a segunda tela
botaoSurpresa.addEventListener("click", () => {
  // Parar música inicial
  musicaInicial.pause();

  // Tocar música posterior
  musicaPosterior.loop = true;
  musicaPosterior.play();

  // Mostrar segunda tela
  primeiraTela.style.display = "none";
  segundaTela.style.display = "flex";
});

// Função para atualizar o contador de tempo de relacionamento
const inicioRelacionamento = new Date("2024-05-11T12:00:00");

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
    const ultimoDiaMesAnterior = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      0
    ).getDate();
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

// Atualizar contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();
