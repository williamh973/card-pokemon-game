import racaillouStats from '../stats/racaillouStats.js';

      const cardRacaillou = document.createElement('div');
    cardRacaillou.classList.add('card-main');
    cardRacaillou.id = 'card-racaillou';
  
    const cardRacaillouHead = document.createElement('div');
    cardRacaillouHead.classList.add('card-head');
    
    const cardRacaillouTitle = document.createElement('span');
    cardRacaillouTitle.classList.add('title');
    cardRacaillouTitle.textContent = racaillouStats.name;
    cardRacaillouHead.appendChild(cardRacaillouTitle);
    
    const cardRacaillouHp = document.createElement('span');
    cardRacaillouHp.classList.add('hp');
    cardRacaillouHp.id = 'racaillouHealth';
    cardRacaillouHp.textContent = `${racaillouStats.stats.hp} Pv`;
    cardRacaillouHead.appendChild(cardRacaillouHp);
    
    const cardRacaillouType = document.createElement('span');
    cardRacaillouType.classList.add('type-logo');
    cardRacaillouType.id = 'racaillou-type';
    cardRacaillouType.style.background = `url( ${racaillouStats.logo})`; 
    cardRacaillouType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    cardRacaillouHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(cardRacaillouHp);
    containerHpAndType.appendChild(cardRacaillouType)
    
    cardRacaillou.appendChild(cardRacaillouHead);
    
    const cardRacaillouImage = document.createElement('div');
    cardRacaillouImage.classList.add('image');
    cardRacaillouImage.style.backgroundImage = `url(${racaillouStats.image})`; 
    
    cardRacaillouImage.style.backgroundSize = 'cover';
    
    cardRacaillou.appendChild(cardRacaillouImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    cardRacaillou.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${racaillouStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const pikachuFirstAttackNameAndResume = document.createElement('div');
    pikachuFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    pikachuFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${racaillouStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${racaillouStats.firstAttack.strength}`;
    
    const pikachuFirstAttackResume = document.createElement('div');
    pikachuFirstAttackResume.classList.add('attack-resume');
    pikachuFirstAttackResume.textContent = ` ${racaillouStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const pikachuSecondAttackAndResume = document.createElement('div');
    pikachuSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${racaillouStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${racaillouStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${racaillouStats.secondAttack.strength}`;
    
    const pikachuSecondAttackResume = document.createElement('div');
    pikachuSecondAttackResume.classList.add('attack-resume');
    
    pikachuSecondAttackResume.textContent = ` ${racaillouStats.secondAttack.resume}`;
    
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
    
    cardRacaillou.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${racaillouStats.weakness.name}`;
   
    const weaknessfirstType = document.createElement('span');
    weaknessfirstType.classList.add('type-logo');
  
    weaknessfirstType.style.background = `url( ${racaillouStats.weakness.logoWater}
      )`; 
    
    weaknessfirstType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessfirstType);
    
    const weaknessSecondType = document.createElement('span');
    weaknessSecondType.classList.add('type-logo');
  
    weaknessSecondType.style.background = `url( ${racaillouStats.weakness.logoFight}
      )`; 
    
    weaknessSecondType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessSecondType);
    
    
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${racaillouStats.resistance.name}`;
    
    const resistanceType = document.createElement('span');
    resistanceType.classList.add('type-logo');
  
    resistanceType.style.background = `url(${racaillouStats.resistance.firstLogo})`; 
    
    resistanceType.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceType);
    
    weaknessResistanceContainer.appendChild(resistance);
 
    resistance.appendChild(resistanceType);
    
 export default cardRacaillou;