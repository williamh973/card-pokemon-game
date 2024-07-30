import { openDialogueWhenPokemonMissAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { disabledProtectCapacity } from "../protect-factors-attacks/protect-detect-capacity-actived.js";
import { applyStatChangeFactors } from "../../../damages-attacks/pokemon-makes-attack/calculate-damages-attacks/stat-change-factors.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../../../../../components/battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";

const randomNumber = Math.floor(Math.random() * 100) + 1;
const possibleAttackNameList = [
  "Malédiction",
  "Onde Folie",
  "Hypnose",
  "Rugissement",
];

export async function handleStatusAttackWhenProtectOrDetectCapacityActived(
  firstAttacker,
  firstAttackerAttack,
  secondAttacker
) {
  if (randomNumber <= firstAttackerAttack.precision) {
    if (possibleAttackNameList.includes(firstAttackerAttack.name)) {
      await openDialogueWhenPokemonProtectingHimself(secondAttacker);
      disabledProtectCapacity();
      return 0;
    }

    await applyStatChangeFactors(
      firstAttacker,
      firstAttackerAttack,
      secondAttacker
    );
  } else {
    await openDialogueWhenPokemonMissAttack(firstAttacker);
    disabledProtectCapacity();
    return 0;
  }
}
