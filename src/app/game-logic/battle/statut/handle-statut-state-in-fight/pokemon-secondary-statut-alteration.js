import { disabledProtectCapacity } from "../../attacks/factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import { openDialogueWhenPokemonConfusedStatut } from "../../../../components/battle-dialogues/dialogues/pokemon-confused-statut.dialogue.js";
import { openDialogueWhenPokemonHurtByConfusing } from "../../../../components/battle-dialogues/dialogues/pokemon-hurt-by-confusing.js";
import { openDialogueWhenPokemonNoLongerConfused } from "../../../../components/battle-dialogues/dialogues/pokemon-no-longer-confused.js";
import { openDialogueWhenPokemonHurtsByCurse } from "../../../../components/battle-dialogues/dialogues/pokemon-hurts-by-curse.js";
import { isPokemonConfused } from "./confused/pokemon-confused.js";
import { isPokemonNotConfused } from "./confused/pokemon-not-confused.js";
import { isPokemonScared } from "./scared/pokemon-scared.js";

let confusingCount = 0;
let randomNumber = Math.random();

export async function secondaryStatutConfusingAlteration(pokemon) {
  switch (pokemon.secondaryStatut.isConfused) {
    case true:
      confusingCount++;

      randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        isPokemonConfused();
        await openDialogueWhenPokemonConfusedStatut(pokemon);
        await openDialogueWhenPokemonHurtByConfusing(pokemon);
        disabledProtectCapacity();

        let percentage = 10;
        let decreaseValue = (percentage / 100) * pokemon.stats.hpMax;
        const newDecreaseValue = Math.round(decreaseValue);

        pokemon.stats.hp -= newDecreaseValue;
      } else {
        await openDialogueWhenPokemonConfusedStatut(pokemon);
        isPokemonNotConfused();
      }

      if (confusingCount === 4) {
        await openDialogueWhenPokemonNoLongerConfused(pokemon);
        isPokemonNotConfused();
        pokemon.secondaryStatut.isConfused = false;

        if (
          !pokemon.secondaryStatut.isConfused &&
          !pokemon.secondaryStatut.isCursed &&
          !pokemon.secondaryStatut.isScared
        ) {
          pokemon.secondaryStatut.isNormal = true;
        } else {
          pokemon.secondaryStatut.isNormal = false;
        }
        confusingCount = 0;
      }
      break;
  }
}

export function secondaryStatutScaredAlteration(pokemon) {
  if (pokemon.secondaryStatut.isScared) {
    isPokemonScared();
  }
}

export async function secondaryStatutCursedAlteration(pokemon) {
  switch (pokemon.secondaryStatut.isCursed) {
    case true:
      await openDialogueWhenPokemonHurtsByCurse(pokemon);
      let percentage = 20;
      let decreaseValue = (percentage / 100) * pokemon.stats.hpMax;
      const newDecreaseValue = Math.round(decreaseValue);
      pokemon.stats.hp -= newDecreaseValue;
      break;
  }
}
