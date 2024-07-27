import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import {
  handleAttacksDelayAndAnimations,
  sleepAttacksAnimation,
} from "./animations/animations-delays/attacks-delay.js";
import { pokemonMakesAttack } from "./attacks/damages-attacks/calculate-damages-attacks/calculate-damage-attack.js";
import { secondAttackerTakesDamage } from "./pokemon-takes-damage.js";

export async function firstAttackerTurn(firstAttacker, secondAttacker) {
  if (pokemonVariables.isFirstAttackerCanAttack) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 50) {
      pokemonVariables.isFirstAttackActive = true;
      pokemonVariables.isSecondAttackActive = false;

      let damageFirstAttack = await pokemonMakesAttack(
        firstAttacker,
        secondAttacker
      );

      if (pokemonVariables.isFirstAttackActive) {
        const attackDelays = handleAttacksDelayAndAnimations(
          firstAttacker,
          secondAttacker
        );

        await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);

        secondAttackerTakesDamage(
          firstAttacker,
          secondAttacker,
          damageFirstAttack
        );
      }
    } else {
      pokemonVariables.isFirstAttackActive = false;
      pokemonVariables.isSecondAttackActive = true;

      let damageSecondAttack = await pokemonMakesAttack(
        firstAttacker,
        secondAttacker
      );

      if (pokemonVariables.isSecondAttackActive) {
        const attackDelays = handleAttacksDelayAndAnimations(
          firstAttacker,
          secondAttacker
        );

        await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);

        secondAttackerTakesDamage(
          firstAttacker,
          secondAttacker,
          damageSecondAttack
        );
      }
    }
  }
}
