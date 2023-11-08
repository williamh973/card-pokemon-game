import evoliStats from '../stats/evoliStats.js';

   const cardEvoli = document.createElement('div');
    cardEvoli.classList.add('card-main');
    cardEvoli.id = 'card-evoli';
  
    const cardEvoliHead = document.createElement('div');
    cardEvoliHead.classList.add('card-head');
    
    const cardEvoliTitle = document.createElement('span');
    cardEvoliTitle.classList.add('title');
    cardEvoliTitle.textContent = evoliStats.name;
    cardEvoliHead.appendChild(cardEvoliTitle);
    
    const cardEvoliHp = document.createElement('span');
    cardEvoliHp.classList.add('hp');
    cardEvoliHp.id = 'evoliHealth';
    cardEvoliHp.textContent = `${evoliStats.stats.hp} Pv`;
    cardEvoliHead.appendChild(cardEvoliHp);
    
    const cardEvoliType = document.createElement('span');
    cardEvoliType.classList.add('type-logo');
    cardEvoliType.id = 'evoli-type';
    cardEvoliType.style.background = `url( ${evoliStats.typeLogo})`; 
    cardEvoliType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    cardEvoliHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(cardEvoliHp);
    containerHpAndType.appendChild(cardEvoliType)
    
    cardEvoli.appendChild(cardEvoliHead);
    
    const cardEvoliImage = document.createElement('div');
    cardEvoliImage.classList.add('image');
    cardEvoliImage.style.backgroundImage = `url(${evoliStats.image})`; 
    
    cardEvoliImage.style.backgroundSize = 'cover';
    
    cardEvoli.appendChild(cardEvoliImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    cardEvoli.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${evoliStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const evoliFirstAttackNameAndResume = document.createElement('div');
    evoliFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    evoliFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${evoliStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${evoliStats.firstAttack.strength}`;
    
    const evoliFirstAttackResume = document.createElement('div');
    evoliFirstAttackResume.classList.add('attack-resume');
    evoliFirstAttackResume.textContent = ` ${evoliStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const evoliSecondAttackAndResume = document.createElement('div');
    evoliSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${evoliStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${evoliStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${evoliStats.secondAttack.strength}`;
    
    const evoliSecondAttackResume = document.createElement('div');
    evoliSecondAttackResume.classList.add('attack-resume');
    
    evoliSecondAttackResume.textContent = ` ${evoliStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(evoliFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    evoliFirstAttackNameAndResume.appendChild(evoliFirstAttackResume);
    
  
    attacksContainer.appendChild(evoliSecondAttackAndResume);
   
    evoliSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    evoliSecondAttackAndResume.appendChild(evoliSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    cardEvoli.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${evoliStats.weakness.name}`;
   
    const weaknessType = document.createElement('span');
    weaknessType.classList.add('type-logo');
  
    weaknessType.style.background = `url( ${evoliStats.weakness.logo})`; 
    
    weaknessType.style.backgroundSize = 'cover';
    weakness.appendChild(weaknessType);
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${evoliStats.resistance.name}`;
    
    const resistanceType = document.createElement('span');
    resistanceType.classList.add('type-logo');
  
    resistanceType.style.background = `url( ${evoliStats.resistance.logo})`; 
    
    resistanceType.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceType);
    
    weaknessResistanceContainer.appendChild(resistance);
 
    resistance.appendChild(resistanceType);
    
 export default cardEvoli;