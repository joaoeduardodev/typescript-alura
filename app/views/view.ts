export abstract class View<T>{
    protected elemento: HTMLElement;

    constructor(selector: string){
        this.elemento = document.querySelector(selector)
    }
   
       // Realizar a renderição do elemento que foi capturado atrvés do construtor na DOM
    public update(model: T):void{
        const template = this.template(model)

         this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}