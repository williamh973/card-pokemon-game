import { pikachuCard } from '../cards/pikachu.card.js';
import { evoliCard } from '../cards/evoli.card.js';
import { roucoolCard } from '../cards/roucool.card.js';
import { racaillouCard } from '../cards/racaillou.card.js';
import { insecateurCard } from '../cards/insecateur.card.js';
import { sabeletteCard } from '../cards/sabelette.card.js';
import { mewtwoCard } from '../cards/mewtwo.card.js';
import { scarabruteCard } from '../cards/scarabrute.card.js';

import { domElementsFromSelectors } from '../selectors.js';
import { pokemonSelected } from '../dialogue-when-pokemon-selected.js';


export const handlePokemonFirstSelection =  function handlePokemonFirstSelection(pokemon) {
  
    domElementsFromSelectors.pokemonFirstLocation.innerHTML = ''; 
        
      switch (pokemon) {
        case 'Pikachu':
        domElementsFromSelectors.pokemonFirstLocation.appendChild(pikachuCard);
        pokemonSelected(pokemon);
          break;
        case 'Évoli':
        domElementsFromSelectors.pokemonFirstLocation.appendChild(evoliCard);
        pokemonSelected(pokemon);
          break;
        case 'Roucool':
         domElementsFromSelectors.pokemonFirstLocation.appendChild(roucoolCard);
        pokemonSelected(pokemon);
          break;
        case 'Racaillou':
        domElementsFromSelectors.pokemonFirstLocation.appendChild(racaillouCard);
        pokemonSelected(pokemon);
          break;
        case 'Insécateur':
        domElementsFromSelectors.pokemonFirstLocation.appendChild(insecateurCard);
        pokemonSelected(pokemon);
          break;
        case 'Sabelette':
        domElementsFromSelectors.pokemonFirstLocation.appendChild(sabeletteCard);
        pokemonSelected(pokemon);
          break;
        case 'Mewtwo':
          domElementsFromSelectors.pokemonFirstLocation.appendChild(mewtwoCard);
          pokemonSelected(pokemon);
        break;
        case 'Scarabrute':
          domElementsFromSelectors.pokemonFirstLocation.appendChild(scarabruteCard);
          pokemonSelected(pokemon);
        break;
      }  

};