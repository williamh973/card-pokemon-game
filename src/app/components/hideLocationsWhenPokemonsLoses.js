import { updatePlayerScore } from "./updatePlayerScore.js";

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

const isPokemonInSecondLocation = () =>
  domElementsFromSelectors.pokemonSecondLocation.contains(spectrumCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(ectoplasmaCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(fantominusCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(crustabriCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(pikachuCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(evoliCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(roucoolCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(racaillouCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(insecateurCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(sabeletteCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(mewtwoCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(scarabruteCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(krabbossCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(salamecheCard) ||
  domElementsFromSelectors.pokemonSecondLocation.contains(nidoranMaleCard);

const isPokemonInFirstLocation = () =>
  domElementsFromSelectors.pokemonFirstLocation.contains(spectrumCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(ectoplasmaCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(fantominusCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(crustabriCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(pikachuCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(evoliCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(roucoolCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(racaillouCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(insecateurCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(sabeletteCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(mewtwoCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(scarabruteCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(krabbossCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(salamecheCard) ||
  domElementsFromSelectors.pokemonFirstLocation.contains(nidoranMaleCard);

export function hideSecondAttackerWhenLose(secondAttacker, enemyPokemon) {
  if (secondAttacker.name === enemyPokemon && isPokemonInSecondLocation()) {
    updatePlayerScore();
    domElementsFromSelectors.pokemonSecondLocation.innerHTML = "";
  }
}

export function hideFirstAttackerWhenLose(firstAttacker, enemyPokemon) {
  if (firstAttacker.name === enemyPokemon && isPokemonInFirstLocation()) {
    updatePlayerScore();
    domElementsFromSelectors.pokemonSecondLocation.innerHTML = "";
  }
}

export const hidePlayerSecondAttackerWhenLose =
  function hidePlayerSecondAttackerWhenLose(
    secondAttacker,
    playerSelectedPokemon
  ) {
    if (
      secondAttacker.name === playerSelectedPokemon &&
      isPokemonInFirstLocation()
    ) {
      domElementsFromSelectors.pokemonFirstLocation.innerHTML = "";
    }
  };

export const hidePlayerFirstAttackerWhenLose =
  function hidePlayerFirstAttackerWhenLose(
    firstAttacker,
    playerSelectedPokemon
  ) {
    if (
      firstAttacker.name === playerSelectedPokemon &&
      isPokemonInFirstLocation()
    ) {
      domElementsFromSelectors.pokemonFirstLocation.innerHTML = "";
    }
  };
