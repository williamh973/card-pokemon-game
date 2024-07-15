import {
  burningStatut10PercentProbabililityAttack,
  burningStatut30PercentProbabililityAttack,
  burningStatut50PercentProbabililityAttack,
  burningStatut100PercentProbabililityAttack,
} from "../burning-statut-probability-attack.js";

export function burningStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  burningStatut10PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  burningStatut30PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  burningStatut50PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  burningStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
