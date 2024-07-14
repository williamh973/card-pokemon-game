import { openDialogueWhenPokemonMakesAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { speedIncrease5pFactorForFirstAttack } from "../../increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorForFirstAttack } from "../../increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorForFirstAttack } from "../../increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-first-attack.js";
import { defenseIncrease10pFactorForFirstAttack } from "../../increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-first-attack.js";
import { hpIncrease5pFactorForFirstAttack } from "../../increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { protectFactorForFirstAttack } from "../protect-factors-attacks/protect-factors-first-attack.js";
import { disabledProtectCapacity } from "../protect-factors-attacks/protect-detect-capacity-actived.js";

export function handleBonusAttackWhenProtectOrDetectCapacityActived(
  firstAttacker
) {
  openDialogueWhenPokemonMakesAttack(firstAttacker);

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber <= firstAttacker.firstAttack.precision) {
    speedIncrease5pFactorForFirstAttack(firstAttacker);
    speedIncrease10pFactorForFirstAttack(firstAttacker);
    defenseIncrease5pFactorForFirstAttack(firstAttacker);
    defenseIncrease10pFactorForFirstAttack(firstAttacker);
    hpIncrease5pFactorForFirstAttack(firstAttacker);
    protectFactorForFirstAttack(firstAttacker);
  } else {
    openDialogueWhenPokemonMissAttack(firstAttacker);
    disabledProtectCapacity();
    return 0;
  }
}
