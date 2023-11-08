import pikachuStats from './stats/pikachuStats.js';
import evoliStats from './stats/evoliStats.js';
import roucoolStats from './stats/roucoolStats.js';
import racaillouStats from './stats/racaillouStats.js';

import pikachuCard from './cards/pikachuCard.js';
import evoliCard from './cards/evoliCard.js';
import roucoolCard from './cards/roucoolCard.js';
import racaillouCard from './cards/racaillouCard.js';

import selectors from './main-game.js'

export { firstAttacker, secondAttacker, determineFirstAttacker };


 let firstAttacker, secondAttacker;

 const determineFirstAttacker = function determineFirstAttacker() {
    
  if (selectors.selectFirstPokemonButton.value === 'pikachu' ||
  selectors.pokemonFirstLocation.contains(pikachuCard)) {
     firstAttacker = pikachuStats;
  } else if (selectors.selectFirstPokemonButton.value === 'evoli' ||
  selectors.pokemonFirstLocation.contains(evoliCard)) {
     firstAttacker = evoliStats;
  } else if (selectors.selectFirstPokemonButton.value === 'roucool' ||
  selectors.pokemonFirstLocation.contains(roucoolCard)) {
     firstAttacker = roucoolStats;
  } else if (selectors.selectFirstPokemonButton.value === 'racaillou' ||
  selectors.pokemonFirstLocation.contains(racaillouCard)) {
     firstAttacker = racaillouStats;
  }
  
  if (selectors.selectSecondPokemonButton.value === 'pikachu' ||
  selectors.pokemonSecondLocation.contains(pikachuCard)
  ) {
     secondAttacker = pikachuStats;
  } else if (selectors.selectSecondPokemonButton.value === 'evoli' ||
  selectors.pokemonSecondLocation.contains(evoliCard)) {
     secondAttacker = evoliStats;
  } else if (selectors.selectSecondPokemonButton.value === 'roucool' ||
  selectors.pokemonSecondLocation.contains(roucoolCard)) {
     secondAttacker = roucoolStats;
  } else if (selectors.selectSecondPokemonButton.value === 'racaillou' ||
  selectors.pokemonSecondLocation.contains(racaillouCard)) {
     secondAttacker = racaillouStats;
  }
    
  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
        [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];    
  }
  
  };
  