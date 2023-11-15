import { scarabruteStats } from '../models/scarabrute.model.js';

  export const scarabruteCard = document.createElement('div');
    scarabruteCard.classList.add('card-main');
    scarabruteCard.id = 'card-scarabrute';
  
    const scarabruteCardHead = document.createElement('div');
    scarabruteCardHead.classList.add('card-head');
    
    const scarabruteCardTitle = document.createElement('span');
    scarabruteCardTitle.classList.add('title');
    scarabruteCardTitle.textContent = scarabruteStats.name;
    scarabruteCardHead.appendChild(scarabruteCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'scarabruteHealth';
    hp.textContent = `${scarabruteStats.stats.hp}`;
    scarabruteCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const scarabruteCardType = document.createElement('span');
    scarabruteCardType.classList.add('type-logo');
    scarabruteCardType.id = 'scarabrute-type';
    scarabruteCardType.style.background = `url( ${scarabruteStats.logo})`; 
    scarabruteCardType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    scarabruteCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(scarabruteCardType)
    
    scarabruteCard.appendChild(scarabruteCardHead);
    
    const scarabruteCardImage = document.createElement('div');
    scarabruteCardImage.classList.add('image');
    scarabruteCardImage.style.backgroundImage = `url(${scarabruteStats.image})`; 
    
    scarabruteCardImage.style.backgroundSize = 'cover';
    
    scarabruteCard.appendChild(scarabruteCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    scarabruteCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${scarabruteStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const scarabruteFirstAttackNameAndResume = document.createElement('div');
    scarabruteFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    scarabruteFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${scarabruteStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${scarabruteStats.firstAttack.strength}`;
    
    const scarabruteFirstAttackResume = document.createElement('div');
    scarabruteFirstAttackResume.classList.add('attack-resume');
    scarabruteFirstAttackResume.textContent = ` ${scarabruteStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const scarabruteSecondAttackAndResume = document.createElement('div');
    scarabruteSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${scarabruteStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${scarabruteStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${scarabruteStats.secondAttack.strength}`;
    
    const scarabruteSecondAttackResume = document.createElement('div');
    scarabruteSecondAttackResume.classList.add('attack-resume');
    
    scarabruteSecondAttackResume.textContent = ` ${scarabruteStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(scarabruteFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    scarabruteFirstAttackNameAndResume.appendChild(scarabruteFirstAttackResume);
    
  
    attacksContainer.appendChild(scarabruteSecondAttackAndResume);
   
    scarabruteSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    scarabruteSecondAttackAndResume.appendChild(scarabruteSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    scarabruteCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${scarabruteStats.weakness.name}`;
   

    const weaknessFirstType = document.createElement('span');
    weaknessFirstType.classList.add('type-logo');
    weaknessFirstType.style.background = `url( ${scarabruteStats.weakness.firstLogo})`; 
    weaknessFirstType.style.backgroundSize = 'cover';

    weakness.appendChild(weaknessFirstType);


    const weaknessSecondType = document.createElement('span');
    weaknessSecondType.classList.add('type-logo');
    weaknessSecondType.style.background = `url( ${scarabruteStats.weakness.secondLogo})`; 
    weaknessSecondType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondType);


    const weaknessThirdType = document.createElement('span');
    weaknessThirdType.classList.add('type-logo');
    weaknessThirdType.style.background = `url( ${scarabruteStats.weakness.thirdLogo})`; 
    weaknessThirdType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessThirdType);
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistanceContainer = document.createElement('div');
    resistanceContainer.id = 'resistance';
    resistanceContainer.textContent = ` ${scarabruteStats.resistance.name}`;
    
    weaknessResistanceContainer.appendChild(resistanceContainer);
    

    const resistanceFirstType = document.createElement('span');
    resistanceFirstType.classList.add('type-logo');
    resistanceFirstType.style.background = `url(${scarabruteStats.resistance.firstLogo})`; 
    resistanceFirstType.style.backgroundSize = 'cover';

    resistanceContainer.appendChild(resistanceFirstType);


    const resistanceSecondType = document.createElement('span');
    resistanceSecondType.classList.add('type-logo');
    resistanceSecondType.style.background = `url(${scarabruteStats.resistance.secondLogo})`; 
    resistanceSecondType.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceSecondType);
    

    const resistanceThirdType = document.createElement('span');
    resistanceThirdType.classList.add('type-logo');
    resistanceThirdType.style.background = `url(${scarabruteStats.resistance.thirdLogo})`; 
    resistanceThirdType.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceThirdType);