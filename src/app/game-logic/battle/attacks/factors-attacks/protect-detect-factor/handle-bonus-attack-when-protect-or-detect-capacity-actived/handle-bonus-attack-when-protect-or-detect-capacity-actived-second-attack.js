import { openDialogueWhenPokemonMakesSecondAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { speedIncrease5pFactorForSecondAttack } from "../../increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorForSecondAttack } from "../../increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorForSecondAttack } from "../../increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-second-attack.js";
import { defenseIncrease10pFactorForSecondAttack } from "../../increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-second-attack.js";
import { hpIncrease5pFactorForSecondAttack } from "../../increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { protectFactorForSecondAttack } from "../protect-factors-attacks/protect-factors-second-attack.js";
import { disabledProtectCapacity } from "../protect-factors-attacks/protect-detect-capacity-actived.js";

export async function handleStatusAttackWhenProtectOrDetectCapacityActived(
  firstAttacker,
  isSecondAttackActive,
  secondAttackPrecision
) {
  await openDialogueWhenPokemonMakesSecondAttack(firstAttacker);

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber <= secondAttackPrecision) {
    speedIncrease5pFactorForSecondAttack(firstAttacker, isSecondAttackActive);

    speedIncrease10pFactorForSecondAttack(firstAttacker, isSecondAttackActive);

    defenseIncrease5pFactorForSecondAttack(firstAttacker, isSecondAttackActive);

    defenseIncrease10pFactorForSecondAttack(
      firstAttacker,
      isSecondAttackActive
    );

    hpIncrease5pFactorForSecondAttack(firstAttacker, isSecondAttackActive);

    protectFactorForSecondAttack(firstAttacker, isSecondAttackActive);
  } else {
    await openDialogueWhenPokemonMissAttack(firstAttacker);
    disabledProtectCapacity();
    return 0;
  }
}
