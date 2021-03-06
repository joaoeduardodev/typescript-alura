export abstract class View<T>{
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?:boolean){
        const elemento = document.querySelector(selector);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM. Verifique.`)
        }
        if(escapar){
            this.escapar = escapar;
        }
    }
   
       // Realizar a renderição do elemento que foi capturado atrvés do construtor na DOM
    public update(model: T):void{
        let template = this.template(model)
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'')
        }
         this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}