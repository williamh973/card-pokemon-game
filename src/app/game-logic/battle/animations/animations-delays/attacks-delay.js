import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";
import { triggerAttackAnimation } from "../animations-attacks/trigger-attack-animation.js";

export const handleAttacksDelayAndAnimations = (
  firstAttacker,
  secondAttacker
) => {
  const pokemonAttack = pokemonVariables.isFirstAttackActive
    ? firstAttacker.firstAttack.name
    : firstAttacker.secondAttack.name;

  const pokemontAttackName = pokemonAttack;

  const pokemonAttackDelay = getAttackDelayAndtriggerAnimations(
    pokemontAttackName,
    firstAttacker,
    secondAttacker
  );

  return {
    pokemontAttackName,
    pokemonAttackDelay,
  };
};

function getAttackDelayAndtriggerAnimations(
  attackName,
  firstAttacker,
  secondAttacker
) {
  triggerAttackAnimation(attackName, firstAttacker, secondAttacker);

  switch (attackName) {
    case "Charge":
      return 3000;
    case "Jet-Pierres":
      return 3000;
    case "Hâte":
      return 3000;
    case "Tranche":
      return 3000;
    case "Flammèche":
      return 3000;
    case "Abri":
      return 3000;
    case "Dévorêve":
      return 3000;
    default:
      return 3000;
  }
}

export function sleepAttacksAnimation(attackName) {
  return new Promise((resolve) => setTimeout(resolve, attackName));
}
