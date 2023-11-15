import { openDialogueWhenPokemonMakesCriticalHit } from '../dialogue-fight.js';
import { isCriticalHitBoostedByFocusEnergy } from './increase-factors-attacks/critical-hit-increase-factor-attacks/critical-hit-increase-focus-energy-attacks.js';


export const getCriticalHit = 
function getCriticalHit(firstAttacker, degats) {
  
  let speedValueRoundToNearestEven = roundToNearestEven(firstAttacker.stats.speed);  
  let speedValueRoundToNearestEvenDividedByTwo = speedValueRoundToNearestEven / 2;
  
  let randomFactor = Math.floor(Math.random() * 256);
  
  wasFocusEnergyUsed(
    firstAttacker, 
    isCriticalHitBoostedByFocusEnergy, 
    randomFactor
    );

  if (randomFactor < speedValueRoundToNearestEvenDividedByTwo) {
      openDialogueWhenPokemonMakesCriticalHit();
     return criticalHitMultiplicatorFactor(firstAttacker, degats)
  } else {
      return degats;
  }

};



function roundToNearestEven(number) {
  return Math.round(number / 2) * 2;
}

function criticalHitMultiplicatorFactor(firstAttacker, degats) {
  let criticalHitFactor = (
      (2 * firstAttacker.level + 5) / (firstAttacker.level + 5)
      );
      degats *= criticalHitFactor;
      return degats;
}

function wasFocusEnergyUsed(
  firstAttacker, 
  isCriticalHitBoostedByFocusEnergy, 
  randomFactor
  ) {
  if (
    isCriticalHitBoostedByFocusEnergy && 
    firstAttacker.name === 'Scarabrute'
    ) {
      randomFactor = Math.floor(Math.random() * 128);
    };
}