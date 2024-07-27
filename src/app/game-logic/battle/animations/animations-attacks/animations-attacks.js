import { attackNameList } from "../../../../shared/pokemon/pokemon-attacks-name-list.js";
import { pokemonCardList } from "../../../../shared/pokemon/pokemon-card-list.js";

export function startAttackAnimation(attackName, pokemon) {
  function getFirstAttackerCard() {
    const firstAttackerCard = pokemonCardList[pokemon.name];
    return firstAttackerCard;
  }

  const firstAttackerCard = getFirstAttackerCard();

  if (attackNameList[attackName]) {
    attackNameList[attackName](attackName, firstAttackerCard);
  }
}
