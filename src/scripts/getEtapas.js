import { readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { evaluateRegex } from '../util.js';

async function main() {
  const rootDir = join(fileURLToPath(import.meta.url), '../', '../', '../');
  const csvPath = join(rootDir, 'docs/projeto-de-lei.csv');
  const csvData = (await readFile(csvPath)).toString();

  const extractEtapasRegex = evaluateRegex(
    /(?<=http[a-zA-Z0-9:/.?=]*;(\w|\s|[,.áàãéèúùíìóòõç])*;?)(\s|[A-Z,.ÁÀÃÉÈÚÙÍÌÓÒÕÇ])*(?=;)/g,
  );

  const arrayEtapas = csvData.match(extractEtapasRegex);

  const setEtapas = new Set(arrayEtapas);

  return Array.from(setEtapas);
}

await main();
