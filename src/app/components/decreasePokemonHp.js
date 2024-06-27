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

import { pikachuCard } from "./cards/pikachu.card.js";
import { evoliCard } from "./cards/evoli.card.js";
import { roucoolCard } from "./cards/roucool.card.js";
import { racaillouCard } from "./cards/racaillou.card.js";
import { insecateurCard } from "./cards/insecateur.card.js";
import { sabeletteCard } from "./cards/sabelette.card.js";
import { mewtwoCard } from "./cards/mewtwo.card.js";
import { scarabruteCard } from "./cards/scarabrute.card.js";
import { krabbossCard } from "./cards/krabboss.card.js";
import { salamecheCard } from "./cards/salameche.card.js";
import { nidoranMaleCard } from "./cards/nidoranMale.card.js";
import { crustabriCard } from "./cards/crustabri.card.js";
import { fantominusCard } from "./cards/fantominus.card.js";
import { ectoplasmaCard } from "./cards/ectoplasma.card.js";
import { spectrumCard } from "./cards/spectrum.card.js";

import { domElementsFromSelectors } from "../shared/game-variables/dom/dom-elements.js";

export function decreaseHp() {
  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Spectrum" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Spectrum" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(spectrumCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(spectrumCard)
  ) {
    document.getElementById(
      "spectrumHealth"
    ).textContent = `${spectrumModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Ectoplasma" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Ectoplasma" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(ectoplasmaCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(ectoplasmaCard)
  ) {
    document.getElementById(
      "ectoplasmaHealth"
    ).textContent = `${ectoplasmaModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Fantominus" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Fantominus" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(fantominusCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(fantominusCard)
  ) {
    document.getElementById(
      "fantominusHealth"
    ).textContent = `${fantominusModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Crustabri" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Crustabri" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(crustabriCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(crustabriCard)
  ) {
    document.getElementById(
      "crustabriHealth"
    ).textContent = `${crustabriModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Pikachu" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Pikachu" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(pikachuCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(pikachuCard)
  ) {
    document.getElementById(
      "pikachuHealth"
    ).textContent = `${pikachuModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Évoli" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Évoli" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(evoliCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(evoliCard)
  ) {
    document.getElementById(
      "evoliHealth"
    ).textContent = `${evoliModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Roucool" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Roucool" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(roucoolCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(roucoolCard)
  ) {
    document.getElementById(
      "roucoolHealth"
    ).textContent = `${roucoolModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Racaillou" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Racaillou" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(racaillouCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(racaillouCard)
  ) {
    document.getElementById(
      "racaillouHealth"
    ).textContent = `${racaillouModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Insécateur" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Insécateur" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(insecateurCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(insecateurCard)
  ) {
    document.getElementById(
      "insecateurHealth"
    ).textContent = `${insecateurModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Sabelette" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Sabelette" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(sabeletteCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(sabeletteCard)
  ) {
    document.getElementById(
      "sabeletteHealth"
    ).textContent = `${sabeletteModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Mewtwo" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Mewtwo" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(mewtwoCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(mewtwoCard)
  ) {
    document.getElementById(
      "mewtwoHealth"
    ).textContent = `${mewtwoModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Scarabrute" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Scarabrute" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(scarabruteCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(scarabruteCard)
  ) {
    document.getElementById(
      "scarabruteHealth"
    ).textContent = `${scarabruteModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Krabboss" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Krabboss" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(krabbossCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(krabbossCard)
  ) {
    document.getElementById(
      "krabbossHealth"
    ).textContent = `${krabbossModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Salamèche" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Salamèche" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(salamecheCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(salamecheCard)
  ) {
    document.getElementById(
      "salamecheHealth"
    ).textContent = `${salamecheModel.stats.hp}`;
  }

  if (
    domElementsFromSelectors.selectFirstPokemonButton.value === "Nidoran♂" ||
    domElementsFromSelectors.selectSecondPokemonButton.value === "Nidoran♂" ||
    domElementsFromSelectors.pokemonFirstLocation.contains(nidoranMaleCard) ||
    domElementsFromSelectors.pokemonSecondLocation.contains(nidoranMaleCard)
  ) {
    document.getElementById(
      "nidoranMaleHealth"
    ).textContent = `${nidoranMaleModel.stats.hp}`;
  }
}
