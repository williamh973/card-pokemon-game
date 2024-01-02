import { scarabruteModel } from '../models/scarabrute.model.js';

  export const scarabruteCard = document.createElement('div');
    scarabruteCard.classList.add('card-main');
    scarabruteCard.id = 'card-scarabrute';
  
    const scarabruteCardHead = document.createElement('div');
    scarabruteCardHead.classList.add('card-head');
    
    const scarabruteCardTitle = document.createElement('span');
    scarabruteCardTitle.classList.add('title');
    scarabruteCardTitle.textContent = scarabruteModel.name;
    scarabruteCardHead.appendChild(scarabruteCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'scarabruteHealth';
    hp.textContent = `${scarabruteModel.stats.hp}`;
    scarabruteCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const scarabruteCardType = document.createElement('span');
    scarabruteCardType.classList.add('type-logo');
    scarabruteCardType.id = 'scarabrute-type';
    scarabruteCardType.style.background = `url( ${scarabruteModel.logo})`; 
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
    scarabruteCardImage.style.backgroundImage = `url(${scarabruteModel.image})`; 
    
    scarabruteCardImage.style.backgroundSize = 'cover';
    
    scarabruteCard.appendChild(scarabruteCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    scarabruteCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${scarabruteModel.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const scarabruteFirstAttackNameAndResume = document.createElement('div');
    scarabruteFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    scarabruteFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${scarabruteModel.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${scarabruteModel.firstAttack.strength}`;
    
    const scarabruteFirstAttackResume = document.createElement('div');
    scarabruteFirstAttackResume.classList.add('attack-resume');
    scarabruteFirstAttackResume.textContent = ` ${scarabruteModel.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const scarabruteSecondAttackAndResume = document.createElement('div');
    scarabruteSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${scarabruteModel.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${scarabruteModel.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${scarabruteModel.secondAttack.strength}`;
    
    const scarabruteSecondAttackResume = document.createElement('div');
    scarabruteSecondAttackResume.classList.add('attack-resume');
    
    scarabruteSecondAttackResume.textContent = ` ${scarabruteModel.secondAttack.resume}`;
    
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
    weakness.textContent = ` ${scarabruteModel.weakness.name}`;
   

    const weaknessFirstType = document.createElement('span');
    weaknessFirstType.classList.add('type-logo');
    weaknessFirstType.style.background = `url( ${scarabruteModel.weakness.firstLogo})`; 
    weaknessFirstType.style.backgroundSize = 'cover';

    weakness.appendChild(weaknessFirstType);


    const weaknessSecondType = document.createElement('span');
    weaknessSecondType.classList.add('type-logo');
    weaknessSecondType.style.background = `url( ${scarabruteModel.weakness.secondLogo})`; 
    weaknessSecondType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondType);


    const weaknessThirdType = document.createElement('span');
    weaknessThirdType.classList.add('type-logo');
    weaknessThirdType.style.background = `url( ${scarabruteModel.weakness.thirdLogo})`; 
    weaknessThirdType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessThirdType);
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistanceContainer = document.createElement('div');
    resistanceContainer.id = 'resistance';
    resistanceContainer.textContent = ` ${scarabruteModel.resistance.name}`;
    
    weaknessResistanceContainer.appendChild(resistanceContainer);
    

    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url(${scarabruteModel.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';

    resistanceContainer.appendChild(resistanceFirstLogo);


    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url(${scarabruteModel.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceSecondLogo);
    

    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url(${scarabruteModel.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceThirdLogo);