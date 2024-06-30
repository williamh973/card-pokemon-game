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

import { pikachuCard } from "../shared/pokemon/cards/pikachu.card.js";
import { evoliCard } from "../shared/pokemon/cards/evoli.card.js";
import { roucoolCard } from "../shared/pokemon/cards/roucool.card.js";
import { racaillouCard } from "../shared/pokemon/cards/racaillou.card.js";
import { insecateurCard } from "../shared/pokemon/cards/insecateur.card.js";
import { sabeletteCard } from "../shared/pokemon/cards/sabelette.card.js";
import { mewtwoCard } from "../shared/pokemon/cards/mewtwo.card.js";
import { scarabruteCard } from "../shared/pokemon/cards/scarabrute.card.js";
import { krabbossCard } from "../shared/pokemon/cards/krabboss.card.js";
import { salamecheCard } from "../shared/pokemon/cards/salameche.card.js";
import { nidoranMaleCard } from "../shared/pokemon/cards/nidoranMale.card.js";
import { crustabriCard } from "../shared/pokemon/cards/crustabri.card.js";
import { fantominusCard } from "../shared/pokemon/cards/fantominus.card.js";
import { ectoplasmaCard } from "../shared/pokemon/cards/ectoplasma.card.js";
import { spectrumCard } from "../shared/pokemon/cards/spectrum.card.js";

import { domElements } from "../shared/dom/dom-elements.js";

export function decreaseHp() {
  if (
    domElements.selectFirstPokemonButton.value === "Spectrum" ||
    domElements.selectSecondPokemonButton.value === "Spectrum" ||
    domElements.pokemonFirstLocation.contains(spectrumCard) ||
    domElements.pokemonSecondLocation.contains(spectrumCard)
  ) {
    document.getElementById(
      "spectrumHealth"
    ).textContent = `${spectrumModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Ectoplasma" ||
    domElements.selectSecondPokemonButton.value === "Ectoplasma" ||
    domElements.pokemonFirstLocation.contains(ectoplasmaCard) ||
    domElements.pokemonSecondLocation.contains(ectoplasmaCard)
  ) {
    document.getElementById(
      "ectoplasmaHealth"
    ).textContent = `${ectoplasmaModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Fantominus" ||
    domElements.selectSecondPokemonButton.value === "Fantominus" ||
    domElements.pokemonFirstLocation.contains(fantominusCard) ||
    domElements.pokemonSecondLocation.contains(fantominusCard)
  ) {
    document.getElementById(
      "fantominusHealth"
    ).textContent = `${fantominusModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Crustabri" ||
    domElements.selectSecondPokemonButton.value === "Crustabri" ||
    domElements.pokemonFirstLocation.contains(crustabriCard) ||
    domElements.pokemonSecondLocation.contains(crustabriCard)
  ) {
    document.getElementById(
      "crustabriHealth"
    ).textContent = `${crustabriModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Pikachu" ||
    domElements.selectSecondPokemonButton.value === "Pikachu" ||
    domElements.pokemonFirstLocation.contains(pikachuCard) ||
    domElements.pokemonSecondLocation.contains(pikachuCard)
  ) {
    document.getElementById(
      "pikachuHealth"
    ).textContent = `${pikachuModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Évoli" ||
    domElements.selectSecondPokemonButton.value === "Évoli" ||
    domElements.pokemonFirstLocation.contains(evoliCard) ||
    domElements.pokemonSecondLocation.contains(evoliCard)
  ) {
    document.getElementById(
      "evoliHealth"
    ).textContent = `${evoliModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Roucool" ||
    domElements.selectSecondPokemonButton.value === "Roucool" ||
    domElements.pokemonFirstLocation.contains(roucoolCard) ||
    domElements.pokemonSecondLocation.contains(roucoolCard)
  ) {
    document.getElementById(
      "roucoolHealth"
    ).textContent = `${roucoolModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Racaillou" ||
    domElements.selectSecondPokemonButton.value === "Racaillou" ||
    domElements.pokemonFirstLocation.contains(racaillouCard) ||
    domElements.pokemonSecondLocation.contains(racaillouCard)
  ) {
    document.getElementById(
      "racaillouHealth"
    ).textContent = `${racaillouModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Insécateur" ||
    domElements.selectSecondPokemonButton.value === "Insécateur" ||
    domElements.pokemonFirstLocation.contains(insecateurCard) ||
    domElements.pokemonSecondLocation.contains(insecateurCard)
  ) {
    document.getElementById(
      "insecateurHealth"
    ).textContent = `${insecateurModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Sabelette" ||
    domElements.selectSecondPokemonButton.value === "Sabelette" ||
    domElements.pokemonFirstLocation.contains(sabeletteCard) ||
    domElements.pokemonSecondLocation.contains(sabeletteCard)
  ) {
    document.getElementById(
      "sabeletteHealth"
    ).textContent = `${sabeletteModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Mewtwo" ||
    domElements.selectSecondPokemonButton.value === "Mewtwo" ||
    domElements.pokemonFirstLocation.contains(mewtwoCard) ||
    domElements.pokemonSecondLocation.contains(mewtwoCard)
  ) {
    document.getElementById(
      "mewtwoHealth"
    ).textContent = `${mewtwoModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Scarabrute" ||
    domElements.selectSecondPokemonButton.value === "Scarabrute" ||
    domElements.pokemonFirstLocation.contains(scarabruteCard) ||
    domElements.pokemonSecondLocation.contains(scarabruteCard)
  ) {
    document.getElementById(
      "scarabruteHealth"
    ).textContent = `${scarabruteModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Krabboss" ||
    domElements.selectSecondPokemonButton.value === "Krabboss" ||
    domElements.pokemonFirstLocation.contains(krabbossCard) ||
    domElements.pokemonSecondLocation.contains(krabbossCard)
  ) {
    document.getElementById(
      "krabbossHealth"
    ).textContent = `${krabbossModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Salamèche" ||
    domElements.selectSecondPokemonButton.value === "Salamèche" ||
    domElements.pokemonFirstLocation.contains(salamecheCard) ||
    domElements.pokemonSecondLocation.contains(salamecheCard)
  ) {
    document.getElementById(
      "salamecheHealth"
    ).textContent = `${salamecheModel.stats.hp}`;
  }

  if (
    domElements.selectFirstPokemonButton.value === "Nidoran♂" ||
    domElements.selectSecondPokemonButton.value === "Nidoran♂" ||
    domElements.pokemonFirstLocation.contains(nidoranMaleCard) ||
    domElements.pokemonSecondLocation.contains(nidoranMaleCard)
  ) {
    document.getElementById(
      "nidoranMaleHealth"
    ).textContent = `${nidoranMaleModel.stats.hp}`;
  }
}
