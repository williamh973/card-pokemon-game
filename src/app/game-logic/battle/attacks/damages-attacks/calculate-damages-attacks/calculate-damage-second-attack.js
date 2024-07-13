import { weaknessFactorForSecondAttack } from "../../../attacks/factors-attacks/weakness-factors-attacks/weakness-factor-second-attack.js";
import { resistanceFactorForSecondAttack } from "../../../attacks/factors-attacks/resistance-factors-attacks/resistance-factor-second-attack.js";
import { ineffectiveFactorForSecondAttack } from "../../../attacks/factors-attacks/ineffective-factors-attacks/ineffective-factors-second-attack.js";
import { speedIncrease5pFactorForSecondAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorForSecondAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorForSecondAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-second-attack.js";
import { defenseIncrease10pFactorForSecondAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-second-attack.js";
import { attackDecrease2pFactorForSecondAttack } from "../../../attacks/factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factor-second-attack.js";
import { hpIncrease5pFactorForSecondAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { openDialogueWhenPokemonMakesSecondAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../../../../components/battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { criticalHit } from "../../../attacks/factors-attacks/critical-hit-factor/critical-hit-factor.js";
import { criticalHitIncreaseByFocusEnergyForSecondAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-second-attack.js";
import { oneHitKnockoutFactorForSecondAttack } from "../../../attacks/factors-attacks/one-hit-factors-attacks/one-hit-knock-out-second-attack.js";
import { protectFactorForSecondAttack } from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-factors-second-attack.js";
import {
  isProtectOrDetectCapacityActived,
  disabledProtectCapacity,
} from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleBonusAttackWhenProtectOrDetectCapacityActived } from "../../factors-attacks/protect-detect-factor/handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-second-attack.js";
import { burningStatutProbabilitysForSecondAttack } from "../../../statut/factors-statuts-state/burning/export-to-calculate-damages-attacks/burning-statut-probabilitys-for-second-attack.js";
import { poisonedStatutProbabilitysForSecondAttack } from "../../../statut/factors-statuts-state/poisoned/export-to-calculate-damages-attacks/poisoned-statut-probabilitys-for-second-attack.js";
import { paralyzedStatutProbabilitysForSecondAttack } from "../../../statut/factors-statuts-state/paralyzed/export-to-calculate-damages-attacks/paralyzed-statut-probabilitys-for-second-attack.js";
import { frozenStatutProbabilitysForSecondAttack } from "../../../statut/factors-statuts-state/frozen/export-to-calculate-damages-attacks/frozen-statut-probabilitys-for-second-attack.js";
import { asleepStatutProbabilitysForSecondAttack } from "../../../statut/factors-statuts-state/asleep/export-to-calculate-damages-attacks/asleep-statut-probabilitys-for-second-attack.js";
import { ifPokemonHasAnAttackThatDependsOnItsOwnLevel } from "../../factors-attacks/level-factors-attacks/handle-level-factor-attacks/handle-level-factor-attacks.js";
import { hpIncrease50PercentOfDamagesFactorForSecondAttack } from "../../../attacks/factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-50-percent-damages.js";
import { confusingStatutProbabilitysForSecondAttack } from "../../../statut/factors-statuts-state/confusing/export-to-calculate-damages-attacks/confusing-statut-probabilitys-for-second-attack.js";
import { cursedStatut100PercentProbability } from "../../../statut/factors-statuts-state/cursed/cursed-statut-probability.js";
import { baseDamage } from "../base-damages/base-damage.js";
import { minimumDamage } from "../minimum-damage/minimum-damage.js";

export function calculateDamageSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    isSecondAttackActive &&
    !isProtectOrDetectCapacityActived &&
    (firstAttacker.secondAttack.type === "bonus" ||
      firstAttacker.secondAttack.type !== "bonus")
  ) {
    openDialogueWhenPokemonMakesSecondAttack(firstAttacker);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= firstAttacker.secondAttack.precision) {
      let damages = baseDamage(
        firstAttacker,
        firstAttacker.secondAttack.strength,
        secondAttacker
      );

      let getCriticalHit = criticalHit(firstAttacker);
      damages *= getCriticalHit;

      let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
      damages *= randomFactor;

      let getWeaknessFactorList = weaknessFactorForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );
      damages *= getWeaknessFactorList;

      let getResistanceFactorList = resistanceFactorForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );
      damages /= getResistanceFactorList;

      let getIneffectiveFactorList = ineffectiveFactorForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );
      damages *= getIneffectiveFactorList;

      let getAlwaysKnockOutAttacks = oneHitKnockoutFactorForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );
      damages *= getAlwaysKnockOutAttacks;

      let getLevelFactorsForAttacks =
        ifPokemonHasAnAttackThatDependsOnItsOwnLevel(
          firstAttacker,
          isSecondAttackActive,
          damages
        );

      damages = getLevelFactorsForAttacks;

      const getHpIncrease50PercentOfDamagesFactor =
        hpIncrease50PercentOfDamagesFactorForSecondAttack(
          firstAttacker,
          secondAttacker,
          isSecondAttackActive,
          damages
        );

      damages *= getHpIncrease50PercentOfDamagesFactor;

      let minimumDamages = minimumDamage(damages);

      // damages = minimumDamages;

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
        isSecondAttackActive
      );

      poisonedStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );

      paralyzedStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );

      frozenStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );

      asleepStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );

      confusingStatutProbabilitysForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive
      );

      cursedStatut100PercentProbability(
        firstAttacker,
        firstAttacker.secondAttack.type,
        firstAttacker.secondAttack.name,
        secondAttacker,
        isSecondAttackActive
      );

      // console.log(damages);

      return Math.round(damages);
    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  } else if (
    isSecondAttackActive &&
    isProtectOrDetectCapacityActived &&
    firstAttacker.secondAttack.type !== "bonus"
  ) {
    openDialogueWhenPokemonMakesSecondAttack(firstAttacker);
    openDialogueWhenPokemonProtectingHimself(secondAttacker);
    disabledProtectCapacity();
    return 0;
  } else if (
    isSecondAttackActive &&
    isProtectOrDetectCapacityActived &&
    firstAttacker.secondAttack.type === "bonus"
  ) {
    handleBonusAttackWhenProtectOrDetectCapacityActived(
      firstAttacker,
      isSecondAttackActive,
      firstAttacker.secondAttack.precision
    );
    return 0;
  }
}
