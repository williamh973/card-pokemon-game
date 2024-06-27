import { pikachuModel } from "./models/pikachu.model.js";
import { evoliModel } from "./models/evoli.model.js";
import { roucoolModel } from "./models/roucool.model.js";
import { racaillouModel } from "./models/racaillou.model.js";
import { insecateurModel } from "./models/insecateur.model.js";
import { sabeletteModel } from "./models/sabelette.model.js";
import { mewtwoModel } from "./models/mewtwo.model.js";
import { scarabruteModel } from "./models/scarabrute.model.js";
import { krabbossModel } from "./models/krabboss.model.js";
import { salamecheModel } from "./models/salameche.model.js";
import { nidoranMaleModel } from "./models/nidoranMale.model.js";
import { crustabriModel } from "./models/crustabri.model.js";
import { fantominusModel } from "./models/fantominus.model.js";
import { ectoplasmaModel } from "./models/ectoplasma.model.js";
import { spectrumModel } from "./models/spectrum.model.js";
import { domElementsFromSelectors } from "./dom-elements.js";

export { firstAttacker, secondAttacker, determineFirstAttacker };

let firstAttacker, secondAttacker;

let pokemonModelList = {
  Pikachu: pikachuModel,
  Évoli: evoliModel,
  Roucool: roucoolModel,
  Racaillou: racaillouModel,
  Insecateur: insecateurModel,
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
  firstAttacker = getPokemonModel(
    domElementsFromSelectors.selectFirstPokemonButton.value
  );
  secondAttacker = getPokemonModel(
    domElementsFromSelectors.selectSecondPokemonButton.value ||
      domElementsFromSelectors.pokemonRandomSelectionButton.value
  );

  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
    [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];
  }
}
