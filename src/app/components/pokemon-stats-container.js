import { 
    domElementsFromSelectors 
  } from "./dom-elements.js";


  domElementsFromSelectors.pokemonStatsContainer = 
  document.getElementById('container-stats');
  domElementsFromSelectors.pokemonStatsContainer.style.display = 'none';

 export const displayStatsPokemonsContainer = 
 function displayStatsPokemonsContainer(firstAttacker, secondAttacker) {

    domElementsFromSelectors.pokemonStatsContainer.style.display = 'block';
   
   const firstAttackerNameCont = 
   document.getElementById('first-attacker-name');
   firstAttackerNameCont.textContent = ` ${firstAttacker.name} `;

   const firstAttackerStatut = 
   document.getElementById('first-attacker-primaryStatut');
   firstAttackerStatut.textContent = ` ${firstAttacker.primaryStatut} `;

   const firstAttackerSecondaryStatut = 
   document.getElementById('first-attacker-secondaryStatut');
   firstAttackerSecondaryStatut.textContent = ` ${firstAttacker.secondaryStatut} `;

   const firstAttackerAttack = 
   document.getElementById('first-attacker-attack');
   firstAttackerAttack.textContent = `Attack  :  ${firstAttacker.stats.attack} `;
   
   const firstAttackerDefense = 
   document.getElementById('first-attacker-defense');
   firstAttackerDefense.textContent = `Defense  :  ${firstAttacker.stats.defense} `;

   const firstAttackerSpecAtt = 
   document.getElementById('first-attacker-specialAtt');
   firstAttackerSpecAtt.textContent = `SpecialAtt  :  ${firstAttacker.stats.specialAtt} `;

   const firstAttackerSpecDef = 
   document.getElementById('first-attacker-specialDef');
   firstAttackerSpecDef.textContent = `SpecialDef  :  ${firstAttacker.stats.specialDef} `;

   const firstAttackerSpeed = 
   document.getElementById('first-attacker-speed');
   firstAttackerSpeed.textContent = `Speed  :  ${firstAttacker.stats.speed} `;
   
   const firstAttackerHp = 
   document.getElementById('first-attacker-hp');
   firstAttackerHp.textContent = `Hp  :  ${firstAttacker.stats.hp} `;
   


   const secondAttackerNameCont = 
   document.getElementById('second-attacker-name');
   secondAttackerNameCont.textContent = ` ${secondAttacker.name} `;

   const secondAttackerStatut = 
   document.getElementById('second-attacker-primaryStatut');
   secondAttackerStatut.textContent = ` ${secondAttacker.primaryStatut} `;

   const secondAttackerSecondaryStatut = 
   document.getElementById('second-attacker-secondaryStatut');
   secondAttackerSecondaryStatut.textContent = ` ${secondAttacker.secondaryStatut} `;

   const secondAttackerAttack = 
   document.getElementById('second-attacker-attack');
   secondAttackerAttack.textContent = `Attack  :  ${secondAttacker.stats.attack} `;
   
   const secondAttackerDefense = 
   document.getElementById('second-attacker-defense');
   secondAttackerDefense.textContent = `Defense  :  ${secondAttacker.stats.defense} `;

   const secondAttackerSpecAtt = 
   document.getElementById('second-attacker-specialAtt');
   secondAttackerSpecAtt.textContent = `SpecialAtt  :  ${secondAttacker.stats.specialAtt} `;

   const secondAttackerSpecDef = 
   document.getElementById('second-attacker-specialDef');
   secondAttackerSpecDef.textContent = `SpecialDef  :  ${secondAttacker.stats.specialDef} `;

   const secondAttackerSpeed = 
   document.getElementById('second-attacker-speed');
   secondAttackerSpeed.textContent = `Speed  :  ${secondAttacker.stats.speed} `;
   

   const secondAttackerHp = 
   document.getElementById('second-attacker-hp');
   secondAttackerHp.textContent = `Hp  :  ${secondAttacker.stats.hp} `;
};