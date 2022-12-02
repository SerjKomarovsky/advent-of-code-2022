import path from 'path';
import { calcElfCalories } from '../calcElfCalories.mjs';

const getTopElfCalories = () => {
    const elfCalories = calcElfCalories(path.join(path.dirname('.'), './input.txt'))

    const sortElfByCalories = (elfsList = []) => elfsList.sort((a, b) => b - a);
    const topElfList = sortElfByCalories(elfCalories).slice(0, 3);

    return topElfList.reduce((result, currentValue) => result+= currentValue, 0);
}

console.info('result is: ', getTopElfCalories());
