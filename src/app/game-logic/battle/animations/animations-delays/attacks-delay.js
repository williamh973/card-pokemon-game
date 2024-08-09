import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";
import { triggerAttackAnimation } from "../animations-attacks/trigger-attack-animation/trigger-attack-animation.js";

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
    case "Abri":
      return 2000;
    case "Charge":
      return 1000;
    case "Flammèche":
      return 4000;
    case "Laser Glace":
      return 3800;
    case "Vive-Attaque":
      return 1000;
    case "Tornade":
      return 3000;
    case "RockThrow":
      return 1000;
    case "Hypnose":
      return 3000;
    case "Dévorêve":
      return 5000;
    case "Éclair":
      return 3000;
    case "Jet-Pierres":
      return 3000;
    case "Tranche":
      return 800;
    case "Hâte":
      return 2500;
    case "Griffe":
      return 600;
    case "Boul'Armure":
      return 4500;
    case "Psyko":
      return 4500;
    case "Soin":
      return 4000;
    default:
      return 3000;
  }
}

export async function sleepAttacksAnimation(attackName) {
  return new Promise((resolve) => setTimeout(resolve, attackName));
}
