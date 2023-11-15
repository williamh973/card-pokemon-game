import { insecateurStats } from '../models/insecateur.model.js';

  export const insecateurCard = document.createElement('div');
    insecateurCard.classList.add('card-main');
    insecateurCard.id = 'card-insecateur';
  
    const insecateurCardHead = document.createElement('div');
    insecateurCardHead.classList.add('card-head');
    
    const insecateurCardTitle = document.createElement('span');
    insecateurCardTitle.classList.add('title');
    insecateurCardTitle.textContent = insecateurStats.name;
    insecateurCardHead.appendChild(insecateurCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'insecateurHealth';
    hp.textContent = `${insecateurStats.stats.hp}`;
    insecateurCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const insecateurCardType = document.createElement('span');
    insecateurCardType.classList.add('type-logo');
    insecateurCardType.id = 'insecateur-type';
    insecateurCardType.style.background = `url( ${insecateurStats.logo})`; 
    insecateurCardType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    insecateurCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(insecateurCardType)
    
    insecateurCard.appendChild(insecateurCardHead);
    
    const insecateurCardImage = document.createElement('div');
    insecateurCardImage.classList.add('image');
    insecateurCardImage.style.backgroundImage = `url(${insecateurStats.image})`; 
    
    insecateurCardImage.style.backgroundSize = 'cover';
    
    insecateurCard.appendChild(insecateurCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    insecateurCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${insecateurStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const InsecateurFirstAttackNameAndResume = document.createElement('div');
    InsecateurFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    InsecateurFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${insecateurStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${insecateurStats.firstAttack.strength}`;
    
    const InsecateurFirstAttackResume = document.createElement('div');
    InsecateurFirstAttackResume.classList.add('attack-resume');
    InsecateurFirstAttackResume.textContent = ` ${insecateurStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const InsecateurSecondAttackAndResume = document.createElement('div');
    InsecateurSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${insecateurStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${insecateurStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${insecateurStats.secondAttack.strength}`;
    
    const InsecateurSecondAttackResume = document.createElement('div');
    InsecateurSecondAttackResume.classList.add('attack-resume');
    
    InsecateurSecondAttackResume.textContent = ` ${insecateurStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(InsecateurFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    InsecateurFirstAttackNameAndResume.appendChild(InsecateurFirstAttackResume);
    
  
    attacksContainer.appendChild(InsecateurSecondAttackAndResume);
   
    InsecateurSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    InsecateurSecondAttackAndResume.appendChild(InsecateurSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    insecateurCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${insecateurStats.weakness.name}`;
   
    const weaknessFirstLogo = document.createElement('span');
    weaknessFirstLogo.classList.add('type-logo');
    weaknessFirstLogo.style.background = `url( ${insecateurStats.weakness.firstLogo} )`; 
    weaknessFirstLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessFirstLogo);


    const weaknessSecondLogo = document.createElement('span');
    weaknessSecondLogo.classList.add('type-logo');
    weaknessSecondLogo.style.background = `url( ${insecateurStats.weakness.secondLogo} )`; 
    weaknessSecondLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondLogo);


    const weaknessThirdLogo = document.createElement('span');
    weaknessThirdLogo.classList.add('type-logo');
    weaknessThirdLogo.style.background = `url( ${insecateurStats.weakness.thirdLogo} )`; 
    weaknessThirdLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessThirdLogo);
    
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${insecateurStats.resistance.name}`;
    
    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url(${insecateurStats.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceFirstLogo);


    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url(${insecateurStats.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceSecondLogo);


    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url(${insecateurStats.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceThirdLogo);
    


    weaknessResistanceContainer.appendChild(resistance);
 
    