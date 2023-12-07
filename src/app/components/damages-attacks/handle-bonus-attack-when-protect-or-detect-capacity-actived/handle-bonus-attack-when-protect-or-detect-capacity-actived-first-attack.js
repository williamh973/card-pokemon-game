import { 
  openDialogueWhenPokemonMakesFirstAttack,
  openDialogueWhenPokemonMissAttack
} from '../../dialogue-fight.js';

import { 
  speedIncrease5pFactorForFirstAttack 
} from '../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js';

import { 
  speedIncrease10pFactorForFirstAttack 
} from '../../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js';

import { 
  defenseIncrease5pFactorForFirstAttack 
} from '../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-5P-factors-attacks/defense-increase-5P-factor-first-attack.js';

import { 
  defenseIncrease10pFactorForFirstAttack 
} from '../../factors-attacks/increase-factors-attacks/defense-increase-factors-attacks/defense-increase-10P-factors-attacks/defense-increase-10P-factor-first-attack.js';

import { 
  hpIncrease5pFactorForFirstAttack 
} from '../../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js';

import { 
  protectFactorForFirstAttack
} from '../../factors-attacks/protect-factors-attacks/protect-factors-first-attack.js';

import { 
  deseableProtectCapacity 
} from "../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";


export function handleBonusAttackWhenProtectOrDetectCapacityActived(
    firstAttacker,  
    isFirstAttackActive,
    firstAttackPrecision
    ) {
     openDialogueWhenPokemonMakesFirstAttack(firstAttacker);
       
     const randomNumber = Math.floor(Math.random() * 100) + 1;
     
       if (randomNumber <= firstAttackPrecision) {
     
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
     
         protectFactorForFirstAttack(
           firstAttacker,
           isFirstAttackActive
           );
             
       }  else {
            openDialogueWhenPokemonMissAttack(firstAttacker);
            deseableProtectCapacity();
            console.log("isProtectOrDetectCapacityActived", isProtectOrDetectCapacityActived);
            return 0;
        }
  };