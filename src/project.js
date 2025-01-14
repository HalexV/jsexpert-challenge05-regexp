import { evaluateRegex } from './util.js';

export default class Project {
  constructor({ titulo, link, autor, indexadoresnorma }) {
    [this.numero, this.ano] = titulo.match(evaluateRegex(/\d+/g));
    [this.id] = link.match(evaluateRegex(/(?<=id=)\d+/));

    if (autor === 'no data') {
      this.autores = [];
    } else {
      this.autores = autor.split(',').map(autorString => {
        const autorNames = autorString.trim().split(' ');

        if (autorNames.length === 1)
          return {
            nome: autorNames[0],
          };

        return {
          nome: `${autorNames[0]} ${autorNames[autorNames.length - 1]}`,
        };
      });
    }

    this.url = link;

    if (indexadoresnorma === 'no data') this.indexadores = [];
    else {
      this.indexadores = indexadoresnorma
        .split(',')
        .map(indexadoresnormaString => indexadoresnormaString.trim());
    }
  }
}
