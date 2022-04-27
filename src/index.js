import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

import TextProcessorFacade from './textProcessorFacade.js';
import TextProcessorFluentAPI from './textProcessorFluentAPI.js';

async function main() {
  const rootDir = join(fileURLToPath(import.meta.url), '../', '../');
  const csvPath = join(rootDir, 'docs/projeto-de-lei.csv');
  const jsonPath = join(rootDir, 'docs/projeto-de-lei.json');
  const csvData = (await readFile(csvPath)).toString();

  const textProcessorFacade = new TextProcessorFacade({
    TextProcessorFluentAPI,
    text: csvData,
  });

  const projectsArray = textProcessorFacade.getProjectsFromCSV();

  await writeFile(jsonPath, JSON.stringify(projectsArray, null, 2), 'utf-8');
}

await main();
