import { crustabriModel } from "../models/crustabri.model.js";

export const crustabriCard = document.createElement("div");
crustabriCard.classList.add("card-main");
crustabriCard.id = "card-crustabri";

const crustabriCardHead = document.createElement("div");
crustabriCardHead.classList.add("card-head");

const crustabriCardTitle = document.createElement("span");
crustabriCardTitle.classList.add("title");
crustabriCardTitle.textContent = crustabriModel.name;
crustabriCardHead.appendChild(crustabriCardTitle);

export const hp = document.createElement("span");
hp.classList.add("hp");
hp.id = "crustabriHealth";
hp.textContent = `${crustabriModel.stats.hp}`;
crustabriCardHead.appendChild(hp);

const pvText = document.createElement("span");
pvText.classList.add("pv-text");
pvText.id = "pv-text";
pvText.textContent = `Pv`;

const containerHpAndType = document.createElement("div");
containerHpAndType.classList.add("container-hp-logoType");

crustabriCardHead.appendChild(containerHpAndType);

containerHpAndType.appendChild(hp);
containerHpAndType.appendChild(pvText);

const crustabriCardFirstLogo = document.createElement("span");
crustabriCardFirstLogo.classList.add("type-logo");
crustabriCardFirstLogo.id = "crustabri-type";
crustabriCardFirstLogo.style.background = `url( ${crustabriModel.firstLogo})`;
crustabriCardFirstLogo.style.backgroundSize = "cover";

containerHpAndType.appendChild(crustabriCardFirstLogo);

const crustabriCardSecondLogo = document.createElement("span");
crustabriCardSecondLogo.classList.add("type-logo");
crustabriCardSecondLogo.id = "crustabri-type";
crustabriCardSecondLogo.style.background = `url( ${crustabriModel.secondLogo})`;
crustabriCardSecondLogo.style.backgroundSize = "cover";

containerHpAndType.appendChild(crustabriCardSecondLogo);

crustabriCard.appendChild(crustabriCardHead);

const crustabriCardImage = document.createElement("div");
crustabriCardImage.classList.add("image");
crustabriCardImage.style.backgroundImage = `url(${crustabriModel.image})`;

crustabriCardImage.style.backgroundSize = "cover";

crustabriCard.appendChild(crustabriCardImage);

const attacksContainer = document.createElement("div");
attacksContainer.classList.add("attacks-container");

crustabriCard.appendChild(attacksContainer);

const attackTypeNameStrengthCont = document.createElement("span");
attackTypeNameStrengthCont.classList.add("attackType-name-strength-container");

const attackType = document.createElement("span");
attackType.classList.add("type-logo");

attackType.style.background = `url( ${crustabriModel.firstAttack.logo})`;

attackType.style.backgroundSize = "cover";

const crustabriFirstAttackNameAndResume = document.createElement("div");
crustabriFirstAttackNameAndResume.classList.add("attack-and-resume");

crustabriFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);

const firstAttackName = document.createElement("div");
firstAttackName.classList.add("attack-name");
firstAttackName.textContent = ` ${crustabriModel.firstAttack.name}`;

const firstAttackStrength = document.createElement("div");
firstAttackStrength.classList.add("attack-strength");
firstAttackStrength.textContent = ` ${crustabriModel.firstAttack.strength}`;

const crustabriFirstAttackResume = document.createElement("div");
crustabriFirstAttackResume.classList.add("attack-resume");
crustabriFirstAttackResume.textContent = ` ${crustabriModel.firstAttack.resume}`;

const secondAttackTypeNameStrengthCont = document.createElement("span");
secondAttackTypeNameStrengthCont.classList.add(
  "attackType-name-strength-container",
);

const crustabriSecondAttackAndResume = document.createElement("div");
crustabriSecondAttackAndResume.classList.add("attack-and-resume");

const secondAttackType = document.createElement("span");
secondAttackType.classList.add("type-logo");

secondAttackType.style.background = `url( ${crustabriModel.secondAttack.logo})`;

secondAttackType.style.backgroundSize = "cover";

const secondAttackName = document.createElement("div");
secondAttackName.classList.add("attack-name");
secondAttackName.textContent = ` ${crustabriModel.secondAttack.name}`;

const secondAttackStrength = document.createElement("div");
secondAttackStrength.classList.add("attack-strength");
secondAttackStrength.textContent = ` ${crustabriModel.secondAttack.strength}`;

const crustabriSecondAttackResume = document.createElement("div");
crustabriSecondAttackResume.classList.add("attack-resume");

crustabriSecondAttackResume.textContent = ` ${crustabriModel.secondAttack.resume}`;

attacksContainer.appendChild(crustabriFirstAttackNameAndResume);

attackTypeNameStrengthCont.appendChild(attackType);
attackTypeNameStrengthCont.appendChild(firstAttackName);
attackTypeNameStrengthCont.appendChild(firstAttackStrength);

crustabriFirstAttackNameAndResume.appendChild(crustabriFirstAttackResume);

attacksContainer.appendChild(crustabriSecondAttackAndResume);

crustabriSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);

crustabriSecondAttackAndResume.appendChild(crustabriSecondAttackResume);

const weaknessResistanceContainer = document.createElement("div");
weaknessResistanceContainer.classList.add("weakness-resistance-container");

crustabriCard.appendChild(weaknessResistanceContainer);

const weakness = document.createElement("div");
weakness.id = "weakness";
weakness.textContent = ` ${crustabriModel.weakness.name}`;

const weaknessFirstType = document.createElement("span");
weaknessFirstType.classList.add("type-logo");
weaknessFirstType.style.background = `url( ${crustabriModel.weakness.firstLogo})`;
weaknessFirstType.style.backgroundSize = "cover";

weakness.appendChild(weaknessFirstType);

const weaknessSecondType = document.createElement("span");
weaknessSecondType.classList.add("type-logo");
weaknessSecondType.style.background = `url( ${crustabriModel.weakness.secondLogo})`;
weaknessSecondType.style.backgroundSize = "cover";

weakness.appendChild(weaknessSecondType);

const weaknessThirdType = document.createElement("span");
weaknessThirdType.classList.add("type-logo");
weaknessThirdType.style.background = `url( ${crustabriModel.weakness.thirdLogo})`;
weaknessThirdType.style.backgroundSize = "cover";

weakness.appendChild(weaknessThirdType);

const weaknessFourthType = document.createElement("span");
weaknessFourthType.classList.add("type-logo");
weaknessFourthType.style.background = `url( ${crustabriModel.weakness.fourthLogo})`;
weaknessFourthType.style.backgroundSize = "cover";

weakness.appendChild(weaknessFourthType);

weaknessResistanceContainer.appendChild(weakness);

const resistanceContainer = document.createElement("div");
resistanceContainer.id = "resistance";
resistanceContainer.textContent = ` ${crustabriModel.resistance.name}`;

weaknessResistanceContainer.appendChild(resistanceContainer);

const resistanceFirstLogo = document.createElement("span");
resistanceFirstLogo.classList.add("type-logo");
resistanceFirstLogo.style.background = `url(${crustabriModel.resistance.firstLogo})`;
resistanceFirstLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceFirstLogo);

const resistanceSecondLogo = document.createElement("span");
resistanceSecondLogo.classList.add("type-logo");
resistanceSecondLogo.style.background = `url(${crustabriModel.resistance.secondLogo})`;
resistanceSecondLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceSecondLogo);
