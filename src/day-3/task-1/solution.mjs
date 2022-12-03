import { readSource } from "../../readSource.mjs";

const getRucksackItems = (content = '') => [
    content.slice(0, content.length / 2).split(''),
    content.slice(content.length / 2).split('')
];

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const getPriority = rucksackItems => {
    const genericItemType = getGenericItemType(rucksackItems);
    const shift = genericItemType === genericItemType.toUpperCase() ? 27 : 1;

    return shift + letters.indexOf(genericItemType.toLowerCase());
};

const getGenericItemType = ([firstRucksackItem = [], secondRucksackItem = []]) => firstRucksackItem.find(item => secondRucksackItem.find(secondItem => item === secondItem));

const main = () => {
    const rucksackList = readSource('./input.txt');

    return rucksackList.reduce((prioritySum, content) =>
        prioritySum + getPriority(getRucksackItems(content)),
        0
    );

}

console.log('result is: ', main());
