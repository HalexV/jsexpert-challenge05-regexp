// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
import { evaluateRegex } from './util.js';

export default class Project {
  constructor({ titulo, link, autor, etapa, ementa, indexadoresnorma }) {
    [this.numero, this.ano] = titulo.match(evaluateRegex(/\d+/g));
    [this.id] = link.match(evaluateRegex(/(?<=id=)\d+/));

    if (autor === 'no data') {
      this.autores = [];
    }

    this.etapa = etapa;
    this.ementa = ementa;
    this.indexadoresnorma = indexadoresnorma;
  }
}
