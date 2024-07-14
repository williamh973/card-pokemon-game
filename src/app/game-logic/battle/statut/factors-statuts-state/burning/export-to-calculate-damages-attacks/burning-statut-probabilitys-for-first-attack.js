import {
  burningStatut10PercentProbabililityForFirstAttack,
  burningStatut30PercentProbabililityForFirstAttack,
  burningStatut50PercentProbabililityForFirstAttack,
  burningStatut100PercentProbabililityForFirstAttack,
} from "../burning-statut-probability-for-first-attack.js";

export function burningStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  burningStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  burningStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  burningStatut50PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  burningStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );
}
