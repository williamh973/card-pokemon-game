import { roucoolModel } from "../models/roucool.model.js";

export const roucoolCard = document.createElement("div");
roucoolCard.classList.add("card-main");
roucoolCard.id = "card-roucool";

const roucoolCardHead = document.createElement("div");
roucoolCardHead.classList.add("card-head");

const roucoolCardTitle = document.createElement("span");
roucoolCardTitle.classList.add("title");
roucoolCardTitle.textContent = roucoolModel.name;
roucoolCardHead.appendChild(roucoolCardTitle);

export const hp = document.createElement("span");
hp.classList.add("hp");
hp.id = "roucoolHealth";
hp.textContent = `${roucoolModel.stats.hp}`;
roucoolCardHead.appendChild(hp);

const pvText = document.createElement("span");
pvText.classList.add("pv-text");
pvText.id = "pv-text";
pvText.textContent = `Pv`;

const roucoolCardFirstType = document.createElement("span");
roucoolCardFirstType.classList.add("type-logo");
roucoolCardFirstType.id = "roucool-type";
roucoolCardFirstType.style.background = `url( ${roucoolModel.firstLogo})`;
roucoolCardFirstType.style.backgroundSize = "cover";

const roucoolCardSecondType = document.createElement("span");
roucoolCardSecondType.classList.add("type-logo");
roucoolCardSecondType.id = "roucool-type";
roucoolCardSecondType.style.background = `url( ${roucoolModel.secondLogo})`;
roucoolCardSecondType.style.backgroundSize = "cover";

const containerHpAndType = document.createElement("div");
containerHpAndType.classList.add("container-hp-logoType");

roucoolCardHead.appendChild(containerHpAndType);

containerHpAndType.appendChild(hp);
containerHpAndType.appendChild(pvText);

containerHpAndType.appendChild(roucoolCardFirstType);
containerHpAndType.appendChild(roucoolCardSecondType);

roucoolCard.appendChild(roucoolCardHead);

const roucoolCardImage = document.createElement("div");
roucoolCardImage.classList.add("image");
roucoolCardImage.style.backgroundImage = `url(${roucoolModel.image})`;

roucoolCardImage.style.backgroundSize = "cover";

roucoolCard.appendChild(roucoolCardImage);

const attacksContainer = document.createElement("div");
attacksContainer.classList.add("attacks-container");

roucoolCard.appendChild(attacksContainer);

const attackTypeNameStrengthCont = document.createElement("span");
attackTypeNameStrengthCont.classList.add("attackType-name-strength-container");

const attackType = document.createElement("span");
attackType.classList.add("type-logo");

attackType.style.background = `url( ${roucoolModel.firstAttack.logo})`;

attackType.style.backgroundSize = "cover";

const roucoolFirstAttackNameAndResume = document.createElement("div");
roucoolFirstAttackNameAndResume.classList.add("attack-and-resume");

roucoolFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);

const firstAttackName = document.createElement("div");
firstAttackName.classList.add("attack-name");
firstAttackName.textContent = ` ${roucoolModel.firstAttack.name}`;

const firstAttackStrength = document.createElement("div");
firstAttackStrength.classList.add("attack-strength");
firstAttackStrength.textContent = ` ${roucoolModel.firstAttack.strength}`;

const roucoolFirstAttackResume = document.createElement("div");
roucoolFirstAttackResume.classList.add("attack-resume");
roucoolFirstAttackResume.textContent = ` ${roucoolModel.firstAttack.resume}`;

const secondAttackTypeNameStrengthCont = document.createElement("span");
secondAttackTypeNameStrengthCont.classList.add(
  "attackType-name-strength-container",
);

const roucoolSecondAttackAndResume = document.createElement("div");
roucoolSecondAttackAndResume.classList.add("attack-and-resume");

const secondAttackType = document.createElement("span");
secondAttackType.classList.add("type-logo");

secondAttackType.style.background = `url( ${roucoolModel.secondAttack.logo})`;

secondAttackType.style.backgroundSize = "cover";

