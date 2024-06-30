import { updatePlayerScore } from "./updatePlayerScore.js";

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

const isPokemonInSecondLocation = () =>
  domElements.pokemonSecondLocation.contains(spectrumCard) ||
  domElements.pokemonSecondLocation.contains(ectoplasmaCard) ||
  domElements.pokemonSecondLocation.contains(fantominusCard) ||
  domElements.pokemonSecondLocation.contains(crustabriCard) ||
  domElements.pokemonSecondLocation.contains(pikachuCard) ||
  domElements.pokemonSecondLocation.contains(evoliCard) ||
  domElements.pokemonSecondLocation.contains(roucoolCard) ||
  domElements.pokemonSecondLocation.contains(racaillouCard) ||
  domElements.pokemonSecondLocation.contains(insecateurCard) ||
  domElements.pokemonSecondLocation.contains(sabeletteCard) ||
  domElements.pokemonSecondLocation.contains(mewtwoCard) ||
  domElements.pokemonSecondLocation.contains(scarabruteCard) ||
  domElements.pokemonSecondLocation.contains(krabbossCard) ||
  domElements.pokemonSecondLocation.contains(salamecheCard) ||
  domElements.pokemonSecondLocation.contains(nidoranMaleCard);

const isPokemonInFirstLocation = () =>
  domElements.pokemonFirstLocation.contains(spectrumCard) ||
  domElements.pokemonFirstLocation.contains(ectoplasmaCard) ||
  domElements.pokemonFirstLocation.contains(fantominusCard) ||
  domElements.pokemonFirstLocation.contains(crustabriCard) ||
  domElements.pokemonFirstLocation.contains(pikachuCard) ||
  domElements.pokemonFirstLocation.contains(evoliCard) ||
  domElements.pokemonFirstLocation.contains(roucoolCard) ||
  domElements.pokemonFirstLocation.contains(racaillouCard) ||
  domElements.pokemonFirstLocation.contains(insecateurCard) ||
  domElements.pokemonFirstLocation.contains(sabeletteCard) ||
  domElements.pokemonFirstLocation.contains(mewtwoCard) ||
  domElements.pokemonFirstLocation.contains(scarabruteCard) ||
  domElements.pokemonFirstLocation.contains(krabbossCard) ||
  domElements.pokemonFirstLocation.contains(salamecheCard) ||
  domElements.pokemonFirstLocation.contains(nidoranMaleCard);

export function hideSecondAttackerWhenLose(secondAttacker, enemyPokemon) {
  if (secondAttacker.name === enemyPokemon && isPokemonInSecondLocation()) {
    updatePlayerScore();
    domElements.pokemonSecondLocation.innerHTML = "";
  }
}

export function hideFirstAttackerWhenLose(firstAttacker, enemyPokemon) {
  if (firstAttacker.name === enemyPokemon && isPokemonInFirstLocation()) {
    updatePlayerScore();
    domElements.pokemonSecondLocation.innerHTML = "";
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
      domElements.pokemonFirstLocation.innerHTML = "";
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
      domElements.pokemonFirstLocation.innerHTML = "";
    }
  };
