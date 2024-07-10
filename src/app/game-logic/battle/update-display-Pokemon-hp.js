import { pokemonHealthNameList } from "../../shared/pokemon/pokemon-health-name-list.js";

export function updateDisplayPokemonHp(firstAttacker, secondAttacker) {
  const firstAttackerHealthName = pokemonHealthNameList[firstAttacker.name];
  const secondAttackerHealthName = pokemonHealthNameList[secondAttacker.name];

  const firstAttackerHp = document.getElementById(firstAttackerHealthName);
  const secondAttackerHp = document.getElementById(secondAttackerHealthName);

  firstAttackerHp.textContent = `${firstAttacker.stats.hp}`;
  secondAttackerHp.textContent = `${secondAttacker.stats.hp}`;
}
