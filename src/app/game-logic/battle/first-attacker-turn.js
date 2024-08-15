import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { pokemonMakesAttack } from "./attacks/damages-attacks/pokemon-makes-attack/pokemon-makes-attack.js";
import { secondAttackerTakesDamage } from "./pokemon-takes-damage.js";

export async function firstAttackerTurn(firstAttacker, secondAttacker) {
  if (pokemonVariables.isFirstAttackerCanAttack) {
    const randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber <= 50) {
      pokemonVariables.isFirstAttackActive = true;
      pokemonVariables.isSecondAttackActive = false;

      let damageFirstAttack = await pokemonMakesAttack(
        firstAttacker,
        secondAttacker
      );

      secondAttackerTakesDamage(
        firstAttacker,
        secondAttacker,
        damageFirstAttack
      );
    } else {
      pokemonVariables.isFirstAttackActive = false;
      pokemonVariables.isSecondAttackActive = true;

      let damageSecondAttack = await pokemonMakesAttack(
        firstAttacker,
        secondAttacker
      );

      secondAttackerTakesDamage(
        firstAttacker,
        secondAttacker,
        damageSecondAttack
      );
    }
  }
}
