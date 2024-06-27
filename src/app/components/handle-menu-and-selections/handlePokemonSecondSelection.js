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

import { pokemonSelected } from "../dialogue-when-pokemon-selected.js";

import { domElementsFromSelectors } from "../../shared/game-variables/dom/dom-elements.js";

export const handlePokemonSecondSelection =
  function handlePokemonSecondSelection(pokemon) {
    domElementsFromSelectors.pokemonSecondLocation.innerHTML = "";

    switch (pokemon) {
      case "Spectrum":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          spectrumCard
        );
        pokemonSelected(pokemon);
        break;
      case "Ectoplasma":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          ectoplasmaCard
        );
        pokemonSelected(pokemon);
        break;
      case "Fantominus":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          fantominusCard
        );
        pokemonSelected(pokemon);
        break;
      case "Crustabri":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          crustabriCard
        );
        pokemonSelected(pokemon);
        break;
      case "Pikachu":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(pikachuCard);
        pokemonSelected(pokemon);
        break;
      case "Évoli":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(evoliCard);
        pokemonSelected(pokemon);
        break;
      case "Roucool":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(roucoolCard);
        pokemonSelected(pokemon);
        break;
      case "Racaillou":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          racaillouCard
        );
        pokemonSelected(pokemon);
        break;
      case "Insécateur":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          insecateurCard
        );
        pokemonSelected(pokemon);
        break;
      case "Sabelette":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          sabeletteCard
        );
        pokemonSelected(pokemon);
        break;
      case "Mewtwo":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(mewtwoCard);
        pokemonSelected(pokemon);
        break;
      case "Scarabrute":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          scarabruteCard
        );
        pokemonSelected(pokemon);
        break;
      case "Krabboss":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          krabbossCard
        );
        pokemonSelected(pokemon);
        break;
      case "Salamèche":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          salamecheCard
        );
        pokemonSelected(pokemon);
        break;
      case "Nidoran♂":
        domElementsFromSelectors.pokemonSecondLocation.appendChild(
          nidoranMaleCard
        );
        pokemonSelected(pokemon);
        break;
    }
  };
