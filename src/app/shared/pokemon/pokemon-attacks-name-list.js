import { fireSparkAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/fire-spark.animation.js";
import { iceBeamAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/ice-beam.animation.js";
import { protectAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/protect.animation.js";

export const attackNameList = {
  Abri: protectAnimation,
  Flammèche: fireSparkAnimation,
  "Laser Glace": iceBeamAnimation,
};
