let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txt.innerHTML = "Nome inválido!";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "";
    nomeOk = true;
  }
}

function validaEmail() {
  let txt = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txt.innerHTML = "E-mail inválido!";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "";
    emailOk = true;
  }
}

function validaAssunto() {
  let txt = document.querySelector("#txtAssunto");
  if (assunto.value.length > 100) {
    txt.innerHTML = "Texto muito grande. Digite no máximo 100 caracteres!";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "";
    assuntoOk = true;
  }
}

function confereCampos() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha todos os campos!")
  }
}

function mapaZoomMais() {
  mapa.style.width = "600px";
  mapa.style.height = "375px";
}

function mapaZoomMenos() {
  mapa.style.width = "400px";
  mapa.style.height = "250px";
}