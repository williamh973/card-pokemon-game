import { spectrumModel } from "../models/spectrum.model.js";

export const spectrumCard = document.createElement("div");
spectrumCard.classList.add("card-main");
spectrumCard.id = "card-spectrum";

const spectrumCardHead = document.createElement("div");
spectrumCardHead.classList.add("card-head");

const spectrumCardTitle = document.createElement("span");
spectrumCardTitle.classList.add("title");
spectrumCardTitle.textContent = spectrumModel.name;
spectrumCardHead.appendChild(spectrumCardTitle);

export const hp = document.createElement("span");
hp.classList.add("hp");
hp.id = "spectrumHealth";
hp.textContent = `${spectrumModel.stats.hp}`;
spectrumCardHead.appendChild(hp);

const pvText = document.createElement("span");
pvText.classList.add("pv-text");
pvText.id = "pv-text";
pvText.textContent = `Pv`;

const containerHpAndType = document.createElement("div");
containerHpAndType.classList.add("container-hp-logoType");

spectrumCardHead.appendChild(containerHpAndType);

containerHpAndType.appendChild(hp);
containerHpAndType.appendChild(pvText);

const spectrumCardFirstLogo = document.createElement("span");
spectrumCardFirstLogo.classList.add("type-logo");
spectrumCardFirstLogo.id = "spectrum-type";
spectrumCardFirstLogo.style.background = `url( ${spectrumModel.firstLogo})`;
spectrumCardFirstLogo.style.backgroundSize = "cover";

containerHpAndType.appendChild(spectrumCardFirstLogo);

const spectrumCardSecondLogo = document.createElement("span");
spectrumCardSecondLogo.classList.add("type-logo");
spectrumCardSecondLogo.id = "spectrum-type";
spectrumCardSecondLogo.style.background = `url( ${spectrumModel.secondLogo})`;
spectrumCardSecondLogo.style.backgroundSize = "cover";

containerHpAndType.appendChild(spectrumCardSecondLogo);

spectrumCard.appendChild(spectrumCardHead);

const spectrumCardImage = document.createElement("div");
spectrumCardImage.classList.add("image");
spectrumCardImage.style.backgroundImage = `url(${spectrumModel.image})`;

spectrumCardImage.style.backgroundSize = "cover";

spectrumCard.appendChild(spectrumCardImage);

const attacksContainer = document.createElement("div");
attacksContainer.classList.add("attacks-container");

spectrumCard.appendChild(attacksContainer);

const attackTypeNameStrengthCont = document.createElement("span");
attackTypeNameStrengthCont.classList.add("attackType-name-strength-container");

const attackType = document.createElement("span");
attackType.classList.add("type-logo");

attackType.style.background = `url( ${spectrumModel.firstAttack.logo})`;

attackType.style.backgroundSize = "cover";

const spectrumFirstAttackNameAndResume = document.createElement("div");
spectrumFirstAttackNameAndResume.classList.add("attack-and-resume");

spectrumFirstAttackNameAndResume.appendChild(attackTypeNameStrengthCont);

const firstAttackName = document.createElement("div");
firstAttackName.classList.add("attack-name");
firstAttackName.textContent = ` ${spectrumModel.firstAttack.name}`;

const firstAttackStrength = document.createElement("div");
firstAttackStrength.classList.add("attack-strength");
firstAttackStrength.textContent = ` ${spectrumModel.firstAttack.strength}`;

const spectrumFirstAttackResume = document.createElement("div");
spectrumFirstAttackResume.classList.add("attack-resume");
spectrumFirstAttackResume.textContent = ` ${spectrumModel.firstAttack.resume}`;

const secondAttackTypeNameStrengthCont = document.createElement("span");
secondAttackTypeNameStrengthCont.classList.add(
  "attackType-name-strength-container",
);

const spectrumSecondAttackAndResume = document.createElement("div");
spectrumSecondAttackAndResume.classList.add("attack-and-resume");

const secondAttackType = document.createElement("span");
secondAttackType.classList.add("type-logo");

secondAttackType.style.background = `url( ${spectrumModel.secondAttack.logo})`;

secondAttackType.style.backgroundSize = "cover";

const secondAttackName = document.createElement("div");
secondAttackName.classList.add("attack-name");
secondAttackName.textContent = ` ${spectrumModel.secondAttack.name}`;

