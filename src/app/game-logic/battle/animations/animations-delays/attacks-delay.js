import { addAttackAnimation } from "../animations-attacks/animations-attacks.js";
import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";
import { dialogueConstant } from "../../../../shared/battle/dialogues/dialogue-constant.js";

export const handleAttacksDelayAndAnimations = (
  firstAttacker,
  secondAttacker
) => {
  const firstAttackerFirstAttackName = firstAttacker.firstAttack.name;
  const firstAttackerSecondAttackName = firstAttacker.secondAttack.name;

  const firstAttackerFirstAttackDelay = getAttackDelayAndStartAnimations(
    firstAttackerFirstAttackName
  );
  const firstAttackerSecondAttackDelay = getAttackDelayAndStartAnimations(
    firstAttackerSecondAttackName
  );

  const secondAttackerFirstAttackName = secondAttacker.firstAttack.name;
  const secondAttackerSecondAttackName = secondAttacker.secondAttack.name;

  const secondAttackerFirstAttackDelay = getAttackDelayAndStartAnimations(
    secondAttackerFirstAttackName
  );
  const secondAttackerSecondAttackDelay = getAttackDelayAndStartAnimations(
    secondAttackerSecondAttackName
  );

  return {
    firstAttackerFirstAttackName,
    firstAttackerSecondAttackName,
    firstAttackerFirstAttackDelay,
    firstAttackerSecondAttackDelay,
    secondAttackerFirstAttackName,
    secondAttackerSecondAttackName,
    secondAttackerFirstAttackDelay,
    secondAttackerSecondAttackDelay,
  };
};

const getAttackDelayAndStartAnimations = (attackName) => {
  switch (attackName) {
    case "Charge":
      // console.log("Charge :", attackName);
      return 4000;
    case "Jet-Pierres":
      // console.log("Jet-Pierres :", attackName);
      return 4000;
    case "Hâte":
      // console.log("Hâte :", attackName);
      return 4000;
    case "Tranche":
      // console.log("Tranche :", attackName);
      return 4000;
    case "Flammèche":
      // console.log("Flammèche :", attackName);
      return 4000;
    default:
      // console.log("not in attacks list :", attackName);
      return 4000;
  }
};

export const sleepAttacksAnimation = (attackName) => {
  return new Promise((resolve) => setTimeout(resolve, attackName));
};
