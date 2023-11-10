import pikachuCard from './cards/pikachu.card.js';
import evoliCard from './cards/evoli.card.js';
import roucoolCard from './cards/roucool.card.js';
import racaillouCard from './cards/racaillou.card.js';
import insecateurCard from './cards/insecateur.card.js';

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
        case 'insecateur':
        selectors.pokemonFirstLocation.appendChild(insecateurCard);
        pokemonSelected(pokemon);
          break;
      }  

};