export const defenseIncrease1pFactorForFirstAttack = function defenseIncrease1pFactorForFirstAttack(
    pokemon
  ) {

    if (
        pokemon.firstAttack.name === "Pouvoir Antique" ||
        pokemon.firstAttack.name === 'Gonflette' ||
        pokemon.firstAttack.name === "Force Cosmik" ||
        pokemon.firstAttack.name === 'Malediction' ||
        pokemon.firstAttack.name === 'Appel Defense' ||
        pokemon.firstAttack.name === "Boul'Armure" ||
        pokemon.firstAttack.name === 'Armure' ||
        pokemon.firstAttack.name === "Aile d'Acier" ||
        pokemon.firstAttack.name === 'Stockage' ||
        pokemon.firstAttack.name === "Vent Argenté" ||
        pokemon.firstAttack.name === 'Vent Mauvais' ||
        pokemon.firstAttack.name === "Repli" ||
        pokemon.firstAttack.name === "Coud'Krane"
        ) {
       const increasingValue = 1;
       const newDefenseValue = pokemon.stats.defense += increasingValue;
       return newDefenseValue;
    } else {
       return pokemon.stats.defense;
    };
        
};


export const defenseIncrease1pFactorForSecondAttack = function defenseIncrease1pFactorForSecondAttack(
  pokemon
  ) {

    if (
      pokemon.secondAttack.name === "Pouvoir Antique" ||
      pokemon.secondAttack.name === 'Gonflette' ||
      pokemon.secondAttack.name === "Force Cosmik" ||
      pokemon.secondAttack.name === 'Malediction' ||
      pokemon.secondAttack.name === 'Appel Defense' ||
      pokemon.secondAttack.name === "Boul'Armure" ||
      pokemon.secondAttack.name === 'Armure' ||
      pokemon.secondAttack.name === "Aile d'Acier" ||
      pokemon.secondAttack.name === 'Stockage' ||
      pokemon.secondAttack.name === "Vent Argenté" ||
      pokemon.secondAttack.name === 'Vent Mauvais' ||
      pokemon.secondAttack.name === "Repli" ||
      pokemon.secondAttack.name === "Coud'Krane"
        ) {
       const increasingValue = 1;
       const newDefenseValue = pokemon.stats.defense += increasingValue;
       return newDefenseValue;
    } else {
       return pokemon.stats.defense;
    };
        
};
