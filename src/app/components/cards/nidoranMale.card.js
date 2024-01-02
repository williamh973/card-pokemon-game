import { nidoranMaleModel } from '../models/nidoranMale.model.js';

export const nidoranMaleCard = document.createElement('div');
    nidoranMaleCard.classList.add('card-main');
    nidoranMaleCard.id = 'card-nidoranMale';
  
    const nidoranMaleCardHead = document.createElement('div');
    nidoranMaleCardHead.classList.add('card-head');
    
    const nidoranMaleCardTitle = document.createElement('span');
    nidoranMaleCardTitle.classList.add('title');
    nidoranMaleCardTitle.textContent = nidoranMaleModel.name;
    nidoranMaleCardHead.appendChild(nidoranMaleCardTitle);
     
export const hp = document.createElement('span');
    hp.classList.add('hp');
    hp.id = 'nidoranMaleHealth';
    hp.textContent = `${nidoranMaleModel.stats.hp}`;
    nidoranMaleCardHead.appendChild(hp);

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const nidoranMaleCardType = document.createElement('span');
    nidoranMaleCardType.classList.add('type-logo');
    nidoranMaleCardType.id = 'nidoranMale-type';
    nidoranMaleCardType.style.background = `url( ${nidoranMaleModel.logo})`; 
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
    nidoranMaleCardImage.style.backgroundImage = `url(${nidoranMaleModel.image})`; 
    
    nidoranMaleCardImage.style.backgroundSize = 'cover';
    
    nidoranMaleCard.appendChild(nidoranMaleCardImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    nidoranMaleCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${nidoranMaleModel.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const nidoranMaleFirstAttackNameAndResume = document.createElement('div');
    nidoranMaleFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    nidoranMaleFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${nidoranMaleModel.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${nidoranMaleModel.firstAttack.strength}`;
    
    const nidoranMaleFirstAttackResume = document.createElement('div');
    nidoranMaleFirstAttackResume.classList.add('attack-resume');
    nidoranMaleFirstAttackResume.textContent = ` ${nidoranMaleModel.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const nidoranMaleSecondAttackAndResume = document.createElement('div');
    nidoranMaleSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${nidoranMaleModel.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${nidoranMaleModel.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${nidoranMaleModel.secondAttack.strength}`;
    
    const nidoranMaleSecondAttackResume = document.createElement('div');
    nidoranMaleSecondAttackResume.classList.add('attack-resume');
    
    nidoranMaleSecondAttackResume.textContent = ` ${nidoranMaleModel.secondAttack.resume}`;
    
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
    weakness.textContent = ` ${nidoranMaleModel.weakness.name}`;
   
    const weaknessFirstLogo = document.createElement('span');
    weaknessFirstLogo.classList.add('type-logo');
    weaknessFirstLogo.style.background = `url( ${nidoranMaleModel.weakness.firstLogo})`; 
    weaknessFirstLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessFirstLogo);


    const weaknessSecondLogo = document.createElement('span');
    weaknessSecondLogo.classList.add('type-logo');
    weaknessSecondLogo.style.background = `url( ${nidoranMaleModel.weakness.secondLogo})`; 
    weaknessSecondLogo.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondLogo);

    weaknessResistanceContainer.appendChild(weakness);
    


    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${nidoranMaleModel.resistance.name}`;

    weaknessResistanceContainer.appendChild(resistance);
    
    
    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url( ${nidoranMaleModel.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceFirstLogo);


    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url( ${nidoranMaleModel.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceSecondLogo);


    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url( ${nidoranMaleModel.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceThirdLogo);


    const resistanceFourthLogo = document.createElement('span');
    resistanceFourthLogo.classList.add('type-logo');
    resistanceFourthLogo.style.background = `url( ${nidoranMaleModel.resistance.fourthLogo})`; 
    resistanceFourthLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceFourthLogo);
    
  
 
    
     