import { sabeletteStats } from '../models/sabelette.model.js';

  export const sabeletteCard = document.createElement('div');
    sabeletteCard.classList.add('card-main');
    sabeletteCard.id = 'card-sabelette';
  
    const sabeletteCardHead = document.createElement('div');
    sabeletteCardHead.classList.add('card-head');
    
    const sabeletteCardTitle = document.createElement('span');
    sabeletteCardTitle.classList.add('title');
    sabeletteCardTitle.textContent = sabeletteStats.name;
    sabeletteCardHead.appendChild(sabeletteCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'sabeletteHealth';
    hp.textContent = `${sabeletteStats.stats.hp}`;
    sabeletteCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const sabeletteCardType = document.createElement('span');
    sabeletteCardType.classList.add('type-logo');
    sabeletteCardType.id = 'sabelette-type';
    sabeletteCardType.style.background = `url( ${sabeletteStats.logo})`; 
    sabeletteCardType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    sabeletteCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(sabeletteCardType)
    
    sabeletteCard.appendChild(sabeletteCardHead);
    
    const sabeletteCardImage = document.createElement('div');
    sabeletteCardImage.classList.add('image');
    sabeletteCardImage.style.backgroundImage = `url(${sabeletteStats.image})`; 
    
    sabeletteCardImage.style.backgroundSize = 'cover';
    
    sabeletteCard.appendChild(sabeletteCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    sabeletteCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${sabeletteStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const sabeletteFirstAttackNameAndResume = document.createElement('div');
    sabeletteFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    sabeletteFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${sabeletteStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${sabeletteStats.firstAttack.strength}`;
    
    const sabeletteFirstAttackResume = document.createElement('div');
    sabeletteFirstAttackResume.classList.add('attack-resume');
    sabeletteFirstAttackResume.textContent = ` ${sabeletteStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const sabeletteSecondAttackAndResume = document.createElement('div');
    sabeletteSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${sabeletteStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${sabeletteStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${sabeletteStats.secondAttack.strength}`;
    
    const sabeletteSecondAttackResume = document.createElement('div');
    sabeletteSecondAttackResume.classList.add('attack-resume');
    
    sabeletteSecondAttackResume.textContent = ` ${sabeletteStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(sabeletteFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    sabeletteFirstAttackNameAndResume.appendChild(sabeletteFirstAttackResume);
    
  
    attacksContainer.appendChild(sabeletteSecondAttackAndResume);
   
    sabeletteSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    sabeletteSecondAttackAndResume.appendChild(sabeletteSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    sabeletteCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${sabeletteStats.weakness.name}`;
   
    const weaknessfirstType = document.createElement('span');
    weaknessfirstType.classList.add('type-logo');
  
    weaknessfirstType.style.background = `url( ${sabeletteStats.weakness.firstLogo}
      )`; 
    
    weaknessfirstType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessfirstType);
    
    
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${sabeletteStats.resistance.name}`;
    
    const resistanceType = document.createElement('span');
    resistanceType.classList.add('type-logo');
  
    resistanceType.style.background = `url(${sabeletteStats.resistance.firstLogo})`; 
    
    resistanceType.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceType);
    
    weaknessResistanceContainer.appendChild(resistance);
 
    resistance.appendChild(resistanceType);
    