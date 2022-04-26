import { describe, it } from 'mocha';
import { expect } from 'chai';

import TextProcessorFacade from '../src/textProcessorFacade.js';

class TextProcessorFluentAPIStub {
  #correctCallsOrder;

  #content;

  constructor(content) {
    this.#correctCallsOrder = [];
    this.#content = content;
  }

  extractHeadersFromContent() {
    this.#correctCallsOrder.push('extractHeadersFromContent');
    return this;
  }

  splitContent() {
    this.#correctCallsOrder.push('splitContent');
    return this;
  }

  makeRawObjects() {
    this.#correctCallsOrder.push('makeRawObjects');
    return this;
  }

  makeProjects() {
    this.#correctCallsOrder.push('makeProjects');
    return this;
  }

  build() {
    this.#correctCallsOrder.push('build');
    return {
      content: this.#content,
      correctCallsOrder: this.#correctCallsOrder,
    };
  }
}

describe('TextProcessorFacade suite test', () => {
  describe('getProjectsFromCSV', () => {
    it('should call the functions in the correct order', () => {
      const expectedCallsOrder = [
        'extractHeadersFromContent',
        'splitContent',
        'makeRawObjects',
        'makeProjects',
        'build',
      ];
      const expectedContent = 'any';
      const sut = new TextProcessorFacade({
        TextProcessorFluentAPI: TextProcessorFluentAPIStub,
        text: expectedContent,
      });

      const result = sut.getProjectsFromCSV();

      expect(result.correctCallsOrder).to.be.deep.equal(expectedCallsOrder);
      expect(result.content).to.be.deep.equal(expectedContent);
    });
  });
});
