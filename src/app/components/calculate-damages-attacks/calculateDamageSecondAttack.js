import { weaknessFactorForSecondAttack 
} from '../factors-attacks/weakness-factors-attacks/weakness-factor-second-attack.js';

import { resistanceFactorForSecondAttack 
} from '../factors-attacks/resistance-factors-attacks/resistance-factor-second-attack.js';

import { 
    ineffectiveFactorForSecondAttack 
} from '../factors-attacks/ineffective-factor-attack.js';

import { 
    speedIncrease5pFactorForSecondAttack  
} from '../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js';

import { 
    speedIncrease10pFactorForSecondAttack  
} from '../factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js';

import { 
    defenseIncrease5pFactorForSecondAttack  
} from '../factors-attacks/increase-factors-attacks/defense-increase-factor-attacks/defense-increase-5P-factor-attacks.js';

import { 
    defenseIncrease10pFactorForSecondAttack  
} from '../factors-attacks/increase-factors-attacks/defense-increase-factor-attacks/defense-increase-10P-factor-attacks.js';

import { 
    hpIncrease5pFactorForSecondAttack 
} from '../factors-attacks/increase-factors-attacks/hp-increase-factor-attacks/hp-increase-5P-factor-attacks.js';

import { 
    openDialogueWhenPokemonMakesSecondAttack,
    openDialogueWhenPokemonMissAttack
} from '../dialogue-fight.js';

import { getCriticalHit } from '../factors-attacks/critical-hit-factor.js'

import { criticalHitIncreaseByFocusEnergyForSecondAttack } from '../factors-attacks/increase-factors-attacks/critical-hit-increase-factor-attacks/critical-hit-increase-focus-energy-attacks.js';



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
    
  openDialogueWhenPokemonMakesSecondAttack(firstAttacker);
  
  const randomPrecision = Math.floor(Math.random() * 100) + 1;
  
  if (randomPrecision <= secondAttackPrecision) {
    
      let degats = (
        (2 * firstAttacker.stats.attack / secondAttacker.stats.defense) * 
        secondAttackStrength * 
        (firstAttackerSpecialAtt / secondAttackerSpecialDef)
      ) / 50 + 2;

      getCriticalHit(firstAttacker, degats);

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

      criticalHitIncreaseByFocusEnergyForSecondAttack(
        firstAttacker,
        isSecondAttackActive,
        degats
        );

      return Math.round(degats);

    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  };