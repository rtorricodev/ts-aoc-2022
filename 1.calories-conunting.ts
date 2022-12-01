import { readFileSync } from 'node:fs';

const input: string = readFileSync('1.calories-counting.data.txt', { encoding: 'utf-8' });
const calories: string[] = input.split('\n');

const elveTotalCaloriesArray: number[] = [];
let elveTotalCalories: number = 0; 

calories.forEach((calory: string): void => {
    if(calory !== '') {
        elveTotalCalories += parseInt(calory);
    } else {
        elveTotalCaloriesArray.push(elveTotalCalories);
        elveTotalCalories = 0;
    }
});

const elveWithMoreCalories = elveTotalCaloriesArray.reduce((totalCaloryA: string, totalCaloryB: string) => totalCaloryA > totalCaloryB ? totalCaloryA : totalCaloryB );

const sortedElveTotalCaloriesArray = elveTotalCaloriesArray.sort((totalCaloryA: string, totalCaloryB: string) => totalCaloryA > totalCaloryB ? -1 : 1);

const totalTopThreeElveCalories = sortedElveTotalCaloriesArray[0] + sortedElveTotalCaloriesArray[1] + sortedElveTotalCaloriesArray[2]; 

