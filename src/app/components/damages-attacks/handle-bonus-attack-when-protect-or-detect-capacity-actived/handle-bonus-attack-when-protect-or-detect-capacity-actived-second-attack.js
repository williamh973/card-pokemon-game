import {
  openDialogueWhenPokemonMakesSecondAttack,
  openDialogueWhenPokemonMissAttack,
} from "../../dialogue-fight.js";

import { speedIncrease5pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";

import { speedIncrease10pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";

import { defenseIncrease5pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-second-attack.js";

import { defenseIncrease10pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-second-attack.js";

import { hpIncrease5pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";

import { protectFactorForSecondAttack } from "../../factors-attacks/protect-factors-attacks/protect-factors-second-attack.js";

import { deseableProtectCapacity } from "../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

export function handleBonusAttackWhenProtectOrDetectCapacityActived(
  firstAttacker,
  isSecondAttackActive,
  secondAttackPrecision
) {
  openDialogueWhenPokemonMakesSecondAttack(firstAttacker);

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
    openDialogueWhenPokemonMissAttack(firstAttacker);
    deseableProtectCapacity();
    return 0;
  }
}
