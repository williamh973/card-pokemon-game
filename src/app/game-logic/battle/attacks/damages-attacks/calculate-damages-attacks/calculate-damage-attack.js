import { weaknessFactorAttack } from "../../factors-attacks/weakness-factors-attacks/weakness-factor-attack.js";
import { resistanceFactorAttack } from "../../factors-attacks/resistance-factors-attacks/resistance-factor-attacks.js";
import { ineffectiveFactorAttack } from "../../factors-attacks/ineffective-factors-attacks/ineffective-factors-attack.js";
import { speedIncrease5pFactorAttack } from "../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js";
import { speedIncrease10pFactorAttack } from "../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js";
import { defenseIncrease5pFactorAttack } from "../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-attack.js";
import { defenseIncrease10pFactorAttack } from "../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-attack.js";
import { attackDecrease2pFactorAttack } from "../../factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factor-attack.js";
import { hpIncrease5pFactorAttack } from "../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js";
import { openDialogueWhenPokemonMakesAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../../../../components/battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { criticalHit } from "../../factors-attacks/critical-hit-factor/critical-hit-factor.js";
import { criticalHitIncreaseByFocusEnergyAttack } from "../../factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-attack.js";
import { oneHitKnockoutFactorAttack } from "../../factors-attacks/one-hit-factors-attacks/one-hit-knock-out-factor-attack.js";
import { protectFactorAttack } from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-factors-attack.js";
import {
  disabledProtectCapacity,
  isProtectOrDetectCapacityActived,
} from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleBonusAttackWhenProtectOrDetectCapacityActived } from "../../factors-attacks/protect-detect-factor/handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-first-attack.js";
import { poisonedStatutProbabilitysAttack } from "../../../statut/factors-statuts-state/poisoned/export-to-calculate-damages-attacks/poisoned-statut-probabilitys-attack.js";
import { burningStatutProbabilitysAttack } from "../../../statut/factors-statuts-state/burning/export-to-calculate-damages-attacks/burning-statut-probabilitys-attack.js";
import { paralyzedStatutProbabilitysAttack } from "../../../statut/factors-statuts-state/paralyzed/export-to-calculate-damages-attacks/paralyzed-statut-probabilitys-attack.js";
import { frozenStatutProbabilitysAttack } from "../../../statut/factors-statuts-state/frozen/export-to-calculate-damages-attacks/frozen-statut-probabilitys-attack.js";
import { asleepStatutProbabilitysAttack } from "../../../statut/factors-statuts-state/asleep/export-to-calculate-damages-attacks/asleep-statut-probabilitys-attack.js";
import { attackThatDependsFirstAttackerLevel } from "../../factors-attacks/level-factors-attacks/handle-level-factor-attacks/handle-level-factor-attacks.js";
import { hpIncrease50PercentOfDamagesFactorAttack } from "../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-50-percent-damages.js";
import { confusingStatutProbabilitysAttack } from "../../../statut/factors-statuts-state/confusing/export-to-calculate-damages-attacks/confusing-statut-probabilitys-attack.js";
import { cursedStatut100PercentProbability } from "../../../statut/factors-statuts-state/cursed/cursed-statut-probability.js";
import { baseDamage } from "../base-damages/base-damage.js";
import { minimumDamage } from "../minimum-damage/minimum-damage.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function calculateDamagesAttack(firstAttacker, secondAttacker) {
  const firstAttackerAttack = pokemonVariables.isFirstAttackActive
    ? firstAttacker.firstAttack
    : firstAttacker.secondAttack;

  const firstAttackerFirstAttackBonusType =
    firstAttackerAttack.type === "bonus" ||
    firstAttackerAttack.type !== "bonus";

  if (
    pokemonVariables.isFirstAttackActive ||
    (pokemonVariables.isSecondAttackActive &&
      !isProtectOrDetectCapacityActived &&
      firstAttackerFirstAttackBonusType)
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

      speedIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
      speedIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
      defenseIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
      defenseIncrease10pFactorAttack(firstAttacker, firstAttackerAttack);
      hpIncrease5pFactorAttack(firstAttacker, firstAttackerAttack);
      attackDecrease2pFactorAttack(secondAttacker, firstAttackerAttack);
      criticalHitIncreaseByFocusEnergyAttack(
        firstAttacker,
        firstAttackerAttack
      );
      protectFactorAttack(firstAttacker, firstAttackerAttack);

      burningStatutProbabilitysAttack(secondAttacker, firstAttackerAttack);
      poisonedStatutProbabilitysAttack(secondAttacker, firstAttackerAttack);
      paralyzedStatutProbabilitysAttack(secondAttacker, firstAttackerAttack);
      frozenStatutProbabilitysAttack(secondAttacker, firstAttackerAttack);
      asleepStatutProbabilitysAttack(secondAttacker, firstAttackerAttack);
      confusingStatutProbabilitysAttack(secondAttacker, firstAttackerAttack);
      cursedStatut100PercentProbability(
        firstAttacker,
        secondAttacker,
        firstAttackerAttack
      );

      damages = minimumDamage(damages);
      return Math.round(damages);
    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  } else if (
    pokemonVariables.isFirstAttackActive ||
    (pokemonVariables.isSecondAttackActive &&
      isProtectOrDetectCapacityActived &&
      firstAttackerAttack.type !== "bonus")
  ) {
    openDialogueWhenPokemonMakesAttack(firstAttacker);
    openDialogueWhenPokemonProtectingHimself(secondAttacker);
    disabledProtectCapacity();
    return 0;
  } else if (
    pokemonVariables.isFirstAttackActive ||
    (pokemonVariables.isSecondAttackActive &&
      isProtectOrDetectCapacityActived &&
      firstAttackerAttack.type === "bonus")
  ) {
    handleBonusAttackWhenProtectOrDetectCapacityActived(
      firstAttacker,
      firstAttackerAttack
    );
    return 0;
  }
}
