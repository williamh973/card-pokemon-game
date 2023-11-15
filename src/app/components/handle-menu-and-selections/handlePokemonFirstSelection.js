import { pikachuCard } from '../cards/pikachu.card.js';
import { evoliCard } from '../cards/evoli.card.js';
import { roucoolCard } from '../cards/roucool.card.js';
import { racaillouCard } from '../cards/racaillou.card.js';
import { insecateurCard } from '../cards/insecateur.card.js';
import { sabeletteCard } from '../cards/sabelette.card.js';
import { mewtwoCard } from '../cards/mewtwo.card.js';
import { scarabruteCard } from '../cards/scarabrute.card.js';


import { selectors } from '../main-game.js';
import { pokemonSelected } from '../dialogue-when-pokemon-selected.js';


export const handlePokemonFirstSelection =  function handlePokemonFirstSelection(pokemon) {
  
    selectors.pokemonFirstLocation.innerHTML = ''; 
        
      switch (pokemon) {
        case 'Pikachu':
        selectors.pokemonFirstLocation.appendChild(pikachuCard);
        pokemonSelected(pokemon);
          break;
        case 'Évoli':
        selectors.pokemonFirstLocation.appendChild(evoliCard);
        pokemonSelected(pokemon);
          break;
        case 'Roucool':
         selectors.pokemonFirstLocation.appendChild(roucoolCard);
        pokemonSelected(pokemon);
          break;
        case 'Racaillou':
        selectors.pokemonFirstLocation.appendChild(racaillouCard);
        pokemonSelected(pokemon);
          break;
        case 'Insécateur':
        selectors.pokemonFirstLocation.appendChild(insecateurCard);
        pokemonSelected(pokemon);
          break;
        case 'Sabelette':
        selectors.pokemonFirstLocation.appendChild(sabeletteCard);
        pokemonSelected(pokemon);
          break;
        case 'Mewtwo':
          selectors.pokemonFirstLocation.appendChild(mewtwoCard);
          pokemonSelected(pokemon);
        break;
        case 'Scarabrute':
          selectors.pokemonFirstLocation.appendChild(scarabruteCard);
          pokemonSelected(pokemon);
        break;
      }  

};