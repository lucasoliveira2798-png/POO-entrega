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

    }
}

class Movimentacao {
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