import { 
    asleepStatut30PercentProbabililityForFirstAttack,
    asleepStatut100PercentProbabililityForFirstAttack
  } from "../../asleep/asleep-statut-probability-for-first-attack.js";



  export const asleepStatutProbabilitysForFirstAttack =
  function asleepStatutProbabilitysForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType
  ) {  

    asleepStatut30PercentProbabililityForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType
      );

      asleepStatut100PercentProbabililityForFirstAttack(
        firstAttacker,
        secondAttacker,
        isFirstAttackActive,
        firstAttackType
      );

  };