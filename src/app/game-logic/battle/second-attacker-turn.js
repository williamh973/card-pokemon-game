import { handleAttackAnimation } from "../../shared/animations/handle-attack-animation.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { pokemonMakesAttack } from "./attacks/damages-attacks/calculate-damages-attacks/calculate-damage-attack.js";
import { firstAttackerTakesDamage } from "./pokemon-takes-damage.js";

export async function secondAttackerTurn(secondAttacker, firstAttacker) {
  if (pokemonVariables.isSecondAttackerCanAttack) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 50) {
      pokemonVariables.isFirstAttackActive = true;
      pokemonVariables.isSecondAttackActive = false;

      let damageFirstAttack = await pokemonMakesAttack(
        secondAttacker,
        firstAttacker
      );

      firstAttackerTakesDamage(
        firstAttacker,
        secondAttacker,
        damageFirstAttack
      );
    } else {
      pokemonVariables.isFirstAttackActive = false;
      pokemonVariables.isSecondAttackActive = true;

      let damageSecondAttack = await pokemonMakesAttack(
        secondAttacker,
        firstAttacker
      );

      firstAttackerTakesDamage(
        firstAttacker,
        secondAttacker,
        damageSecondAttack
      );
    }
  }
}
