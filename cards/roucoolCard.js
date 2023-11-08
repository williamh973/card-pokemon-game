import roucoolStats from '../stats/roucoolStats.js';

      const cardRoucool = document.createElement('div');
    cardRoucool.classList.add('card-main');
    cardRoucool.id = 'card-roucool';
  
    const cardRoucoolHead = document.createElement('div');
    cardRoucoolHead.classList.add('card-head');
    
    const cardRoucoolTitle = document.createElement('span');
    cardRoucoolTitle.classList.add('title');
    cardRoucoolTitle.textContent = roucoolStats.name;
    cardRoucoolHead.appendChild(cardRoucoolTitle);
    
    const cardRoucoolHp = document.createElement('span');
    cardRoucoolHp.classList.add('hp');
    cardRoucoolHp.id = 'roucoolHealth';
    cardRoucoolHp.textContent = `${roucoolStats.stats.hp} Pv`;
    cardRoucoolHead.appendChild(cardRoucoolHp);
    
    const cardRoucoolType = document.createElement('span');
    cardRoucoolType.classList.add('type-logo');
    cardRoucoolType.id = 'roucool-type';
    cardRoucoolType.style.background = `url( ${roucoolStats.typeLogo})`; 
    cardRoucoolType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    cardRoucoolHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(cardRoucoolHp);
    containerHpAndType.appendChild(cardRoucoolType)
    
    cardRoucool.appendChild(cardRoucoolHead);
    
    const cardRoucoolImage = document.createElement('div');
    cardRoucoolImage.classList.add('image');
    cardRoucoolImage.style.backgroundImage = `url(${roucoolStats.image})`; 
    
    cardRoucoolImage.style.backgroundSize = 'cover';
    
    cardRoucool.appendChild(cardRoucoolImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    cardRoucool.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${roucoolStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const pikachuFirstAttackNameAndResume = document.createElement('div');
    pikachuFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    pikachuFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${roucoolStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${roucoolStats.firstAttack.strength}`;
    
    const pikachuFirstAttackResume = document.createElement('div');
    pikachuFirstAttackResume.classList.add('attack-resume');
    pikachuFirstAttackResume.textContent = ` ${roucoolStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const pikachuSecondAttackAndResume = document.createElement('div');
    pikachuSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${roucoolStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${roucoolStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${roucoolStats.secondAttack.strength}`;
    
    const pikachuSecondAttackResume = document.createElement('div');
    pikachuSecondAttackResume.classList.add('attack-resume');
    
    pikachuSecondAttackResume.textContent = ` ${roucoolStats.secondAttack.resume}`;
    
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
    
    cardRoucool.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${roucoolStats.weakness.name}`;
   
    const weaknessType = document.createElement('span');
    weaknessType.classList.add('type-logo');
  
    weaknessType.style.background = `url( ${roucoolStats.weakness.logo})`; 
    
    weaknessType.style.backgroundSize = 'cover';
    weakness.appendChild(weaknessType);
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${roucoolStats.resistance.name}`;
    
    const resistanceType = document.createElement('span');
    resistanceType.classList.add('type-logo');
  
    resistanceType.style.background = `url( ${roucoolStats.resistance.logo})`; 
    
    resistanceType.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceType);
    
    weaknessResistanceContainer.appendChild(resistance);
 
    resistance.appendChild(resistanceType);
    
 export default cardRoucool;