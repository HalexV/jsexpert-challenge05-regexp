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
