import { updateDisplayPokemonHp } from "./update-display-Pokemon-hp.js";
import { displayStatsPokemonsContainer } from "../../components/pokemon-stats-container.js";
import { updateHpColor } from "../pokemon/pokemon-health.js";

export function firstAttackerTakesDamage(
  firstAttacker,
  secondAttacker,
  damage
) {
  firstAttacker.stats.hp -= Math.max(damage, 0);
  updateDisplayPokemonHp(firstAttacker, secondAttacker);
  updateHpColor(firstAttacker, secondAttacker);

  displayStatsPokemonsContainer(firstAttacker, secondAttacker);
}

export function secondAttackerTakesDamage(
  firstAttacker,
  secondAttacker,
  damage
) {
  secondAttacker.stats.hp -= Math.max(damage, 0);
  updateDisplayPokemonHp(firstAttacker, secondAttacker);
  updateHpColor(firstAttacker, secondAttacker);
  displayStatsPokemonsContainer(firstAttacker, secondAttacker);
}
