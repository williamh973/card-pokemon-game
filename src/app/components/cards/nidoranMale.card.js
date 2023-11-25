import { nidoranMaleStats } from '../models/nidoranMale.model.js';

export const nidoranMaleCard = document.createElement('div');
    nidoranMaleCard.classList.add('card-main');
    nidoranMaleCard.id = 'card-nidoranMale';
  
    const nidoranMaleCardHead = document.createElement('div');
    nidoranMaleCardHead.classList.add('card-head');
    
    const nidoranMaleCardTitle = document.createElement('span');
    nidoranMaleCardTitle.classList.add('title');
    nidoranMaleCardTitle.textContent = nidoranMaleStats.name;
    nidoranMaleCardHead.appendChild(nidoranMaleCardTitle);
     
export const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'nidoranMaleHealth';
    hp.textContent = `${nidoranMaleStats.stats.hp}`;
    nidoranMaleCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const nidoranMaleCardType = document.createElement('span');
    nidoranMaleCardType.classList.add('type-logo');
    nidoranMaleCardType.id = 'nidoranMale-type';
    nidoranMaleCardType.style.background = `url( ${nidoranMaleStats.logo})`; 
    nidoranMaleCardType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    nidoranMaleCardHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(nidoranMaleCardType)
    
    nidoranMaleCard.appendChild(nidoranMaleCardHead);
    
    const nidoranMaleCardImage = document.createElement('div');
    nidoranMaleCardImage.classList.add('image');
    nidoranMaleCardImage.style.backgroundImage = `url(${nidoranMaleStats.image})`; 
    
    nidoranMaleCardImage.style.backgroundSize = 'cover';
    
    nidoranMaleCard.appendChild(nidoranMaleCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    nidoranMaleCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${nidoranMaleStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const nidoranMaleFirstAttackNameAndResume = document.createElement('div');
    nidoranMaleFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    nidoranMaleFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${nidoranMaleStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${nidoranMaleStats.firstAttack.strength}`;
    
    const nidoranMaleFirstAttackResume = document.createElement('div');
    nidoranMaleFirstAttackResume.classList.add('attack-resume');
    nidoranMaleFirstAttackResume.textContent = ` ${nidoranMaleStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const nidoranMaleSecondAttackAndResume = document.createElement('div');
    nidoranMaleSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${nidoranMaleStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${nidoranMaleStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${nidoranMaleStats.secondAttack.strength}`;
    
    const nidoranMaleSecondAttackResume = document.createElement('div');
    nidoranMaleSecondAttackResume.classList.add('attack-resume');
    
    nidoranMaleSecondAttackResume.textContent = ` ${nidoranMaleStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(nidoranMaleFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    nidoranMaleFirstAttackNameAndResume.appendChild(nidoranMaleFirstAttackResume);
    
  
    attacksContainer.appendChild(nidoranMaleSecondAttackAndResume);
   
    nidoranMaleSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    nidoranMaleSecondAttackAndResume.appendChild(nidoranMaleSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    nidoranMaleCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${nidoranMaleStats.weakness.name}`;
   
    const weaknessFirstLogo = document.createElement('span');
    weaknessFirstLogo.classList.add('type-logo');
    weaknessFirstLogo.style.background = `url( ${nidoranMaleStats.weakness.firstLogo})`; 
    weaknessFirstLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessFirstLogo);


    const weaknessSecondLogo = document.createElement('span');
    weaknessSecondLogo.classList.add('type-logo');
    weaknessSecondLogo.style.background = `url( ${nidoranMaleStats.weakness.secondLogo})`; 
    weaknessSecondLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondLogo);

    weaknessResistanceContainer.appendChild(weakness);
    


    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${nidoranMaleStats.resistance.name}`;

    weaknessResistanceContainer.appendChild(resistance);
    
    
    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url( ${nidoranMaleStats.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceFirstLogo);


    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url( ${nidoranMaleStats.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceSecondLogo);


    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url( ${nidoranMaleStats.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceThirdLogo);


    const resistanceFourthLogo = document.createElement('span');
    resistanceFourthLogo.classList.add('type-logo');
    resistanceFourthLogo.style.background = `url( ${nidoranMaleStats.resistance.fourthLogo})`; 
    resistanceFourthLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceFourthLogo);
    
  
 
    
     