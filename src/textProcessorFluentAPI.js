// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
export default class TextProcessorFluentAPI {
  #content;

  #headers;

  constructor(content) {
    this.#content = content;
  }

  extractHeadersFromContent() {
    const extractHeaderRegex = /(?<=indexadoresnorma;)\n/;

    [this.#headers, this.#content] = this.#content.split(extractHeaderRegex);

    this.#headers = this.#headers.split(';');
    this.#headers.pop();

    return this;
  }

  splitContent() {
    this.#content = this.#content.split('\n');

    return this;
  }

  build() {
    return this.#content;
  }
}
