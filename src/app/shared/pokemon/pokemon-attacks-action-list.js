import { fireSparkAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/fire/fire-spark/fire-spark.animation.js";
import { guillotineAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/guillotine.animation.js";
import { gustAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/flight/gust/gust.animation.js";
import { iceBeamAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/ice/ice-beam.animation.js";
import { protectAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/protect/protect.animation.js";
import { hypnosisAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/psychic/hypnosis/hypnosis.animation.js";
import { quickAttackAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/quick-attack.animation.js";
import { tackleAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/tackle.animation.js";
import { dreamEaterAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/psychic/dream-eater/dream-eater-animation.js";
import { thunderShockAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/electrical/thunder-shock/thunder-shock.animation.js";
import { rockThrowAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/rock/rock-throw/rock-throw.animation.js";
import { slashAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/slash.animation.js";
import { agilityAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/agility.animation.js";
import { scratchAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/scratch.animation.js";
import { defenseCurlAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/defense-curl/defense-curl.animation.js";
import { psychicAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/psychic/psychic/psychic.animation.js";
import { recoverAnimation } from "../../game-logic/battle/animations/animations-attacks/trigger-attack-animation/attack-actions/normal/recover/recover.animation.js";

export const attackNameList = {
  Abri: protectAnimation,
  Flammèche: fireSparkAnimation,
  "Laser Glace": iceBeamAnimation,
  Charge: tackleAnimation,
  "Vive-Attaque": quickAttackAnimation,
  Tornade: gustAnimation,
  Guillotine: guillotineAnimation,
  Hypnose: hypnosisAnimation,
  Dévorêve: dreamEaterAnimation,
  Éclair: thunderShockAnimation,
  "Jet-Pierres": rockThrowAnimation,
  Tranche: slashAnimation,
  Hâte: agilityAnimation,
  Griffe: scratchAnimation,
  "Boul'Armure": defenseCurlAnimation,
  Psyko: psychicAnimation,
  Soin: recoverAnimation,
};
