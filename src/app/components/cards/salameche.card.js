import { salamecheModel } from "../models/salameche.model.js";

export const salamecheCard = document.createElement("div");
salamecheCard.classList.add("card-main");
salamecheCard.id = "card-salameche";

const salamecheCardHead = document.createElement("div");
salamecheCardHead.classList.add("card-head");

const salamecheCardTitle = document.createElement("span");
salamecheCardTitle.classList.add("title");
salamecheCardTitle.textContent = salamecheModel.name;
salamecheCardHead.appendChild(salamecheCardTitle);

export const hp = document.createElement("span");
hp.classList.add("hp");
hp.id = "salamecheHealth";
hp.textContent = `${salamecheModel.stats.hp}`;
salamecheCardHead.appendChild(hp);

const pvText = document.createElement("span");
pvText.classList.add("pv-text");
pvText.id = "pv-text";
pvText.textContent = `Pv`;

const salamecheCardType = document.createElement("span");
salamecheCardType.classList.add("type-logo");
salamecheCardType.id = "salameche-type";
salamecheCardType.style.background = `url( ${salamecheModel.logo})`;
salamecheCardType.style.backgroundSize = "cover";

const containerHpAndType = document.createElement("div");
containerHpAndType.classList.add("container-hp-logoType");

salamecheCardHead.appendChild(containerHpAndType);

containerHpAndType.appendChild(hp);
containerHpAndType.appendChild(pvText);
containerHpAndType.appendChild(salamecheCardType);

salamecheCard.appendChild(salamecheCardHead);

const salamecheCardImage = document.createElement("div");
salamecheCardImage.classList.add("image");
salamecheCardImage.style.backgroundImage = `url(${salamecheModel.image})`;

salamecheCardImage.style.backgroundSize = "cover";

salamecheCard.appendChild(salamecheCardImage);

const attacksContainer = document.createElement("div");
attacksContainer.classList.add("attacks-container");

salamecheCard.appendChild(attacksContainer);

const attackTypeNameStrengthCont = document.createElement("span");
attackTypeNameStrengthCont.classList.add("attackType-name-strength-container");

const attackType = document.createElement("span");
attackType.classList.add("type-logo");

attackType.style.background = `url( ${salamecheModel.firstAttack.logo})`;

attackType.style.backgroundSize = "cover";

const salamecheFirstAttackNameAndResume = document.createElement("div");
salamecheFirstAttackNameAndResume.classList.add("attack-and-resume");

salamecheFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);

const firstAttackName = document.createElement("div");
firstAttackName.classList.add("attack-name");
firstAttackName.textContent = ` ${salamecheModel.firstAttack.name}`;

const firstAttackStrength = document.createElement("div");
firstAttackStrength.classList.add("attack-strength");
firstAttackStrength.textContent = ` ${salamecheModel.firstAttack.strength}`;

const salamecheFirstAttackResume = document.createElement("div");
salamecheFirstAttackResume.classList.add("attack-resume");
salamecheFirstAttackResume.textContent = ` ${salamecheModel.firstAttack.resume}`;

const secondAttackTypeNameStrengthCont = document.createElement("span");
secondAttackTypeNameStrengthCont.classList.add(
  "attackType-name-strength-container",
);

const salamecheSecondAttackAndResume = document.createElement("div");
salamecheSecondAttackAndResume.classList.add("attack-and-resume");

const secondAttackType = document.createElement("span");
secondAttackType.classList.add("type-logo");

secondAttackType.style.background = `url( ${salamecheModel.secondAttack.logo})`;

secondAttackType.style.backgroundSize = "cover";

const secondAttackName = document.createElement("div");
secondAttackName.classList.add("attack-name");
secondAttackName.textContent = ` ${salamecheModel.secondAttack.name}`;

const secondAttackStrength = document.createElement("div");
secondAttackStrength.classList.add("attack-strength");
secondAttackStrength.textContent = ` ${salamecheModel.secondAttack.strength}`;

