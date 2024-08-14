import { triggerAttackAnimation } from "../animations-attacks/trigger-attack-animation/trigger-attack-animation.js";

export function getAttackDelayAndtriggerAnimations(
  attackName,
  firstAttacker,
  secondAttacker
) {
  triggerAttackAnimation(attackName, firstAttacker, secondAttacker);

  switch (attackName) {
    case "Abri":
      return 2000;
    case "Flammèche":
      return 4000;
    case "Laser Glace":
      return 3800;
    case "Charge":
      return 1000;
    case "Vive-Attaque":
      return 500;
    case "Tornade":
      return 3000;
    case "Guillotine":
      return 500;
    case "Hypnose":
      return 3000;
    case "Dévorêve":
      return 5000;
    case "Éclair":
      return 3000;
    case "Jet-Pierres":
      return 1300;
    case "Tranche":
      return 800;
    case "Hâte":
      return 2500;
    case "Griffe":
      return 500;
    case "Boul'Armure":
      return 4000;
    case "Psyko":
      return 5000;
    case "Soin":
      return 4000;
    case "Léchouille":
      return 800;
    case "Ombre Nocturne":
      return 2000;
    case "Puissance":
      return 2500;
    case "Casse-Brique":
      return 2000;
    case "Dard-Venin":
      return 1800;
    case "Picpic":
      return 1300;
    case "Malédiction":
      return 4000;
    default:
      return 3000;
  }
}
