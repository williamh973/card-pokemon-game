import { evoliStats } from '../models/evoli.model.js';

export const evoliCard = document.createElement('div');
    evoliCard.classList.add('card-main');
    evoliCard.id = 'card-evoli';
  
    const evoliCardHead = document.createElement('div');
    evoliCardHead.classList.add('card-head');
    
    const evoliCardTitle = document.createElement('span');
    evoliCardTitle.classList.add('title');
    evoliCardTitle.textContent = evoliStats.name;
    evoliCardHead.appendChild(evoliCardTitle);
     
export const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'evoliHealth';
    hp.textContent = `${evoliStats.stats.hp}`;
    evoliCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const evoliCardType = document.createElement('span');
    evoliCardType.classList.add('type-logo');
    evoliCardType.id = 'evoli-type';
    evoliCardType.style.background = `url( ${evoliStats.typeLogo})`; 
    evoliCardType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    evoliCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(evoliCardType)
    
    evoliCard.appendChild(evoliCardHead);
    
    const evoliCardImage = document.createElement('div');
    evoliCardImage.classList.add('image');
    evoliCardImage.style.backgroundImage = `url(${evoliStats.image})`; 
    
    evoliCardImage.style.backgroundSize = 'cover';
    
    evoliCard.appendChild(evoliCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    evoliCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${evoliStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const evoliFirstAttackNameAndResume = document.createElement('div');
    evoliFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    evoliFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${evoliStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${evoliStats.firstAttack.strength}`;
    
    const evoliFirstAttackResume = document.createElement('div');
    evoliFirstAttackResume.classList.add('attack-resume');
    evoliFirstAttackResume.textContent = ` ${evoliStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const evoliSecondAttackAndResume = document.createElement('div');
    evoliSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${evoliStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${evoliStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${evoliStats.secondAttack.strength}`;
    
    const evoliSecondAttackResume = document.createElement('div');
    evoliSecondAttackResume.classList.add('attack-resume');
    
    evoliSecondAttackResume.textContent = ` ${evoliStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(evoliFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    evoliFirstAttackNameAndResume.appendChild(evoliFirstAttackResume);
    
  
    attacksContainer.appendChild(evoliSecondAttackAndResume);
   
    evoliSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    evoliSecondAttackAndResume.appendChild(evoliSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    evoliCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${evoliStats.weakness.name}`;
   
    const weaknessType = document.createElement('span');
    weaknessType.classList.add('type-logo');
  
    weaknessType.style.background = `url( ${evoliStats.weakness.logo})`; 
    
    weaknessType.style.backgroundSize = 'cover';
    weakness.appendChild(weaknessType);
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${evoliStats.resistance.name}`;
    
    const resistanceType = document.createElement('span');
    resistanceType.classList.add('type-logo');
  
    resistanceType.style.background = `url( ${evoliStats.resistance.logo})`; 
    
    resistanceType.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceType);
    
    weaknessResistanceContainer.appendChild(resistance);
 
    resistance.appendChild(resistanceType);
     