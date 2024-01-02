import { fantominusModel } from '../models/fantominus.model.js';

  export const fantominusCard = document.createElement('div');
    fantominusCard.classList.add('card-main');
    fantominusCard.id = 'card-fantominus';
  
    const fantominusCardHead = document.createElement('div');
    fantominusCardHead.classList.add('card-head');
    
    const fantominusCardTitle = document.createElement('span');
    fantominusCardTitle.classList.add('title');
    fantominusCardTitle.textContent = fantominusModel.name;
    fantominusCardHead.appendChild(fantominusCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'fantominusHealth';
    hp.textContent = `${fantominusModel.stats.hp}`;
    fantominusCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;


    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');

    
    fantominusCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);


    const fantominusCardFirstLogo = document.createElement('span');
    fantominusCardFirstLogo.classList.add('type-logo');
    fantominusCardFirstLogo.id = 'fantominus-type';
    fantominusCardFirstLogo.style.background = `url( ${fantominusModel.firstLogo})`; 
    fantominusCardFirstLogo.style.backgroundSize = 'cover'
    
    containerHpAndType.appendChild(fantominusCardFirstLogo);


    const fantominusCardSecondLogo = document.createElement('span');
    fantominusCardSecondLogo.classList.add('type-logo');
    fantominusCardSecondLogo.id = 'fantominus-type';
    fantominusCardSecondLogo.style.background = `url( ${fantominusModel.secondLogo})`; 
    fantominusCardSecondLogo.style.backgroundSize = 'cover'
    
    containerHpAndType.appendChild(fantominusCardSecondLogo);
    
    
    fantominusCard.appendChild(fantominusCardHead);
    
    const fantominusCardImage = document.createElement('div');
    fantominusCardImage.classList.add('image');
    fantominusCardImage.style.backgroundImage = `url(${fantominusModel.image})`; 
    
    fantominusCardImage.style.backgroundSize = 'cover';
    
    fantominusCard.appendChild(fantominusCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    fantominusCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${fantominusModel.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const fantominusFirstAttackNameAndResume = document.createElement('div');
    fantominusFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    fantominusFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${fantominusModel.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${fantominusModel.firstAttack.strength}`;
    
    const fantominusFirstAttackResume = document.createElement('div');
    fantominusFirstAttackResume.classList.add('attack-resume');
    fantominusFirstAttackResume.textContent = ` ${fantominusModel.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const fantominusSecondAttackAndResume = document.createElement('div');
    fantominusSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${fantominusModel.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${fantominusModel.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${fantominusModel.secondAttack.strength}`;
    
    const fantominusSecondAttackResume = document.createElement('div');
    fantominusSecondAttackResume.classList.add('attack-resume');
    
    fantominusSecondAttackResume.textContent = ` ${fantominusModel.secondAttack.resume}`;
    
    attacksContainer.appendChild(fantominusFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    fantominusFirstAttackNameAndResume.appendChild(fantominusFirstAttackResume);
    
  
    attacksContainer.appendChild(fantominusSecondAttackAndResume);
   
    fantominusSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    fantominusSecondAttackAndResume.appendChild(fantominusSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    fantominusCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${fantominusModel.weakness.name}`;
   

    const weaknessFirstType = document.createElement('span');
    weaknessFirstType.classList.add('type-logo');
    weaknessFirstType.style.background = `url( ${fantominusModel.weakness.firstLogo})`; 
    weaknessFirstType.style.backgroundSize = 'cover';

    weakness.appendChild(weaknessFirstType);


    const weaknessSecondType = document.createElement('span');
    weaknessSecondType.classList.add('type-logo');
    weaknessSecondType.style.background = `url( ${fantominusModel.weakness.secondLogo})`; 
    weaknessSecondType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondType);


    const weaknessThirdType = document.createElement('span');
    weaknessThirdType.classList.add('type-logo');
    weaknessThirdType.style.background = `url( ${fantominusModel.weakness.thirdLogo})`; 
    weaknessThirdType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessThirdType);


    const weaknessFourthType = document.createElement('span');
    weaknessFourthType.classList.add('type-logo');
    weaknessFourthType.style.background = `url( ${fantominusModel.weakness.fourthLogo})`; 
    weaknessFourthType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessFourthType);
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistanceContainer = document.createElement('div');
    resistanceContainer.id = 'resistance';
    resistanceContainer.textContent = ` ${fantominusModel.resistance.name}`;
    
    weaknessResistanceContainer.appendChild(resistanceContainer);
    

    
    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url(${fantominusModel.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';

    resistanceContainer.appendChild(resistanceFirstLogo);

    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url(${fantominusModel.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceSecondLogo);
    
    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url(${fantominusModel.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceThirdLogo);

    const resistanceFourthLogo = document.createElement('span');
    resistanceFourthLogo.classList.add('type-logo');
    resistanceFourthLogo.style.background = `url(${fantominusModel.resistance.fourthLogo})`; 
    resistanceFourthLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceFourthLogo);