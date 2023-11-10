import pikachuCard from './cards/pikachu.card.js';
import evoliCard from './cards/evoli.card.js';
import roucoolCard from './cards/roucool.card.js';
import racaillouCard from './cards/racaillou.card.js';
import insecateurCard from './cards/insecateur.card.js';

import selectors from './main-game.js'


export const handleSelectionRandomPokemon
= function handleSelectionRandomPokemon()
{

let randomFactor = Math.random(); 

  selectors.pokemonSecondLocation.innerHTML = ''; 
  
  if (randomFactor < 0.2) {
   selectors.pokemonSecondLocation.appendChild(pikachuCard);
  } else if (randomFactor < 0.4) {
    selectors.pokemonSecondLocation.appendChild(evoliCard);
  } else if (randomFactor < 0.6) {
    selectors.pokemonSecondLocation.appendChild(roucoolCard);
  } else if (randomFactor < 0.8) {
    selectors.pokemonSecondLocation.appendChild(racaillouCard);
  } else {
    selectors.pokemonSecondLocation.appendChild(insecateurCard);
  }

};
