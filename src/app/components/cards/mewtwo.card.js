import mewtwoStats from '../models/mewtwo.model.js';

  export const mewtwoCard = document.createElement('div');
    mewtwoCard.classList.add('card-main');
    mewtwoCard.id = 'card-mewtwo';
  
    const mewtwoCardHead = document.createElement('div');
    mewtwoCardHead.classList.add('card-head');
    
    const mewtwoCardTitle = document.createElement('span');
    mewtwoCardTitle.classList.add('title');
    mewtwoCardTitle.textContent = mewtwoStats.name;
    mewtwoCardHead.appendChild(mewtwoCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'mewtwoHealth';
    hp.textContent = `${mewtwoStats.stats.hp}`;
    mewtwoCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const mewtwoCardType = document.createElement('span');
    mewtwoCardType.classList.add('type-logo');
    mewtwoCardType.id = 'mewtwo-type';
    mewtwoCardType.style.background = `url( ${mewtwoStats.logo})`; 
    mewtwoCardType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    mewtwoCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(mewtwoCardType)
    
    mewtwoCard.appendChild(mewtwoCardHead);
    
    const mewtwoCardImage = document.createElement('div');
    mewtwoCardImage.classList.add('image');
    mewtwoCardImage.style.backgroundImage = `url(${mewtwoStats.image})`; 
    
    mewtwoCardImage.style.backgroundSize = 'cover';
    
    mewtwoCard.appendChild(mewtwoCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    mewtwoCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${mewtwoStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const mewtwoFirstAttackNameAndResume = document.createElement('div');
    mewtwoFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    mewtwoFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${mewtwoStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${mewtwoStats.firstAttack.strength}`;
    
    const mewtwoFirstAttackResume = document.createElement('div');
    mewtwoFirstAttackResume.classList.add('attack-resume');
    mewtwoFirstAttackResume.textContent = ` ${mewtwoStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const mewtwoSecondAttackAndResume = document.createElement('div');
    mewtwoSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${mewtwoStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${mewtwoStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${mewtwoStats.secondAttack.strength}`;
    
    const mewtwoSecondAttackResume = document.createElement('div');
    mewtwoSecondAttackResume.classList.add('attack-resume');
    
    mewtwoSecondAttackResume.textContent = ` ${mewtwoStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(mewtwoFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    mewtwoFirstAttackNameAndResume.appendChild(mewtwoFirstAttackResume);
    
  
    attacksContainer.appendChild(mewtwoSecondAttackAndResume);
   
    mewtwoSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    mewtwoSecondAttackAndResume.appendChild(mewtwoSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    mewtwoCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${mewtwoStats.weakness.name}`;
   

    const weaknessFirstType = document.createElement('span');
    weaknessFirstType.classList.add('type-logo');
    weaknessFirstType.style.background = `url( ${mewtwoStats.weakness.firstLogo})`; 
    weaknessFirstType.style.backgroundSize = 'cover';

    weakness.appendChild(weaknessFirstType);


    const weaknessSecondType = document.createElement('span');
    weaknessSecondType.classList.add('type-logo');
    weaknessSecondType.style.background = `url( ${mewtwoStats.weakness.secondLogo})`; 
    weaknessSecondType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondType);


    const weaknessThirdType = document.createElement('span');
    weaknessThirdType.classList.add('type-logo');
    weaknessThirdType.style.background = `url( ${mewtwoStats.weakness.thirdLogo})`; 
    weaknessThirdType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessThirdType);
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistanceContainer = document.createElement('div');
    resistanceContainer.id = 'resistance';
    resistanceContainer.textContent = ` ${mewtwoStats.resistance.name}`;
    
    weaknessResistanceContainer.appendChild(resistanceContainer);
    

    const resistanceFirstType = document.createElement('span');
    resistanceFirstType.classList.add('type-logo');
    resistanceFirstType.style.background = `url(${mewtwoStats.resistance.firstLogo})`; 
    resistanceFirstType.style.backgroundSize = 'cover';

    resistanceContainer.appendChild(resistanceFirstType);


    const resistanceSecondType = document.createElement('span');
    resistanceSecondType.classList.add('type-logo');
    resistanceSecondType.style.background = `url(${mewtwoStats.resistance.secondLogo})`; 
    resistanceSecondType.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceSecondType);
    