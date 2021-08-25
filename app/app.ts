//criando uma instancia da classe negociação

//Importando a classe
import { Negociacao } from './models/negociacao.js'

//criando a instancia da negociacao
const negociacao = new Negociacao(new Date(), 10, 100);

console.log(negociacao.data);

