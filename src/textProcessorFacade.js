// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.

export default class TextProcessorFacade {
  #textProcessorFluentAPI;

  constructor({ TextProcessorFluentAPI, text }) {
    this.#textProcessorFluentAPI = new TextProcessorFluentAPI(text);
  }

  getProjectsFromCSV() {
    return this.#textProcessorFluentAPI
      .extractHeadersFromContent()
      .splitContent()
      .makeRawObjects()
      .makeProjects()
      .build();
  }
}
