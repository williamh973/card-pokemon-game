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

import { criticalHit } from '../factors-attacks/critical-hit-factor.js';

import { criticalHitIncreaseByFocusEnergyForFirstAttack } from '../factors-attacks/increase-factors-attacks/critical-hit-increase-factor-attacks/critical-hit-increase-focus-energy-attacks.js';

  

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
  
  openDialogueWhenPokemonMakesFirstAttack(firstAttacker);

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    if (
      randomNumber <= firstAttackPrecision && 
      isFirstAttackActive
      ) {

      let degats = (
        (2 * firstAttacker.stats.attack / secondAttacker.stats.defense) * 
        firstAttackStrength * 
        (firstAttackerSpecialAtt / secondAttackerSpecialDef)
      ) / 50;


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

      criticalHitIncreaseByFocusEnergyForFirstAttack(
        firstAttacker,
        isFirstAttackActive
        );

      console.log(firstAttacker.name, "utilise", firstAttacker.firstAttack.name, " : " , degats);
      return Math.round(degats);

    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }

  };