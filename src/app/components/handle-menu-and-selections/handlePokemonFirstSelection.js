import { pikachuCard } from "../cards/pikachu.card.js";
import { evoliCard } from "../cards/evoli.card.js";
import { roucoolCard } from "../cards/roucool.card.js";
import { racaillouCard } from "../cards/racaillou.card.js";
import { insecateurCard } from "../cards/insecateur.card.js";
import { sabeletteCard } from "../cards/sabelette.card.js";
import { mewtwoCard } from "../cards/mewtwo.card.js";
import { scarabruteCard } from "../cards/scarabrute.card.js";
import { krabbossCard } from "../cards/krabboss.card.js";
import { salamecheCard } from "../cards/salameche.card.js";
import { nidoranMaleCard } from "../cards/nidoranMale.card.js";
import { crustabriCard } from "../cards/crustabri.card.js";
import { fantominusCard } from "../cards/fantominus.card.js";
import { ectoplasmaCard } from "../cards/ectoplasma.card.js";
import { spectrumCard } from "../cards/spectrum.card.js";

import { domElementsFromSelectors } from "../../shared/game-variables/dom/dom-elements.js";
import { pokemonSelected } from "../dialogue-when-pokemon-selected.js";

export function handlePokemonFirstSelection(pokemon) {
  domElementsFromSelectors.pokemonFirstLocation.innerHTML = "";

  switch (pokemon) {
    case "Spectrum":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(spectrumCard);
      pokemonSelected(pokemon);
      break;
    case "Ectoplasma":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(ectoplasmaCard);
      pokemonSelected(pokemon);
      break;
    case "Fantominus":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(fantominusCard);
      pokemonSelected(pokemon);
      break;
    case "Crustabri":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(crustabriCard);
      pokemonSelected(pokemon);
      break;
    case "Pikachu":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(pikachuCard);
      pokemonSelected(pokemon);
      break;
    case "Évoli":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(evoliCard);
      pokemonSelected(pokemon);
      break;
    case "Roucool":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(roucoolCard);
      pokemonSelected(pokemon);
      break;
    case "Racaillou":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(racaillouCard);
      pokemonSelected(pokemon);
      break;
    case "Insécateur":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(insecateurCard);
      pokemonSelected(pokemon);
      break;
    case "Sabelette":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(sabeletteCard);
      pokemonSelected(pokemon);
      break;
    case "Mewtwo":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(mewtwoCard);
      pokemonSelected(pokemon);
      break;
    case "Scarabrute":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(scarabruteCard);
      pokemonSelected(pokemon);
      break;
    case "Krabboss":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(krabbossCard);
      pokemonSelected(pokemon);
      break;
    case "Salamèche":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(salamecheCard);
      pokemonSelected(pokemon);
      break;
    case "Nidoran♂":
      domElementsFromSelectors.pokemonFirstLocation.appendChild(
        nidoranMaleCard
      );
      pokemonSelected(pokemon);
      break;
  }
}
