import { pikachuCard } from "../../shared/pokemon/cards/pikachu.card.js";
import { evoliCard } from "../../shared/pokemon/cards/evoli.card.js";
import { roucoolCard } from "../../shared/pokemon/cards/roucool.card.js";
import { racaillouCard } from "../../shared/pokemon/cards/racaillou.card.js";
import { insecateurCard } from "../../shared/pokemon/cards/insecateur.card.js";
import { sabeletteCard } from "../../shared/pokemon/cards/sabelette.card.js";
import { mewtwoCard } from "../../shared/pokemon/cards/mewtwo.card.js";
import { scarabruteCard } from "../../shared/pokemon/cards/scarabrute.card.js";
import { krabbossCard } from "../../shared/pokemon/cards/krabboss.card.js";
import { salamecheCard } from "../../shared/pokemon/cards/salameche.card.js";
import { nidoranMaleCard } from "../../shared/pokemon/cards/nidoranMale.card.js";
import { crustabriCard } from "../../shared/pokemon/cards/crustabri.card.js";
import { fantominusCard } from "../../shared/pokemon/cards/fantominus.card.js";
import { ectoplasmaCard } from "../../shared/pokemon/cards/ectoplasma.card.js";
import { spectrumCard } from "../../shared/pokemon/cards/spectrum.card.js";

import { pokemonSelected } from "../dialogue-when-pokemon-selected.js";
import { domElements } from "../../shared/dom/dom-elements.js";

export function handleSelectionRandomPokemon(pokemon) {
  domElements.pokemonSecondLocation.innerHTML = "";

  switch (pokemon) {
    case "Spectrum":
      domElements.pokemonSecondLocation.appendChild(spectrumCard);
      pokemonSelected(pokemon);
      break;
    case "Ectoplasma":
      domElements.pokemonSecondLocation.appendChild(ectoplasmaCard);
      pokemonSelected(pokemon);
      break;
    case "Fantominus":
      domElements.pokemonSecondLocation.appendChild(fantominusCard);
      pokemonSelected(pokemon);
      break;
    case "Crustabri":
      domElements.pokemonSecondLocation.appendChild(crustabriCard);
      pokemonSelected(pokemon);
      break;
    case "Pikachu":
      domElements.pokemonSecondLocation.appendChild(pikachuCard);
      pokemonSelected(pokemon);
      break;
    case "Évoli":
      domElements.pokemonSecondLocation.appendChild(evoliCard);
      pokemonSelected(pokemon);
      break;
    case "Roucool":
      domElements.pokemonSecondLocation.appendChild(roucoolCard);
      pokemonSelected(pokemon);
      break;
    case "Racaillou":
      domElements.pokemonSecondLocation.appendChild(racaillouCard);
      pokemonSelected(pokemon);
      break;
    case "Insécateur":
      domElements.pokemonSecondLocation.appendChild(insecateurCard);
      pokemonSelected(pokemon);
      break;
    case "Sabelette":
      domElements.pokemonSecondLocation.appendChild(sabeletteCard);
      pokemonSelected(pokemon);
      break;
    case "Mewtwo":
      domElements.pokemonSecondLocation.appendChild(mewtwoCard);
      pokemonSelected(pokemon);
      break;
    case "Scarabrute":
      domElements.pokemonSecondLocation.appendChild(scarabruteCard);
      pokemonSelected(pokemon);
      break;
    case "Krabboss":
      domElements.pokemonSecondLocation.appendChild(krabbossCard);
      pokemonSelected(pokemon);
      break;
    case "Salamèche":
      domElements.pokemonSecondLocation.appendChild(salamecheCard);
      pokemonSelected(pokemon);
      break;
    case "Nidoran♂":
      domElements.pokemonSecondLocation.appendChild(nidoranMaleCard);
      pokemonSelected(pokemon);
      break;
  }
}
