export class Negociacao {
    //Definindo atributos privados
    private _data;
    private _quantidade;
    private _valor;

    constructor(data,quantidade,valor){
        //Atribuindo valores aos atributos privados
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }

}