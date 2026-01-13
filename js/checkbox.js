 function ocultarLinha(checkbox) {
            // Confirma se o checkbox está marcado
            if (checkbox.checked) {
                // Encontra o elemento pai do checkbox (a célula <td>)
                var celula = checkbox.parentNode;
                // Encontra o elemento pai da célula (a linha <tr>)
                var linha = celula.parentNode;
                
                // Opcional: Adicione um atraso para uma transição suave (ex: 300ms)
                linha.style.transition = "opacity 0.3s ease-out";
                linha.style.opacity = "0";

                // Remove a linha após a transição (ou imediatamente se preferir)
                setTimeout(function() {
                    linha.parentNode.removeChild(linha);
                }, 300); // 300ms de atraso
            }
        }