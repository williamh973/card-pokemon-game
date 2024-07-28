import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";
import { triggerAttackAnimation } from "../animations-attacks/trigger-attack-animation.js";

export const handleAttacksDelayAndAnimations = (
  firstAttacker,
  secondAttacker
) => {
  const pokemonAttack = pokemonVariables.isFirstAttackActive
    ? firstAttacker.firstAttack.name
    : firstAttacker.secondAttack.name;

  const pokemontAttackName = pokemonAttack;

  const pokemonAttackDelay = getAttackDelayAndtriggerAnimations(
    pokemontAttackName,
    firstAttacker,
    secondAttacker
  );

  return {
    pokemontAttackName,
    pokemonAttackDelay,
  };
};

function getAttackDelayAndtriggerAnimations(
  attackName,
  firstAttacker,
  secondAttacker
) {
  triggerAttackAnimation(attackName, firstAttacker, secondAttacker);

  switch (attackName) {
    case "Charge":
      console.log("Charge", attackName);
      return 3000;
    case "Jet-Pierres":
      console.log("Jet-Pierres", attackName);
      return 3000;
    case "Hâte":
      console.log("Hâte", attackName);
      return 3000;
    case "Tranche":
      console.log("Tranche", attackName);
      return 3000;
    case "Flammèche":
      console.log("Flammèche", attackName);
      return 3000;
    case "Abri":
      console.log("Abri", attackName);
      return 3000;
    case "Dévorêve":
      console.log("Dévorêve", attackName);
      return 3000;
    default:
      console.log("pas dans la liste :", attackName);
      return 3000;
  }
}

export function sleepAttacksAnimation(attackName) {
  return new Promise((resolve) => setTimeout(resolve, attackName));
}
