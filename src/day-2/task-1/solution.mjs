import { readSource } from "../../readSource.mjs";

const ELF_MOVES = {
    A: 1,
    B: 2,
    C: 3
};
const PLAYER_MOVES = {
    X: 1,
    Y: 2,
    Z: 3
};

const GAME_RESULTS = {
    lose: 0,
    draw: 3,
    win: 6
};

const GAME_SCENARIO = {
    'AY': 'win',
    'AZ': 'lose',
    'BX': 'lose',
    'BZ': 'win',
    'CX': 'win',
    'CY': 'lose',
}

const getGameResult = (elfMove, playerMove) => {
    if(ELF_MOVES[elfMove] === PLAYER_MOVES[playerMove]) { // draw
        return 'draw';
    }

    return GAME_SCENARIO[`${elfMove}${playerMove}`];
}

const main = () => {
    const gamesList = readSource('./input.txt');

    return gamesList.reduce((totalScore, gameInfo) => {
        const [elfMove, playerMove] = gameInfo.split(' ');

        if (!elfMove || !playerMove) {
            return totalScore;
        }

        const gameResult = getGameResult(elfMove, playerMove);

        totalScore+= GAME_RESULTS[gameResult] + PLAYER_MOVES[playerMove];

        return totalScore;
    }, 0);
}

console.log('result is: ', main());
