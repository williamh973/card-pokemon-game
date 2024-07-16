import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";
import { addAttackAnimation } from "../animations-attacks/animations-attacks.js";

export const handleAttacksDelayAndAnimations = (pokemon) => {
  const pokemonAttack = pokemonVariables.isFirstAttackActive
    ? pokemon.firstAttack.name
    : pokemon.secondAttack.name;

  const pokemontAttackName = pokemonAttack;

  const pokemonAttackDelay =
    getAttackDelayAndStartAnimations(pokemontAttackName);

  return {
    pokemontAttackName,
    pokemonAttackDelay,
  };
};

const getAttackDelayAndStartAnimations = (attackName) => {
  switch (attackName) {
    case "Charge":
      console.log("Charge :", attackName);
      return 4000;
    case "Jet-Pierres":
      console.log("Jet-Pierres :", attackName);
      return 4000;
    case "Hâte":
      console.log("Hâte :", attackName);
      return 4000;
    case "Tranche":
      console.log("Tranche :", attackName);
      return 4000;
    case "Flammèche":
      // console.log("Flammèche :", attackName);
      return 4000;
    default:
      // console.log("not in attacks list :", attackName);
      return 4000;
  }
};

export const sleepAttacksAnimation = (attackName) => {
  return new Promise((resolve) => setTimeout(resolve, attackName));
};
