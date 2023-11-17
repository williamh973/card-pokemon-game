import { updatePlayerScore } from "./updatePlayerScore.js";

import { pikachuCard } from './cards/pikachu.card.js';
import { evoliCard } from './cards/evoli.card.js';
import { roucoolCard } from './cards/roucool.card.js';
import { racaillouCard } from './cards/racaillou.card.js';
import { insecateurCard } from './cards/insecateur.card.js';
import { sabeletteCard } from './cards/sabelette.card.js';
import { mewtwoCard } from './cards/mewtwo.card.js';
import { scarabruteCard } from './cards/scarabrute.card.js';
import { krabbossCard } from './cards/krabboss.card.js';
import { salamecheCard } from './cards/salameche.card.js';

import { domElementsFromSelectors } from './dom-elements.js';


const isPokemonInSecondLocation = () => 
  domElementsFromSelectors.pokemonSecondLocation.contains(pikachuCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(evoliCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(roucoolCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(racaillouCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(insecateurCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(sabeletteCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(mewtwoCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(scarabruteCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(krabbossCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(salamecheCard)


const isPokemonInFirstLocation = () => 
  domElementsFromSelectors.pokemonFirstLocation.contains(pikachuCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(evoliCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(roucoolCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(racaillouCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(insecateurCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(sabeletteCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(mewtwoCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(scarabruteCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(krabbossCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(salamecheCard)


  
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
      domElementsFromSelectors.pokemonSecondLocation.innerHTML = '';
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
      domElementsFromSelectors.pokemonSecondLocation.innerHTML = '';
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
      domElementsFromSelectors.pokemonFirstLocation.innerHTML = '';
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
      domElementsFromSelectors.pokemonFirstLocation.innerHTML = '';
  };
};




