import {
  handleAttacksDelayAndAnimations,
  sleepAttacksAnimation,
} from "../animations-delays/attacks-delay.js";
import { getFirstAttackerAttack } from "../../../../shared/attacks/get-first-attacker-attack.js";

export async function handleAnimationForDreamEaterAttack(
  firstAttacker,
  secondAttacker
) {
  const possibleAttacksList = ["Dévorêve"];
  const firstAttackerAttack = getFirstAttackerAttack(firstAttacker);
  const attackDelays = handleAttacksDelayAndAnimations(
    firstAttacker,
    secondAttacker
  );

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    secondAttacker.primaryStatut === "asleep"
  ) {
    await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);
  } else {
    return;
  }
}
