import { roucoolStats } from '../models/roucool.model.js';

    export  const roucoolCard = document.createElement('div');
    roucoolCard.classList.add('card-main');
    roucoolCard.id = 'card-roucool';
  
    const roucoolCardHead = document.createElement('div');
    roucoolCardHead.classList.add('card-head');
    
    const roucoolCardTitle = document.createElement('span');
    roucoolCardTitle.classList.add('title');
    roucoolCardTitle.textContent = roucoolStats.name;
    roucoolCardHead.appendChild(roucoolCardTitle);
    
    export   const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'roucoolHealth';
    hp.textContent = `${roucoolStats.stats.hp}`;
    roucoolCardHead.appendChild(hp);
    
    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;

    const roucoolCardType = document.createElement('span');
    roucoolCardType.classList.add('type-logo');
    roucoolCardType.id = 'roucool-type';
    roucoolCardType.style.background = `url( ${roucoolStats.typeLogo})`; 
    roucoolCardType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    roucoolCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(roucoolCardType)
    
    roucoolCard.appendChild(roucoolCardHead);
    
    const roucoolCardImage = document.createElement('div');
    roucoolCardImage.classList.add('image');
    roucoolCardImage.style.backgroundImage = `url(${roucoolStats.image})`; 
    
    roucoolCardImage.style.backgroundSize = 'cover';
    
    roucoolCard.appendChild(roucoolCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    roucoolCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${roucoolStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const roucoolFirstAttackNameAndResume = document.createElement('div');
    roucoolFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    roucoolFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${roucoolStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${roucoolStats.firstAttack.strength}`;
    
    const roucoolFirstAttackResume = document.createElement('div');
    roucoolFirstAttackResume.classList.add('attack-resume');
    roucoolFirstAttackResume.textContent = ` ${roucoolStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const roucoolSecondAttackAndResume = document.createElement('div');
    roucoolSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${roucoolStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${roucoolStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${roucoolStats.secondAttack.strength}`;
    
    const roucoolSecondAttackResume = document.createElement('div');
    roucoolSecondAttackResume.classList.add('attack-resume');
    
    roucoolSecondAttackResume.textContent = ` ${roucoolStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(roucoolFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    roucoolFirstAttackNameAndResume.appendChild(roucoolFirstAttackResume);
    
  
    attacksContainer.appendChild(roucoolSecondAttackAndResume);
   
    roucoolSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    roucoolSecondAttackAndResume.appendChild(roucoolSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    roucoolCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${roucoolStats.weakness.name}`;
   
    const weaknessType = document.createElement('span');
    weaknessType.classList.add('type-logo');
  
    weaknessType.style.background = `url( ${roucoolStats.weakness.logo})`; 
    
    weaknessType.style.backgroundSize = 'cover';
    weakness.appendChild(weaknessType);
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${roucoolStats.resistance.name}`;
    
    const resistanceType = document.createElement('span');
    resistanceType.classList.add('type-logo');
  
    resistanceType.style.background = `url( ${roucoolStats.resistance.logo})`; 
    
    resistanceType.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceType);
    
    weaknessResistanceContainer.appendChild(resistance);
 
    resistance.appendChild(resistanceType);
    