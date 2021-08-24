//Definindo uma classe 
//export : definir que pode ser exportado
export class Negociacao {
    //Definindo atributos privados
    #data;
    #quantidade;
    #valor;

    constructor(data,quantidade,valor){
        //Atribuindo valores aos atributos privados
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data(){
        return this.#data;
    }

    get quantidade(){
        return this.#quantidade;
    }

    get valor(){
        return this.#valor;
    }

    get volume(){
        return this.#quantidade * this.#valor;
    }

}