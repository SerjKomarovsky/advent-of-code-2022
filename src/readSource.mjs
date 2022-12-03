import fs from 'fs';

export const readSource = (path) => fs.readFileSync(path, 'utf-8').trim().split('\n');
