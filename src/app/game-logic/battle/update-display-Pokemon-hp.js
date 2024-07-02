import { pokemonHealthNameList } from "../../shared/pokemon/pokemon-health-name-list.js";

export function updateDisplayPokemonHp(firstAttacker, secondAttacker) {
  const firstAttackerHealthName = pokemonHealthNameList[firstAttacker.name];
  const secondAttackerHealthName = pokemonHealthNameList[secondAttacker.name];

  document.getElementById(
    firstAttackerHealthName
  ).textContent = `${firstAttacker.stats.hp}`;

  document.getElementById(
    secondAttackerHealthName
  ).textContent = `${secondAttacker.stats.hp}`;
}
