export class View {
    constructor(seletor) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error('Verifique se o elemento existe na DOM');
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
