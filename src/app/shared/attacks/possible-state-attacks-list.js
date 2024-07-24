import { openDialogueWhenPokemonMakesCriticalHit } from "../../components/battle-dialogues/dialogues/pokemon-makes-critical-hit.dialogue.js";
import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../components/battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";
import { openDialogueWhenPokemonMakesResistanceAttack } from "../../components/battle-dialogues/dialogues/pokemon-makes-resistance-attack.dialogue.js";
import { openDialogueWhenPokemonMakesWeaknessAttack } from "../../components/battle-dialogues/dialogues/pokemon-makes-weakness-attack.dialogue.js";

export const possibleStateAttacksList = {
  ineffective: openDialogueWhenPokemonMakesIneffectiveAttack(),
  weakness: openDialogueWhenPokemonMakesWeaknessAttack(),
  resistance: openDialogueWhenPokemonMakesResistanceAttack(),
  criticalHit: openDialogueWhenPokemonMakesCriticalHit(),
};
