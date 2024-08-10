import { animationVariables } from "../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../shared/dom/dom-elements.js";

export function getTargetCoordonates(
  firstAttackerCard,
  leftLocationRect,
  rightLocationRect
) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    return (animationVariables.targetLocationCenterX =
      animationVariables.firstAttackerCenterX +
      leftLocationRect.width / 2 +
      rightLocationRect.left -
      leftLocationRect.right +
      rightLocationRect.width / 2);
  } else {
    return (animationVariables.targetLocationCenterX =
      animationVariables.firstAttackerCenterX -
      rightLocationRect.width / 2 -
      rightLocationRect.left +
      leftLocationRect.left +
      leftLocationRect.width / 2);
  }
}