const secondAttackName = document.createElement("div");
secondAttackName.classList.add("attack-name");
secondAttackName.textContent = ` ${roucoolModel.secondAttack.name}`;

const secondAttackStrength = document.createElement("div");
secondAttackStrength.classList.add("attack-strength");
secondAttackStrength.textContent = ` ${roucoolModel.secondAttack.strength}`;

const roucoolSecondAttackResume = document.createElement("div");
roucoolSecondAttackResume.classList.add("attack-resume");

roucoolSecondAttackResume.textContent = ` ${roucoolModel.secondAttack.resume}`;

attacksContainer.appendChild(roucoolFirstAttackNameAndResume);

attackTypeNameStrengthCont.appendChild(attackType);
attackTypeNameStrengthCont.appendChild(firstAttackName);
attackTypeNameStrengthCont.appendChild(firstAttackStrength);

roucoolFirstAttackNameAndResume.appendChild(roucoolFirstAttackResume);

attacksContainer.appendChild(roucoolSecondAttackAndResume);

roucoolSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);

roucoolSecondAttackAndResume.appendChild(roucoolSecondAttackResume);

const weaknessResistanceContainer = document.createElement("div");
weaknessResistanceContainer.classList.add("weakness-resistance-container");

roucoolCard.appendChild(weaknessResistanceContainer);

const weakness = document.createElement("div");
weakness.id = "weakness";
weakness.textContent = ` ${roucoolModel.weakness.name}`;

weaknessResistanceContainer.appendChild(weakness);

const weaknessFirstLogo = document.createElement("span");
weaknessFirstLogo.classList.add("type-logo");
weaknessFirstLogo.style.background = `url( ${roucoolModel.weakness.firstLogo})`;
weaknessFirstLogo.style.backgroundSize = "cover";

weakness.appendChild(weaknessFirstLogo);

const weaknessSecondLogo = document.createElement("span");
weaknessSecondLogo.classList.add("type-logo");
weaknessSecondLogo.style.background = `url( ${roucoolModel.weakness.secondLogo})`;
weaknessSecondLogo.style.backgroundSize = "cover";

weakness.appendChild(weaknessSecondLogo);

const weaknessThirdLogo = document.createElement("span");
weaknessThirdLogo.classList.add("type-logo");
weaknessThirdLogo.style.background = `url( ${roucoolModel.weakness.thirdLogo})`;
weaknessThirdLogo.style.backgroundSize = "cover";

weakness.appendChild(weaknessThirdLogo);

const resistance = document.createElement("div");
resistance.id = "resistance";
resistance.textContent = ` ${roucoolModel.resistance.name}`;

weaknessResistanceContainer.appendChild(resistance);

const resistanceFirstLogo = document.createElement("span");
resistanceFirstLogo.classList.add("type-logo");
resistanceFirstLogo.style.background = `url(${roucoolModel.resistance.firstLogo})`;
resistanceFirstLogo.style.backgroundSize = "cover";

resistance.appendChild(resistanceFirstLogo);

const resistanceSecondLogo = document.createElement("span");
resistanceSecondLogo.classList.add("type-logo");
resistanceSecondLogo.style.background = `url(${roucoolModel.resistance.secondLogo})`;
resistanceSecondLogo.style.backgroundSize = "cover";

resistance.appendChild(resistanceSecondLogo);

const resistanceThirdLogo = document.createElement("span");
resistanceThirdLogo.classList.add("type-logo");
resistanceThirdLogo.style.background = `url(${roucoolModel.resistance.thirdLogo})`;
resistanceThirdLogo.style.backgroundSize = "cover";

resistance.appendChild(resistanceThirdLogo);

const resistanceFourthLogo = document.createElement("span");
resistanceFourthLogo.classList.add("type-logo");
resistanceFourthLogo.style.background = `url(${roucoolModel.resistance.fourthLogo})`;
resistanceFourthLogo.style.backgroundSize = "cover";

resistance.appendChild(resistanceFourthLogo);
