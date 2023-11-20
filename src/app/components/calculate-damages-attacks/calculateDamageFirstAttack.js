import { 
  weaknessFactorForFirstAttack 
} from '../factors-attacks/weakness-factors-attacks/weakness-factor-first-attack.js';

import { 
  resistanceFactorForFirstAttack 
} from '../factors-attacks/resistance-factors-attacks/resistance-factor-first-attack.js';

import { 
  ineffectiveFactorForFirstAttack 
} from '../factors-attacks/ineffective-factors-attacks/ineffective-factors-first-attack.js';

import { 
  speedIncrease5pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js';

import { 
  speedIncrease10pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js';

import { 
  defenseIncrease5pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-first-attack.js';

import { 
  defenseIncrease10pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-first-attack.js';

import { 
  attackDecrease2pFactorForFirstAttack 
} from '../factors-attacks/decrease-factors-attacks/attack-decrease-factors/attack-decrease-2P-factors-attacks/attack-decrease-2P-factor-first-attack.js';


import { 
  hpIncrease5pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js';

import { 
    openDialogueWhenPokemonMakesFirstAttack,
    openDialogueWhenPokemonMissAttack,
    openDialogueWhenPokemonProtectingHimself,
    openDialogueWhenPokemonMissAttackAfterProtectApply
} from '../dialogue-fight.js';

import { 
  criticalHit
} from '../factors-attacks/critical-hit-factor/critical-hit-factor.js';

import { 
  criticalHitIncreaseByFocusEnergyForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-first-attack.js';

import { 
  oneHitKnockoutFactorForFirstAttack
} from '../factors-attacks/one-hit-factors-attacks/one-hit-knock-out-first-attack.js';

import { 
protectFactorForFirstAttack, 
isProtectOrDetectCapacityActived
} from '../factors-attacks/protect-factors-attacks/protect-factors-attack.js' 
  




export const calculateDamageFirstAttack = 
function calculateDamageFirstAttack(
    firstAttacker, 
    secondAttacker, 
    isFirstAttackActive,
    firstAttackStrength, 
    firstAttackerSpecialAtt, 
    secondAttackerSpecialDef, 
    firstAttackPrecision, 
    firstAttackType, 
    secondAttackerType
    ) {

      if (
        isFirstAttackActive && 
        !isProtectOrDetectCapacityActived
        ) {

        
       openDialogueWhenPokemonMakesFirstAttack(firstAttacker);

      const randomNumber = Math.floor(Math.random() * 100) + 1;

        if (randomNumber <= firstAttackPrecision) {
  
          let degats = (
            (2 * firstAttacker.stats.attack / secondAttacker.stats.defense) * 
            firstAttackStrength * 
            (firstAttackerSpecialAtt / secondAttackerSpecialDef)
          ) / 20;
    
    
          let getCriticalHit = criticalHit(firstAttacker);
          degats *= getCriticalHit;
    
          let randomFactor = Math.random() * (1.00 - 0.85) + 0.85;
          degats *= randomFactor;
    
          let getWeaknessFactorList = weaknessFactorForFirstAttack(
            firstAttackType, 
            secondAttackerType,
            isFirstAttackActive
          );
          degats *= getWeaknessFactorList;
            
          let getResistanceFactorList = resistanceFactorForFirstAttack(
            firstAttackType, 
            secondAttackerType,
            isFirstAttackActive
          );
          degats /= getResistanceFactorList;
              
          let getIneffectiveFactorList = ineffectiveFactorForFirstAttack(
            firstAttackType, 
            secondAttackerType,
            isFirstAttackActive
          );
          degats *= getIneffectiveFactorList;
    
          let getAlwaysKnockOutAttacks = oneHitKnockoutFactorForFirstAttack(
            isFirstAttackActive,
            secondAttackerType,
            firstAttacker,
            secondAttacker
          );
          degats *= getAlwaysKnockOutAttacks;
    
          speedIncrease5pFactorForFirstAttack(
            firstAttacker, 
            isFirstAttackActive
            );
    
          speedIncrease10pFactorForFirstAttack(
            firstAttacker, 
            isFirstAttackActive
            );
    
          defenseIncrease5pFactorForFirstAttack(
            firstAttacker, 
            isFirstAttackActive
            );
    
          defenseIncrease10pFactorForFirstAttack(
            firstAttacker, 
            isFirstAttackActive
            );
    
          hpIncrease5pFactorForFirstAttack(
            firstAttacker, 
            isFirstAttackActive
            );
  
          attackDecrease2pFactorForFirstAttack(
            firstAttacker, 
            secondAttacker,
            isFirstAttackActive
            );
    
          criticalHitIncreaseByFocusEnergyForFirstAttack(
            firstAttacker,
            isFirstAttackActive
            );
            

            protectFactorForFirstAttack(
              firstAttacker,
              isFirstAttackActive
              );
              
              if (
                degats > 0 && 
              degats < 0.5
              ) {
                return degats = 1;
              };
              
              console.log(firstAttacker.name, "utilise", firstAttacker.firstAttack.name);
              return Math.round(degats);
            } else {
            openDialogueWhenPokemonMissAttack(firstAttacker);
            return 0;
        }

      } else if (isFirstAttackActive && isProtectOrDetectCapacityActived) {
      openDialogueWhenPokemonMakesFirstAttack(firstAttacker);
      openDialogueWhenPokemonProtectingHimself(secondAttacker);
      openDialogueWhenPokemonMissAttackAfterProtectApply(firstAttacker);

      return 0;
    }
};








            // console.log("randomNumber", randomNumber);
            // console.log(firstAttacker.name, "présision de", firstAttacker.firstAttack.name, firstAttackPrecision);
            // console.log(firstAttacker.name, "utilise", firstAttacker.firstAttack.name, degats);
      