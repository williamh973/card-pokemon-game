import { racaillouModel } from "../models/racaillou.model.js";

export const racaillouCard = document.createElement("div");
racaillouCard.classList.add("card-main");
racaillouCard.id = "card-racaillou";

const racaillouCardHead = document.createElement("div");
racaillouCardHead.classList.add("card-head");

const racaillouCardTitle = document.createElement("span");
racaillouCardTitle.classList.add("title");
racaillouCardTitle.textContent = racaillouModel.name;
racaillouCardHead.appendChild(racaillouCardTitle);

export const hp = document.createElement("span");
hp.classList.add("hp");
hp.id = "racaillouHealth";
hp.textContent = `${racaillouModel.stats.hp}`;
racaillouCardHead.appendChild(hp);

const pvText = document.createElement("span");
pvText.classList.add("pv-text");
pvText.id = "pv-text";
pvText.textContent = `Pv`;

const racaillouCardFirstType = document.createElement("span");
racaillouCardFirstType.classList.add("type-logo");
racaillouCardFirstType.id = "racaillou-type";
racaillouCardFirstType.style.background = `url( ${racaillouModel.firstLogo})`;
racaillouCardFirstType.style.backgroundSize = "cover";

const racaillouCardSecondType = document.createElement("span");
racaillouCardSecondType.classList.add("type-logo");
racaillouCardSecondType.id = "racaillou-type";
racaillouCardSecondType.style.background = `url( ${racaillouModel.secondLogo})`;
racaillouCardSecondType.style.backgroundSize = "cover";

const containerHpAndType = document.createElement("div");
containerHpAndType.classList.add("container-hp-logoType");

racaillouCardHead.appendChild(containerHpAndType);

containerHpAndType.appendChild(hp);
containerHpAndType.appendChild(pvText);

containerHpAndType.appendChild(racaillouCardFirstType);
containerHpAndType.appendChild(racaillouCardSecondType);

racaillouCard.appendChild(racaillouCardHead);

const racaillouCardImage = document.createElement("div");
racaillouCardImage.classList.add("image");
racaillouCardImage.style.backgroundImage = `url(${racaillouModel.image})`;

racaillouCardImage.style.backgroundSize = "cover";

racaillouCard.appendChild(racaillouCardImage);

const attacksContainer = document.createElement("div");
attacksContainer.classList.add("attacks-container");

racaillouCard.appendChild(attacksContainer);

const attackTypeNameStrengthCont = document.createElement("span");
attackTypeNameStrengthCont.classList.add("attackType-name-strength-container");

const attackType = document.createElement("span");
attackType.classList.add("type-logo");

attackType.style.background = `url( ${racaillouModel.firstAttack.logo})`;

attackType.style.backgroundSize = "cover";

const racaillouFirstAttackNameAndResume = document.createElement("div");
racaillouFirstAttackNameAndResume.classList.add("attack-and-resume");

racaillouFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);

const firstAttackName = document.createElement("div");
firstAttackName.classList.add("attack-name");
firstAttackName.textContent = ` ${racaillouModel.firstAttack.name}`;

const firstAttackStrength = document.createElement("div");
firstAttackStrength.classList.add("attack-strength");
firstAttackStrength.textContent = ` ${racaillouModel.firstAttack.strength}`;

const racaillouFirstAttackResume = document.createElement("div");
racaillouFirstAttackResume.classList.add("attack-resume");
racaillouFirstAttackResume.textContent = ` ${racaillouModel.firstAttack.resume}`;

const secondAttackTypeNameStrengthCont = document.createElement("span");
secondAttackTypeNameStrengthCont.classList.add(
  "attackType-name-strength-container",
);

const racaillouSecondAttackAndResume = document.createElement("div");
racaillouSecondAttackAndResume.classList.add("attack-and-resume");

const secondAttackType = document.createElement("span");
secondAttackType.classList.add("type-logo");

secondAttackType.style.background = `url( ${racaillouModel.secondAttack.logo})`;

secondAttackType.style.backgroundSize = "cover";

