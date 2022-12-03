import { readSource } from "../../readSource.mjs";

const ELF_MOVES = {
    A: 1, // rock
    B: 2, // paper
    C: 3 // scissors
};
const PLAYER_MOVES = {
    X: 1, // rock
    Y: 2, // paper
    Z: 3, // scissors
};

const GAME_SCORES = {
    lose: 0,
    draw: 3,
    win: 6
};

const LOSE_SCENARIOS = ['AZ', 'BX', 'CY'];

const getGameResult = (elfMove, playerMove) => {
    if(ELF_MOVES[elfMove] === PLAYER_MOVES[playerMove]) { // draw
        return 'draw';
    }

    // elf shows rock and player shows scissors (which is the weakest figure)
    if(LOSE_SCENARIOS.includes(`${elfMove}${playerMove}`)) {
        return 'lose';
    }

    return 'win';
}

const main = () => {
    const gamesList = readSource('./input.txt');

    return gamesList.reduce((totalScore, gameInfo) => {
        const [elfMove, playerMove] = gameInfo.split(' ');

        if (!elfMove || !playerMove) {
            return totalScore;
        }

        const gameResult = getGameResult(elfMove, playerMove);

        totalScore+= GAME_SCORES[gameResult] + PLAYER_MOVES[playerMove];

        return totalScore;
    }, 0);
}

console.log('result is: ', main());
