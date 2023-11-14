
import { 
  openDialogueWhenPokemonMakesHpIncrease5pFactorAttack,
  openDialogueWhenPokemonMissHpIncrease5pFactorAttack 
} from '../../../dialogue-fight.js';



export const hpIncrease5pFactorForFirstAttack = 
function hpIncrease5pFactorForFirstAttack(pokemon) {

    if (pokemon.firstAttack.name === "Soin") {
       const increasingValue = 5;
       
      if (pokemon.stats.hp <= pokemon.stats.hpMax) {
         const newHpValue = pokemon.stats.hp += increasingValue;

        if (pokemon.stats.hp > pokemon.stats.hpMax) {
          pokemon.stats.hp = pokemon.stats.hpMax;
          openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(pokemon);
          return newHpValue;
        }
          if (pokemon.stats.hp === pokemon.stats.hpMax) {
            openDialogueWhenPokemonMissHpIncrease5pFactorAttack();
          }
      } 
    } else {
         return pokemon.stats.hp;
    };
        
};


export const hpIncrease5pFactorForSecondAttack = 
function hpIncrease5pFactorForSecondAttack(pokemon) {

    if (pokemon.secondAttack.name === "Soin") {
       const increasingValue = 5;
       const newHpValue = pokemon.stats.hp += increasingValue;
       openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(pokemon);
       return newHpValue;
    } else {
       return pokemon.stats.hp;
    };
        
};
