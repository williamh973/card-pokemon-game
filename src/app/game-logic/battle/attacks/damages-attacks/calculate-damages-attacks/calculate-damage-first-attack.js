import { weaknessFactorForFirstAttack } from "../../factors-attacks/weakness-factors-attacks/weakness-factor-first-attack.js";
import { resistanceFactorForFirstAttack } from "../../factors-attacks/resistance-factors-attacks/resistance-factor-first-attack.js";
import { ineffectiveFactorForFirstAttack } from "../../factors-attacks/ineffective-factors-attacks/ineffective-factors-first-attack.js";
import { speedIncrease5pFactorForFirstAttack } from "../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorForFirstAttack } from "../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorForFirstAttack } from "../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-first-attack.js";
import { defenseIncrease10pFactorForFirstAttack } from "../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-first-attack.js";
import { attackDecrease2pFactorForFirstAttack } from "../../../game-logic/battle/attacks/factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factor-first-attack.js";
import { hpIncrease5pFactorForFirstAttack } from "../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { openDialogueWhenPokemonMakesFirstAttack } from "../../battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { criticalHit } from "../../../game-logic/battle/attacks/factors-attacks/critical-hit-factor/critical-hit-factor.js";
import { criticalHitIncreaseByFocusEnergyForFirstAttack } from "../../factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-first-attack.js";
import { oneHitKnockoutFactorForFirstAttack } from "../../factors-attacks/one-hit-factors-attacks/one-hit-knock-out-first-attack.js";
import { protectFactorForFirstAttack } from "../../factors-attacks/protect-factors-attacks/protect-factors-first-attack.js";
import {
  deseableProtectCapacity,
  isProtectOrDetectCapacityActived,
} from "../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleBonusAttackWhenProtectOrDetectCapacityActived } from "../handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-first-attack.js";
import { poisonedStatutProbabilitysForFirstAttack } from "../../../game-logic/battle/statut/factors-statuts-state/poisoned/export-to-calculate-damages-attacks/poisoned-statut-probabilitys-for-first-attack.js";
import { burningStatutProbabilitysForFirstAttack } from "../../../game-logic/battle/statut/factors-statuts-state/burning/export-to-calculate-damages-attacks/burning-statut-probabilitys-for-first-attack.js";
import { paralyzedStatutProbabilitysForFirstAttack } from "../../../game-logic/battle/statut/factors-statuts-state/paralyzed/export-to-calculate-damages-attacks/paralyzed-statut-probabilitys-for-first-attack.js";
import { frozenStatutProbabilitysForFirstAttack } from "../../../game-logic/battle/statut/factors-statuts-state/frozen/export-to-calculate-damages-attacks/frozen-statut-probabilitys-for-first-attack.js";
import { asleepStatutProbabilitysForFirstAttack } from "../../../game-logic/battle/statut/factors-statuts-state/asleep/export-to-calculate-damages-attacks/asleep-statut-probabilitys-for-first-attack.js";
import { ifPokemonHasAnAttackThatDependsOnItsOwnLevel } from "../handle-level-factor-attacks/handle-level-factor-attacks.js";
import { hpIncrease50PercentOfDamagesFactorForFirstAttack } from "../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-50-percent-damages.js";
import { confusingStatutProbabilitysForFirstAttack } from "../../../game-logic/battle/statut/factors-statuts-state/confusing/export-to-calculate-damages-attacks/confusing-statut-probabilitys-for-first-attack.js";
import { cursedStatut100PercentProbabililityForFirstAttack } from "../../../game-logic/battle/statut/factors-statuts-state/cursed/cursed-statut-probability-for-first-attack.js";

