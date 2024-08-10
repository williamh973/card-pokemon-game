import { animationVariables } from "../../../../../../shared/animations/animation-variables.js";

export function resetAnimationVariables() {
  return (
    (animationVariables.firstAttackerCenterX = 0),
    (animationVariables.firstAttackerCenterY = 0),
    (animationVariables.targetLocationCenterY = 0),
    (animationVariables.targetLocationCenterX = 0)
  );
}