const secondAttackStrength = document.createElement("div");
secondAttackStrength.classList.add("attack-strength");
secondAttackStrength.textContent = ` ${spectrumModel.secondAttack.strength}`;

const spectrumSecondAttackResume = document.createElement("div");
spectrumSecondAttackResume.classList.add("attack-resume");

spectrumSecondAttackResume.textContent = ` ${spectrumModel.secondAttack.resume}`;

attacksContainer.appendChild(spectrumFirstAttackNameAndResume);

attackTypeNameStrengthCont.appendChild(attackType);
attackTypeNameStrengthCont.appendChild(firstAttackName);
attackTypeNameStrengthCont.appendChild(firstAttackStrength);

spectrumFirstAttackNameAndResume.appendChild(spectrumFirstAttackResume);

attacksContainer.appendChild(spectrumSecondAttackAndResume);

spectrumSecondAttackAndResume.appendChild(secondAttackTypeNameStrengthCont);

secondAttackTypeNameStrengthCont.appendChild(secondAttackType);
secondAttackTypeNameStrengthCont.appendChild(secondAttackName);
secondAttackTypeNameStrengthCont.appendChild(secondAttackStrength);

spectrumSecondAttackAndResume.appendChild(spectrumSecondAttackResume);

const weaknessResistanceContainer = document.createElement("div");
weaknessResistanceContainer.classList.add("weakness-resistance-container");

spectrumCard.appendChild(weaknessResistanceContainer);

const weakness = document.createElement("div");
weakness.id = "weakness";
weakness.textContent = ` ${spectrumModel.weakness.name}`;

const weaknessFirstType = document.createElement("span");
weaknessFirstType.classList.add("type-logo");
weaknessFirstType.style.background = `url( ${spectrumModel.weakness.firstLogo})`;
weaknessFirstType.style.backgroundSize = "cover";

weakness.appendChild(weaknessFirstType);

const weaknessSecondType = document.createElement("span");
weaknessSecondType.classList.add("type-logo");
weaknessSecondType.style.background = `url( ${spectrumModel.weakness.secondLogo})`;
weaknessSecondType.style.backgroundSize = "cover";

weakness.appendChild(weaknessSecondType);

const weaknessThirdType = document.createElement("span");
weaknessThirdType.classList.add("type-logo");
weaknessThirdType.style.background = `url( ${spectrumModel.weakness.thirdLogo})`;
weaknessThirdType.style.backgroundSize = "cover";

weakness.appendChild(weaknessThirdType);

const weaknessFourthType = document.createElement("span");
weaknessFourthType.classList.add("type-logo");
weaknessFourthType.style.background = `url( ${spectrumModel.weakness.fourthLogo})`;
weaknessFourthType.style.backgroundSize = "cover";

weakness.appendChild(weaknessFourthType);

weaknessResistanceContainer.appendChild(weakness);

const resistanceContainer = document.createElement("div");
resistanceContainer.id = "resistance";
resistanceContainer.textContent = ` ${spectrumModel.resistance.name}`;

weaknessResistanceContainer.appendChild(resistanceContainer);

const resistanceFirstLogo = document.createElement("span");
resistanceFirstLogo.classList.add("type-logo");
resistanceFirstLogo.style.background = `url(${spectrumModel.resistance.firstLogo})`;
resistanceFirstLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceFirstLogo);

const resistanceSecondLogo = document.createElement("span");
resistanceSecondLogo.classList.add("type-logo");
resistanceSecondLogo.style.background = `url(${spectrumModel.resistance.secondLogo})`;
resistanceSecondLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceSecondLogo);

const resistanceThirdLogo = document.createElement("span");
resistanceThirdLogo.classList.add("type-logo");
resistanceThirdLogo.style.background = `url(${spectrumModel.resistance.thirdLogo})`;
resistanceThirdLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceThirdLogo);

const resistanceFourthLogo = document.createElement("span");
resistanceFourthLogo.classList.add("type-logo");
resistanceFourthLogo.style.background = `url(${spectrumModel.resistance.fourthLogo})`;
resistanceFourthLogo.style.backgroundSize = "cover";

resistanceContainer.appendChild(resistanceFourthLogo);
