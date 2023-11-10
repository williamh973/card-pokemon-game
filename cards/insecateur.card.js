import insecateurStats from '../models/insecateur.model.js';

    const cardInsecateur = document.createElement('div');
    cardInsecateur.classList.add('card-main');
    cardInsecateur.id = 'card-insecateur';
  
    const cardInsecateurHead = document.createElement('div');
    cardInsecateurHead.classList.add('card-head');
    
    const cardInsecateurTitle = document.createElement('span');
    cardInsecateurTitle.classList.add('title');
    cardInsecateurTitle.textContent = insecateurStats.name;
    cardInsecateurHead.appendChild(cardInsecateurTitle);
    
    const cardInsecateurHp = document.createElement('span');
    cardInsecateurHp.classList.add('hp');
    cardInsecateurHp.id = 'insecateurHealth';
    cardInsecateurHp.textContent = `${insecateurStats.stats.hp} Pv`;
    cardInsecateurHead.appendChild(cardInsecateurHp);
    
    const cardInsecateurType = document.createElement('span');
    cardInsecateurType.classList.add('type-logo');
    cardInsecateurType.id = 'insecateur-type';
    cardInsecateurType.style.background = `url( ${insecateurStats.logo})`; 
    cardInsecateurType.style.backgroundSize = 'cover'
    
    const containerHpAndType = document.createElement('div');
    containerHpAndType.classList.add('container-hp-logoType');
    
    cardInsecateurHead.appendChild(containerHpAndType);
    
    containerHpAndType.appendChild(cardInsecateurHp);
    containerHpAndType.appendChild(cardInsecateurType)
    
    cardInsecateur.appendChild(cardInsecateurHead);
    
    const cardInsecateurImage = document.createElement('div');
    cardInsecateurImage.classList.add('image');
    cardInsecateurImage.style.backgroundImage = `url(${insecateurStats.image})`; 
    
    cardInsecateurImage.style.backgroundSize = 'cover';
    
    cardInsecateur.appendChild(cardInsecateurImage);
    
    
    const attacksContainer = document.createElement('div');
    attacksContainer.classList.add('attacks-container');
    
    cardInsecateur.appendChild(attacksContainer);

    const attackTypeNameStrengthCont = document.createElement('span');
    attackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const attackType = document.createElement('span');
    attackType.classList.add('type-logo');
  
    attackType.style.background = `url( ${insecateurStats.firstAttack.logo})`; 
    
    attackType.style.backgroundSize = 'cover';

    const InsecateurFirstAttackNameAndResume = document.createElement('div');
    InsecateurFirstAttackNameAndResume.classList.add('attack-and-resume');
    
    InsecateurFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);
    
    
    const firstAttackName = document.createElement('div');
    firstAttackName.classList.add('attack-name');
    firstAttackName.textContent = ` ${insecateurStats.firstAttack.name}`;
    
    const firstAttackStrength = document.createElement('div');
    firstAttackStrength.classList.add('attack-strength');
    firstAttackStrength.textContent = ` ${insecateurStats.firstAttack.strength}`;
    
    const InsecateurFirstAttackResume = document.createElement('div');
    InsecateurFirstAttackResume.classList.add('attack-resume');
    InsecateurFirstAttackResume.textContent = ` ${insecateurStats.firstAttack.resume}`;
    
    
    
    
    const secondAttackTypeNameStrengthCont = document.createElement('span');
    secondAttackTypeNameStrengthCont.classList.add('attackType-name-strength-container');
    
    const InsecateurSecondAttackAndResume = document.createElement('div');
    InsecateurSecondAttackAndResume.classList.add('attack-and-resume');
    
    const secondAttackType = document.createElement('span');
    secondAttackType.classList.add('type-logo');
  
    secondAttackType.style.background = `url( ${insecateurStats.secondAttack.logo})`; 
    
    secondAttackType.style.backgroundSize = 'cover';
    
    const secondAttackName = document.createElement('div');
    secondAttackName.classList.add('attack-name');
    secondAttackName.textContent = ` ${insecateurStats.secondAttack.name}`;
    
    const secondAttackStrength = document.createElement('div');
    secondAttackStrength.classList.add('attack-strength');
    secondAttackStrength.textContent = ` ${insecateurStats.secondAttack.strength}`;
    
    const InsecateurSecondAttackResume = document.createElement('div');
    InsecateurSecondAttackResume.classList.add('attack-resume');
    
    InsecateurSecondAttackResume.textContent = ` ${insecateurStats.secondAttack.resume}`;
    
    attacksContainer.appendChild(InsecateurFirstAttackNameAndResume);
    
    attackTypeNameStrengthCont.appendChild(attackType);
    attackTypeNameStrengthCont.appendChild(firstAttackName);
    attackTypeNameStrengthCont.appendChild(firstAttackStrength);
 
    InsecateurFirstAttackNameAndResume.appendChild(InsecateurFirstAttackResume);
    
  
    attacksContainer.appendChild(InsecateurSecondAttackAndResume);
   
    InsecateurSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

    secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
    secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);
 
    
    InsecateurSecondAttackAndResume.appendChild(InsecateurSecondAttackResume);
    
    const weaknessResistanceContainer = document.createElement('div');
    weaknessResistanceContainer.classList.add('weakness-resistance-container');
    
    cardInsecateur.appendChild(weaknessResistanceContainer);
    
    const weakness = document.createElement('div');
    weakness.id = 'weakness';
    weakness.textContent = ` ${insecateurStats.weakness.name}`;
   
    const weaknessfirstType = document.createElement('span');
    weaknessfirstType.classList.add('type-logo');
  
    weaknessfirstType.style.background = `url( ${insecateurStats.weakness.firstLogo}
      )`; 
    
    weaknessfirstType.style.backgroundSize = 'cover';
    
    weakness.appendChild(weaknessfirstType);
    
    
    
    
    weaknessResistanceContainer.appendChild(weakness);
    
    const resistance = document.createElement('div');
    resistance.id = 'resistance';
    resistance.textContent = ` ${insecateurStats.resistance.name}`;
    
    const resistanceType = document.createElement('span');
    resistanceType.classList.add('type-logo');
  
    resistanceType.style.background = `url(${insecateurStats.resistance.firstLogo})`; 
    
    resistanceType.style.backgroundSize = 'cover';
 
    resistance.appendChild(resistanceType);
    
    weaknessResistanceContainer.appendChild(resistance);
 
    resistance.appendChild(resistanceType);
    
 export default cardInsecateur;