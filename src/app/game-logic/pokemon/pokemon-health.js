import { pokemonHealthNameList } from "../../shared/pokemon/pokemon-health-name-list.js";

export function updateHpColor(firstAttacker, secondAttacker) {
  const firstAttackerHealthName = pokemonHealthNameList[firstAttacker.name];
  const secondAttackerHealthName = pokemonHealthNameList[secondAttacker.name];

  getPokemonHealthBar(
    firstAttacker,
    secondAttacker,
    firstAttackerHealthName,
    secondAttackerHealthName
  );
}

function getPokemonHealthBar(
  firstAttacker,
  secondAttacker,
  firstAttackerHealthName,
  secondAttackerHealthName
) {
  const firstAttackerHp = document.getElementById(firstAttackerHealthName);
  const secondAttackerHp = document.getElementById(secondAttackerHealthName);

  if (firstAttacker.stats.hp <= firstAttacker.stats.hpMax / 2) {
    firstAttackerHp.style.color = "#F08F00";
  } else if (secondAttacker.stats.hp <= secondAttacker.stats.hpMax / 2) {
    secondAttackerHp.style.color = "#F08F00";
  }

  if (firstAttacker.stats.hp <= firstAttacker.stats.hpMax / 4) {
    firstAttackerHp.style.color = "red";
  } else if (secondAttacker.stats.hp <= secondAttacker.stats.hpMax / 4) {
    secondAttackerHp.style.color = "red";
  }
}
