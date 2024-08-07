import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";

function checkPokemonsLocation(secondAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(secondAttackerCard)) {
    createGlassShard(domElements.pokemonLeftLocation);
  } else {
    createGlassShard(domElements.pokemonRightLocation);
  }
}

export function glassShardAnimation(secondAttackerCard) {
  if (secondAttackerCard) {
    checkPokemonsLocation(secondAttackerCard);
  }
}

function createGlassShard(pokemonLocation) {
  const glassShard = document.createElement("div");
  glassShard.classList.add("glass-shard");
  pokemonLocation.appendChild(glassShard);

  gsap.fromTo(
    glassShard,
    {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
    },
    {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "linear",
      onComplete: () => glassShard.remove(),
    }
  );
}