export function calculateDamageFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive,
  firstAttackStrength,
  firstAttackerSpecialAtt,
  secondAttackerSpecialDef,
  firstAttackPrecision,
  firstAttackType,
  secondAttackerType,
  secondAttackerSecondaryType
) {
  if (
    isFirstAttackActive &&
    !isProtectOrDetectCapacityActived &&
    (firstAttackType === "bonus" || firstAttackType !== "bonus")
  ) {
    openDialogueWhenPokemonMakesFirstAttack(firstAttacker);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= firstAttackPrecision) {
      let damages =
        (((2 * firstAttacker.stats.attack) / secondAttacker.stats.defense) *
          firstAttackStrength *
          (firstAttackerSpecialAtt / secondAttackerSpecialDef)) /
        20;

      let getCriticalHit = criticalHit(firstAttacker);
      damages *= getCriticalHit;

      let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
      damages *= randomFactor;

      let getWeaknessFactorList = weaknessFactorForFirstAttack(
        firstAttackType,
        secondAttackerType,
        secondAttackerSecondaryType,
        isFirstAttackActive
      );
      damages *= getWeaknessFactorList;

      let getResistanceFactorList = resistanceFactorForFirstAttack(
        firstAttackType,
        secondAttackerType,
        secondAttackerSecondaryType,
        isFirstAttackActive
      );
      damages /= getResistanceFactorList;

      let getIneffectiveFactorList = ineffectiveFactorForFirstAttack(
        firstAttackType,
        secondAttackerType,
        secondAttackerSecondaryType,
        isFirstAttackActive
      );
      damages *= getIneffectiveFactorList;

      let getAlwaysKnockOutAttacks = oneHitKnockoutFactorForFirstAttack(
        isFirstAttackActive,
        secondAttackerType,
        firstAttacker,
        secondAttacker
      );
      damages *= getAlwaysKnockOutAttacks;

      if (
        firstAttacker.firstAttack.name === "Ombre Nocturne" ||
        firstAttacker.firstAttack.name === "Frappe Atlas"
      ) {
        let getLevelFactorsForAttacks =
          ifPokemonHasAnAttackThatDependsOnItsOwnLevel(
            firstAttacker,
            isFirstAttackActive,
            damages
          );

        damages = getLevelFactorsForAttacks;
      }

      speedIncrease5pFactorForFirstAttack(firstAttacker, isFirstAttackActive);
      speedIncrease10pFactorForFirstAttack(firstAttacker, isFirstAttackActive);
      defenseIncrease5pFactorForFirstAttack(firstAttacker, isFirstAttackActive);
      defenseIncrease10pFactorForFirstAttack(
        firstAttacker,
        isFirstAttackActive
      );

      hpIncrease5pFactorForFirstAttack(firstAttacker, isFirstAttackActive);

      attackDecrease2pFactorForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );

      criticalHitIncreaseByFocusEnergyForFirstAttack(
        firstAttacker,
        isFirstAttackActive
      );

      protectFactorForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );

      burningStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType,
        secondAttackerType
      );

      poisonedStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType,
        secondAttackerType
      );

      paralyzedStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType,
        secondAttackerType
      );

      frozenStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType
      );

      asleepStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType
      );

      confusingStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType
      );

      cursedStatut100PercentProbabililityForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType
      );

      if (firstAttacker.firstAttack.name === "Dévorêve") {
        const getHpIncrease50PercentOfDamagesFactor =
          hpIncrease50PercentOfDamagesFactorForFirstAttack(
            firstAttacker,
            secondAttacker,
            isFirstAttackActive,
            damages
          );

        damages *= getHpIncrease50PercentOfDamagesFactor;
      }

      if (damages > 0 && damages < 0.5) {
        return (damages = 1);
      }

      return Math.round(damages);
    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  } else if (
    isFirstAttackActive &&
    isProtectOrDetectCapacityActived &&
    firstAttackType !== "bonus"
  ) {
    openDialogueWhenPokemonMakesFirstAttack(firstAttacker);
    openDialogueWhenPokemonProtectingHimself(secondAttacker);
    deseableProtectCapacity();
    return 0;
  } else if (
    isFirstAttackActive &&
    isProtectOrDetectCapacityActived &&
    firstAttackType === "bonus"
  ) {
    handleBonusAttackWhenProtectOrDetectCapacityActived(
      firstAttacker,
      isFirstAttackActive,
      firstAttackPrecision
    );
    return 0;
  }
}
