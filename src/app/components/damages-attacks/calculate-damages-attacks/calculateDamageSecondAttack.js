import { 
  weaknessFactorForSecondAttack 
} from '../../factors-attacks/weakness-factors-attacks/weakness-factor-second-attack.js';

import { 
  resistanceFactorForSecondAttack 
} from '../../factors-attacks/resistance-factors-attacks/resistance-factor-second-attack.js';

import { 
  ineffectiveFactorForSecondAttack 
} from '../../factors-attacks/ineffective-factors-attacks/ineffective-factors-second-attack.js';

import { 
    speedIncrease5pFactorForSecondAttack  
} from '../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js';

import { 
    speedIncrease10pFactorForSecondAttack  
} from '../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js';

import { 
    defenseIncrease5pFactorForSecondAttack  
} from '../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-second-attack.js';
import { 
    defenseIncrease10pFactorForSecondAttack  
} from '../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-second-attack.js';

import { 
  attackDecrease2pFactorForSecondAttack 
} from '../../factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factors-attacks/attack-decrease-2P-factor-second-attack.js';


import { 
    hpIncrease5pFactorForSecondAttack 
} from '../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js';

import { 
    openDialogueWhenPokemonMakesSecondAttack,
    openDialogueWhenPokemonMissAttack,
    openDialogueWhenPokemonProtectingHimself
} from '../../dialogue-fight.js';

import { 
  criticalHit 
} from '../../factors-attacks/critical-hit-factor/critical-hit-factor.js';

import { 
  criticalHitIncreaseByFocusEnergyForSecondAttack 
} from '../../factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-second-attack.js';

import { 
  oneHitKnockoutFactorForSecondAttack
} from '../../factors-attacks/one-hit-factors-attacks/one-hit-knock-out-second-attack.js';

import { 
  protectFactorForSecondAttack, 
  isProtectOrDetectCapacityActived
  } from '../../factors-attacks/protect-factors-attacks/protect-factors-attack.js' 
    
  import {
    handleBonusAttackWhenProtectOrDetectCapacityActived,
  } from '../handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-second-attack.js'  

  import { 
    burningStatutProbabilitysForSecondAttack
  } from "../../factors-statuts-state/decrease-hp-probability/burning/export-to-calculate-damages-attacks/burning-statut-probabilitys-for-second-attack.js";
  
  import { 
    poisonedStatutProbabilitysForSecondAttack
  } from '../../factors-statuts-state/decrease-hp-probability/poisoned/export-to-calculate-damages-attacks/poisoned-statut-probabilitys-for-second-attack.js'

  import { 
    paralyzedStatutProbabilitysForSecondAttack
  } from "../../factors-statuts-state/paralyzed/export-to-calculate-damages-attacks/paralyzed-statut-probabilitys-for-second-attack.js";
  


export const calculateDamageSecondAttack = 
function calculateDamageSecondAttack(
    firstAttacker, 
    secondAttacker, 
    isSecondAttackActive,
    secondAttackStrength, 
    firstAttackerSpecialAtt, 
    secondAttackerSpecialDef, 
    secondAttackPrecision, 
    secondAttackType, 
    secondAttackerType
  ) {

    if (
      isSecondAttackActive && 
      !isProtectOrDetectCapacityActived && 
      (
        secondAttackType === 'bonus' || 
        secondAttackType !== 'bonus'
        )
      ) {

            openDialogueWhenPokemonMakesSecondAttack(firstAttacker);
           
            const randomNumber = Math.floor(Math.random() * 100) + 1;
     
             if (randomNumber <= secondAttackPrecision) {
             
               let degats = (
                 (2 * firstAttacker.stats.attack / secondAttacker.stats.defense) * 
                 secondAttackStrength * 
                 (firstAttackerSpecialAtt / secondAttackerSpecialDef)
                 ) / 20;
       
       
               let getCriticalHit = criticalHit(firstAttacker);
               degats *= getCriticalHit;
         
               let randomFactor = Math.random() * (1.00 - 0.85) + 0.85;
               degats *= randomFactor;
         
               let getWeaknessFactorList = weaknessFactorForSecondAttack(
                 secondAttackType, 
                 secondAttackerType, 
                 isSecondAttackActive
               );
               degats *= getWeaknessFactorList;
         
               let getResistanceFactorList = resistanceFactorForSecondAttack(
                 secondAttackType, 
                 secondAttackerType, 
                 isSecondAttackActive
               );
               degats /= getResistanceFactorList;
         
               let getIneffectiveFactorList = ineffectiveFactorForSecondAttack(
                 secondAttackType, 
                 secondAttackerType, 
                 isSecondAttackActive
               );
               degats *= getIneffectiveFactorList;
         
         
               let getAlwaysKnockOutAttacks = oneHitKnockoutFactorForSecondAttack(
                 isSecondAttackActive,
                 secondAttackerType,
                 firstAttacker,
                 secondAttacker
               );
               degats *= getAlwaysKnockOutAttacks;
         
         
               speedIncrease5pFactorForSecondAttack(
                 firstAttacker, 
                 isSecondAttackActive
                 );
         
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
         
               hpIncrease5pFactorForSecondAttack(
                 firstAttacker, 
                 isSecondAttackActive
                 );
       
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
                 isSecondAttackActive
                 );
     
                 burningStatutProbabilitysForSecondAttack(
                   firstAttacker,
                   secondAttacker,
                   isSecondAttackActive,
                   secondAttackType,
                   secondAttackerType
                 );
     
                 poisonedStatutProbabilitysForSecondAttack(
                   firstAttacker,
                   secondAttacker,
                   isSecondAttackActive,
                   secondAttackType,
                   secondAttackerType
                 );
     
                 paralyzedStatutProbabilitysForSecondAttack(
                   firstAttacker,
                   secondAttacker,
                   isSecondAttackActive,
                   secondAttackType,
                   secondAttackerType
                 );
     
     
                   if (degats > 0 && degats < 0.5) {
                     return degats = 1;
                   };
     
                   console.log(firstAttacker.name, "utilise", firstAttacker.secondAttack.name);
                   return Math.round(degats);
          
             } else {
               openDialogueWhenPokemonMissAttack(firstAttacker);
               return 0;
             };

        } else if (
        isSecondAttackActive && 
        isProtectOrDetectCapacityActived && 
        secondAttackType !== 'bonus'
         ) {
            openDialogueWhenPokemonMakesSecondAttack(firstAttacker);
            openDialogueWhenPokemonProtectingHimself(secondAttacker);
            return 0;

        } else if (
          isSecondAttackActive && 
          isProtectOrDetectCapacityActived && 
          secondAttackType === 'bonus'
        ) {
          
          handleBonusAttackWhenProtectOrDetectCapacityActived(
            firstAttacker,  
            isSecondAttackActive, 
            secondAttackPrecision
            );
          return 0;
      } 
};

