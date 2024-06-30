import { pikachuModel } from "../shared/pokemon/models/pikachu.model.js";
import { evoliModel } from "../shared/pokemon/models/evoli.model.js";
import { roucoolModel } from "../shared/pokemon/models/roucool.model.js";
import { racaillouModel } from "../shared/pokemon/models/racaillou.model.js";
import { insecateurModel } from "../shared/pokemon/models/insecateur.model.js";
import { sabeletteModel } from "../shared/pokemon/models/sabelette.model.js";
import { mewtwoModel } from "../shared/pokemon/models/mewtwo.model.js";
import { scarabruteModel } from "../shared/pokemon/models/scarabrute.model.js";
import { krabbossModel } from "../shared/pokemon/models/krabboss.model.js";
import { salamecheModel } from "../shared/pokemon/models/salameche.model.js";
import { nidoranMaleModel } from "../shared/pokemon/models/nidoranMale.model.js";
import { crustabriModel } from "../shared/pokemon/models/crustabri.model.js";
import { fantominusModel } from "../shared/pokemon/models/fantominus.model.js";
import { ectoplasmaModel } from "../shared/pokemon/models/ectoplasma.model.js";
import { spectrumModel } from "../shared/pokemon/models/spectrum.model.js";

import { domElements } from "../shared/dom/dom-elements.js";

export { firstAttacker, secondAttacker, determineFirstAttacker };

let firstAttacker;
let secondAttacker;

let pokemonModelList = {
  Pikachu: pikachuModel,
  Évoli: evoliModel,
  Roucool: roucoolModel,
  Racaillou: racaillouModel,
  Insécateur: insecateurModel,
  Sabelette: sabeletteModel,
  Mewtwo: mewtwoModel,
  Scarabrute: scarabruteModel,
  Krabboss: krabbossModel,
  Salamèche: salamecheModel,
  "Nidoran♂": nidoranMaleModel,
  Crustabri: crustabriModel,
  Fantominus: fantominusModel,
  Ectoplasma: ectoplasmaModel,
  Spectrum: spectrumModel,
};

function getPokemonModel(pokemonName) {
  const model = pokemonModelList[pokemonName];
  return model;
}

function determineFirstAttacker() {
  firstAttacker = getPokemonModel(domElements.selectFirstPokemonButton.value);
  secondAttacker = getPokemonModel(
    domElements.selectSecondPokemonButton.value ||
      domElements.pokemonRandomSelectionButton.value
  );

  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
    [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];
  }
}
