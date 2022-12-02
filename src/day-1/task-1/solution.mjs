import path from 'path';
import { calcElfCalories } from '../calcElfCalories.mjs';

const elfCalories = calcElfCalories(path.join(path.dirname('.'), './input.txt'))

console.info('result is: ', Math.max(...elfCalories));
