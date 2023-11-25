import { pikachuStats } from './models/pikachu.model.js';
import { evoliStats } from './models/evoli.model.js';
import { roucoolStats } from './models/roucool.model.js'
import { racaillouStats } from './models/racaillou.model.js';
import { insecateurStats } from './models/insecateur.model.js';
import { sabeletteStats } from './models/sabelette.model.js';
import { mewtwoStats } from './models/mewtwo.model.js';
import { scarabruteStats } from './models/scarabrute.model.js';
import { krabbossStats } from './models/krabboss.model.js';
import { salamecheStats } from './models/salameche.model.js';
import { nidoranMaleStats } from './models/nidoranMale.model.js';


import { pikachuCard } from './cards/pikachu.card.js';
import { evoliCard } from './cards/evoli.card.js';
import { roucoolCard } from './cards/roucool.card.js';
import { racaillouCard } from './cards/racaillou.card.js';
import { insecateurCard } from './cards/insecateur.card.js';
import { sabeletteCard } from './cards/sabelette.card.js';
import { mewtwoCard } from './cards/mewtwo.card.js';
import { scarabruteCard } from './cards/scarabrute.card.js';
import { krabbossCard } from './cards/krabboss.card.js';
import { salamecheCard } from './cards/salameche.card.js';
import { nidoranMaleCard } from './cards/nidoranMale.card.js';

import { domElementsFromSelectors } from './dom-elements.js';


export const decreaseHp = 
function decreaseHp() {

  if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Pikachu') ||
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Pikachu') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(pikachuCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(pikachuCard))
     ) {
       document.getElementById('pikachuHealth').textContent = 
       `${pikachuStats.stats.hp}`;
  };
    
    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Évoli') ||
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Évoli') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(evoliCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(evoliCard))
  ) {
     document.getElementById('evoliHealth').textContent =
     `${evoliStats.stats.hp}`;
    };
    
    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Roucool') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Roucool') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(roucoolCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(roucoolCard))
  ) {
    document.getElementById('roucoolHealth').textContent = 
    `${roucoolStats.stats.hp}`;
    };
    
    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Racaillou') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Racaillou') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(racaillouCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(racaillouCard))
    ) {
    document.getElementById('racaillouHealth').textContent = 
    `${racaillouStats.stats.hp}`;
    };

    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Insécateur') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Insécateur') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(insecateurCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(insecateurCard))
    ) {
    document.getElementById('insecateurHealth').textContent = 
    `${insecateurStats.stats.hp}`;
    };

    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Sabelette') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Sabelette') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(sabeletteCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(sabeletteCard))
    ) {
    document.getElementById('sabeletteHealth').textContent = 
    `${sabeletteStats.stats.hp}`;
    };

    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Mewtwo') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Mewtwo') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(mewtwoCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(mewtwoCard))
    ) {
    document.getElementById('mewtwoHealth').textContent = 
    `${mewtwoStats.stats.hp}`;
    };

    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Scarabrute') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Scarabrute') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(scarabruteCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(scarabruteCard))
    ) {
    document.getElementById('scarabruteHealth').textContent = 
    `${scarabruteStats.stats.hp}`;
    };

    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Krabboss') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Krabboss') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(krabbossCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(krabbossCard))
    ) {
    document.getElementById('krabbossHealth').textContent = 
    `${krabbossStats.stats.hp}`;
    };

    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Salamèche') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Salamèche') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(salamecheCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(salamecheCard))
    ) {
    document.getElementById('salamecheHealth').textContent = 
    `${salamecheStats.stats.hp}`;
    };

    if (
      (domElementsFromSelectors.selectFirstPokemonButton.value === 'Nidoran♂') || 
      (domElementsFromSelectors.selectSecondPokemonButton.value === 'Nidoran♂') || 
      (domElementsFromSelectors.pokemonFirstLocation.contains(nidoranMaleCard)) || 
      (domElementsFromSelectors.pokemonSecondLocation.contains(nidoranMaleCard))
    ) {
    document.getElementById('nidoranMaleHealth').textContent = 
    `${nidoranMaleStats.stats.hp}`;
    };


}; 
  
  