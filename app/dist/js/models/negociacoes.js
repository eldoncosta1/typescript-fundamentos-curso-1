export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(negociacaoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacaoes.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map