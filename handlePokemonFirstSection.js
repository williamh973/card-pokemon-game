import pikachuStats from './stats/pikachuStats.js';
import evoliStats from './stats/evoliStats.js';
import roucoolStats from './stats/roucoolStats.js';
import racaillouStats from './stats/racaillouStats.js';
import pikachuCard from './cards/pikachuCard.js';
import evoliCard from './cards/evoliCard.js';
import roucoolCard from './cards/roucoolCard.js';
import racaillouCard from './cards/racaillouCard.js';

import selectors from './main-game.js';
import { pokemonSelected } from './player-pokemon-selected-for-fight.js';


export const handlePokemonFirstSection =  function handlePokemonFirstSection(pokemon) {
  
    selectors.pokemonFirstLocation.innerHTML = ''; 
        
      switch (pokemon) {
        case 'pikachu':
        selectors.pokemonFirstLocation.appendChild(pikachuCard);
        pokemonSelected(pokemon);
          break;
        case 'evoli':
        selectors.pokemonFirstLocation.appendChild(evoliCard);
        pokemonSelected(pokemon);
          break;
        case 'roucool':
         selectors.pokemonFirstLocation.appendChild(roucoolCard);
        pokemonSelected(pokemon);
          break;
        case 'racaillou':
        selectors.pokemonFirstLocation.appendChild(racaillouCard);
        pokemonSelected(pokemon);
          break;
      }  

};