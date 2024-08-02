import { fireSparkAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/fire/fire-spark.animation.js";
import { guillotineAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/guillotine.animation.js";
import { gustAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/flight/gust.animation.js";
import { iceBeamAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/ice/ice-beam.animation.js";
import { protectAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/protect.animation.js";
import { hypnosisAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/psychic/hypnosis.animation.js";
import { quickAttackAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/quick-attack.animation.js";
import { tackleAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/tackle.animation.js";

export const attackNameList = {
  Abri: protectAnimation,
  Flammèche: fireSparkAnimation,
  "Laser Glace": iceBeamAnimation,
  Charge: tackleAnimation,
  "Vive-Attaque": quickAttackAnimation,
  Tornade: gustAnimation,
  Guillotine: guillotineAnimation,
  Hypnose: hypnosisAnimation,
};
