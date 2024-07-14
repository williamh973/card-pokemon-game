import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";
import { levelFactorForFirstAttack } from "../level-factor-first-attack.js";

export function attackThatDependsFirstAttackerLevel(
  firstAttacker,
  isSecondAttackActive,
  damages
) {
  // console.log(
  //   "isFirstAttackActive",
  //   pokemonVariables.isFirstAttackActive,
  //   "isSecondAttackActive",
  //   isSecondAttackActive
  // );
  if (
    ((firstAttacker.firstAttack.name === "Frappe Atlas" ||
      firstAttacker.firstAttack.name === "Ombre Nocturne") &&
      pokemonVariables.isFirstAttackActive) ||
    ((firstAttacker.secondAttack.name === "Frappe Atlas" ||
      firstAttacker.secondAttack.name === "Ombre Nocturne") &&
      isSecondAttackActive)
  ) {
    // console.log(
    //   firstAttacker.firstAttack.name,
    //   firstAttacker.secondAttack.name
    // );
    let getLevelFactorForFirstAttack = levelFactorForFirstAttack(
      firstAttacker,
      damages
    );
    damages = getLevelFactorForFirstAttack;
    return damages;
  } else {
    // console.log("la condition ne passe pas", damages);
    return damages;
  }
}
