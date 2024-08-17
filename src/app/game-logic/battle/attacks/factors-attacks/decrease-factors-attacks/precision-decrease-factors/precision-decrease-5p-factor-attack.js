import { openDialogueWhenPokemonPrecisionAttacksDecrease2pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-attacks-precision-decrease.dialogue.js";
import { openDialogueWhenPokemonPrecisionAttacksCantDecreaseAnyFurther } from "../../../../../../components/battle-dialogues/dialogues/pokemon-attacks-precision-cant-decrease-any-further.dialogue.js";
import { getSecondAttackerAttacks } from "./get-second-attacker-attacks.js";

const possibleAttacksList = ["Jet de Sable"];

export async function precisionDecrease5pFactorAttack(
  secondAttacker,
  firstAttackerAttack
) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    const secondAttackerAttacks = getSecondAttackerAttacks(secondAttacker);

    const secondAttackerFirstAttackMinimumPrecisionValue =
      secondAttackerAttacks.secondAttackerFirstAttack.precisionMax / 5;

    const secondAttackerSecondAttackMinimumPrecisionValue =
      secondAttackerAttacks.secondAttackerSecondAttack.precisionMax / 5;

    let secondAttackerFirstAttackCurrentPrecisionValue =
      secondAttackerAttacks.secondAttackerFirstAttack.precision;

    let secondAttackerSecondAttackCurrentPrecisionValue =
      secondAttackerAttacks.secondAttackerSecondAttack.precision;

    let updated = false;

    const decreasingValue = 5;

    const secondAttackerFirstAttackNewPrecisionValue =
      secondAttackerFirstAttackCurrentPrecisionValue - decreasingValue;

    const secondAttackerSecondAttackNewPrecisionValue =
      secondAttackerSecondAttackCurrentPrecisionValue - decreasingValue;

    if (
      secondAttackerFirstAttackCurrentPrecisionValue <=
        secondAttackerFirstAttackMinimumPrecisionValue ||
      secondAttackerSecondAttackCurrentPrecisionValue <=
        secondAttackerSecondAttackMinimumPrecisionValue
    ) {
      await openDialogueWhenPokemonPrecisionAttacksCantDecreaseAnyFurther(
        secondAttacker
      );
    } else {
      if (
        secondAttackerFirstAttackCurrentPrecisionValue >
        secondAttackerFirstAttackMinimumPrecisionValue
      ) {
        await openDialogueWhenPokemonPrecisionAttacksDecrease2pFactorAttack(
          secondAttacker
        );
        secondAttackerAttacks.secondAttackerFirstAttack.precision =
          secondAttackerFirstAttackNewPrecisionValue;
        updated = true;
      }

      if (
        secondAttackerSecondAttackCurrentPrecisionValue >
        secondAttackerSecondAttackMinimumPrecisionValue
      ) {
        await openDialogueWhenPokemonPrecisionAttacksDecrease2pFactorAttack(
          secondAttacker
        );
        secondAttackerAttacks.secondAttackerSecondAttack.precision =
          secondAttackerSecondAttackNewPrecisionValue;
        updated = true;
      }

      if (updated) {
        return {
          firstAttack:
            secondAttackerAttacks.secondAttackerFirstAttack.precision,
          secondAttack:
            secondAttackerAttacks.secondAttackerSecondAttack.precision,
        };
      }
    }
  }
}
