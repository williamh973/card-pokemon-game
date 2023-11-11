import pikachuStats from './models/pikachu.model.js';
import evoliStats from './models/evoli.model.js';
import roucoolStats from './models/roucool.model.js'
import racaillouStats from './models/racaillou.model.js';
import insecateurStats from './models/insecateur.model.js';
import sabeletteStats from './models/sabelette.model.js';

import { pikachuCard } from './cards/pikachu.card.js';
import { evoliCard } from './cards/evoli.card.js';
import { roucoolCard } from './cards/roucool.card.js';
import { racaillouCard } from './cards/racaillou.card.js';
import { insecateurCard } from './cards/insecateur.card.js';
import { sabeletteCard } from './cards/sabelette.card.js';

import { 
  pokemonHealthRedCheck, 
  pokemonHealthOrangeCheck,
  pokemonHealthBlackCheck 
} from './pokemonHealthCheck.js';

import selectors from './main-game.js'


export const decreaseHp =  function decreaseHp() {
    if (
      (selectors.selectFirstPokemonButton.value === 'Pikachu') ||
      (selectors.selectSecondPokemonButton.value === 'Pikachu') || 
      (selectors.pokemonFirstLocation.contains(pikachuCard)) || 
      (selectors.pokemonSecondLocation.contains(pikachuCard))
  ) {
    document.getElementById('pikachuHealth').textContent = 
    `${pikachuStats.stats.hp}`;
  };
    
    if (
      (selectors.selectFirstPokemonButton.value === 'Évoli') ||
      (selectors.selectSecondPokemonButton.value === 'Évoli') || 
      (selectors.pokemonFirstLocation.contains(evoliCard)) || 
      (selectors.pokemonSecondLocation.contains(evoliCard))
  ) {
    document.getElementById('evoliHealth').textContent =
     `${evoliStats.stats.hp}`;
    };
    
    if (
      (selectors.selectFirstPokemonButton.value === 'Roucool') || 
      (selectors.selectSecondPokemonButton.value === 'Roucool') || 
      (selectors.pokemonFirstLocation.contains(roucoolCard)) || 
      (selectors.pokemonSecondLocation.contains(roucoolCard))
  ) {
    document.getElementById('roucoolHealth').textContent = 
    `${roucoolStats.stats.hp}`;
    };
    
    if (
      (selectors.selectFirstPokemonButton.value === 'Racaillou') || 
      (selectors.selectSecondPokemonButton.value === 'Racaillou') || 
      (selectors.pokemonFirstLocation.contains(racaillouCard)) || 
      (selectors.pokemonSecondLocation.contains(racaillouCard))
    ) {
    document.getElementById('racaillouHealth').textContent = 
    `${racaillouStats.stats.hp}`;
    };

    if (
      (selectors.selectFirstPokemonButton.value === 'Insecateur') || 
      (selectors.selectSecondPokemonButton.value === 'Insecateur') || 
      (selectors.pokemonFirstLocation.contains(insecateurCard)) || 
      (selectors.pokemonSecondLocation.contains(insecateurCard))
    ) {
    document.getElementById('insecateurHealth').textContent = 
    `${insecateurStats.stats.hp}`;
    };

    if (
      (selectors.selectFirstPokemonButton.value === 'Sabelette') || 
      (selectors.selectSecondPokemonButton.value === 'Sabelette') || 
      (selectors.pokemonFirstLocation.contains(sabeletteCard)) || 
      (selectors.pokemonSecondLocation.contains(sabeletteCard))
    ) {
    document.getElementById('sabeletteHealth').textContent = 
    `${sabeletteStats.stats.hp}`;
    };

  pokemonHealthRedCheck();
  pokemonHealthOrangeCheck();
  pokemonHealthBlackCheck();

}; 
  
  