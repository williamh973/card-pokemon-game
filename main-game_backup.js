import pikachuStats from "./stats/pikachuStats.js";
import evoliStats from "./stats/evoliStats.js";
import roucoolStats from "./stats/roucoolStats.js";
import racaillouStats from "./stats/racaillouStats.js";

import pikachuCard from "./cards/pikachuCard.js";
import evoliCard from "./cards/evoliCard.js";
import roucoolCard from "./cards/roucoolCard.js";
import racaillouCard from "./cards/racaillouCard.js";

import { decreaseHp } from "./decreasePokemonHp.js";
import {
  firstAttacker,
  secondAttacker,
  determineFirstAttacker,
} from "./determineFirstAttacker.js";
import { handleMenu } from "./handleMenu.js";
import { handlePokemonFirstSection } from "./handlePokemonFirstSection.js";
import { handlePokemonSecondSection } from "./handlePokemonSecondSection.js";
import { openDisplayResult } from "./result-fight.js";
import {
  openDialogueWhenPokemonMakesAttack,
  openDialogueWhenPokemonMakesSecondAttack,
  openDialogueWhenPokemonMissAttack,
  openDialogueWhenPokemonKo,
} from "./dialogue-fight.js";

import {
  displayFightInProgress,
  hideFightInProgress,
} from "./display-fight-in-progress.js";
import { weaknessFactorForFirstAttack } from "./weakness-factor-first-attack.js";
import { weaknessFactorForSecondAttack } from "./weakness-factor-second-attack.js";
import { resistanceFactorForFirstAttack } from "./resistance-factor-first-attack.js";
import { resistanceFactorForSecondAttack } from "./resistance-factor-second-attack.js";
import {
  ineffectiveFactorForFirstAttack,
  ineffectiveFactorForSecondAttack,
} from "./ineffective-factor-attack.js";
import { domElementInFormPlayer } from "./pseudo-form.js";
import { updatePlayerScore } from "./updatePlayerScore.js";
import { handleSelectionRandomPokemon } from "./handleSelectionRandomPokemon.js";

