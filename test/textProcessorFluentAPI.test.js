// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
import { describe, it } from 'mocha';
import { expect } from 'chai';

import TextProcessorFluentAPI from '../src/textProcessorFluentAPI.js';

import {
  mockCsvContent,
  mockCsvContentWithoutHeaders,
  mockCsvContentSplitedProjects,
} from './mock/valid.js';

/*
  Passos:
  1) [x] ler o arquivo CSV
  2) [] O csv é passado para o textProcessorFluentAPI
  3) [x] Separar os headers do content
  4) [] Separar os contents por linhas de projeto
  5) [] Transformar cada linha em um raw object
  6) [] Passar cada raw object para classe Project e criar uma lista de projects
  7) [] Retornar os projects
*/

describe('textProcessorFluentAPI Suite Test', () => {
  describe('extractHeadersFromContent', () => {
    it('should extract the headers from the content', () => {
      const sut = new TextProcessorFluentAPI(mockCsvContent);

      const result = sut.extractHeadersFromContent().build();

      expect(result).to.be.deep.equal(mockCsvContentWithoutHeaders);
    });
  });

  describe('splitContent', () => {
    it('should split the content by projects', () => {
      const sut = new TextProcessorFluentAPI(mockCsvContentWithoutHeaders);

      const result = sut.splitContent().build();

      expect(result).to.be.deep.equal(mockCsvContentSplitedProjects);
    });
  });

  describe('build', () => {
    it('should return the content', () => {
      const mockContent = 'any';
      const sut = new TextProcessorFluentAPI(mockContent);

      const result = sut.build();

      expect(result).to.be.deep.equal(mockContent);
    });
  });
});
