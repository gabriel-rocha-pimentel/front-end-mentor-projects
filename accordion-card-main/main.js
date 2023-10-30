var r1 = document.getElementById("resposta_1");
var r2 = document.getElementById("resposta_2");
var r3 = document.getElementById("resposta_3");
var r4 = document.getElementById("resposta_4");
var r5 = document.getElementById("resposta_5");

// Variáveis para controlar o estado das respostas
var resposta1Visivel = false;
var resposta2Visivel = false;
var resposta3Visivel = false;
var resposta4Visivel = false;
var resposta5Visivel = false;

function toggleResposta(numero) {
  // Verifica qual resposta deve ser exibida ou ocultada
  if (numero === 1) {
    resposta1Visivel = !resposta1Visivel; // Inverte o estado da resposta 1
    r1.innerHTML = resposta1Visivel ? "<li style='color: hsl(237, 12%, 33%); font-weight: 500;'>Resposta 1: A resposta para a primeira pergunta.</li>" : "";
  } else if (numero === 2) {
    resposta2Visivel = !resposta2Visivel; // Inverte o estado da resposta 2
    r2.innerHTML = resposta2Visivel ? "<li style='color: hsl(237, 12%, 33%); font-weight: 500;'>Resposta 2: A resposta para a segunda pergunta.</li>" : "";
  } else if (numero === 3) {
    resposta3Visivel = !resposta3Visivel; // Inverte o estado da resposta 3
    r3.innerHTML = resposta3Visivel ? "<li style='color: hsl(237, 12%, 33%); font-weight: 500;'>Resposta 3: A resposta para a terceira pergunta.</li>" : "";
  } else if (numero === 4) {
    resposta4Visivel = !resposta4Visivel; // Inverte o estado da resposta 4
    r4.innerHTML = resposta4Visivel ? "<li style='color: hsl(237, 12%, 33%); font-weight: 500;'>Resposta 4: A resposta para a quarta pergunta.</li>" : "";
  } else if (numero === 5) {
    resposta5Visivel = !resposta5Visivel; // Inverte o estado da resposta 5
    r5.innerHTML = resposta5Visivel ? "<li style='color: hsl(237, 12%, 33%); font-weight: 500;'>Resposta 5: A resposta para a quinta pergunta.</li>" : "";
  }
}
