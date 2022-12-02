import fs from 'fs';

const getSource = (path) => fs.readFileSync(path, 'utf-8').split('\n');

export const calcElfCalories = (source) => {
    const inputData = getSource(source);

    const elfsCalories = [0];
    inputData.reduce((list, record, index) => {

        const isLastElement = index === (inputData.length - 1);
    
        if (!record.length) { // current elf calories list is finished
            if(isLastElement) return list;

            // create new record for the next elf
            list.push(0);
            
            return list;
        }

        list[list.length - 1] += parseInt(record, 10);

        return list;
    }, elfsCalories);

    return elfsCalories;
}
