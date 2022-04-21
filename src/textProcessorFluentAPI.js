// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
export default class TextProcessorFluentAPI {
  #content;

  constructor(content) {
    this.#content = content;
  }

  build() {
    return this.#content;
  }
}
