
import { 
    firstAttackerStatutStateVariableList
  } from "../../handle-statut-state-in-fight/first-attacker-statut-state-alteration.js";
  
  import { 
    secondAttackerStatutStateVariableList
  } from "../../handle-statut-state-in-fight/second-attacker-statut-state-alteration.js";
  


export let isProtectOrDetectCapacityActived = false;


export const isProtectOrDetectCapacityActivedByProtectOrDetect =
 function isProtectOrDetectCapacityActivedByProtectOrDetect(
    firstAttacker, 
    secondAttacker
    ) {
    isProtectOrDetectCapacityActived = true;

    if (
        (
            (
                firstAttacker.primaryStatut !== 'normal' && firstAttackerStatutStateVariableList.isFirstAttackerFrozen
                ) 
                ||
                (
                    firstAttacker.primaryStatut !== 'normal' && firstAttackerStatutStateVariableList.isFirstAttackerParalyzed
                    )
                    ) 
            ||
            (
                (
                    secondAttacker.primaryStatut !== 'normal' && secondAttackerStatutStateVariableList.isSecondAttackerFrozen
                    ) 
                    ||
                    (
                        secondAttacker.primaryStatut !== 'normal' && secondAttackerStatutStateVariableList.isSecondAttackerParalyzed
                        )
                        ) 

    ) {
        setTimeout(() => {
            isProtectOrDetectCapacityActived = false;
        }, 9000);
    } else {
        setTimeout(() => {
            isProtectOrDetectCapacityActived = false;
        }, 5000);
    };

};