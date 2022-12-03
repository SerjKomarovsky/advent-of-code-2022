import { readSource } from "../../readSource.mjs";

const getElfGroups = (rucksackList) => {
    const result = [];
    const groupCount = 3;
    for(let i = 0; i < rucksackList.length; i+=groupCount) {
        result.push(rucksackList.slice(i, i + groupCount))
    }

    console.log(result[0]);
    return result;
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const getPriority = rucksackItems => {
    const genericItemType = getGenericItemType(rucksackItems);
    const shift = genericItemType === genericItemType.toUpperCase() ? 27 : 1;

    return shift + letters.indexOf(genericItemType.toLowerCase());
};

const getGenericItemType = (groupItems) => {
    const [firstRucksackItem, secondRucksackItem, thirdRucksackItem] = groupItems.map(item => item.split(''));

    return firstRucksackItem.find(item =>
        secondRucksackItem.find(secondItem => item === secondItem) &&
        thirdRucksackItem.find(thirdItem => item === thirdItem),
    );
}

const main = () => {
    const rucksackList = readSource('./input.txt');

    return getElfGroups(rucksackList).reduce((prioritySum, elfGroup) => {
        console.log(elfGroup);
        return prioritySum + getPriority(elfGroup);
    }, 0);

}

console.log('result is: ', main());
