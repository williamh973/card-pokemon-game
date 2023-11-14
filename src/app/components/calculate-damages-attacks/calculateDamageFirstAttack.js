import { 
  weaknessFactorForFirstAttack 
} from '../factors-attacks/weakness-factors-attacks/weakness-factor-first-attack.js';

import { 
  resistanceFactorForFirstAttack 
} from '../factors-attacks/resistance-factors-attacks/resistance-factor-first-attack.js';

import { 
  ineffectiveFactorForFirstAttack 
} from '../factors-attacks/ineffective-factor-attack.js';

import { 
  speedIncrease5pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js';

import { 
  speedIncrease10pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js';

import { 
  defenseIncrease5pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/defense-increase-factor-attacks/defense-increase-5P-factor-attacks.js';

import { 
  defenseIncrease10pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/defense-increase-factor-attacks/defense-increase-10P-factor-attacks.js';

import { 
  hpIncrease5pFactorForFirstAttack 
} from '../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js';

import { 
    openDialogueWhenPokemonMakesFirstAttack,
    openDialogueWhenPokemonMissAttack
} from '../dialogue-fight.js';

  
export const calculateDamageFirstAttack = 
function calculateDamageFirstAttack(
    firstAttacker, 
    secondAttacker, 
    firstAttackStrength, 
    firstAttackerSpecialAtt, 
    secondAttackerSpecialDef, 
    firstAttackPrecision, 
    firstAttackType, 
    secondAttackerType
    ) {
  
  openDialogueWhenPokemonMakesFirstAttack(firstAttacker);

  const randomPrecision = Math.floor(Math.random() * 100) + 1;
  
    if (randomPrecision <= firstAttackPrecision) {

      let degats = (
        (2 * firstAttacker.stats.attack / secondAttacker.stats.defense) * 
        firstAttackStrength * 
        (firstAttackerSpecialAtt / secondAttackerSpecialDef)
      ) / 50 + 2;

      
      let randomFactor = Math.random() * (1.00 - 0.85) + 0.85;
        degats *= randomFactor;

      
      let getWeaknessFactorList = weaknessFactorForFirstAttack(
        firstAttackType, 
        secondAttackerType
      );
      degats *= getWeaknessFactorList;
        
      let getResistanceFactorList = resistanceFactorForFirstAttack(
        firstAttackType, 
        secondAttackerType
      );
      degats /= getResistanceFactorList;
          
      let getIneffectiveFactorList = ineffectiveFactorForFirstAttack(
        firstAttackType, 
        secondAttackerType
      );
      degats *= getIneffectiveFactorList;

      speedIncrease5pFactorForFirstAttack(firstAttacker);
      speedIncrease10pFactorForFirstAttack(firstAttacker);

      defenseIncrease5pFactorForFirstAttack(firstAttacker);
      defenseIncrease10pFactorForFirstAttack(firstAttacker);

      hpIncrease5pFactorForFirstAttack(firstAttacker);

      return Math.round(degats);

    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }

  };