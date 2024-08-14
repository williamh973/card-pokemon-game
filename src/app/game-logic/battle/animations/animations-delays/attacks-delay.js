import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";
import { getAttackDelayAndtriggerAnimations } from "./get-attack-delay-and-trigger-animations.js";

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

export async function sleepAttacksAnimation(attackName) {
  return new Promise((resolve) => setTimeout(resolve, attackName));
}
