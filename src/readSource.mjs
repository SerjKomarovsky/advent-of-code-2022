import fs from 'fs';

export const readSource = (path) => fs.readFileSync(path, 'utf-8').split('\n');
