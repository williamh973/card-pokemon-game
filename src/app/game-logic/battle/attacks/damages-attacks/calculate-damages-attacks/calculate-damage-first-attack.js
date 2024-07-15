import { weaknessFactorAttack } from "../../../attacks/factors-attacks/weakness-factors-attacks/weakness-factor-attack.js";
import { resistanceFactorAttack } from "../../factors-attacks/resistance-factors-attacks/resistance-factor-attacks.js";
import { ineffectiveFactorAttack } from "../../../attacks/factors-attacks/ineffective-factors-attacks/ineffective-factors-attack.js";
import { speedIncrease5pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-first-attack.js";
import { defenseIncrease10pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-first-attack.js";
import { attackDecrease2pFactorForFirstAttack } from "../../../attacks/factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factor-first-attack.js";
import { hpIncrease5pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { openDialogueWhenPokemonMakesAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../../../../components/battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { criticalHit } from "../../../attacks/factors-attacks/critical-hit-factor/critical-hit-factor.js";
import { criticalHitIncreaseByFocusEnergyForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-first-attack.js";
import { oneHitKnockoutFactorAttack } from "../../../attacks/factors-attacks/one-hit-factors-attacks/one-hit-knock-out-first-attack.js";
import { protectFactorForFirstAttack } from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-factors-first-attack.js";
import {
  disabledProtectCapacity,
  isProtectOrDetectCapacityActived,
} from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleBonusAttackWhenProtectOrDetectCapacityActived } from "../../factors-attacks/protect-detect-factor/handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-first-attack.js";
import { poisonedStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/poisoned/export-to-calculate-damages-attacks/poisoned-statut-probabilitys-for-first-attack.js";
import { burningStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/burning/export-to-calculate-damages-attacks/burning-statut-probabilitys-for-first-attack.js";
import { paralyzedStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/paralyzed/export-to-calculate-damages-attacks/paralyzed-statut-probabilitys-for-first-attack.js";
import { frozenStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/frozen/export-to-calculate-damages-attacks/frozen-statut-probabilitys-for-first-attack.js";
import { asleepStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/asleep/export-to-calculate-damages-attacks/asleep-statut-probabilitys-for-first-attack.js";
import { attackThatDependsFirstAttackerLevel } from "../../factors-attacks/level-factors-attacks/handle-level-factor-attacks/handle-level-factor-attacks.js";
import { hpIncrease50PercentOfDamagesFactorAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-50-percent-damages.js";
import { confusingStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/confusing/export-to-calculate-damages-attacks/confusing-statut-probabilitys-for-first-attack.js";
import { cursedStatut100PercentProbability } from "../../../statut/factors-statuts-state/cursed/cursed-statut-probability.js";
import { baseDamage } from "../base-damages/base-damage.js";
import { minimumDamage } from "../minimum-damage/minimum-damage.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function calculateDamagesAttack(firstAttacker, secondAttacker) {
  const firstAttackerFirstAttackBonusType =
    firstAttacker.firstAttack.type === "bonus" ||
    firstAttacker.firstAttack.type !== "bonus";
  const firstAttackerSecondAttackBonusType =
    firstAttacker.secondAttack.type === "bonus" ||
    firstAttacker.secondAttack.type !== "bonus";

  const firstAttackerAttack = pokemonVariables.isFirstAttackActive
    ? firstAttacker.firstAttack
    : firstAttacker.secondAttack;

  if (
    pokemonVariables.isFirstAttackActive ||
    (pokemonVariables.isSecondAttackActive &&
      !isProtectOrDetectCapacityActived &&
      firstAttackerFirstAttackBonusType &&
      firstAttackerSecondAttackBonusType)
  ) {
    openDialogueWhenPokemonMakesAttack(firstAttacker);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= firstAttackerAttack.precision) {
      let damages = baseDamage(firstAttacker, secondAttacker);

      let getCriticalHit = criticalHit(firstAttacker);
      damages *= getCriticalHit;

      let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
      damages *= randomFactor;

      let getAlwaysKnockOutAttacks = oneHitKnockoutFactorAttack(
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
        hpIncrease50PercentOfDamagesFactorAttack(
          firstAttacker,
          firstAttackerAttack,
          secondAttacker,
          damages
        );
      damages *= getHpIncrease50PercentOfDamagesFactor;

      let minimumDamages = minimumDamage(damages);

      let getWeaknessFactorList = weaknessFactorAttack(
        secondAttacker,
        firstAttackerAttack
      );
      damages *= getWeaknessFactorList;

      let getResistanceFactorList = resistanceFactorAttack(
        secondAttacker,
        firstAttackerAttack
      );
      damages /= getResistanceFactorList;

      let getIneffectiveFactorList = ineffectiveFactorAttack(
        secondAttacker,
        firstAttackerAttack
      );
      damages *= getIneffectiveFactorList;

      // speedIncrease5pFactorForFirstAttack(firstAttacker);
      // speedIncrease10pFactorForFirstAttack(firstAttacker);
      // defenseIncrease5pFactorForFirstAttack(firstAttacker);
      // defenseIncrease10pFactorForFirstAttack(firstAttacker);
      // hpIncrease5pFactorForFirstAttack(firstAttacker);
      // attackDecrease2pFactorForFirstAttack(firstAttacker, secondAttacker);
      // criticalHitIncreaseByFocusEnergyForFirstAttack(firstAttacker);
      // protectFactorForFirstAttack(firstAttacker, secondAttacker);

      // burningStatutProbabilitysForFirstAttack(firstAttacker, secondAttacker);
      // poisonedStatutProbabilitysForFirstAttack(firstAttacker, secondAttacker);
      // paralyzedStatutProbabilitysForFirstAttack(firstAttacker, secondAttacker);
      // frozenStatutProbabilitysForFirstAttack(firstAttacker, secondAttacker);
      // asleepStatutProbabilitysForFirstAttack(firstAttacker, secondAttacker);
      // confusingStatutProbabilitysForFirstAttack(firstAttacker, secondAttacker);
      // cursedStatut100PercentProbability(
      //   firstAttacker,
      //   secondAttacker,
      //   pokemonVariables.isFirstAttackActive
      // );

      return Math.round(damages);
    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  } else if (
    pokemonVariables.isFirstAttackActive &&
    isProtectOrDetectCapacityActived &&
    firstAttacker.firstAttack.type !== "bonus"
  ) {
    openDialogueWhenPokemonMakesAttack(firstAttacker);
    openDialogueWhenPokemonProtectingHimself(secondAttacker);
    disabledProtectCapacity();
    return 0;
  } else if (
    pokemonVariables.isFirstAttackActive &&
    isProtectOrDetectCapacityActived &&
    firstAttacker.firstAttack.type === "bonus"
  ) {
    handleBonusAttackWhenProtectOrDetectCapacityActived(firstAttacker);
    return 0;
  }
}
