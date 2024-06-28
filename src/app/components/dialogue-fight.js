import { domElementsFromSelectors } from "../shared/game-variables/dom/dom-elements.js";

const END_ATTACKS_DISPLAY_DURATION = 4000;

const START_NEXT_DISPLAY_DURATION = 2000;
const END_NEXT_DISPLAY_DURATION = 1900;

const START_ALTERATION_STATUT_DISPLAY_DURATION = 0;
const END_ALTERATION_STATUT_DISPLAY_DURATION = 3900;

const START_ALTERATION_STATUT_CONFUSED_DISPLAY_DURATION = 0;
const END_ALTERATION_STATUT_CONFUSED_DISPLAY_DURATION = 1900;

export const displayDialogue = document.getElementById("dialogue");

export const openDialogueWhenPokemonMakesFirstAttack =
  function openDialogueWhenPokemonMakesFirstAttack(attacker) {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} utilise ${attacker.firstAttack.name} !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ATTACKS_DISPLAY_DURATION);
  };

export const openDialogueWhenPokemonMakesSecondAttack =
  function openDialogueWhenPokemonMakesSecondAttack(attacker) {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} utilise ${attacker.secondAttack.name} !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ATTACKS_DISPLAY_DURATION);
  };

export const openDialogueWhenPokemonMakesCriticalHit =
  function openDialogueWhenPokemonMakesCriticalHit() {
    setTimeout(function () {
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "flex";
      domElementsFromSelectors.displayDialogue.style.display = "flex";

      domElementsFromSelectors.displayDialogue.textContent = `Coup critique !`;

      setTimeout(function () {
        domElementsFromSelectors.displayDialogue.style.display = "none";
      }, END_NEXT_DISPLAY_DURATION);
    }, START_NEXT_DISPLAY_DURATION);
  };

export const openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy =
  function openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(attacker) {
    setTimeout(function () {
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "flex";
      domElementsFromSelectors.displayDialogue.style.display = "flex";

      domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} se gonfle !`;

      setTimeout(function () {
        domElementsFromSelectors.displayDialogue.style.display = "none";
      }, END_NEXT_DISPLAY_DURATION);
    }, START_NEXT_DISPLAY_DURATION);
  };

export const openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy =
  function openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(
    attacker
  ) {
    setTimeout(function () {
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "flex";
      domElementsFromSelectors.displayDialogue.style.display = "flex";

      domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} est déjà boosté !`;

      setTimeout(function () {
        domElementsFromSelectors.displayDialogue.style.display = "none";
      }, END_NEXT_DISPLAY_DURATION);
    }, START_NEXT_DISPLAY_DURATION);
  };

export const openDialogueWhenPokemonMissAttack =
  function openDialogueWhenPokemonMissAttack(attacker) {
    setTimeout(function () {
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "flex";
      domElementsFromSelectors.displayDialogue.style.display = "flex";

      domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} a raté son attaque !`;

      setTimeout(function () {
        domElementsFromSelectors.displayDialogue.style.display = "none";
      }, END_NEXT_DISPLAY_DURATION);
    }, START_NEXT_DISPLAY_DURATION);
  };

export const openDialogueWhenPokemonMakesWeaknessAttack =
  function openDialogueWhenPokemonMakesWeaknessAttack() {
    setTimeout(function () {
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "flex";
      domElementsFromSelectors.displayDialogue.style.display = "flex";

      domElementsFromSelectors.displayDialogue.textContent = `C'est super efficace !`;

      setTimeout(function () {
        domElementsFromSelectors.displayDialogue.style.display = "none";
      }, END_NEXT_DISPLAY_DURATION);
    }, START_NEXT_DISPLAY_DURATION);
  };

export const openDialogueWhenPokemonMakesResistanceAttack =
  function openDialogueWhenPokemonMakesResistanceAttack() {
    setTimeout(function () {
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "flex";
      domElementsFromSelectors.displayDialogue.style.display = "flex";

      domElementsFromSelectors.displayDialogue.textContent = `Ce n'est pas très efficace !`;

      setTimeout(function () {
        domElementsFromSelectors.displayDialogue.style.display = "none";
      }, END_NEXT_DISPLAY_DURATION);
    }, START_NEXT_DISPLAY_DURATION);
  };

export const openDialogueWhenPokemonMakesIneffectiveAttack =
  function openDialogueWhenPokemonMakesIneffectiveAttack() {
    setTimeout(function () {
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "flex";
      domElementsFromSelectors.displayDialogue.style.display = "flex";

      domElementsFromSelectors.displayDialogue.textContent = `Sans effet !`;

      setTimeout(function () {
        domElementsFromSelectors.displayDialogue.style.display = "none";
      }, END_NEXT_DISPLAY_DURATION);
    }, START_NEXT_DISPLAY_DURATION);
  };

export function openDialogueWhenPokemonKo() {
  setTimeout(function () {
    domElementsFromSelectors.displayDialogue.style.display = "flex";
    domElementsFromSelectors.displayDialogue.textContent =
      "Choisir un autre pokemon.";
  }, 3000);
}

export function openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(
  pokemon
) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `Vitesse de ${pokemon.name} augmente !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(
  pokemon
) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `Vitesse de ${pokemon.name} augmente beaucoup !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(
  pokemon
) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `La Défense de ${pokemon.name} augmente !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(
  pokemon
) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `La Défense de ${pokemon.name} augmente beaucoup !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(
  pokemon,
  hpGained
) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} regagne ${hpGained} pv !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMissHpIncrease5pFactorAttack() {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `Cela n'a aucun effet !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(
  secondAttacker
) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `L'Attaque de ${secondAttacker.name} baisse !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasBeenKoByOneHitKnockout(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est KO en un coup !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonReadyToProtectItself(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} se tient près !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonProtectingHimself(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} se protège !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasBurningStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est brûlé !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHpDecreaseByBurningStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} souffre de sa brûlure !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasPoisonedStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est empoisoné !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHpDecreaseByPoisonedStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} souffre du poison !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasParalyzedStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est paralysé, il pourrait ne pas attaquer !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonBlockedByParalyzedStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `La paralysie empêche ${pokemon.name} d'attaquer !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonAttacksDespiteParalyzedStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} résiste à sa paralysie !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasFrozenStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est gelé !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasThawedStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} s'est dégelé, il peut attaquer !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonBlockedByFrozenStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `Le gel empêche ${pokemon.name} d'attaquer !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHasFallingAsleep(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} s'endort !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonIsAsleepStatut(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} dort !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonWakeUp(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} se réveille !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesHpIncrease50PercentOfDamagesFactorAttack(
  pokemon,
  actualIncrease
) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} regagne ${actualIncrease} pv !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenAttackConfusesPokemon(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `Cela rend ${pokemon.name} confus !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonConfused(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est confus !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_CONFUSED_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_CONFUSED_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonAlreadyConfused(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `Mais ${pokemon.name} est déjà confus !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHurtByConfusing(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est blessé par la confusion !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonNoLongerConfused(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} n'est plus confus !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonCursed(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est maudit !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_NEXT_DISPLAY_DURATION);
  }, START_NEXT_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonHurtsByCurse(pokemon) {
  setTimeout(function () {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
      "flex";
    domElementsFromSelectors.displayDialogue.style.display = "flex";

    domElementsFromSelectors.displayDialogue.textContent = `${pokemon.name} est touché par la malédiction !`;

    setTimeout(function () {
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }, END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, START_ALTERATION_STATUT_DISPLAY_DURATION);
}
