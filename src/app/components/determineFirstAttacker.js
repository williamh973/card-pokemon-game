import { pikachuStats } from './models/pikachu.model.js';
import { evoliStats } from './models/evoli.model.js';
import { roucoolStats } from './models/roucool.model.js'
import { racaillouStats } from './models/racaillou.model.js';
import { insecateurStats } from './models/insecateur.model.js';
import { sabeletteStats } from './models/sabelette.model.js';
import { mewtwoStats } from './models/mewtwo.model.js';
import { scarabruteStats } from './models/scarabrute.model.js';

import { pikachuCard } from './cards/pikachu.card.js';
import { evoliCard } from './cards/evoli.card.js';
import { roucoolCard } from './cards/roucool.card.js';
import { racaillouCard } from './cards/racaillou.card.js';
import { insecateurCard } from './cards/insecateur.card.js';
import { sabeletteCard } from './cards/sabelette.card.js';
import { mewtwoCard } from './cards/mewtwo.card.js';
import { scarabruteCard } from './cards/scarabrute.card.js';

import { domElementsFromSelectors } from './selectors.js'


export { firstAttacker, secondAttacker, determineFirstAttacker };


 let firstAttacker, secondAttacker;

 const determineFirstAttacker = function determineFirstAttacker() {
    
  if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Pikachu' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(pikachuCard)) {
     firstAttacker = pikachuStats;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Évoli' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(evoliCard)) {
     firstAttacker = evoliStats;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Roucool' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(roucoolCard)) {
     firstAttacker = roucoolStats;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Racaillou' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(racaillouCard)) {
     firstAttacker = racaillouStats;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Insecateur' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(insecateurCard)) {
     firstAttacker = insecateurStats;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Sabelette' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(sabeletteCard)) {
     firstAttacker = sabeletteStats;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Mewtwo' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(mewtwoCard)) {
     firstAttacker = mewtwoStats;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Scarabrute' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(scarabruteCard)) {
     firstAttacker = scarabruteStats;
}
  



  if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Pikachu' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(pikachuCard)) {
     secondAttacker = pikachuStats;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Évoli' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(evoliCard)) {
     secondAttacker = evoliStats;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Roucool' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(roucoolCard)) {
     secondAttacker = roucoolStats;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Racaillou' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(racaillouCard)) {
     secondAttacker = racaillouStats;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Insécateur' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(insecateurCard)) {
     secondAttacker = insecateurStats;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Sabelette' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(sabeletteCard)) {
     secondAttacker = sabeletteStats;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Mewtwo' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(mewtwoCard)) {
     secondAttacker = mewtwoStats;
     
  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Scarabrute' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(scarabruteCard)) {
     secondAttacker = scarabruteStats;
}
    
  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
      [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];    
  }
  
  };
  