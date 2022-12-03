import { readSource } from "../../readSource.mjs";

const ELF_MOVES = {
    A: 1, // rock
    B: 2, // paper
    C: 3 // scissors
};
const PLAYER_MOVES = {
    X: 1, // lose
    Y: 2, // draw
    Z: 3, // win
};

const GAME_SCORES = {
    X: 0,
    Y: 3,
    Z: 6
};

const WIN_COMBINATION = {
    A: 'Y',
    B: 'Z',
    C: 'X'
}

const LOSE_COMBINATION = {
    A: 'Z',
    B: 'X',
    C: 'Y'
}

const predictPlayerMove = (opponentMove, expectedResult) => {
    if(expectedResult === 'Y') { // draw
        const elfIndex = Object.keys(ELF_MOVES).indexOf(opponentMove);
        return Object.keys(PLAYER_MOVES)[elfIndex];
    }

    if(expectedResult === 'Z') {
        return WIN_COMBINATION[opponentMove];
    }

    return LOSE_COMBINATION[opponentMove];
}

const main = () => {
    const gamesList = readSource('./input.txt');

    return gamesList.reduce((totalScore, gameInfo) => {
        const [elfMove, expectedGameResult] = gameInfo.split(' ');

        if (!elfMove) {
            return totalScore;
        }

        const playerMove = predictPlayerMove(elfMove, expectedGameResult);

        totalScore+= GAME_SCORES[expectedGameResult] + PLAYER_MOVES[playerMove];

        return totalScore;
    }, 0);
}

console.log('result is: ', main());
