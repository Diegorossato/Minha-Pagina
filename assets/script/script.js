let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

// ===== Validação do Nome ===== //
function validaNome() {
  let nome = document.getElementById("nome");
  let txtNome = document.getElementById("txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido";
    txtNome.style.color = "red";
    txtNome.style.fontSize = "15px";
    nomeOk = false;
  } else {
    txtNome.innerHTML = "";
    nomeOk = true;
  }
}

// ===== Validação do E-mail ===== //
function validaEmail() {
  let email = document.getElementById("email");
  let txtEmail = document.getElementById("txtEmail");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.match(emailRegex)) {
    txtEmail.innerHTML = "E-mail Inválido";
    txtEmail.style.color = "red";
    txtEmail.style.fontSize = "15px";
    emailOk = false;
  } else {
    txtEmail.innerHTML = "";
    emailOk = true;
  }
}

// ===== Validação do Assunto ===== //
function validaAssunto() {
  let assunto = document.getElementById("assunto");
  let txtAssunto = document.getElementById("txtAssunto");
  if (assunto.value.length > 100) {
    txtAssunto.innerHTML =
      "Texto muito grande, digite no máximo 100 caracteres!";
    txtAssunto.style.color = "red";
    txtAssunto.style.fontSize = "15px";
    assuntoOk = false;
  } else {
    txtAssunto.innerHTML = "";
    assuntoOk = true;
  }
}

// ===== Botão Enviar ===== //
function enviar(event) {
  event.preventDefault();
  if (nomeOk && emailOk && assuntoOk) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente antes de enviar...");
  }
}


// ===== Máscara de telefone ===== //
(function () {
  const telefoneInput = document.getElementById("telefone");

  telefoneInput.addEventListener("input", () => {
    mascara(telefoneInput, mtel);
  });

  function mascara(o, f) {
    const v_obj = o;
    const v_fun = f;
    execmascara();
    function execmascara() {
      v_obj.value = v_fun(v_obj.value);
    }
  }

  function mtel(v) {
    v = v.replace(/\D/g, ""); // Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen antes dos últimos quatro dígitos
    return v;
  }
})();
