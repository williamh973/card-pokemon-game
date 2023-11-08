import pikachuStats from './stats/pikachuStats.js';
import evoliStats from './stats/evoliStats.js';
import roucoolStats from './stats/roucoolStats.js';
import racaillouStats from './stats/racaillouStats.js';

import pikachuCard from './cards/pikachuCard.js';
import evoliCard from './cards/evoliCard.js';
import roucoolCard from './cards/roucoolCard.js';
import racaillouCard from './cards/racaillouCard.js';

import selectors from './main-game.js'

import { firstAttacker, secondAttacker, determineFirstAttacker } from './determineFirstAttacker.js';


export const handleSelectionRandomPokemon
= function handleSelectionRandomPokemon()
{

let randomFactor = Math.random(); 

  selectors.pokemonSecondLocation.innerHTML = ''; 
  
  if (randomFactor < 0.25) {
   selectors.pokemonSecondLocation.appendChild(pikachuCard);
  } else if (randomFactor < 0.5) {
    selectors.pokemonSecondLocation.appendChild(evoliCard);
  } else if (randomFactor < 0.75) {
    selectors.pokemonSecondLocation.appendChild(roucoolCard);
  } else {
    selectors.pokemonSecondLocation.appendChild(racaillouCard);
  }

};
