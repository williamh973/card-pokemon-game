import { sabeletteModel } from '../models/sabelette.model.js';

  export const sabeletteCard = document.createElement('div');
    sabeletteCard.classList.add('card-main');
    sabeletteCard.id = 'card-sabelette';
  
    const sabeletteCardHead = document.createElement('div');
    sabeletteCardHead.classList.add('card-head');
    
    const sabeletteCardTitle = document.createElement('span');
    sabeletteCardTitle.classList.add('title');
    sabeletteCardTitle.textContent = sabeletteModel.name;
    sabeletteCardHead.appendChild(sabeletteCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'sabeletteHealth';
    hp.textContent = `${sabeletteModel.stats.hp}`;
    sabeletteCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const sabeletteCardType = document.createElement('span');
    sabeletteCardType.classList.add('type-logo');
    sabeletteCardType.id = 'sabelette-type';
    sabeletteCardType.style.background = `url( ${sabeletteModel.logo})`; 
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
    sabeletteCardImage.style.backgroundImage = `url(${sabeletteModel.image})`; 
    
    sabeletteCardImage.style.backgroundSize = 'cover';
    
    sabeletteCard.appendChild(sabeletteCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    sabeletteCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${sabeletteModel.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const sabeletteFirstAttackNameAndResume = document.createElement('div');
    sabeletteFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    sabeletteFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${sabeletteModel.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${sabeletteModel.firstAttack.strength}`;
    
    const sabeletteFirstAttackResume = document.createElement('div');
    sabeletteFirstAttackResume.classList.add('attack-resume');
    sabeletteFirstAttackResume.textContent = ` ${sabeletteModel.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const sabeletteSecondAttackAndResume = document.createElement('div');
    sabeletteSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${sabeletteModel.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${sabeletteModel.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${sabeletteModel.secondAttack.strength}`;
    
    const sabeletteSecondAttackResume = document.createElement('div');
    sabeletteSecondAttackResume.classList.add('attack-resume');
    
    sabeletteSecondAttackResume.textContent = ` ${sabeletteModel.secondAttack.resume}`;
    
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
    weakness.textContent = ` ${sabeletteModel.weakness.name}`;
   
    weaknessResistanceContainer.appendChild(weakness);



    const weaknessFirstLogo = document.createElement('span');
    weaknessFirstLogo.classList.add('type-logo');
    weaknessFirstLogo.style.background = `url( ${sabeletteModel.weakness.firstLogo})`; 
    weaknessFirstLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessFirstLogo);
    

    const weaknessSecondLogo = document.createElement('span');
    weaknessSecondLogo.classList.add('type-logo');
    weaknessSecondLogo.style.background = `url( ${sabeletteModel.weakness.secondLogo})`; 
    weaknessSecondLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondLogo);
    
    
    const weaknessThirdLogo = document.createElement('span');
    weaknessThirdLogo.classList.add('type-logo');
    weaknessThirdLogo.style.background = `url( ${sabeletteModel.weakness.thirdLogo})`; 
    weaknessThirdLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessThirdLogo);
    


    const resistanceContainer = document.createElement('div');
    resistanceContainer.id = 'resistance';
    resistanceContainer.textContent = ` ${sabeletteModel.resistance.name}`;
    
    weaknessResistanceContainer.appendChild(resistanceContainer);
    

    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url(${sabeletteModel.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';

    resistanceContainer.appendChild(resistanceFirstLogo);


    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url(${sabeletteModel.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceSecondLogo);
    

    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url(${sabeletteModel.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceThirdLogo);
    