import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";

export const handleAttacksDelayAndAnimations = (pokemon) => {
  const pokemonAttack = pokemonVariables.isFirstAttackActive
    ? pokemon.firstAttack.name
    : pokemon.secondAttack.name;

  const pokemontAttackName = pokemonAttack;

  const pokemonAttackDelay =
    getAttackDelayAndStartAnimations(pokemontAttackName);

  return {
    pokemontAttackName,
    pokemonAttackDelay,
  };
};

function getAttackDelayAndStartAnimations(attackName) {
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
    default:
      return 4000;
  }
}

export function sleepAttacksAnimation(attackName) {
  return new Promise((resolve) => setTimeout(resolve, attackName));
}