const salamecheSecondAttackResume = document.createElement("div");
salamecheSecondAttackResume.classList.add("attack-resume");

salamecheSecondAttackResume.textContent = ` ${salamecheModel.secondAttack.resume}`;

attacksContainer.appendChild(salamecheFirstAttackNameAndResume);

attackTypeNameStrengthCont.appendChild(attackType);
attackTypeNameStrengthCont.appendChild(firstAttackName);
attackTypeNameStrengthCont.appendChild(firstAttackStrength);

salamecheFirstAttackNameAndResume.appendChild(salamecheFirstAttackResume);

attacksContainer.appendChild(salamecheSecondAttackAndResume);

salamecheSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);

salamecheSecondAttackAndResume.appendChild(salamecheSecondAttackResume);

const weaknessResistanceContainer = document.createElement("div");
weaknessResistanceContainer.classList.add("weakness-resistance-container");

salamecheCard.appendChild(weaknessResistanceContainer);

const weakness = document.createElement("div");
weakness.id = "weakness";
weakness.textContent = ` ${salamecheModel.weakness.name}`;

const weaknessFirstType = document.createElement("span");
weaknessFirstType.classList.add("type-logo");
weaknessFirstType.style.background = `url( ${salamecheModel.weakness.firstLogo})`;
weaknessFirstType.style.backgroundSize = "cover";

weakness.appendChild(weaknessFirstType);

const weaknessSecondType = document.createElement("span");
weaknessSecondType.classList.add("type-logo");
weaknessSecondType.style.background = `url( ${salamecheModel.weakness.secondLogo})`;
weaknessSecondType.style.backgroundSize = "cover";

weakness.appendChild(weaknessSecondType);

const weaknessThirdType = document.createElement("span");
weaknessThirdType.classList.add("type-logo");
weaknessThirdType.style.background = `url( ${salamecheModel.weakness.thirdLogo})`;
weaknessThirdType.style.backgroundSize = "cover";

weakness.appendChild(weaknessThirdType);

weaknessResistanceContainer.appendChild(weakness);

const resistanceContainer = document.createElement("div");
resistanceContainer.id = "resistance";
resistanceContainer.textContent = ` ${salamecheModel.resistance.name}`;

weaknessResistanceContainer.appendChild(resistanceContainer);

const resistanceFirstLogo = document.createElement("span");
resistanceFirstLogo.classList.add("type-logo");
resistanceFirstLogo.style.background = `url(${salamecheModel.resistance.firstLogo})`;
resistanceFirstLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceFirstLogo);

const resistanceSecondLogo = document.createElement("span");
resistanceSecondLogo.classList.add("type-logo");
resistanceSecondLogo.style.background = `url(${salamecheModel.resistance.secondLogo})`;
resistanceSecondLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceSecondLogo);

const resistanceThirdLogo = document.createElement("span");
resistanceThirdLogo.classList.add("type-logo");
resistanceThirdLogo.style.background = `url(${salamecheModel.resistance.thirdLogo})`;
resistanceThirdLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceThirdLogo);

const resistanceFourthLogo = document.createElement("span");
resistanceFourthLogo.classList.add("type-logo");
resistanceFourthLogo.style.background = `url(${salamecheModel.resistance.fourthLogo})`;
resistanceFourthLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceFourthLogo);

const resistanceFifthLogo = document.createElement("span");
resistanceFifthLogo.classList.add("type-logo");
resistanceFifthLogo.style.background = `url(${salamecheModel.resistance.fifthLogo})`;
resistanceFifthLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceFifthLogo);

const resistanceSixthLogo = document.createElement("span");
resistanceSixthLogo.classList.add("type-logo");
resistanceSixthLogo.style.background = `url(${salamecheModel.resistance.sixthLogo})`;
resistanceSixthLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceSixthLogo);
