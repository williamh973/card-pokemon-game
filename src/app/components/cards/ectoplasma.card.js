import { ectoplasmaStats } from '../models/ectoplasma.model.js';

  export const ectoplasmaCard = document.createElement('div');
    ectoplasmaCard.classList.add('card-main');
    ectoplasmaCard.id = 'card-ectoplasma';
  
    const ectoplasmaCardHead = document.createElement('div');
    ectoplasmaCardHead.classList.add('card-head');
    
    const ectoplasmaCardTitle = document.createElement('span');
    ectoplasmaCardTitle.classList.add('title');
    ectoplasmaCardTitle.textContent = ectoplasmaStats.name;
    ectoplasmaCardHead.appendChild(ectoplasmaCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'ectoplasmaHealth';
    hp.textContent = `${ectoplasmaStats.stats.hp}`;
    ectoplasmaCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;


    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');

    
    ectoplasmaCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);


    const ectoplasmaCardFirstLogo = document.createElement('span');
    ectoplasmaCardFirstLogo.classList.add('type-logo');
    ectoplasmaCardFirstLogo.id = 'ectoplasma-type';
    ectoplasmaCardFirstLogo.style.background = `url( ${ectoplasmaStats.firstLogo})`; 
    ectoplasmaCardFirstLogo.style.backgroundSize = 'cover'
    
    containerHpAndType.appendChild(ectoplasmaCardFirstLogo);


    const ectoplasmaCardSecondLogo = document.createElement('span');
    ectoplasmaCardSecondLogo.classList.add('type-logo');
    ectoplasmaCardSecondLogo.id = 'ectoplasma-type';
    ectoplasmaCardSecondLogo.style.background = `url( ${ectoplasmaStats.secondLogo})`; 
    ectoplasmaCardSecondLogo.style.backgroundSize = 'cover'
    
    containerHpAndType.appendChild(ectoplasmaCardSecondLogo);
    
    
    ectoplasmaCard.appendChild(ectoplasmaCardHead);
    
    const ectoplasmaCardImage = document.createElement('div');
    ectoplasmaCardImage.classList.add('image');
    ectoplasmaCardImage.style.backgroundImage = `url(${ectoplasmaStats.image})`; 
    
    ectoplasmaCardImage.style.backgroundSize = 'cover';
    
    ectoplasmaCard.appendChild(ectoplasmaCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    ectoplasmaCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${ectoplasmaStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const ectoplasmaFirstAttackNameAndResume = document.createElement('div');
    ectoplasmaFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    ectoplasmaFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${ectoplasmaStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${ectoplasmaStats.firstAttack.strength}`;
    
    const ectoplasmaFirstAttackResume = document.createElement('div');
    ectoplasmaFirstAttackResume.classList.add('attack-resume');
    ectoplasmaFirstAttackResume.textContent = ` ${ectoplasmaStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const ectoplasmaSecondAttackAndResume = document.createElement('div');
    ectoplasmaSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${ectoplasmaStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${ectoplasmaStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${ectoplasmaStats.secondAttack.strength}`;
    
    const ectoplasmaSecondAttackResume = document.createElement('div');
    ectoplasmaSecondAttackResume.classList.add('attack-resume');
    
    ectoplasmaSecondAttackResume.textContent = ` ${ectoplasmaStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(ectoplasmaFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    ectoplasmaFirstAttackNameAndResume.appendChild(ectoplasmaFirstAttackResume);
    
  
    attacksContainer.appendChild(ectoplasmaSecondAttackAndResume);
   
    ectoplasmaSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    ectoplasmaSecondAttackAndResume.appendChild(ectoplasmaSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    ectoplasmaCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${ectoplasmaStats.weakness.name}`;
   

    const weaknessFirstType = document.createElement('span');
    weaknessFirstType.classList.add('type-logo');
    weaknessFirstType.style.background = `url( ${ectoplasmaStats.weakness.firstLogo})`; 
    weaknessFirstType.style.backgroundSize = 'cover';

    weakness.appendChild(weaknessFirstType);


    const weaknessSecondType = document.createElement('span');
    weaknessSecondType.classList.add('type-logo');
    weaknessSecondType.style.background = `url( ${ectoplasmaStats.weakness.secondLogo})`; 
    weaknessSecondType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondType);


    const weaknessThirdType = document.createElement('span');
    weaknessThirdType.classList.add('type-logo');
    weaknessThirdType.style.background = `url( ${ectoplasmaStats.weakness.thirdLogo})`; 
    weaknessThirdType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessThirdType);


    const weaknessFourthType = document.createElement('span');
    weaknessFourthType.classList.add('type-logo');
    weaknessFourthType.style.background = `url( ${ectoplasmaStats.weakness.fourthLogo})`; 
    weaknessFourthType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessFourthType);
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistanceContainer = document.createElement('div');
    resistanceContainer.id = 'resistance';
    resistanceContainer.textContent = ` ${ectoplasmaStats.resistance.name}`;
    
    weaknessResistanceContainer.appendChild(resistanceContainer);
    

    
    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url(${ectoplasmaStats.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';

    resistanceContainer.appendChild(resistanceFirstLogo);

    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url(${ectoplasmaStats.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceSecondLogo);
    
    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url(${ectoplasmaStats.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceThirdLogo);

    const resistanceFourthLogo = document.createElement('span');
    resistanceFourthLogo.classList.add('type-logo');
    resistanceFourthLogo.style.background = `url(${ectoplasmaStats.resistance.fourthLogo})`; 
    resistanceFourthLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceFourthLogo);