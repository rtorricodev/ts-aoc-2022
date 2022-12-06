import { readFileSync } from 'node:fs';

const input: string = readFileSync('2.rock-paper-scissors.data.txt', { encoding: 'utf-8' });

const rounds: string[] = input.split('\n');


const processRound = (round: string): number => {
    const lost: number = 0;
    const draw: number = 3;
    const won: number = 6;
    const rock: number = 1;
    const paper: number = 2;
    const scissors: number = 3;

    let answer: number = 0;

    if(round[0] === 'A') {
        if(round[2] === 'X') {
            answer = lost + scissors;
        } else if(round[2] === 'Y') {
            answer = draw + rock;
        } else if(round[2] === 'Z') {
            answer = won + paper;
        }
    } else if(round[0] === 'B') {
        if(round[2] === 'X') {
            answer = lost + rock;
        } else if(round[2] === 'Y') {
            answer = draw + paper;
        } else if(round[2] === 'Z') {
            answer = won + scissors;
        }
    } else if(round[0] === 'C') {
        if(round[2] === 'X') {
            answer = lost + paper;
        } else if(round[2] === 'Y') {
            answer = draw + scissors;
        } else if(round[2] === 'Z') {
            answer = won + rock;
        }
    }
    return answer;
}

let total: number = 0;

rounds.forEach((round: string) => {
    total += processRound(round);
})

console.log(total);