import { isCriticalHitBoostedByFocusEnergy } from './increase-factors-attacks/critical-hit-increase-factor-attacks/critical-hit-increase-focus-energy-attacks.js';
import { openDialogueWhenPokemonMakesCriticalHit } from '../dialogue-fight.js';



function roundToNearestEven(number) {
  return Math.round(number / 2) * 2;
};


function increaseCriticalHitProbabilityWhenFocusEnergyUsed(
  firstAttacker, 
  isCriticalHitBoostedByFocusEnergy, 
  randomFactor
  ) {
  if (
    isCriticalHitBoostedByFocusEnergy && 
    firstAttacker.name === 'Scarabrute'
    ) {
      randomFactor = Math.floor(Math.random() * 128);
    }
};





export let criticalHitFactor;

export const criticalHit = 
function criticalHit(firstAttacker) {
  
  let speedValueRoundToNearestEven = roundToNearestEven(firstAttacker.stats.speed);  
  let speedValueRoundToNearestEvenDividedByTwo = speedValueRoundToNearestEven / 2;
  let newSpeedValueForFactorMultiplicator = speedValueRoundToNearestEvenDividedByTwo;

  let randomFactor = Math.floor(Math.random() * 256);
  
  increaseCriticalHitProbabilityWhenFocusEnergyUsed(
    firstAttacker, 
    isCriticalHitBoostedByFocusEnergy, 
    randomFactor
    );

  if (randomFactor < newSpeedValueForFactorMultiplicator) {
      openDialogueWhenPokemonMakesCriticalHit();

      criticalHitFactor = (
        (2 * firstAttacker.level + 5) / (firstAttacker.level + 5)
        );
        
        return criticalHitFactor;
  } else {
      return 1;
  }

};

