export const speedIncrease2pFactorForFirstAttack = 
function speedIncrease2pFactorForFirstAttack(pokemon) {

    if ( 
         pokemon.firstAttack.name === 'Accupression' ||
         pokemon.firstAttack.name === 'Hâte' ||
         pokemon.firstAttack.name === 'Accupression'
       ) {
         const increasingValue = 2;
         const newSpeedValue = pokemon.stats.speed += increasingValue;
         return newSpeedValue;
       } else if (
         pokemon.firstAttack.name === 'Accupression' ||
         pokemon.firstAttack.name === 'Hâte' ||
         pokemon.firstAttack.name === 'Accupression'
       )  {
         const increasingValue = 2;
         const newSpeedValue = pokemon.stats.speed += increasingValue;
         return newSpeedValue;
       } else {
         return pokemon.stats.speed
    };
        
};


export const speedIncrease2pFactorForSecondAttack = 
function speedIncrease2pFactorForSecondAttack(pokemon) {

    if (
         pokemon.secondAttack.name === 'Accupression' ||
         pokemon.secondAttack.name === 'Hâte' ||
         pokemon.secondAttack.name === 'Poliroche'
       ) {
         const increasingValue = 2;
         const newSpeedValue = pokemon.stats.speed += increasingValue;
         return newSpeedValue;
       } else if (
         pokemon.secondAttack.name === 'Accupression' ||
         pokemon.secondAttack.name === 'Hâte' ||
         pokemon.secondAttack.name === 'Poliroche'
       ) {
         const increasingValue = 2;
         const newSpeedValue = pokemon.stats.speed += increasingValue;
         return newSpeedValue;
       } else {
         return pokemon.stats.speed     
    };
        
};
