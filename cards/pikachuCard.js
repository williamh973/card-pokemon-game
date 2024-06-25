import pikachuStats from "../stats/pikachuStats.js";

const cardPikachu = document.createElement("div");
cardPikachu.classList.add("card-main");
cardPikachu.id = "card-pikachu";

const cardPikachuHead = document.createElement("div");
cardPikachuHead.classList.add("card-head");

const title = document.createElement("span");
title.classList.add("title");
title.textContent = pikachuStats.name;
cardPikachuHead.appendChild(title);

const hp = document.createElement("span");
hp.classList.add("hp");
hp.id = "pikachuHealth";
hp.textContent = `${pikachuStats.stats.hp} Pv`;

const type = document.createElement("span");
type.classList.add("type-logo");
type.id = "pikachu-type";
type.style.background = `url( ${pikachuStats.typeLogo})`;
type.style.backgroundSize = "cover";

const containerHpAndType = document.createElement("div");
containerHpAndType.classList.add("container-hp-logoType");

cardPikachuHead.appendChild(containerHpAndType);

containerHpAndType.appendChild(hp);
containerHpAndType.appendChild(type);

cardPikachu.appendChild(cardPikachuHead);

const image = document.createElement("div");
image.classList.add("image");
image.style.background = `url( ${pikachuStats.image})`;

image.style.backgroundSize = "cover";

cardPikachu.appendChild(image);

const attacksContainer = document.createElement("div");
attacksContainer.classList.add("attacks-container");

cardPikachu.appendChild(attacksContainer);

const attackTypeNameStrengthCont = document.createElement("span");
attackTypeNameStrengthCont.classList.add("attackType-name-strength-container");

const attackType = document.createElement("span");
attackType.classList.add("type-logo");

attackType.style.background = `url( ${pikachuStats.firstAttack.logo})`;

attackType.style.backgroundSize = "cover";

const pikachuFirstAttackNameAndResume = document.createElement("div");
pikachuFirstAttackNameAndResume.classList.add("attack-and-resume");

pikachuFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);

const firstAttackName = document.createElement("div");
firstAttackName.classList.add("attack-name");
firstAttackName.textContent = ` ${pikachuStats.firstAttack.name}`;

const firstAttackStrength = document.createElement("div");
firstAttackStrength.classList.add("attack-strength");
firstAttackStrength.textContent = ` ${pikachuStats.firstAttack.strength}`;

const pikachuFirstAttackResume = document.createElement("div");
pikachuFirstAttackResume.classList.add("attack-resume");
pikachuFirstAttackResume.textContent = ` ${pikachuStats.firstAttack.resume}`;

const secondAttackTypeNameStrengthCont = document.createElement("span");
secondAttackTypeNameStrengthCont.classList.add(
  "attackType-name-strength-container",
);

const pikachuSecondAttackAndResume = document.createElement("div");
pikachuSecondAttackAndResume.classList.add("attack-and-resume");

const secondAttackType = document.createElement("span");
secondAttackType.classList.add("type-logo");

secondAttackType.style.background = `url( ${pikachuStats.secondAttack.logo})`;

secondAttackType.style.backgroundSize = "cover";

const secondAttackName = document.createElement("div");
secondAttackName.classList.add("attack-name");
secondAttackName.textContent = ` ${pikachuStats.secondAttack.name}`;

const secondAttackStrength = document.createElement("div");
secondAttackStrength.classList.add("attack-strength");
secondAttackStrength.textContent = ` ${pikachuStats.secondAttack.strength}`;

const pikachuSecondAttackResume = document.createElement("div");
pikachuSecondAttackResume.classList.add("attack-resume");

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

const weaknessResistanceContainer = document.createElement("div");
weaknessResistanceContainer.classList.add("weakness-resistance-container");

cardPikachu.appendChild(weaknessResistanceContainer);

const weakness = document.createElement("div");
weakness.id = "weakness";
weakness.textContent = ` ${pikachuStats.weakness.name}`;

const weaknessType = document.createElement("span");
weaknessType.classList.add("type-logo");

weaknessType.style.background = `url( ${pikachuStats.weakness.logo})`;

weaknessType.style.backgroundSize = "cover";
weakness.appendChild(weaknessType);

weaknessResistanceContainer.appendChild(weakness);

const resistance = document.createElement("div");
resistance.id = "resistance";
resistance.textContent = ` ${pikachuStats.resistance.name}`;

const resistanceType = document.createElement("span");
resistanceType.classList.add("type-logo");

resistanceType.style.background = `url( ${pikachuStats.resistance.logo})`;

resistanceType.style.backgroundSize = "cover";

resistance.appendChild(resistanceType);

weaknessResistanceContainer.appendChild(resistance);

resistance.appendChild(resistanceType);

export default cardPikachu;
