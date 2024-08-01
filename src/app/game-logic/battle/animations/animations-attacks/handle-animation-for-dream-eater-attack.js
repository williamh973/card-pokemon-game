import {
  handleAttacksDelayAndAnimations,
  sleepAttacksAnimation,
} from "../animations-delays/attacks-delay.js";

export async function handleDelayAnimationAttack(
  firstAttacker,
  secondAttacker
) {
  const attackDelays = handleAttacksDelayAndAnimations(
    firstAttacker,
    secondAttacker
  );

  await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);
}
