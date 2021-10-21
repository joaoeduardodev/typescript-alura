export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    // Realizar a renderição do elemento que foi capturado atrvés do construtor na DOM
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
