import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";
import { attackDecrease2pFactorAttack } from "../../../factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factor-attack.js";
import { defenseDecrease5pFactorAttack } from "../../../factors-attacks/decrease-factors-attacks/defense-decrease-factors/defense-decrease-factors-attacks/defense-decrease-5P-factors-attacks/defense-decrease-5P-factor-attack.js";
import { precisionDecrease5pFactorAttack } from "../../../factors-attacks/decrease-factors-attacks/precision-decrease-factors/precision-decrease-5p-factor-attack.js";
import { defenseIncrease10pFactorAttack } from "../../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-attack.js";
import { defenseIncrease5pFactorAttack } from "../../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-attack.js";
import { hpIncrease5pFactorAttack } from "../../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorAttack } from "../../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { speedIncrease5pFactorAttack } from "../../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";

export async function applyStatChangeFactors(
  firstAttacker,
  firstAttackerAttack,
  secondAttacker
) {
  await speedIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
  await speedIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
  await defenseIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
  await defenseIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
  await hpIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
  await precisionDecrease5pFactorAttack(secondAttacker, firstAttackerAttack);

  if (!pokemonVariables.isProtectOrDetectCapacityActived) {
    await attackDecrease2pFactorAttack(secondAttacker, firstAttackerAttack);
    await defenseDecrease5pFactorAttack(secondAttacker, firstAttackerAttack);
  }
}
