import { weaknessFactorForFirstAttack } from "../../../attacks/factors-attacks/weakness-factors-attacks/weakness-factor-first-attack.js";
import { resistanceFactorForFirstAttack } from "../../../attacks/factors-attacks/resistance-factors-attacks/resistance-factor-first-attack.js";
import { ineffectiveFactorForFirstAttack } from "../../../attacks/factors-attacks/ineffective-factors-attacks/ineffective-factors-first-attack.js";
import { speedIncrease5pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-first-attack.js";
import { defenseIncrease10pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-first-attack.js";
import { attackDecrease2pFactorForFirstAttack } from "../../../attacks/factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factor-first-attack.js";
import { hpIncrease5pFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { openDialogueWhenPokemonMakesFirstAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../../../../components/battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { criticalHit } from "../../../attacks/factors-attacks/critical-hit-factor/critical-hit-factor.js";
import { criticalHitIncreaseByFocusEnergyForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-first-attack.js";
import { oneHitKnockoutFactorForFirstAttack } from "../../../attacks/factors-attacks/one-hit-factors-attacks/one-hit-knock-out-first-attack.js";
import { protectFactorForFirstAttack } from "../../../attacks/factors-attacks/protect-factors-attacks/protect-factors-first-attack.js";
import {
  disabledProtectCapacity,
  isProtectOrDetectCapacityActived,
} from "../../../attacks/factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleBonusAttackWhenProtectOrDetectCapacityActived } from "../handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-first-attack.js";
import { poisonedStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/poisoned/export-to-calculate-damages-attacks/poisoned-statut-probabilitys-for-first-attack.js";
import { burningStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/burning/export-to-calculate-damages-attacks/burning-statut-probabilitys-for-first-attack.js";
import { paralyzedStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/paralyzed/export-to-calculate-damages-attacks/paralyzed-statut-probabilitys-for-first-attack.js";
import { frozenStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/frozen/export-to-calculate-damages-attacks/frozen-statut-probabilitys-for-first-attack.js";
import { asleepStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/asleep/export-to-calculate-damages-attacks/asleep-statut-probabilitys-for-first-attack.js";
import { ifPokemonHasAnAttackThatDependsOnItsOwnLevel } from "../handle-level-factor-attacks/handle-level-factor-attacks.js";
import { hpIncrease50PercentOfDamagesFactorForFirstAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-50-percent-damages.js";
import { confusingStatutProbabilitysForFirstAttack } from "../../../statut/factors-statuts-state/confusing/export-to-calculate-damages-attacks/confusing-statut-probabilitys-for-first-attack.js";
import { cursedStatut100PercentProbability } from "../../../statut/factors-statuts-state/cursed/cursed-statut-probability.js";
import { baseDamage } from "../base-damages/base-damage.js";
import { minimumDamage } from "../minimum-damage/minimum-damage.js";

export function calculateDamageFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    isFirstAttackActive &&
    !isProtectOrDetectCapacityActived &&
    (firstAttacker.firstAttack.type === "bonus" ||
      firstAttacker.firstAttack.type !== "bonus")
  ) {
    openDialogueWhenPokemonMakesFirstAttack(firstAttacker);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= firstAttacker.firstAttack.precision) {
      let damages = baseDamage(
        firstAttacker,
        firstAttacker.firstAttack.strength,
        secondAttacker
      );

      let getCriticalHit = criticalHit(firstAttacker);
      damages *= getCriticalHit;

      let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
      damages *= randomFactor;

      let getWeaknessFactorList = weaknessFactorForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );
      damages *= getWeaknessFactorList;

      let getResistanceFactorList = resistanceFactorForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );
      damages /= getResistanceFactorList;

      let getIneffectiveFactorList = ineffectiveFactorForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );
      damages *= getIneffectiveFactorList;

      let getAlwaysKnockOutAttacks = oneHitKnockoutFactorForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );
      damages *= getAlwaysKnockOutAttacks;

      let getLevelFactorsForAttacks =
        ifPokemonHasAnAttackThatDependsOnItsOwnLevel(
          firstAttacker,
          isFirstAttackActive,
          damages
        );

      damages = getLevelFactorsForAttacks;

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
        isFirstAttackActive
      );

      poisonedStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );

      paralyzedStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );

      frozenStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );

      asleepStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );

      confusingStatutProbabilitysForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive
      );

      cursedStatut100PercentProbability(
        firstAttacker,
        firstAttacker.firstAttack.type,
        firstAttacker.firstAttack.name,
        secondAttacker,
        isFirstAttackActive
      );

      const getHpIncrease50PercentOfDamagesFactor =
        hpIncrease50PercentOfDamagesFactorForFirstAttack(
          firstAttacker,
          secondAttacker,
          isFirstAttackActive,
          damages
        );

      damages *= getHpIncrease50PercentOfDamagesFactor;

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
    firstAttacker.firstAttack.type !== "bonus"
  ) {
    openDialogueWhenPokemonMakesFirstAttack(firstAttacker);
    openDialogueWhenPokemonProtectingHimself(secondAttacker);
    disabledProtectCapacity();
    return 0;
  } else if (
    isFirstAttackActive &&
    isProtectOrDetectCapacityActived &&
    firstAttacker.firstAttack.type === "bonus"
  ) {
    handleBonusAttackWhenProtectOrDetectCapacityActived(
      firstAttacker,
      isFirstAttackActive,
      firstAttacker.firstAttack.precision
    );
    return 0;
  }
}
