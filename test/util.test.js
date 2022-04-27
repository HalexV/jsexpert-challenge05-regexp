import { describe, it } from 'mocha';
import { expect } from 'chai';

import { evaluateRegex, InvalidRegexError } from '../src/util.js';

describe('util test suite', () => {
  describe('evaluateRegex', () => {
    it('should return the regular expression when it is safe', () => {
      const safeRegex = /^safe$/;

      const result = evaluateRegex(safeRegex);

      expect(result).to.be.deep.equal(safeRegex);
    });

    it('should throw an InvalidRegexError when the regular expression it is not safe', () => {
      const unsafeRegex = /^([abc]+\s?)+$/;
      let returnedError;

      try {
        evaluateRegex(unsafeRegex);
      } catch (error) {
        returnedError = error;
      }

      expect(() => evaluateRegex(unsafeRegex)).to.throw();
      expect(returnedError).to.be.instanceOf(InvalidRegexError);
    });
  });
});
