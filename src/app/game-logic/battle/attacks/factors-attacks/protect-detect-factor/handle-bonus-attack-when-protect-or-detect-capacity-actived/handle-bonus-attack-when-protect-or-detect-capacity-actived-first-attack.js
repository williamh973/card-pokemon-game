import { openDialogueWhenPokemonMakesAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { speedIncrease5pFactorAttack } from "../../increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorAttack } from "../../increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorAttack } from "../../increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-attack.js";
import { defenseIncrease10pFactorAttack } from "../../increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-attack.js";
import { hpIncrease5pFactorAttack } from "../../increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { protectFactorAttack } from "../protect-factors-attacks/protect-factors-attack.js";
import { disabledProtectCapacity } from "../protect-factors-attacks/protect-detect-capacity-actived.js";

export function handleBonusAttackWhenProtectOrDetectCapacityActived(
  firstAttacker,
  firstAttackerAttack
) {
  openDialogueWhenPokemonMakesAttack(firstAttacker);

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber <= firstAttackerAttack.precision) {
    speedIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
    speedIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
    defenseIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
    defenseIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
    hpIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
    protectFactorAttack(firstAttacker, firstAttackerAttack);
  } else {
    openDialogueWhenPokemonMissAttack(firstAttacker);
    disabledProtectCapacity();
    return 0;
  }
}
