<<<<<<< HEAD
// Definir classe Parquímetro

class Parquimetro {
    constructor() {
        this.saldo = 0.00;
    }

    depositar(valor) {
        if (valor > 0) { 
            this.saldo += valor;
        }     
    }
 //verificar e descontar
 
    descontar(valor){
        if(this.saldoParaEstacionar(valor)) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    saldoParaEstacionar(valor) {
        return this.saldo >= valor;
    }

    //Troco
    devolverTroco() {
        const troco = this.saldo;
        this.saldo = 0;
        return troco;

=======

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
>>>>>>> a64add3 (Adicionando arquivos do parquimetro)
    }
}

class Movimentacao {
<<<<<<< HEAD
    constructor(estacionar){
        this.estacionar = estacionar;
    }
    // mensagem
    mostrarMensagem(texto, cor = "black") {
        const elementoMensagem = document.getElementById("mensagem");
        elementoMensagem.textContent = texto;
        elementoMensagem.style.color = cor;
    }

    depositar() {
        // pega valor
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        // fazer depósito
        if (!isNaN(valorDeposito)&& valorDeposito > 0) {
        this.estacionar.depositar(valorDeposito);
        // exibir saldo
        this.mostrarSaldo(this.estacionar.saldo);
        } else {
            alert("Digite um valor válido para depósito.");
        }
    }

     comprarTempo(minutos, custo) {
        const sucesso = this.estacionar.descontar(custo);

        if (sucesso) {
            alert(`Tempo adquirido: +${minutos} minutos! Boa estadia.`);
            this.mostrarSaldo(this.estacionar.saldo);
        } else {
            alert(`Saldo insuficiente! Você precisa de R$ ${custo.toFixed(2)} para ${minutos} min.`);
        }
     }

     sacarTroco() {
        const valorTroco = this.estacionar.devolverTroco();

        if (valorTroco > 0) {
            alert(`Troco devolvido: R$ ${valorTroco.toFixed(2)}`);
            this.mostrarSaldo(this.estacionar.saldo);
        } else {
            alert("Não há saldo disponível para troco.");
        }
    }

    // mostrar saldo
    mostrarSaldo(saldo) { 
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo.toFixed(2)}`; 
        document.getElementById("valorDeposito").value = ''; 
    }
}

// criar instancias
const estacionar = new Parquimetro();
const movimentacao = new Movimentacao(estacionar);
=======
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
>>>>>>> a64add3 (Adicionando arquivos do parquimetro)
