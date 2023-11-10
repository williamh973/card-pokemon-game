import pikachuCard from './cards/pikachu.card.js';
import evoliCard from './cards/evoli.card.js';
import roucoolCard from './cards/roucool.card.js';
import racaillouCard from './cards/racaillou.card.js';
import insecateurCard from './cards/insecateur.card.js';

import selectors from './main-game.js'
import { pokemonSelected } from './player-pokemon-selected-for-fight.js';

export const handlePokemonSecondSection = function handlePokemonSecondSection(pokemon) {
        
    selectors.pokemonSecondLocation.innerHTML = ''; 
        
      switch (pokemon) {
        case 'pikachu':
         selectors.pokemonSecondLocation.appendChild(pikachuCard);
         pokemonSelected(pokemon);
          break;
        case 'evoli':
         selectors.pokemonSecondLocation.appendChild(evoliCard);
         pokemonSelected(pokemon);
          break;
        case 'roucool':
         selectors.pokemonSecondLocation.appendChild(roucoolCard);
         pokemonSelected(pokemon);
          break;
        case 'racaillou':
         selectors.pokemonSecondLocation.appendChild(racaillouCard);
         pokemonSelected(pokemon);
          break;
        case 'insecateur':
         selectors.pokemonSecondLocation.appendChild(insecateurCard);
         pokemonSelected(pokemon);
        break;
      };
      
}