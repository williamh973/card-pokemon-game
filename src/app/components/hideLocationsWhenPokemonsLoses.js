import { updatePlayerScore } from "./updatePlayerScore.js";


const pokemonFirstLocation = 
document.getElementById('pokemon-first-location');

const pokemonSecondLocation = 
document.getElementById('pokemon-second-location');



export const hideLocationWhenFirstAttackerLose = 
function hideLocationWhenFirstAttackerLose(firstAttacker, enemyPokemon) {
    if (firstAttacker.name === enemyPokemon) {
      updatePlayerScore();
      pokemonSecondLocation.innerHTML = '';
    }
};

export const hideLocationWhenSecondAttackerLose = 
function hideLocationWhenSecondAttackerLose(secondAttacker, enemyPokemon) {
    if (secondAttacker.name === enemyPokemon) {
      updatePlayerScore();
      pokemonSecondLocation.innerHTML = '';
    }
};