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

import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonSelected } from "../dialogue-when-pokemon-selected.js";

export function handlePokemonFirstSelection(pokemon) {
  domElements.pokemonFirstLocation.innerHTML = "";

  switch (pokemon) {
    case "Spectrum":
      domElements.pokemonFirstLocation.appendChild(spectrumCard);
      pokemonSelected(pokemon);
      break;
    case "Ectoplasma":
      domElements.pokemonFirstLocation.appendChild(ectoplasmaCard);
      pokemonSelected(pokemon);
      break;
    case "Fantominus":
      domElements.pokemonFirstLocation.appendChild(fantominusCard);
      pokemonSelected(pokemon);
      break;
    case "Crustabri":
      domElements.pokemonFirstLocation.appendChild(crustabriCard);
      pokemonSelected(pokemon);
      break;
    case "Pikachu":
      domElements.pokemonFirstLocation.appendChild(pikachuCard);
      pokemonSelected(pokemon);
      break;
    case "Évoli":
      domElements.pokemonFirstLocation.appendChild(evoliCard);
      pokemonSelected(pokemon);
      break;
    case "Roucool":
      domElements.pokemonFirstLocation.appendChild(roucoolCard);
      pokemonSelected(pokemon);
      break;
    case "Racaillou":
      domElements.pokemonFirstLocation.appendChild(racaillouCard);
      pokemonSelected(pokemon);
      break;
    case "Insécateur":
      domElements.pokemonFirstLocation.appendChild(insecateurCard);
      pokemonSelected(pokemon);
      break;
    case "Sabelette":
      domElements.pokemonFirstLocation.appendChild(sabeletteCard);
      pokemonSelected(pokemon);
      break;
    case "Mewtwo":
      domElements.pokemonFirstLocation.appendChild(mewtwoCard);
      pokemonSelected(pokemon);
      break;
    case "Scarabrute":
      domElements.pokemonFirstLocation.appendChild(scarabruteCard);
      pokemonSelected(pokemon);
      break;
    case "Krabboss":
      domElements.pokemonFirstLocation.appendChild(krabbossCard);
      pokemonSelected(pokemon);
      break;
    case "Salamèche":
      domElements.pokemonFirstLocation.appendChild(salamecheCard);
      pokemonSelected(pokemon);
      break;
    case "Nidoran♂":
      domElements.pokemonFirstLocation.appendChild(nidoranMaleCard);
      pokemonSelected(pokemon);
      break;
  }
}
