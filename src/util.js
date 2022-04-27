import safeRegex from 'safe-regex';

export class InvalidRegexError extends Error {
  constructor(exp) {
    super(`This ${exp} is unsafe dude!`);
    this.name = 'InvalidRegexError';
  }
}

export const evaluateRegex = exp => {
  const isSafe = safeRegex(exp);
  if (isSafe) return exp;

  throw new InvalidRegexError(exp);
};

export const availablePautas = [
  'PAUTA',
  'DISTRIBUIÇÃO',
  'COMISSÃO',
  'PRONTO PARA ORDEM DO DIA',
  'VISTA',
  'ORDEM DO DIA',
  'TRANSFORMADO EM NORMA',
  'ARQUIVADO',
  'RELATOR ESPECIAL',
];
