import { pikachuCard } from '../cards/pikachu.card.js';
import { evoliCard } from '../cards/evoli.card.js';
import { roucoolCard } from '../cards/roucool.card.js';
import { racaillouCard } from '../cards/racaillou.card.js';
import { insecateurCard } from '../cards/insecateur.card.js';
import { sabeletteCard } from '../cards/sabelette.card.js';
import { mewtwoCard } from '../cards/mewtwo.card.js';
import { scarabruteCard } from '../cards/scarabrute.card.js';

import { pokemonSelected } from '../dialogue-when-pokemon-selected.js';

import { selectors } from '../main-game.js'

export const handlePokemonSecondSelection = function handlePokemonSecondSelection(pokemon) {
        
    selectors.pokemonSecondLocation.innerHTML = ''; 
        
      switch (pokemon) {
        case 'Pikachu':
         selectors.pokemonSecondLocation.appendChild(pikachuCard);
         pokemonSelected(pokemon);
          break;
        case 'Évoli':
         selectors.pokemonSecondLocation.appendChild(evoliCard);
         pokemonSelected(pokemon);
          break;
        case 'Roucool':
         selectors.pokemonSecondLocation.appendChild(roucoolCard);
         pokemonSelected(pokemon);
          break;
        case 'Racaillou':
         selectors.pokemonSecondLocation.appendChild(racaillouCard);
         pokemonSelected(pokemon);
          break;
        case 'Insécateur':
         selectors.pokemonSecondLocation.appendChild(insecateurCard);
         pokemonSelected(pokemon);
        break;
        case 'Sabelette':
         selectors.pokemonSecondLocation.appendChild(sabeletteCard);
         pokemonSelected(pokemon);
          break;
          case 'Mewtwo':
            selectors.pokemonSecondLocation.appendChild(mewtwoCard);
            pokemonSelected(pokemon);
          break;
          case 'Scarabrute':
            selectors.pokemonSecondLocation.appendChild(scarabruteCard);
            pokemonSelected(pokemon);
          break;
      };
      
}