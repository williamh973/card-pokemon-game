import { weaknessFactorForSecondAttack } from "../../factors-attacks/weakness-factors-attacks/weakness-factor-second-attack.js";
import { resistanceFactorForSecondAttack } from "../../factors-attacks/resistance-factors-attacks/resistance-factor-second-attack.js";
import { ineffectiveFactorForSecondAttack } from "../../factors-attacks/ineffective-factors-attacks/ineffective-factors-second-attack.js";
import { speedIncrease5pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-second-attack.js";
import { defenseIncrease10pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-second-attack.js";
import { attackDecrease2pFactorForSecondAttack } from "../../../game-logic/battle/attacks/factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factor-second-attack.js";
import { hpIncrease5pFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { openDialogueWhenPokemonMakesSecondAttack } from "../../battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { criticalHit } from "../../../game-logic/battle/attacks/factors-attacks/critical-hit-factor/critical-hit-factor.js";
import { criticalHitIncreaseByFocusEnergyForSecondAttack } from "../../factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-second-attack.js";
import { oneHitKnockoutFactorForSecondAttack } from "../../factors-attacks/one-hit-factors-attacks/one-hit-knock-out-second-attack.js";
import { protectFactorForSecondAttack } from "../../factors-attacks/protect-factors-attacks/protect-factors-second-attack.js";
import {
  isProtectOrDetectCapacityActived,
  deseableProtectCapacity,
} from "../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleBonusAttackWhenProtectOrDetectCapacityActived } from "../handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-second-attack.js";
import { burningStatutProbabilitysForSecondAttack } from "../../../game-logic/battle/statut/factors-statuts-state/burning/export-to-calculate-damages-attacks/burning-statut-probabilitys-for-second-attack.js";
import { poisonedStatutProbabilitysForSecondAttack } from "../../../game-logic/battle/statut/factors-statuts-state/poisoned/export-to-calculate-damages-attacks/poisoned-statut-probabilitys-for-second-attack.js";
import { paralyzedStatutProbabilitysForSecondAttack } from "../../../game-logic/battle/statut/factors-statuts-state/paralyzed/export-to-calculate-damages-attacks/paralyzed-statut-probabilitys-for-second-attack.js";
import { frozenStatutProbabilitysForSecondAttack } from "../../../game-logic/battle/statut/factors-statuts-state/frozen/export-to-calculate-damages-attacks/frozen-statut-probabilitys-for-second-attack.js";
import { asleepStatutProbabilitysForSecondAttack } from "../../../game-logic/battle/statut/factors-statuts-state/asleep/export-to-calculate-damages-attacks/asleep-statut-probabilitys-for-second-attack.js";
import { ifPokemonHasAnAttackThatDependsOnItsOwnLevel } from "../handle-level-factor-attacks/handle-level-factor-attacks.js";
import { hpIncrease50PercentOfDamagesFactorForSecondAttack } from "../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-50-percent-damages.js";
import { confusingStatutProbabilitysForSecondAttack } from "../../../game-logic/battle/statut/factors-statuts-state/confusing/export-to-calculate-damages-attacks/confusing-statut-probabilitys-for-second-attack.js";
import { cursedStatut100PercentProbabililityForSecondAttack } from "../../../game-logic/battle/statut/factors-statuts-state/cursed/cursed-statut-probability-for-second-attack.js";

export function calculateDamageSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  secondAttackStrength,
  firstAttackerSpecialAtt,
  secondAttackerSpecialDef,
  secondAttackPrecision,
  secondAttackType,
  secondAttackerType,
  secondAttackerSecondaryType
) {
  if (
    isSecondAttackActive &&
    !isProtectOrDetectCapacityActived &&
    (secondAttackType === "bonus" || secondAttackType !== "bonus")
  ) {
    openDialogueWhenPokemonMakesSecondAttack(firstAttacker);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= secondAttackPrecision) {
      let damages =
        (((2 * firstAttacker.stats.attack) / secondAttacker.stats.defense) *
          secondAttackStrength *
          (firstAttackerSpecialAtt / secondAttackerSpecialDef)) /
        20;

      let getCriticalHit = criticalHit(firstAttacker);
      damages *= getCriticalHit;

      let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
      damages *= randomFactor;

      let getWeaknessFactorList = weaknessFactorForSecondAttack(
        secondAttackType,
        secondAttackerType,
        secondAttackerSecondaryType,
        isSecondAttackActive
      );
      damages *= getWeaknessFactorList;

      let getResistanceFactorList = resistanceFactorForSecondAttack(
        secondAttackType,
        secondAttackerType,
        secondAttackerSecondaryType,
        isSecondAttackActive
      );
      damages /= getResistanceFactorList;

      let getIneffectiveFactorList = ineffectiveFactorForSecondAttack(
        secondAttackType,
        secondAttackerType,
        secondAttackerSecondaryType,
        isSecondAttackActive
      );
      damages *= getIneffectiveFactorList;

      let getAlwaysKnockOutAttacks = oneHitKnockoutFactorForSecondAttack(
        isSecondAttackActive,
        secondAttackerType,
        firstAttacker,
        secondAttacker
      );
      damages *= getAlwaysKnockOutAttacks;

      if (
        firstAttacker.secondAttack.name === "Ombre Nocturne" ||
        firstAttacker.secondAttack.name === "Frappe Atlas"
      ) {
        let getLevelFactorsForAttacks =
          ifPokemonHasAnAttackThatDependsOnItsOwnLevel(
            firstAttacker,
            isSecondAttackActive,
            damages
          );

        damages = getLevelFactorsForAttacks;
      }

      speedIncrease5pFactorForSecondAttack(firstAttacker, isSecondAttackActive);

      speedIncrease10pFactorForSecondAttack(
        firstAttacker,
        isSecondAttackActive
      );

      defenseIncrease5pFactorForSecondAttack(
        firstAttacker,
        isSecondAttackActive
      );

      defenseIncrease10pFactorForSecondAttack(
        firstAttacker,
        isSecondAttackActive
      );

      hpIncrease5pFactorForSecondAttack(firstAttacker, isSecondAttackActive);

      attackDecrease2pFactorForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );

      criticalHitIncreaseByFocusEnergyForSecondAttack(
        firstAttacker,
        isSecondAttackActive
      );

      protectFactorForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );

      burningStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType,
        secondAttackerType
      );

      poisonedStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType,
        secondAttackerType
      );

      paralyzedStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType,
        secondAttackerType
      );

      frozenStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType
      );

      asleepStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType
      );

      confusingStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType
      );

      cursedStatut100PercentProbabililityForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType
      );

      if (firstAttacker.secondAttack.name === "Dévorêve") {
        const getHpIncrease50PercentOfDamagesFactor =
          hpIncrease50PercentOfDamagesFactorForSecondAttack(
            firstAttacker,
            secondAttacker,
            isSecondAttackActive,
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
    isSecondAttackActive &&
    isProtectOrDetectCapacityActived &&
    secondAttackType !== "bonus"
  ) {
    openDialogueWhenPokemonMakesSecondAttack(firstAttacker);

    openDialogueWhenPokemonProtectingHimself(secondAttacker);

    deseableProtectCapacity();
    return 0;
  } else if (
    isSecondAttackActive &&
    isProtectOrDetectCapacityActived &&
    secondAttackType === "bonus"
  ) {
    handleBonusAttackWhenProtectOrDetectCapacityActived(
      firstAttacker,
      isSecondAttackActive,
      secondAttackPrecision
    );
    return 0;
  }
}
