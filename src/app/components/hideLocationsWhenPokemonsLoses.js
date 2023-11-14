import { updatePlayerScore } from "./updatePlayerScore.js";

import { pikachuCard } from './cards/pikachu.card.js';
import { evoliCard } from './cards/evoli.card.js';
import { roucoolCard } from './cards/roucool.card.js';
import { racaillouCard } from './cards/racaillou.card.js';
import { insecateurCard } from './cards/insecateur.card.js';
import { sabeletteCard } from './cards/sabelette.card.js';
import { mewtwoCard } from './cards/mewtwo.card.js';

import selectors from "./main-game.js";


const isPokemonInSecondLocation = () => 
  selectors.pokemonSecondLocation.contains(pikachuCard) ||
  selectors.pokemonSecondLocation.contains(evoliCard) ||
  selectors.pokemonSecondLocation.contains(roucoolCard) ||
  selectors.pokemonSecondLocation.contains(racaillouCard) ||
  selectors.pokemonSecondLocation.contains(insecateurCard) ||
  selectors.pokemonSecondLocation.contains(sabeletteCard) ||
  selectors.pokemonSecondLocation.contains(mewtwoCard)


const isPokemonInFirstLocation = () => 
  selectors.pokemonFirstLocation.contains(pikachuCard) ||
  selectors.pokemonFirstLocation.contains(evoliCard) ||
  selectors.pokemonFirstLocation.contains(roucoolCard) ||
  selectors.pokemonFirstLocation.contains(racaillouCard) ||
  selectors.pokemonFirstLocation.contains(insecateurCard) ||
  selectors.pokemonFirstLocation.contains(sabeletteCard) ||
  selectors.pokemonFirstLocation.contains(mewtwoCard)


  
export const hideSecondAttackerWhenLose = 
function hideSecondAttackerWhenLose(
  secondAttacker, 
  enemyPokemon
  ) {
  if  (
    secondAttacker.name === enemyPokemon && 
    isPokemonInSecondLocation()
    ) {
      updatePlayerScore();
      selectors.pokemonSecondLocation.innerHTML = '';
  };
};

export const hideFirstAttackerWhenLose = 
function hideFirstAttackerWhenLose(
  firstAttacker, 
  enemyPokemon
  ) {
  if (
    firstAttacker.name === enemyPokemon && 
    isPokemonInFirstLocation()
    ) {
      updatePlayerScore();
      selectors.pokemonSecondLocation.innerHTML = '';
  };
};


export const hidePlayerSecondAttackerWhenLose = 
function hidePlayerSecondAttackerWhenLose(
  secondAttacker, 
  playerSelectedPokemon
  ) {
  if  (
    secondAttacker.name === playerSelectedPokemon && 
    isPokemonInFirstLocation()
    ) {
      selectors.pokemonFirstLocation.innerHTML = '';
  };
};

export const hidePlayerFirstAttackerWhenLose = 
function hidePlayerFirstAttackerWhenLose(
  firstAttacker, 
  playerSelectedPokemon
  ) {
  if  (
    firstAttacker.name === playerSelectedPokemon && 
    isPokemonInFirstLocation()
    ) {
      selectors.pokemonFirstLocation.innerHTML = '';
  };
};




