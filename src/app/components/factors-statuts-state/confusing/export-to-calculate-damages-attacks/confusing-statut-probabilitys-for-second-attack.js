import { 
    confusingStatut10PercentProbabililityForSecondAttack,
    confusingStatut20PercentProbabililityForSecondAttack,
    confusingStatut100PercentProbabililityForSecondAttack
  } from "../../confusing/confusing-statut-probability-for-second-attack.js";

  
  export const confusingStatutProbabilitysForSecondAttack =
  function confusingutProbabilitysForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType
  ) {

      confusingStatut10PercentProbabililityForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType
      );

      confusingStatut20PercentProbabililityForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType
      );

      confusingStatut100PercentProbabililityForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType
      );

  };

