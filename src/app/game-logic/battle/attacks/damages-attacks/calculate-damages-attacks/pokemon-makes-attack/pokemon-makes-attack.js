import { weaknessFactorAttack } from "../../../factors-attacks/weakness-factors-attacks/weakness-factor-attack.js";
import { resistanceFactorAttack } from "../../../factors-attacks/resistance-factors-attacks/resistance-factor-attacks.js";
import { ineffectiveFactorAttack } from "../../../factors-attacks/ineffective-factors-attacks/ineffective-factors-attack.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { criticalHit } from "../../../factors-attacks/critical-hit-factor/critical-hit-factor.js";
import { criticalHitIncreaseByFocusEnergyAttack } from "../../../factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-attack.js";
import { oneHitKnockoutFactorAttack } from "../../../factors-attacks/one-hit-factors-attacks/one-hit-knock-out-factor-attack.js";
import { protectFactorAttack } from "../../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-factors-attack.js";
import { attackThatDependsFirstAttackerLevel } from "../../../factors-attacks/level-factors-attacks/handle-level-factor-attacks/handle-level-factor-attacks.js";
import { hpIncrease50PercentOfDamagesFactorAttack } from "../../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-50-percent-damages.js";
import { baseDamage } from "./base-damages/base-damage.js";
import { minimumDamage } from "../../minimum-damage/minimum-damage.js";
import { applyStatChangeFactors } from "./apply-stat-change-factors/stat-change-factors.js";
import { applyStatutsChangeFactors } from "./apply-statuts-change-factors/statut-change-factors.js";
import { openDialogueWhenPokemonMakesAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";

const randomNumber = Math.floor(Math.random() * 100) + 1;

export async function pokemonMakesAttack(
  firstAttacker,
  secondAttacker,
  firstAttackerAttack
) {
  console.log(firstAttacker.name, "attaque!");
  await openDialogueWhenPokemonMakesAttack(firstAttacker);

  if (randomNumber <= firstAttackerAttack.precision) {
    let damages = baseDamage(firstAttacker, secondAttacker);

    let getCriticalHit = await criticalHit(firstAttacker);
    damages *= getCriticalHit;

    let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
    damages *= randomFactor;

    let getAlwaysKnockOutAttacks = await oneHitKnockoutFactorAttack(
      secondAttacker,
      firstAttackerAttack
    );
    damages *= getAlwaysKnockOutAttacks;

    let getLevelFactorsForAttacks = attackThatDependsFirstAttackerLevel(
      firstAttacker,
      firstAttackerAttack,
      damages
    );
    damages = getLevelFactorsForAttacks;

    let getHpIncrease50PercentOfDamagesFactor =
      await hpIncrease50PercentOfDamagesFactorAttack(
        firstAttacker,
        firstAttackerAttack,
        secondAttacker,
        damages
      );
    damages *= getHpIncrease50PercentOfDamagesFactor;

    let getWeaknessFactorList = await weaknessFactorAttack(
      secondAttacker,
      firstAttackerAttack
    );
    damages *= getWeaknessFactorList;

    let getResistanceFactorList = await resistanceFactorAttack(
      secondAttacker,
      firstAttackerAttack
    );
    damages /= getResistanceFactorList;

    let getIneffectiveFactorList = await ineffectiveFactorAttack(
      secondAttacker,
      firstAttackerAttack
    );
    damages *= getIneffectiveFactorList;

    await criticalHitIncreaseByFocusEnergyAttack(
      firstAttacker,
      firstAttackerAttack
    );

    await protectFactorAttack(firstAttacker, firstAttackerAttack);

    await applyStatChangeFactors(
      firstAttacker,
      firstAttackerAttack,
      secondAttacker
    );

    await applyStatutsChangeFactors(
      firstAttacker,
      firstAttackerAttack,
      secondAttacker
    );

    damages = minimumDamage(damages);
    return Math.round(damages);
  } else {
    console.log(firstAttacker.name, "rate son attaque!");
    await openDialogueWhenPokemonMissAttack(firstAttacker);
    return 0;
  }
}
