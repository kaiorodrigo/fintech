function ValidaCPF() {
  let verdeInput = document.getElementById("cpf");
  let btn_va = document.getElementById("btn_va");

  var RegraValida = document.getElementById("cpf").value;

  var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

  if (cpfValido.test(RegraValida) == true) {
    verdeInput.style.border = "0.5px solid #47f747";
    verdeInput.classList.add("bg-green-200");
    btn_va.style.display = "inline-block";
  } else if (cpfValido.test(RegraValida) == false) {
    verdeInput.style.border = "0.5px solid red";
    verdeInput.classList.remove("bg-green-200");
    verdeInput.classList.add("bg-red-200");
    btn_va.style.display = "none";
  } else {
    return null;
  }
}

function fMasc(objeto, mascara) {
  obj = objeto;
  masc = mascara;
  setTimeout("fMascEx()", 1);
}

function fMascEx() {
  obj.value = masc(obj.value);
}

function mCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
}
