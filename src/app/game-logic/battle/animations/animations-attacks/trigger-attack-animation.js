import { attackNameList } from "../../../../shared/pokemon/pokemon-attacks-name-list.js";
import { pokemonCardList } from "../../../../shared/pokemon/pokemon-card-list.js";

export function triggerAttackAnimation(
  attackName,
  firstAttacker,
  secondAttacker
) {
  function getFirstAttackerCard() {
    const firstAttackerCard = pokemonCardList[firstAttacker.name];
    return firstAttackerCard;
  }

  function getSecondAttackerCard() {
    const secondAttackerCard = pokemonCardList[secondAttacker.name];
    return secondAttackerCard;
  }

  const firstAttackerCard = getFirstAttackerCard();
  const secondAttackerCard = getSecondAttackerCard();

  if (attackNameList[attackName]) {
    attackNameList[attackName](
      attackName,
      firstAttackerCard,
      secondAttackerCard
    );
  }
}
