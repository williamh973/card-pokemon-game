import { pikachuCard } from '../cards/pikachu.card.js';
import { evoliCard } from '../cards/evoli.card.js';
import { roucoolCard } from '../cards/roucool.card.js';
import { racaillouCard } from '../cards/racaillou.card.js';
import { insecateurCard } from '../cards/insecateur.card.js';
import { sabeletteCard } from '../cards/sabelette.card.js';
import { pokemonSelected } from '../dialogue-when-pokemon-selected.js';
import { mewtwoCard } from '../cards/mewtwo.card.js';
import { scarabruteCard } from '../cards/scarabrute.card.js';

import { domElementsFromSelectors } from '../selectors.js';


export const handleSelectionRandomPokemon
= function handleSelectionRandomPokemon(pokemon)
{



   domElementsFromSelectors.pokemonSecondLocation.innerHTML = ''; 
  

  switch (pokemon) {
    case 'Pikachu':
      domElementsFromSelectors.pokemonSecondLocation.appendChild(pikachuCard);
     pokemonSelected(pokemon);
      break;
    case 'Évoli':
      domElementsFromSelectors.pokemonSecondLocation.appendChild(evoliCard);
     pokemonSelected(pokemon);
      break;
    case 'Roucool':
      domElementsFromSelectors.pokemonSecondLocation.appendChild(roucoolCard);
     pokemonSelected(pokemon);
      break;
    case 'Racaillou':
      domElementsFromSelectors.pokemonSecondLocation.appendChild(racaillouCard);
     pokemonSelected(pokemon);
      break;
    case 'Insécateur':
      domElementsFromSelectors.pokemonSecondLocation.appendChild(insecateurCard);
     pokemonSelected(pokemon);
    break;
    case 'Sabelette':
      domElementsFromSelectors.pokemonSecondLocation.appendChild(sabeletteCard);
     pokemonSelected(pokemon);
      break;
      case 'Mewtwo':
         domElementsFromSelectors.pokemonSecondLocation.appendChild(mewtwoCard);
        pokemonSelected(pokemon);
      break;
      case 'Scarabrute':
         domElementsFromSelectors.pokemonSecondLocation.appendChild(scarabruteCard);
        pokemonSelected(pokemon);
      break;
  };
  

};
