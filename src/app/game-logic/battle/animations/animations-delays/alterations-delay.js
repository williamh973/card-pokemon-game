export const getStatutAlterationDelays = (pokemon) => {
  const getPrimaryStatut = pokemon.primaryStatut;
  const getStatutAnimationDelay = alterationStatesDelay(getPrimaryStatut);

  return {
    getPrimaryStatut,
    getStatutAnimationDelay,
  };
};

export const getConfusedStatutAnimationDelays = (pokemon) => {
  const getConfusedStatut = pokemon.secondaryStatut.isConfused;
  const getConfusedStatutAnimationDelay =
    alterationSecondaryStatutDelay(getConfusedStatut);

  return {
    getConfusedStatut,
    getConfusedStatutAnimationDelay,
  };
};

export const getCursedStatutAnimationDelays = (pokemon) => {
  const getCursedStatut = pokemon.secondaryStatut.isCursed;
  const getCursedStatutAnimationDelay =
    alterationSecondaryStatutDelay(getCursedStatut);

  return {
    getCursedStatut,
    getCursedStatutAnimationDelay,
  };
};

export const getScaredStatutAnimationDelays = (pokemon) => {
  const getScaredStatut = pokemon.secondaryStatut.isScared;
  const getScaredStatutAnimationDelay =
    alterationSecondaryStatutDelay(getScaredStatut);

  return {
    getScaredStatut,
    getScaredStatutAnimationDelay,
  };
};

const alterationStatesDelay = (state) => {
  switch (state) {
    case "burning":
      return 3000;
    case "poisoned":
      return 3000;
    case "asleep":
      return 3000;
    case "frozen":
      return 3000;
    case "paralyzed":
      return 3000;
    case "normal":
      return 0;
  }
};

const alterationSecondaryStatutDelay = (state) => {
  switch (state) {
    case true:
      return 3000;
    case false:
      return 0;
  }
};

export async function sleepStatutAlteredAnimation(state) {
  return new Promise((resolve) => setTimeout(resolve, state));
}
