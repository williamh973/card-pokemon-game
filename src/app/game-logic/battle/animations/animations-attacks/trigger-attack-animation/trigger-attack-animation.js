import { attackActionList } from "../../../../../shared/pokemon/pokemon-attacks-action-list.js";
import { pokemonCardList } from "../../../../../shared/pokemon/pokemon-card-list.js";

export function triggerAttackAnimation(
  attackName,
  firstAttacker,
  secondAttacker
) {
  function getPokemonCard(pokemonName) {
    const pokemonCard = pokemonCardList[pokemonName];
    return pokemonCard;
  }

  const firstAttackerCard = getPokemonCard(firstAttacker.name);
  const secondAttackerCard = getPokemonCard(secondAttacker.name);

  if (attackActionList[attackName]) {
    attackActionList[attackName](
      attackName,
      firstAttackerCard,
      secondAttackerCard
    );
  }
}
