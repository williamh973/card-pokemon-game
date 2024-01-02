import { pikachuModel } from './models/pikachu.model.js';
import { evoliModel } from './models/evoli.model.js';
import { roucoolModel } from './models/roucool.model.js'
import { racaillouModel } from './models/racaillou.model.js';
import { insecateurModel } from './models/insecateur.model.js';
import { sabeletteModel } from './models/sabelette.model.js';
import { mewtwoModel } from './models/mewtwo.model.js';
import { scarabruteModel } from './models/scarabrute.model.js';
import { krabbossModel } from './models/krabboss.model.js';
import { salamecheModel } from './models/salameche.model.js';
import { nidoranMaleModel } from './models/nidoranMale.model.js';
import { crustabriModel } from './models/crustabri.model.js';
import { fantominusModel } from './models/fantominus.model.js';
import { ectoplasmaModel } from './models/ectoplasma.model.js';
import { spectrumModel } from './models/spectrum.model.js';


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
import { crustabriCard } from './cards/crustabri.card.js';
import { fantominusCard } from './cards/fantominus.card.js';
import { ectoplasmaCard } from './cards/ectoplasma.card.js';
import { spectrumCard } from './cards/spectrum.card.js';

import { domElementsFromSelectors } from './dom-elements.js'


export { firstAttacker, secondAttacker, determineFirstAttacker };


 let firstAttacker, secondAttacker;

 const determineFirstAttacker = 
 function determineFirstAttacker() {

   if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Spectrum' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(spectrumCard)) {
     firstAttacker = spectrumModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Ectoplasma' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(ectoplasmaCard)) {
     firstAttacker = ectoplasmaModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Fantominus' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(fantominusCard)) {
     firstAttacker = fantominusModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Crustabri' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(crustabriCard)) {
     firstAttacker = crustabriModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Pikachu' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(pikachuCard)) {
     firstAttacker = pikachuModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Évoli' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(evoliCard)) {
     firstAttacker = evoliModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Roucool' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(roucoolCard)) {
     firstAttacker = roucoolModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Racaillou' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(racaillouCard)) {
     firstAttacker = racaillouModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Insecateur' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(insecateurCard)) {
     firstAttacker = insecateurModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Sabelette' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(sabeletteCard)) {
     firstAttacker = sabeletteModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Mewtwo' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(mewtwoCard)) {
     firstAttacker = mewtwoModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Scarabrute' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(scarabruteCard)) {
     firstAttacker = scarabruteModel;
     
  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Krabboss' ||
     domElementsFromSelectors.pokemonFirstLocation.contains(krabbossCard)) {
     firstAttacker = krabbossModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Salamèche' ||
    domElementsFromSelectors.pokemonFirstLocation.contains(salamecheCard)) {
    firstAttacker = salamecheModel;

  } else if (domElementsFromSelectors.selectFirstPokemonButton.value === 'Nidoran♂' ||
    domElementsFromSelectors.pokemonFirstLocation.contains(nidoranMaleCard)) {
    firstAttacker = nidoranMaleModel;
}
  


  if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Spectrum' ||
    domElementsFromSelectors.pokemonSecondLocation.contains(spectrumCard)) {
      secondAttacker = spectrumModel;
  
  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Ectoplasma' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(ectoplasmaCard)) {
      secondAttacker = ectoplasmaModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Fantominus' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(fantominusCard)) {
     secondAttacker = fantominusModel;
  
  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Crustabri' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(crustabriCard)) {
     secondAttacker = crustabriModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Pikachu' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(pikachuCard)) {
     secondAttacker = pikachuModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Évoli' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(evoliCard)) {
     secondAttacker = evoliModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Roucool' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(roucoolCard)) {
     secondAttacker = roucoolModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Racaillou' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(racaillouCard)) {
     secondAttacker = racaillouModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Insécateur' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(insecateurCard)) {
     secondAttacker = insecateurModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Sabelette' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(sabeletteCard)) {
     secondAttacker = sabeletteModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Mewtwo' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(mewtwoCard)) {
     secondAttacker = mewtwoModel;
     
  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Scarabrute' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(scarabruteCard)) {
     secondAttacker = scarabruteModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Krabboss' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(krabbossCard)) {
     secondAttacker = krabbossModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Salamèche' ||
     domElementsFromSelectors.pokemonSecondLocation.contains(salamecheCard)) {
     secondAttacker = salamecheModel;

  } else if (domElementsFromSelectors.selectSecondPokemonButton.value === 'Nidoran♂' ||
  domElementsFromSelectors.pokemonSecondLocation.contains(nidoranMaleCard)) {
  secondAttacker = nidoranMaleModel;
}
    
  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
      [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];    
  }
  
  };
  