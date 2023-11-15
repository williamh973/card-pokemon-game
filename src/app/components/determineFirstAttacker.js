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

import { selectors } from './main-game.js';


export { firstAttacker, secondAttacker, determineFirstAttacker };


 let firstAttacker, secondAttacker;

 const determineFirstAttacker = function determineFirstAttacker() {
    
  if (selectors.selectFirstPokemonButton.value === 'Pikachu' ||
     selectors.pokemonFirstLocation.contains(pikachuCard)) {
     firstAttacker = pikachuStats;

  } else if (selectors.selectFirstPokemonButton.value === 'Évoli' ||
     selectors.pokemonFirstLocation.contains(evoliCard)) {
     firstAttacker = evoliStats;

  } else if (selectors.selectFirstPokemonButton.value === 'Roucool' ||
     selectors.pokemonFirstLocation.contains(roucoolCard)) {
     firstAttacker = roucoolStats;

  } else if (selectors.selectFirstPokemonButton.value === 'Racaillou' ||
     selectors.pokemonFirstLocation.contains(racaillouCard)) {
     firstAttacker = racaillouStats;

  } else if (selectors.selectFirstPokemonButton.value === 'Insecateur' ||
     selectors.pokemonFirstLocation.contains(insecateurCard)) {
     firstAttacker = insecateurStats;

  } else if (selectors.selectFirstPokemonButton.value === 'Sabelette' ||
     selectors.pokemonFirstLocation.contains(sabeletteCard)) {
     firstAttacker = sabeletteStats;

  } else if (selectors.selectFirstPokemonButton.value === 'Mewtwo' ||
     selectors.pokemonFirstLocation.contains(mewtwoCard)) {
     firstAttacker = mewtwoStats;

  } else if (selectors.selectFirstPokemonButton.value === 'Scarabrute' ||
     selectors.pokemonFirstLocation.contains(scarabruteCard)) {
     firstAttacker = scarabruteStats;
}
  



  if (selectors.selectSecondPokemonButton.value === 'Pikachu' ||
     selectors.pokemonSecondLocation.contains(pikachuCard)) {
     secondAttacker = pikachuStats;

  } else if (selectors.selectSecondPokemonButton.value === 'Évoli' ||
     selectors.pokemonSecondLocation.contains(evoliCard)) {
     secondAttacker = evoliStats;

  } else if (selectors.selectSecondPokemonButton.value === 'Roucool' ||
     selectors.pokemonSecondLocation.contains(roucoolCard)) {
     secondAttacker = roucoolStats;

  } else if (selectors.selectSecondPokemonButton.value === 'Racaillou' ||
     selectors.pokemonSecondLocation.contains(racaillouCard)) {
     secondAttacker = racaillouStats;

  } else if (selectors.selectSecondPokemonButton.value === 'Insécateur' ||
     selectors.pokemonSecondLocation.contains(insecateurCard)) {
     secondAttacker = insecateurStats;

  } else if (selectors.selectSecondPokemonButton.value === 'Sabelette' ||
     selectors.pokemonSecondLocation.contains(sabeletteCard)) {
     secondAttacker = sabeletteStats;

  } else if (selectors.selectSecondPokemonButton.value === 'Mewtwo' ||
     selectors.pokemonSecondLocation.contains(mewtwoCard)) {
     secondAttacker = mewtwoStats;
     
  } else if (selectors.selectSecondPokemonButton.value === 'Scarabrute' ||
     selectors.pokemonSecondLocation.contains(scarabruteCard)) {
     secondAttacker = scarabruteStats;
}
    
  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
      [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];    
  }
  
  };
  