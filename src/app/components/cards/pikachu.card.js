import { pikachuStats } from '../models/pikachu.model.js';

 
export const pikachuCard = document.createElement('div');
  pikachuCard.classList.add('card-main');
  pikachuCard.id = 'card-pikachu';
    
    const pikachuCardHead = document.createElement('div');
    pikachuCardHead.classList.add('card-head');
    
    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = pikachuStats.name;
    pikachuCardHead.appendChild(title);
    
export const hp = document.createElement('div');
    hp.classList.add('hp');
    hp.id = 'pikachuHealth';
    hp.textContent = `${pikachuStats.stats.hp}`;

    const pvText  = document.createElement('span');
    pvText.classList.add('pv-text');
    pvText.id = 'pv-text';
    pvText.textContent = `Pv`;
    
    const type = document.createElement('span');
    type.classList.add('type-logo');
    type.id = 'pikachu-type';
    type.style.background = `url( ${pikachuStats.logo})`; 
    type.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    pikachuCardHead.appendChild(containerHpAndType);

    containerHpAndType.appendChild(hp);
    containerHpAndType.appendChild(pvText);
    containerHpAndType.appendChild(type);

    pikachuCard.appendChild(pikachuCardHead);
    
    const image = document.createElement('div');
    image.classList.add('image');
    image.style.background = `url( ${pikachuStats.image})`; 
    
    image.style.backgroundSize = 'cover';
    
    pikachuCard.appendChild(image);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    pikachuCard.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${pikachuStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const pikachuFirstAttackNameAndResume = document.createElement('div');
    pikachuFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    pikachuFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${pikachuStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${pikachuStats.firstAttack.strength}`;
    
    const pikachuFirstAttackResume = document.createElement('div');
    pikachuFirstAttackResume.classList.add('attack-resume');
    pikachuFirstAttackResume.textContent = ` ${pikachuStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const pikachuSecondAttackAndResume = document.createElement('div');
    pikachuSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${pikachuStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${pikachuStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${pikachuStats.secondAttack.strength}`;
    
    const pikachuSecondAttackResume = document.createElement('div');
    pikachuSecondAttackResume.classList.add('attack-resume');
    
    pikachuSecondAttackResume.textContent = ` ${pikachuStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(pikachuFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    pikachuFirstAttackNameAndResume.appendChild(pikachuFirstAttackResume);
    
  
    attacksContainer.appendChild(pikachuSecondAttackAndResume);
   
    pikachuSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    pikachuSecondAttackAndResume.appendChild(pikachuSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    pikachuCard.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${pikachuStats.weakness.name}`;
   
    weaknessResistanceContainer.appendChild(weakness);


    const weaknessType = document.createElement('span');
    weaknessType.classList.add('type-logo');
    weaknessType.style.background = `url( ${pikachuStats.weakness.firstLogo})`; 
    weaknessType.style.backgroundSize = 'cover';

    weakness.appendChild(weaknessType);


  
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${pikachuStats.resistance.name}`;
    
    weaknessResistanceContainer.appendChild(resistance);


    const resistanceFirstLogo = document.createElement('span');
    resistanceFirstLogo.classList.add('type-logo');
    resistanceFirstLogo.style.background = `url( ${pikachuStats.resistance.firstLogo})`; 
    resistanceFirstLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceFirstLogo);
    


    const resistanceSecondLogo = document.createElement('span');
    resistanceSecondLogo.classList.add('type-logo');
    resistanceSecondLogo.style.background = `url(${pikachuStats.resistance.secondLogo})`; 
    resistanceSecondLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceSecondLogo);


    const resistanceThirdLogo = document.createElement('span');
    resistanceThirdLogo.classList.add('type-logo');
    resistanceThirdLogo.style.background = `url(${pikachuStats.resistance.thirdLogo})`; 
    resistanceThirdLogo.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceThirdLogo);