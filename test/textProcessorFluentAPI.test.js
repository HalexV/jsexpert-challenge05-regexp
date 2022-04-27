import { describe, it } from 'mocha';
import { expect } from 'chai';

import TextProcessorFluentAPI from '../src/textProcessorFluentAPI.js';

import {
  mockCsvContent,
  mockCsvContentWithoutHeaders,
  mockCsvContentSplitedProjects,
  mockCsvContentRawObjects,
  mockProjects,
} from './mock/valid.js';

/*
  Passos:
  1) [x] ler o arquivo CSV
  2) [x] O csv é passado para o textProcessorFluentAPI
  3) [x] Separar os headers do content
  4) [x] Separar os contents por linhas de projeto
  5) [x] Transformar cada linha em um raw object
  6) [x] Passar cada raw object para classe Project e criar uma lista de projects
  7) [x] Retornar os projects
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

  describe('makeRawObjects', () => {
    it('should return an array of raw objects', () => {
      const sut = new TextProcessorFluentAPI(mockCsvContentSplitedProjects);

      const result = sut.makeRawObjects().build();

      expect(result).to.be.deep.equal(mockCsvContentRawObjects);
    });

    it('should return a raw object with autor field with no data', () => {
      const mockProject = [
        'Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;PAUTA;Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;',
      ];

      const expected = {
        titulo: 'Projeto de lei 580/2016',
        link: 'http://www.al.sp.gov.br/propositura?id=1323286',
        autor: 'no data',
        etapa: 'PAUTA',
        ementa:
          'Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.',
        indexadoresnorma:
          'NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA',
      };

      const sut = new TextProcessorFluentAPI(mockProject);

      const result = sut.makeRawObjects().build();

      expect(result[0]).to.be.deep.equal(expected);
    });

    it('should return a raw object with etapa field with no data', () => {
      const mockProject = [
        'Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Carlos Silva;Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;',
      ];

      const expected = {
        titulo: 'Projeto de lei 580/2016',
        link: 'http://www.al.sp.gov.br/propositura?id=1323286',
        autor: 'Carlos Silva',
        etapa: 'no data',
        ementa:
          'Estabelece normas gerais para a realização de Concurso Público pela Administração Pública Direta e Indireta do Estado.',
        indexadoresnorma:
          'NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA',
      };

      const sut = new TextProcessorFluentAPI(mockProject);

      const result = sut.makeRawObjects().build();

      expect(result[0]).to.be.deep.equal(expected);
    });

    it('should return a raw object with ementa field with no data', () => {
      const mockProject = [
        'Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Carlos Silva;PAUTA;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;',
      ];

      const expected = {
        titulo: 'Projeto de lei 580/2016',
        link: 'http://www.al.sp.gov.br/propositura?id=1323286',
        autor: 'Carlos Silva',
        etapa: 'PAUTA',
        ementa: 'no data',
        indexadoresnorma:
          'NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA',
      };

      const sut = new TextProcessorFluentAPI(mockProject);

      const result = sut.makeRawObjects().build();

      expect(result[0]).to.be.deep.equal(expected);
    });

    it('should ignore the project string when the string does not start with the word projeto', () => {
      const mockProject = [
        'Projeto de lei 580/2016;http://www.al.sp.gov.br/propositura?id=1323286;Carlos Silva;PAUTA;NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA;',
        '',
      ];

      const expected = {
        titulo: 'Projeto de lei 580/2016',
        link: 'http://www.al.sp.gov.br/propositura?id=1323286',
        autor: 'Carlos Silva',
        etapa: 'PAUTA',
        ementa: 'no data',
        indexadoresnorma:
          'NORMAS, REALIZAÇÃO, CONCURSO PÚBLICO ESTADUAL, ESTADO DE SÃO PAULO, ADMINISTRAÇÃO PÚBLICA DIRETA E INDIRETA',
      };

      const sut = new TextProcessorFluentAPI(mockProject);

      const result = sut.makeRawObjects().build();

      expect(result.length).to.be.equal(1);
      expect(result[0]).to.be.deep.equal(expected);
    });
  });

  describe('makeProjects', () => {
    it('should return an array of projects', () => {
      const sut = new TextProcessorFluentAPI(mockCsvContentRawObjects);

      const result = sut.makeProjects().build();

      expect(result).to.be.deep.equal(mockProjects);
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
