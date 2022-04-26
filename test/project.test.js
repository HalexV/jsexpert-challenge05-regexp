// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
import { describe, it } from 'mocha';
import { expect } from 'chai';

import Project from '../src/project.js';

describe('Project class suite test', () => {
  it('should return numero and ano fields from titulo field', () => {
    const mockRawObject = {
      titulo: 'Projeto de lei 584/2016',
      link: 'http://www.al.sp.gov.br/propositura?id=1322563',
      autor: 'Jorge Wilson Xerife do Consumidor',
      etapa: 'PAUTA',
      ementa:
        'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
      indexadoresnorma:
        'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO',
    };

    const expected = {
      numero: '584',
      ano: '2016',
    };

    const result = new Project(mockRawObject);

    expect(result.numero).to.be.deep.equal(expected.numero);
    expect(result.ano).to.be.deep.equal(expected.ano);
  });

  it('should return id field from link field', () => {
    const mockRawObject = {
      titulo: 'Projeto de lei 584/2016',
      link: 'http://www.al.sp.gov.br/propositura?id=1322563',
      autor: 'Jorge Wilson Xerife do Consumidor',
      etapa: 'PAUTA',
      ementa:
        'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
      indexadoresnorma:
        'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO',
    };

    const expected = '1322563';

    const result = new Project(mockRawObject);

    expect(result.id).to.be.deep.equal(expected);
  });

  it('should return an empty autores array field when autor field has no data', () => {
    const mockRawObject = {
      titulo: 'Projeto de lei 584/2016',
      link: 'http://www.al.sp.gov.br/propositura?id=1322563',
      autor: 'no data',
      etapa: 'PAUTA',
      ementa:
        'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
      indexadoresnorma:
        'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO',
    };

    const expected = [];

    const result = new Project(mockRawObject);

    expect(result.autores).to.be.deep.equal(expected);
  });

  it('should return autores array of objects field from autor field', () => {
    const mockRawObject = {
      titulo: 'Projeto de lei 584/2016',
      link: 'http://www.al.sp.gov.br/propositura?id=1322563',
      autor:
        'Jorge Wilson Xerife do Consumidor, Carlos Eduardo, Maria Francisca Eduarda, Pedro',
      etapa: 'PAUTA',
      ementa:
        'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
      indexadoresnorma:
        'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO',
    };

    const expected = [
      {
        nome: 'Jorge Consumidor',
      },
      {
        nome: 'Carlos Eduardo',
      },
      {
        nome: 'Maria Eduarda',
      },
      {
        nome: 'Pedro',
      },
    ];

    const result = new Project(mockRawObject);

    expect(result.autores).to.be.deep.equal(expected);
  });

  it('should return url field from link field', () => {
    const mockRawObject = {
      titulo: 'Projeto de lei 584/2016',
      link: 'http://www.al.sp.gov.br/propositura?id=1322563',
      autor:
        'Jorge Wilson Xerife do Consumidor, Carlos Eduardo, Maria Francisca Eduarda, Pedro',
      etapa: 'PAUTA',
      ementa:
        'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
      indexadoresnorma:
        'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO',
    };

    const expected = 'http://www.al.sp.gov.br/propositura?id=1322563';

    const result = new Project(mockRawObject);

    expect(result.url).to.be.deep.equal(expected);
  });

  it('should return an empty indexadores array field when indexadoresnorma has no data', () => {
    const mockRawObject = {
      titulo: 'Projeto de lei 584/2016',
      link: 'http://www.al.sp.gov.br/propositura?id=1322563',
      autor:
        'Jorge Wilson Xerife do Consumidor, Carlos Eduardo, Maria Francisca Eduarda, Pedro',
      etapa: 'PAUTA',
      ementa:
        'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
      indexadoresnorma: 'no data',
    };

    const expected = [];

    const result = new Project(mockRawObject);

    expect(result.indexadores).to.be.deep.equal(expected);
  });

  it('should return indexadores array field from indexadoresnorma field', () => {
    const mockRawObject = {
      titulo: 'Projeto de lei 584/2016',
      link: 'http://www.al.sp.gov.br/propositura?id=1322563',
      autor:
        'Jorge Wilson Xerife do Consumidor, Carlos Eduardo, Maria Francisca Eduarda, Pedro',
      etapa: 'PAUTA',
      ementa:
        'Dispõe sobre a inclusão de cláusula nos contratos de adesão aos serviços de telefonia fixa, de telefonia móvel e de banda larga móvel, e dá outras providências.',
      indexadoresnorma:
        'CONTRATO, OBRIGATORIEDADE, CLÁUSULA, SERVIÇO, TELEFONIA MÓVEL, TELEFONIA FIXA, PRAZO, INCLUSÃO, RESCISÃO CONTRATUAL, LIBERAÇÃO',
    };

    const expected = [
      'CONTRATO',
      'OBRIGATORIEDADE',
      'CLÁUSULA',
      'SERVIÇO',
      'TELEFONIA MÓVEL',
      'TELEFONIA FIXA',
      'PRAZO',
      'INCLUSÃO',
      'RESCISÃO CONTRATUAL',
      'LIBERAÇÃO',
    ];

    const result = new Project(mockRawObject);

    expect(result.indexadores).to.be.deep.equal(expected);
  });
});
