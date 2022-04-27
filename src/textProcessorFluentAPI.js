/* eslint-disable prefer-destructuring */
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
    const rawObjectsArr = [];

    let index;
    let projectString;
    let projectArr;
    let difference;
    let titulo;
    let link;
    let autor;
    let etapa;
    let ementa;
    let indexadoresnorma;

    const projectRegex = evaluateRegex(/^projeto/i);
    const indexadoresRegex = evaluateRegex(
      /^[\s]*[A-ZÁÀÃÉÈÍÌÓÒÕÚÙÇ]+[A-ZÁÀÃÉÈÍÌÓÒÕÚÙÇ,\s]*$/,
    );

    for (let i = 0; i < this.#content.length; i += 1) {
      projectString = this.#content[i];

      if (projectRegex.test(projectString)) {
        projectArr = projectString.split(';');

        if (projectArr.length > 6) {
          difference = projectArr.length - 6;
          for (let j = 0; j < difference; j += 1) {
            projectArr.pop();
          }
        }

        titulo = projectArr[0];
        link = projectArr[1];

        if (availablePautas.includes(projectArr[2])) {
          autor = 'no data';
          index = 2;
        } else {
          autor = projectArr[2];
          index = 3;
        }

        if (availablePautas.includes(projectArr[index])) {
          etapa = projectArr[index];
          index += 1;
        } else {
          etapa = 'no data';
        }

        if (indexadoresRegex.test(projectArr[index])) {
          ementa = 'no data';
        } else {
          ementa = projectArr[index];
          index += 1;
        }

        indexadoresnorma = 'no data';
        while (index < 6) {
          if (indexadoresRegex.test(projectArr[index])) {
            indexadoresnorma = projectArr[index];
            index = 6;
          }
          index += 1;
        }

        rawObjectsArr.push({
          titulo,
          link,
          autor,
          etapa,
          ementa,
          indexadoresnorma,
        });
      }
    }

    this.#content = rawObjectsArr;

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
