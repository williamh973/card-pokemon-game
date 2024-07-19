import { attackDecrease2pFactorAttack } from "../../../../factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factor-attack.js";
import { defenseIncrease10pFactorAttack } from "../../../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-attack.js";
import { defenseIncrease5pFactorAttack } from "../../../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-attack.js";
import { hpIncrease5pFactorAttack } from "../../../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorAttack } from "../../../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { speedIncrease5pFactorAttack } from "../../../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";

export function applyStatChangeFactors(
  firstAttacker,
  firstAttackerAttack,
  secondAttacker
) {
  speedIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
  speedIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
  defenseIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
  defenseIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
  hpIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
  attackDecrease2pFactorAttack(secondAttacker, firstAttackerAttack);
}
