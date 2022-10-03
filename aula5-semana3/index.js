function mostrarAlerta() {
  const divAlerta = document.getElementById("alerta");
  divAlerta.classList.add("mostrar");
  let tagSpan = document.getElementById("display");
  count++;
  tagSpan.innerHTML = `${count}`;
}

function fecharAlerta() {
  const divAlerta = document.getElementById("alerta");
  divAlerta.classList.remove("mostrar");
}

let count = 0;

const btnMostrar = document.getElementById("mostrar");
const btnFechar = document.getElementById("fechar");

btnMostrar.addEventListener("click", mostrarAlerta);
btnFechar.addEventListener("click", fecharAlerta);
