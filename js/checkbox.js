function ocultarLinha(checkbox) {
  if (checkbox.checked) {
    var celula = checkbox.parentNode;

    var linha = celula.parentNode;

    linha.style.transition = "opacity 0.3s ease-out";
    linha.style.opacity = "0";

    setTimeout(function () {
      linha.parentNode.removeChild(linha);
    }, 300); // 300ms de atraso
  }
}
