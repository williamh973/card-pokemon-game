import { 
    burningStatut10PercentProbabililityForSecondAttack,
    burningStatut30PercentProbabililityForSecondAttack,
    burningStatut50PercentProbabililityForSecondAttack,
    burningStatut100PercentProbabililityForSecondAttack
  } from "../burning-statut-probability-for-second-attack.js";
  


export const burningStatutProbabilitys =
function burningStatutProbabilitys(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {


    burningStatut10PercentProbabililityForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType,
        secondAttackerType
      );

      burningStatut30PercentProbabililityForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType,
        secondAttackerType
      );


      burningStatut50PercentProbabililityForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType,
        secondAttackerType
      );


      burningStatut100PercentProbabililityForSecondAttack(
        firstAttacker,
        secondAttacker,
        isSecondAttackActive,
        secondAttackType,
        secondAttackerType
      );
      
};