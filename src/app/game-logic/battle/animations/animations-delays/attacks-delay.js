import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";
import { startAttackAnimation } from "../animations-attacks/animations-attacks.js";

export const handleAttacksDelayAndAnimations = (pokemon) => {
  const pokemonAttack = pokemonVariables.isFirstAttackActive
    ? pokemon.firstAttack.name
    : pokemon.secondAttack.name;

  const pokemontAttackName = pokemonAttack;

  const pokemonAttackDelay = getAttackDelayAndStartAnimations(
    pokemontAttackName,
    pokemon
  );

  return {
    pokemontAttackName,
    pokemonAttackDelay,
  };
};

function getAttackDelayAndStartAnimations(attackName, pokemon) {
  startAttackAnimation(attackName, pokemon);

  switch (attackName) {
    case "Charge":
      return 4000;
    case "Jet-Pierres":
      return 4000;
    case "Hâte":
      return 4000;
    case "Tranche":
      return 4000;
    case "Flammèche":
      return 4000;
    case "Abri":
      return 3000;
    default:
      return 4000;
  }
}

export function sleepAttacksAnimation(attackName) {
  return new Promise((resolve) => setTimeout(resolve, attackName));
}