document.addEventListener("DOMContentLoaded", () => {
  const headContainer = document.querySelector(".container-head");

  const titleContainer = document.getElementById("container-title");

  const title = document.getElementById("title");

  const versusContainer = document.getElementById("container-vs");

  const versus = document.getElementById("vs");

  const menuButton = document.getElementById("menu");

  const selectFirstPokemonButton = document.getElementById(
    "pokemonFirstSelection",
  );

  const selectSecondPokemonButton = document.getElementById(
    "pokemonSecondSelection",
  );

  const pokemonFirstLocation = document.getElementById(
    "pokemon-first-location",
  );

  const pokemonSecondLocation = document.getElementById(
    "pokemon-second-location",
  );

  const fightInProgress = document.getElementById("fight-in-progress");

  headContainer.appendChild(fightInProgress);

  const playersContainer = document.getElementById("container-players");

  let firstPokemonSelected = false;
  let secondPokemonSelected = false;

  menu.addEventListener("change", () => {
    handleMenu(menu.value);
  });

  selectFirstPokemonButton.addEventListener("change", () => {
    handlePokemonFirstSection(selectFirstPokemonButton.value);
    firstPokemonSelected = true;

    activateFightButton();

    containerFullPopupDialogueFight.style.display = "none";

    const displayDialogue = document.getElementById("dialogue");

    displayDialogue.style.display = "none";
  });

  selectSecondPokemonButton.addEventListener("change", () => {
    handlePokemonSecondSection(selectSecondPokemonButton.value);
    secondPokemonSelected = true;
    activateFightButton();

    containerFullPopupDialogueFight.style.display = "none";

    const displayDialogue = document.getElementById("dialogue");

    displayDialogue.style.display = "none";
  });

  const pokemonRandomSelectionButton = document.getElementById(
    "pokemonRandomSelection",
  );

  pokemonRandomSelectionButton.addEventListener("click", () => {
    handleSelectionRandomPokemon();

    secondPokemonSelected = true;
    activateFightButton();

    containerFullPopupDialogueFight.style.display = "none";

    const displayDialogue = document.getElementById("dialogue");

    displayDialogue.style.display = "none";
  });

  const fightButton = document.getElementById("fightButton");

  fightButton.disabled = true;

  const containerFullPopupDialogueFight = document.getElementById(
    "container-display-dialogue",
  );

  fightButton.addEventListener("click", () => {
    async function fight() {
      displayFightInProgress();
      determineFirstAttacker();
      console.log("ok");

      while (firstAttacker.stats.hp > 0 && secondAttacker.stats.hp > 0) {
        let randomFactor = Math.random();

        if (randomFactor >= 0.5) {
          let damageFirstAttack = calculateDamageFirstAttack(
            firstAttacker,
            secondAttacker,
            firstAttacker.firstAttack.strength,
            firstAttacker.stats.specialAtt,
            secondAttacker.stats.specialDef,
            firstAttacker.firstAttack.precision,
            firstAttacker.firstAttack.type,
            secondAttacker.type,
          );

          secondAttacker.stats.hp -= Math.max(damageFirstAttack, 0);
          await sleep(3000);
          decreaseHp();
        } else {
          let damageSecondAttack = calculateDamageSecondAttack(
            firstAttacker,
            secondAttacker,
            firstAttacker.secondAttack.strength,
            firstAttacker.stats.specialAtt,
            secondAttacker.stats.specialDef,
            firstAttacker.secondAttack.precision,
            firstAttacker.secondAttack.type,
            secondAttacker.type,
          );

          secondAttacker.stats.hp -= Math.max(damageSecondAttack, 0);
          await sleep(3000);
          decreaseHp();
        }

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;
          decreaseHp();
          openDisplayResult();
          openDialogueWhenPokemonKo();
          hideFightInProgress();
          updatePlayerScore();
          break;
        }

        decreaseHp();

        randomFactor = Math.random();

        if (randomFactor >= 0.5) {
          let damageFirstAttack = calculateDamageFirstAttack(
            secondAttacker,
            firstAttacker,
            secondAttacker.firstAttack.strength,
            secondAttacker.stats.specialAtt,
            firstAttacker.stats.specialDef,
            secondAttacker.firstAttack.precision,
            secondAttacker.firstAttack.type,
            firstAttacker.type,
          );

          firstAttacker.stats.hp -= Math.max(damageFirstAttack, 0);
          await sleep(3000);
          decreaseHp();
        } else {
          let damageSecondAttack = calculateDamageSecondAttack(
            secondAttacker,
            firstAttacker,
            secondAttacker.secondAttack.strength,
            secondAttacker.stats.specialAtt,
            firstAttacker.stats.specialDef,
            secondAttacker.secondAttack.precision,
            secondAttacker.secondAttack.type,
            firstAttacker.type,
          );

          firstAttacker.stats.hp -= Math.max(damageSecondAttack, 0);
          await sleep(3000);
          decreaseHp();
        }

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;
          decreaseHp();
          openDisplayResult();
          openDialogueWhenPokemonKo();
          hideFightInProgress();
          updatePlayerScore();
          break;
        }
      }
    }

    fight();
  });

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function calculateDamageFirstAttack(
    firstAttacker,
    secondAttacker,
    puissanceAttaque,
    specialAtt,
    specialDef,
    precision,
    firstAttackType,
    secondAttackerType,
  ) {
    const randomPrecision = Math.floor(Math.random() * 100) + 1;

    if (randomPrecision <= precision) {
      let degats =
        (((2 * firstAttacker.stats.attack) / secondAttacker.stats.defense) *
          puissanceAttaque *
          (specialAtt / secondAttacker.stats.specialDef)) /
          50 +
        2;

      let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
      degats *= randomFactor;

      let getWeaknessFactorList = weaknessFactorForFirstAttack(
        firstAttackType,
        secondAttackerType,
      );

      degats *= getWeaknessFactorList;

      let getResistanceFactorList = resistanceFactorForFirstAttack(
        firstAttackType,
        secondAttackerType,
      );

      degats /= getResistanceFactorList;

      let getIneffectiveFactorList = ineffectiveFactorForFirstAttack(
        firstAttackType,
        secondAttackerType,
      );

      degats *= getIneffectiveFactorList;

      openDialogueWhenPokemonMakesAttack(firstAttacker);
      return Math.round(degats);
    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  }

  function calculateDamageSecondAttack(
    firstAttacker,
    secondAttacker,
    puissanceAttaque,
    specialAtt,
    specialDef,
    precision,
    secondAttackType,
    secondAttackerType,
  ) {
    const randomPrecision = Math.floor(Math.random() * 100) + 1;

    if (randomPrecision <= precision) {
      let degats =
        (((2 * firstAttacker.stats.attack) / secondAttacker.stats.defense) *
          puissanceAttaque *
          (specialAtt / secondAttacker.stats.specialDef)) /
          50 +
        2;

      let randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
      degats *= randomFactor;

      let getWeaknessFactorList = weaknessFactorForSecondAttack(
        secondAttackType,
        secondAttackerType,
      );
      degats *= getWeaknessFactorList;

      let getResistanceFactorList = resistanceFactorForSecondAttack(
        secondAttackType,
        secondAttackerType,
      );

      degats /= getResistanceFactorList;

      let getIneffectiveFactorList = ineffectiveFactorForSecondAttack(
        secondAttackType,
        secondAttackerType,
      );

      degats *= getIneffectiveFactorList;

      openDialogueWhenPokemonMakesSecondAttack(firstAttacker);

      return Math.round(degats);
    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  }

  function activateFightButton() {
    if (firstPokemonSelected && secondPokemonSelected) {
      fightButton.disabled = false;
    }
  }
});

const selectors = {
  headContainer: document.querySelector(".container-head"),
  titleContainer: document.getElementById("container-title"),
  title: document.getElementById("title"),
  versusContainer: document.getElementById("container-vs"),
  versus: document.getElementById("vs"),
  menuButton: document.getElementById("menu"),
  selectFirstPokemonButton: document.getElementById("pokemonFirstSelection"),
  selectSecondPokemonButton: document.getElementById("pokemonSecondSelection"),
  pokemonFirstLocation: document.getElementById("pokemon-first-location"),
  pokemonSecondLocation: document.getElementById("pokemon-second-location"),
  containerFullPopupDialogueFight: document.getElementById(
    "container-display-dialogue",
  ),
  fightInProgress: document.getElementById("fight-in-progress"),
  pokemonRandomSelectionButton: document.getElementById(
    "pokemonRandomSelection",
  ),
};

export default selectors;
