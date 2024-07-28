import {
  handleAttacksDelayAndAnimations,
  sleepAttacksAnimation,
} from "../../game-logic/battle/animations/animations-delays/attacks-delay.js";
import { getFirstAttackerAttack } from "../attacks/get-first-attacker-attack.js";

export async function handleAttackAnimation(firstAttacker, secondAttacker) {
  const possibleAttacksList = ["Dévorêve"];
  const firstAttackerAttack = getFirstAttackerAttack(firstAttacker);
  const attackDelays = handleAttacksDelayAndAnimations(
    firstAttacker,
    secondAttacker
  );

  console.log(
    "statut de ",
    secondAttacker.name,
    " : ",
    secondAttacker.primaryStatut
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
