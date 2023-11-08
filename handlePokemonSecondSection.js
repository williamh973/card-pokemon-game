import pikachuStats from './stats/pikachuStats.js';
import evoliStats from './stats/evoliStats.js';
import roucoolStats from './stats/roucoolStats.js';
import racaillouStats from './stats/racaillouStats.js';

import pikachuCard from './cards/pikachuCard.js';
import evoliCard from './cards/evoliCard.js';
import roucoolCard from './cards/roucoolCard.js';
import racaillouCard from './cards/racaillouCard.js';

import selectors from './main-game.js'


export const handlePokemonSecondSection = function handlePokemonSecondSection(pokemon) {
        
    selectors.pokemonSecondLocation.innerHTML = ''; 
        
      switch (pokemon) {
        case 'pikachu':
        selectors.pokemonSecondLocation.appendChild(pikachuCard);
          break;
        case 'evoli':
        selectors.pokemonSecondLocation.appendChild(evoliCard);
          break;
        case 'roucool':
         selectors.pokemonSecondLocation.appendChild(roucoolCard);
          break;
        case 'racaillou':
        selectors.pokemonSecondLocation.appendChild(racaillouCard);
          break;
      };
      
}