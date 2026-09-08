import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const pages = ['index.html', 'index.rsc', '404.html'];

for (const page of pages) {
  const file = join(outputDirectory, page);

  try {
    const source = await readFile(file, 'utf8');
    const updated = source
      .replaceAll('/_next/', './_next/')
      .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"');

    await writeFile(file, updated, 'utf8');
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      throw error;
    }
  }
}

console.log('GitHub Pages asset paths are relative and ready.');
