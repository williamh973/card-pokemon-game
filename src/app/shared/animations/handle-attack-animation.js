import {
  handleAttacksDelayAndAnimations,
  sleepAttacksAnimation,
} from "../../game-logic/battle/animations/animations-delays/attacks-delay.js";

export async function handleAttackAnimation(firstAttacker, secondAttacker) {
  const attackDelays = handleAttacksDelayAndAnimations(
    firstAttacker,
    secondAttacker
  );

  await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);
}
