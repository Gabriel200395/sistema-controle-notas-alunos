document
  .getElementById("enviarDados")
  .addEventListener("click", calcularNotaAluno);

function calcularNotaAluno(event) {
  event.preventDefault();

  let matematica = window.document.getElementById("matematica").value;
  let portugues = window.document.getElementById("portugues").value;
  let filosofia = window.document.getElementById("filosofia").value;
  let ciencia = window.document.getElementById("ciencia").value;
  let ingles = window.document.getElementById("ingles").value;
  let historia = window.document.getElementById("historia").value;
  let educacãoFisica = window.document.getElementById("educacãoF").value;
  let fisica = window.document.getElementById("fisica").value;
  let resposta = window.document.getElementById("res");
  if (
    matematica.length === 0 ||
    portugues.length === 0 ||
    ingles.length === 0 ||
    ciencia.length === 0 ||
    filosofia.length === 0 ||
    historia.length === 0 ||
    educacãoFisica === 0 ||
    fisica.length === 0
  ) {
    alert("Não e possivel fazer os calculos sem preencher os campos!!!");
  } else {
    let resultado =
      (Number(matematica) +
        Number(portugues) +
        Number(filosofia) +
        Number(ciencia) +
        Number(ingles) +
        Number(historia) +
        Number(educacãoFisica) +
        Number(fisica)) /
      8;

    if (resultado > 5 && resultado <= 7) {
      resposta.innerHTML = `A media que você tirou foi razoável ${resultado}!`;
    } else if (resultado > 7 && resultado <= 10) {
      resposta.innerHTML = `A media que você tirou foi de ${resultado} , foi considerado uma boa media parabéns! `;
    } else {
      resposta.innerHTML = `A media que você tirou foi de ${resultado} ,  você precisa estudar !!!`;
    }
    console.log(resultado);
  }

  document.getElementById("myform").reset();
}
