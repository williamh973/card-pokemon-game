import { asleepStatutProbabilitysAttack } from "../../../../../statut/factors-statuts-state/asleep/export-to-calculate-damages-attacks/asleep-statut-probabilitys-attack.js";
import { burningStatutProbabilitysAttack } from "../../../../../statut/factors-statuts-state/burning/export-to-calculate-damages-attacks/burning-statut-probabilitys-attack.js";
import { confusingStatutProbabilitysAttack } from "../../../../../statut/factors-statuts-state/confusing/export-to-calculate-damages-attacks/confusing-statut-probabilitys-attack.js";
import { cursedStatut100PercentProbability } from "../../../../../statut/factors-statuts-state/cursed/cursed-statut-probability.js";
import { frozenStatutProbabilitysAttack } from "../../../../../statut/factors-statuts-state/frozen/export-to-calculate-damages-attacks/frozen-statut-probabilitys-attack.js";
import { paralyzedStatutProbabilitysAttack } from "../../../../../statut/factors-statuts-state/paralyzed/export-to-calculate-damages-attacks/paralyzed-statut-probabilitys-attack.js";
import { poisonedStatutProbabilitysAttack } from "../../../../../statut/factors-statuts-state/poisoned/export-to-calculate-damages-attacks/poisoned-statut-probabilitys-attack.js";

export function applyStatutsChangeFactors(
  firstAttacker,
  firstAttackerAttack,
  secondAttacker
) {
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
}
