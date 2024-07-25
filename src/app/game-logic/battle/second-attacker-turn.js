import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import {
  handleAttacksDelayAndAnimations,
  sleepAttacksAnimation,
} from "./animations/animations-delays/attacks-delay.js";
import { calculateDamagesAttack } from "./attacks/damages-attacks/calculate-damages-attacks/calculate-damage-attack.js";
import { firstAttackerTakesDamage } from "./pokemon-takes-damage.js";

export async function secondAttackerTurn(secondAttacker, firstAttacker) {
  if (pokemonVariables.isSecondAttackerCanAttack) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 50) {
      pokemonVariables.isFirstAttackActive = true;
      pokemonVariables.isSecondAttackActive = false;

      let damageFirstAttack = await calculateDamagesAttack(
        secondAttacker,
        firstAttacker
      );

      if (pokemonVariables.isFirstAttackActive) {
        const attackDelays = handleAttacksDelayAndAnimations(secondAttacker);

        await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);

        firstAttackerTakesDamage(
          firstAttacker,
          secondAttacker,
          damageFirstAttack
        );
      }
    } else {
      pokemonVariables.isFirstAttackActive = false;
      pokemonVariables.isSecondAttackActive = true;

      let damageSecondAttack = await calculateDamagesAttack(
        secondAttacker,
        firstAttacker
      );

      if (pokemonVariables.isSecondAttackActive) {
        const attackDelays = handleAttacksDelayAndAnimations(secondAttacker);

        await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);

        firstAttackerTakesDamage(
          firstAttacker,
          secondAttacker,
          damageSecondAttack
        );
      }
    }
  }
}
