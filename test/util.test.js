// TODO: Dê uma olhada no projeto oficial do módulo 06 (Expressões Regulares - RegExp) para implementar este arquivo.
import { describe, it } from 'mocha';
import { expect } from 'chai';

import { evaluateRegex } from '../src/util.js';

describe('util test suite', () => {
  describe('evaluateRegex', () => {
    it('should return the regular expression when it is safe', () => {
      const safeRegex = /^safe$/;

      const result = evaluateRegex(safeRegex);

      expect(result).to.be.deep.equal(safeRegex);
    });
  });
});
