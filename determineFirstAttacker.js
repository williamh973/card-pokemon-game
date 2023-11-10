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
  } else if (selectors.selectFirstPokemonButton.value === 'insecateur' ||
  selectors.pokemonFirstLocation.contains(insecateurCard)) {
     firstAttacker = insecateurStats;
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
  } else if (selectors.selectSecondPokemonButton.value === 'insecateur' ||
  selectors.pokemonSecondLocation.contains(insecateurCard)) {
     secondAttacker = insecateurStats;
  }
    
  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
        [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];    
  }
  
  };
  