import { krabbossModel } from '../models/krabboss.model.js';

  export const krabbossCard = document.createElement('div');
    krabbossCard.classList.add('card-main');
    krabbossCard.id = 'card-krabboss';
  
    const krabbossCardHead = document.createElement('div');
    krabbossCardHead.classList.add('card-head');
    
    const krabbossCardTitle = document.createElement('span');
    krabbossCardTitle.classList.add('title');
    krabbossCardTitle.textContent = krabbossModel.name;
    krabbossCardHead.appendChild(krabbossCardTitle);
    
    export  const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'krabbossHealth';
    hp.textContent = `${krabbossModel.stats.hp}`;
    krabbossCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const krabbossCardType = document.createElement('span');
    krabbossCardType.classList.add('type-logo');
    krabbossCardType.id = 'krabboss-type';
    krabbossCardType.style.background = `url( ${krabbossModel.logo})`; 
    krabbossCardType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    krabbossCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(krabbossCardType)
    
    krabbossCard.appendChild(krabbossCardHead);
    
    const krabbossCardImage = document.createElement('div');
    krabbossCardImage.classList.add('image');
    krabbossCardImage.style.backgroundImage = `url(${krabbossModel.image})`; 
    
    krabbossCardImage.style.backgroundSize = 'cover';
    
    krabbossCard.appendChild(krabbossCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    krabbossCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${krabbossModel.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const krabbossFirstAttackNameAndResume = document.createElement('div');
    krabbossFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    krabbossFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${krabbossModel.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${krabbossModel.firstAttack.strength}`;
    
    const krabbossFirstAttackResume = document.createElement('div');
    krabbossFirstAttackResume.classList.add('attack-resume');
    krabbossFirstAttackResume.textContent = ` ${krabbossModel.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const krabbossSecondAttackAndResume = document.createElement('div');
    krabbossSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${krabbossModel.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${krabbossModel.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${krabbossModel.secondAttack.strength}`;
    
    const krabbossSecondAttackResume = document.createElement('div');
    krabbossSecondAttackResume.classList.add('attack-resume');
    
    krabbossSecondAttackResume.textContent = ` ${krabbossModel.secondAttack.resume}`;
    
    attacksContainer.appendChild(krabbossFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    krabbossFirstAttackNameAndResume.appendChild(krabbossFirstAttackResume);
    
  
    attacksContainer.appendChild(krabbossSecondAttackAndResume);
   
    krabbossSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    krabbossSecondAttackAndResume.appendChild(krabbossSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    krabbossCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${krabbossModel.weakness.name}`;
   

    const weaknessFirstType = document.createElement('span');
    weaknessFirstType.classList.add('type-logo');
    weaknessFirstType.style.background = `url( ${krabbossModel.weakness.firstLogo})`; 
    weaknessFirstType.style.backgroundSize = 'cover';

    weakness.appendChild(weaknessFirstType);


    const weaknessSecondType = document.createElement('span');
    weaknessSecondType.classList.add('type-logo');
    weaknessSecondType.style.background = `url( ${krabbossModel.weakness.secondLogo})`; 
    weaknessSecondType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondType);
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistanceContainer = document.createElement('div');
    resistanceContainer.id = 'resistance';
    resistanceContainer.textContent = ` ${krabbossModel.resistance.name}`;
    
    weaknessResistanceContainer.appendChild(resistanceContainer);
    

    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url(${krabbossModel.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';

    resistanceContainer.appendChild(resistanceFirstLogo);


    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url(${krabbossModel.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceSecondLogo);
    

    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url(${krabbossModel.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceThirdLogo);


    const resistanceFourthLogo = document.createElement('span');
    resistanceFourthLogo.classList.add('type-logo');
    resistanceFourthLogo.style.background = `url(${krabbossModel.resistance.fourthLogo})`; 
    resistanceFourthLogo.style.backgroundSize = 'cover';
 
    resistanceContainer.appendChild(resistanceFourthLogo);