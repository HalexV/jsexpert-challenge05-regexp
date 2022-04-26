/* eslint-disable prefer-destructuring */
// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
import { availablePautas, evaluateRegex } from './util.js';
import Project from './project.js';

export default class TextProcessorFluentAPI {
  #content;

  #headers;

  constructor(content) {
    this.#content = content;
  }

  extractHeadersFromContent() {
    const extractHeaderRegex = /(?<=indexadoresnorma;)\n/;

    evaluateRegex(extractHeaderRegex);

    [this.#headers, this.#content] = this.#content.split(extractHeaderRegex);

    this.#headers = this.#headers.split(';');
    this.#headers.pop();

    return this;
  }

  splitContent() {
    this.#content = this.#content.split('\n');

    return this;
  }

  makeRawObjects() {
    this.#content = this.#content.map(projectString => {
      let index;
      const indexadoresRegex =
        /^[\s]*[A-ZÁÀÃÉÈÍÌÓÒÕÚÙÇ]+[A-ZÁÀÃÉÈÍÌÓÒÕÚÙÇ,\s]*$/;

      evaluateRegex(indexadoresRegex);

      const projectArr = projectString.split(';');

      if (projectArr.length > 6) {
        const difference = projectArr.length - 6;
        for (let i = 0; i < difference; i += 1) {
          projectArr.pop();
        }
      }

      const titulo = projectArr[0];
      const link = projectArr[1];

      let autor;
      if (availablePautas.includes(projectArr[2])) {
        autor = 'no data';
        index = 2;
      } else {
        autor = projectArr[2];
        index = 3;
      }

      let etapa;
      if (availablePautas.includes(projectArr[index])) {
        etapa = projectArr[index];
        index += 1;
      } else {
        etapa = 'no data';
      }

      let ementa;
      if (indexadoresRegex.test(projectArr[index])) {
        ementa = 'no data';
      } else {
        ementa = projectArr[index];
        index += 1;
      }

      let indexadoresnorma = 'no data';
      while (index < 6) {
        if (indexadoresRegex.test(projectArr[index])) {
          indexadoresnorma = projectArr[index];
          index = 6;
        }
        index += 1;
      }

      return {
        titulo,
        link,
        autor,
        etapa,
        ementa,
        indexadoresnorma,
      };
    });

    return this;
  }

  makeProjects() {
    this.#content = this.#content.map(rawObject => new Project(rawObject));

    return this;
  }

  build() {
    return this.#content;
  }
}
