import { battleSelectors } from "../../../shared/battle/battle-selectors.js";

const END_ATTACKS_DISPLAY_DURATION = 4000;
const START_NEXT_DISPLAY_DURATION = 2000;
const END_NEXT_DISPLAY_DURATION = 1900;
const START_ALTERATION_STATUT_DISPLAY_DURATION = 0;
const END_ALTERATION_STATUT_DISPLAY_DURATION = 3900;
const START_ALTERATION_STATUT_CONFUSED_DISPLAY_DURATION = 0;
const END_ALTERATION_STATUT_CONFUSED_DISPLAY_DURATION = 1900;

export function openDialogueWhenPokemonMakesFirstAttack(attacker) {
  battleSelectors.displayDialogue.style.display = "flex";
  battleSelectors.displayDialogue.textContent = `${attacker.name} utilise ${attacker.firstAttack.name} !`;

  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "none";
  }, END_ATTACKS_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesSecondAttack(attacker) {
  battleSelectors.displayDialogue.style.display = "flex";

  battleSelectors.displayDialogue.textContent = `${attacker.name} utilise ${attacker.secondAttack.name} !`;

  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "none";
  }, END_ATTACKS_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesCriticalHit() {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Coup critique !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(
  attacker
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${attacker.name} se gonfle !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(
  attacker
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${attacker.name} est déjà boosté !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMissAttack(attacker) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${attacker.name} a raté son attaque !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesWeaknessAttack() {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `C'est super efficace !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesResistanceAttack() {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Ce n'est pas très efficace !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesIneffectiveAttack() {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Sans effet !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonKo() {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";
    battleSelectors.displayDialogue.textContent = "Choisir un autre pokemon.";
  }, 3000);
}

export function openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(
  pokemon
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Vitesse de ${pokemon.name} augmente !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(
  pokemon
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Vitesse de ${pokemon.name} augmente beaucoup !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(
  pokemon
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `La Défense de ${pokemon.name} augmente !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(
  pokemon
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `La Défense de ${pokemon.name} augmente beaucoup !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(
  pokemon,
  hpGained
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} regagne ${hpGained} pv !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMissHpIncrease5pFactorAttack() {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Cela n'a aucun effet !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(
  secondAttacker
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `L'Attaque de ${secondAttacker.name} baisse !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasBeenKoByOneHitKnockout(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est KO en un coup !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonReadyToProtectItself(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} se tient près !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonProtectingHimself(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} se protège !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasBurningStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est brûlé !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHpDecreaseByBurningStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} souffre de sa brûlure !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasPoisonedStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est empoisoné !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHpDecreaseByPoisonedStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} souffre du poison !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasParalyzedStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est paralysé, il pourrait ne pas attaquer !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonBlockedByParalyzedStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `La paralysie empêche ${pokemon.name} d'attaquer !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonAttacksDespiteParalyzedStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} résiste à sa paralysie !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasFrozenStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est gelé !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasThawedStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} s'est dégelé, il peut attaquer !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonBlockedByFrozenStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Le gel empêche ${pokemon.name} d'attaquer !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasFallingAsleep(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} s'endort !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonIsAsleepStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} dort !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonWakeUp(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} se réveille !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesHpIncrease50PercentOfDamagesFactorAttack(
  pokemon,
  actualIncrease
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} regagne ${actualIncrease} pv !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenAttackConfusesPokemon(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Cela rend ${pokemon.name} confus !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonConfused(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est confus !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_CONFUSED_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_CONFUSED_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonAlreadyConfused(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Mais ${pokemon.name} est déjà confus !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHurtByConfusing(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est blessé par la confusion !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonNoLongerConfused(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} n'est plus confus !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonCursed(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est maudit !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHurtsByCurse(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est touché par la malédiction !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}
