
// classe
class Parquimetro {
    calcularEstacionamento(valorInserido) {
    
        //valor

        if (isNaN(valorInserido) || valorInserido < 1.00) {
            return {
                sucesso: false,
                mensagem: "Valor insuficiente. O valor mínimo é R$ 1,00."
            };
        }

        let tempo = 0;
        let precoDaFaixa = 0;

        // preço

        if (valorInserido >= 3.00) {
            tempo = 120;
            precoDaFaixa = 3.00;
        } else if (valorInserido >= 1.75) {
            tempo = 60;
            precoDaFaixa = 1.75;
        } else {
            tempo = 30;
            precoDaFaixa = 1.00;
        }

        // calculo

        const troco = Number((valorInserido - precoDaFaixa).toFixed(2));

        // tempo e troco

        let mensagemFinal = `Tempo liberado: ${tempo} minutos.`;
        if (troco > 0) {
            mensagemFinal += ` Seu troco é de R$ ${troco.toFixed(2)}.`;
        }

        return {
            sucesso: true,
            tempo: tempo,
            troco: troco,
            mensagem: mensagemFinal
        };
    }
}

class Movimentacao {
    constructor(parquimetro) {
        this.parquimetro = parquimetro;
    }

    mostrarMensagem(texto, cor = "black") {
        const elementoMensagem = document.getElementById("mensagem");
        if (elementoMensagem) {
            elementoMensagem.textContent = texto;
            elementoMensagem.style.color = cor;
        } else {
            alert(texto);
        }
    }

    // calcula o estacionamento
    
    confirmarPagamento() {
        const inputValor = document.getElementById("valorInserido");
        const valor = parseFloat(inputValor.value);

        const resultado = this.parquimetro.calcularEstacionamento(valor);

        if (resultado.sucesso) {
            this.mostrarMensagem(resultado.mensagem, "green");
            inputValor.value = ''; // Limpa o campo após sucesso
        } else {
            this.mostrarMensagem(resultado.mensagem, "red");
        }
    }
}

// Criar instâncias
const parquimetro = new Parquimetro();
const movimentacao = new Movimentacao(parquimetro);
