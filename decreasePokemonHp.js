import pikachuStats from './models/pikachu.model.js';
import evoliStats from './models/evoli.model.js';
import roucoolStats from './models/roucool.model.js'
import racaillouStats from './models/racaillou.model.js';
import insecateurStats from './models/insecateur.model.js';

import pikachuCard from './cards/pikachu.card.js';
import evoliCard from './cards/evoli.card.js';
import roucoolCard from './cards/roucool.card.js';
import racaillouCard from './cards/racaillou.card.js';
import insecateurCard from './cards/insecateur.card.js';

import selectors from './main-game.js'


export const decreaseHp =  function decreaseHp() {
    if ((selectors.selectFirstPokemonButton.value === 'pikachu') || (selectors.selectSecondPokemonButton.value === 'pikachu') || (
  selectors.pokemonFirstLocation.contains(pikachuCard)) || (
  selectors.pokemonSecondLocation.contains(pikachuCard))
  ) {
    document.getElementById('pikachuHealth').textContent = `  ${pikachuStats.stats.hp} Pv`;
    
  };
    
    if ((selectors.selectFirstPokemonButton.value === 'evoli') || (selectors.selectSecondPokemonButton.value === 'evoli') || (
  selectors.pokemonFirstLocation.contains(evoliCard)) || (
  selectors.pokemonSecondLocation.contains(evoliCard))
  ) {
    document.getElementById('evoliHealth').textContent = `${evoliStats.stats.hp} Pv`;
    };
    
    if ((selectors.selectFirstPokemonButton.value === 'roucool') || (selectors.selectSecondPokemonButton.value === 'roucool') || (
  selectors.pokemonFirstLocation.contains(roucoolCard)) || (
  selectors.pokemonSecondLocation.contains(roucoolCard))
  ) {
    document.getElementById('roucoolHealth').textContent = `${roucoolStats.stats.hp} Pv`;
    };
    
    if ((selectors.selectFirstPokemonButton.value === 'racaillou') || (selectors.selectSecondPokemonButton.value === 'racaillou') || (
  selectors.pokemonFirstLocation.contains(racaillouCard)) || (
  selectors.pokemonSecondLocation.contains(racaillouCard))
    ) {
    document.getElementById('racaillouHealth').textContent = `${racaillouStats.stats.hp} Pv`;
    };

    if ((selectors.selectFirstPokemonButton.value === 'insecateur') || (selectors.selectSecondPokemonButton.value === 'insecateur') || (
      selectors.pokemonFirstLocation.contains(insecateurCard)) || (
      selectors.pokemonSecondLocation.contains(insecateurCard))
        ) {
        document.getElementById('insecateurHealth').textContent = `${insecateurStats.stats.hp} Pv`;
        };
  };
  
  