import { disabledProtectCapacity } from "../../attacks/factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import { openDialogueWhenPokemonBlockedByParalyzedStatut } from "../../../../components/battle-dialogues/dialogues/pokemon-blocked-by-paralyzed-statut.dialogue.js";
import { openDialogueWhenPokemonAttacksDespiteParalyzedStatut } from "../../../../components/battle-dialogues/dialogues/pokemon-attacks-despite-paralyzed-statut.dialogue.js";
import { openDialogueWhenPokemonHasThawedStatut } from "../../../../components/battle-dialogues/dialogues/pokemon-has-thawed-statut.dialogue.js";
import { openDialogueWhenPokemonBlockedByFrozenStatut } from "../../../../components/battle-dialogues/dialogues/pokemon-blocked-by-frozen-statut.dialogue.js";
import { openDialogueWhenPokemonIsAsleepStatut } from "../../../../components/battle-dialogues/dialogues/pokemon-has-asleep-statut.dialogue.js";
import { openDialogueWhenPokemonWakeUp } from "../../../../components/battle-dialogues/dialogues/pokemon-wake-up.dialogue.js";
import { isPokemonAsleep } from "./asleep/pokemon-asleep.js";
import { isPokemonWakeUp } from "./asleep/pokemon-wake-up.js";
import { isPokemonBlockedByParalysis } from "./paralyzed/pokemon-paralyzed.js";
import { isPokemonResistsParalysis } from "./paralyzed/pokemon-resists-paralyzed.js";
import { isPokemonNotFrozen } from "./frozen/pokemon-not-frozen.js";
import { isPokemonFrozen } from "./frozen/pokemon-frozen.js";
import { applyPrimaryStatusAnimations } from "../../animations/animations-statuts/add/apply-primary-statut-class.js";

let asleepCount = 0;
let randomNumber = Math.random();

function hpDeductionProcess(pokemon) {
  let percentage = 12.5;
  let decreaseValue = (percentage / 100) * pokemon.stats.hpMax;
  const newDecreaseValue = Math.round(decreaseValue);
  pokemon.stats.hp -= newDecreaseValue;
  return pokemon.stats.hp;
}

export async function pokemonPrimaryStatutAlteration(pokemon) {
  switch (pokemon.primaryStatut) {
    case "burning":
      hpDeductionProcess(pokemon);
      break;

    case "poisoned":
      hpDeductionProcess(pokemon);
      break;

    case "paralyzed":
      randomNumber = Math.random();

      if (randomNumber <= 0.25) {
        isPokemonBlockedByParalysis();
        await applyPrimaryStatusAnimations(pokemon);
        await openDialogueWhenPokemonBlockedByParalyzedStatut(pokemon);
        disabledProtectCapacity();
      } else {
        isPokemonResistsParalysis();
        await openDialogueWhenPokemonAttacksDespiteParalyzedStatut(pokemon);
      }
      break;

    case "frozen":
      randomNumber = Math.random();

      if (randomNumber <= 0.2) {
        isPokemonNotFrozen();
        pokemon.primaryStatut = "normal";
        await openDialogueWhenPokemonHasThawedStatut(pokemon);
      } else {
        isPokemonFrozen();
        await applyPrimaryStatusAnimations(pokemon);
        await openDialogueWhenPokemonBlockedByFrozenStatut(pokemon);
        disabledProtectCapacity();
      }
      break;

    case "asleep":
      randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        isPokemonAsleep();
        await applyPrimaryStatusAnimations(pokemon);
        await openDialogueWhenPokemonIsAsleepStatut(pokemon);
        disabledProtectCapacity();
        asleepCount++;
      } else {
        isPokemonWakeUp();
        pokemon.primaryStatut = "normal";
        await openDialogueWhenPokemonWakeUp(pokemon);
        asleepCount = 0;
      }

      if (asleepCount === 3) {
        isPokemonWakeUp();
        pokemon.primaryStatut = "normal";
        await openDialogueWhenPokemonWakeUp(pokemon);
        asleepCount = 0;
      }
      break;

    case "normal":
      isPokemonResistsParalysis();
      isPokemonNotFrozen();
      isPokemonWakeUp();
      break;
  }
}