const secondAttackName = document.createElement("div");
secondAttackName.classList.add("attack-name");
secondAttackName.textContent = ` ${racaillouModel.secondAttack.name}`;

const secondAttackStrength = document.createElement("div");
secondAttackStrength.classList.add("attack-strength");
secondAttackStrength.textContent = ` ${racaillouModel.secondAttack.strength}`;

const racaillouSecondAttackResume = document.createElement("div");
racaillouSecondAttackResume.classList.add("attack-resume");

racaillouSecondAttackResume.textContent = ` ${racaillouModel.secondAttack.resume}`;

attacksContainer.appendChild(racaillouFirstAttackNameAndResume);

attackTypeNameStrengthCont.appendChild(attackType);
attackTypeNameStrengthCont.appendChild(firstAttackName);
attackTypeNameStrengthCont.appendChild(firstAttackStrength);

racaillouFirstAttackNameAndResume.appendChild(racaillouFirstAttackResume);

attacksContainer.appendChild(racaillouSecondAttackAndResume);

racaillouSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);

racaillouSecondAttackAndResume.appendChild(racaillouSecondAttackResume);

const weaknessResistanceContainer = document.createElement("div");
weaknessResistanceContainer.classList.add("weakness-resistance-container");

racaillouCard.appendChild(weaknessResistanceContainer);

const weakness = document.createElement("div");
weakness.id = "weakness";
weakness.textContent = ` ${racaillouModel.weakness.name}`;

const weaknessfirstLogo = document.createElement("span");
weaknessfirstLogo.classList.add("type-logo");
weaknessfirstLogo.style.background = `url( ${racaillouModel.weakness.firstLogo})`;
weaknessfirstLogo.style.backgroundSize = "cover";

weakness.appendChild(weaknessfirstLogo);

const weaknessSecondLogo = document.createElement("span");
weaknessSecondLogo.classList.add("type-logo");
weaknessSecondLogo.style.background = `url( ${racaillouModel.weakness.secondLogo})`;
weaknessSecondLogo.style.backgroundSize = "cover";

weakness.appendChild(weaknessSecondLogo);

const weaknessThirdLogo = document.createElement("span");
weaknessThirdLogo.classList.add("type-logo");
weaknessThirdLogo.style.background = `url( ${racaillouModel.weakness.thirdLogo})`;
weaknessThirdLogo.style.backgroundSize = "cover";

weakness.appendChild(weaknessThirdLogo);

weaknessResistanceContainer.appendChild(weakness);

const resistance = document.createElement("div");
resistance.id = "resistance";
resistance.textContent = ` ${racaillouModel.resistance.name}`;

weaknessResistanceContainer.appendChild(resistance);

const resistanceFirstLogo = document.createElement("span");
resistanceFirstLogo.classList.add("type-logo");
resistanceFirstLogo.style.background = `url(${racaillouModel.resistance.firstLogo})`;
resistanceFirstLogo.style.backgroundSize = "cover";

resistance.appendChild(resistanceFirstLogo);

const resistanceSecondLogo = document.createElement("span");
resistanceSecondLogo.classList.add("type-logo");
resistanceSecondLogo.style.background = `url(${racaillouModel.resistance.secondLogo})`;
resistanceSecondLogo.style.backgroundSize = "cover";

resistance.appendChild(resistanceSecondLogo);

const resistanceThirdLogo = document.createElement("span");
resistanceThirdLogo.classList.add("type-logo");
resistanceThirdLogo.style.background = `url(${racaillouModel.resistance.thirdLogo})`;
resistanceThirdLogo.style.backgroundSize = "cover";

resistance.appendChild(resistanceThirdLogo);

const resistanceFourthLogo = document.createElement("span");
resistanceFourthLogo.classList.add("type-logo");
resistanceFourthLogo.style.background = `url(${racaillouModel.resistance.fourthLogo})`;
resistanceFourthLogo.style.backgroundSize = "cover";

resistance.appendChild(resistanceFourthLogo);
