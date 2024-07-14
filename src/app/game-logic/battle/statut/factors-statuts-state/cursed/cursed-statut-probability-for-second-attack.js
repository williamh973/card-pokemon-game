import { cursedStatut } from "./cursed-statut.js";
import { updateDisplayPokemonHp } from "../../../update-display-Pokemon-hp.js";

export function cursedStatut100PercentProbabililityForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  secondAttackType
) {
  if (
    isSecondAttackActive &&
    secondAttackType === "malus" &&
    firstAttacker.secondAttack.name === "Malédiction" &&
    !secondAttacker.secondaryStatut.isCursed
  ) {
    let percentage = 50;
    let value = (percentage / 100) * firstAttacker.stats.hpMax;
    const hpValue = Math.round(value);
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= 100 && firstAttacker.stats.hp > hpValue) {
      cursedStatut(firstAttacker, secondAttacker);
      updateDisplayPokemonHp(firstAttacker, secondAttacker);
    }
  }
}