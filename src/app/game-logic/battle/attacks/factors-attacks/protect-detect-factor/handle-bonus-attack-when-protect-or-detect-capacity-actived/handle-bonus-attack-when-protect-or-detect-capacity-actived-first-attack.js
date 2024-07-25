import { openDialogueWhenPokemonMakesAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { speedIncrease5pFactorAttack } from "../../increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorAttack } from "../../increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorAttack } from "../../increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-attack.js";
import { defenseIncrease10pFactorAttack } from "../../increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-attack.js";
import { hpIncrease5pFactorAttack } from "../../increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { protectFactorAttack } from "../protect-factors-attacks/protect-factors-attack.js";
import { disabledProtectCapacity } from "../protect-factors-attacks/protect-detect-capacity-actived.js";

export async function handleBonusAttackWhenProtectOrDetectCapacityActived(
  firstAttacker,
  firstAttackerAttack
) {
  await openDialogueWhenPokemonMakesAttack(firstAttacker);

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber <= firstAttackerAttack.precision) {
    await speedIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
    await speedIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
    await defenseIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
    await defenseIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
    await hpIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
    await protectFactorAttack(firstAttacker, firstAttackerAttack);
  } else {
    await openDialogueWhenPokemonMissAttack(firstAttacker);
    disabledProtectCapacity();
    return 0;
  }
}
