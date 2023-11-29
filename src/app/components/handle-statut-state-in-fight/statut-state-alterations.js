// import { 
//     openDialogueWhenPokemonBlockedByParalyzedStatut,
//     openDialogueWhenPokemonBlockedByFrozenStatut,
//     openDialogueWhenPokemonHasThawedStatut,
//     openDialogueWhenPokemonAttacksDespiteParalyzedStatut
//   } from '../dialogue-fight.js';
  
//   export let pokemonStatutStateVariableList = {
//     isPokemonFrozen : false,
//     isPokemonParalyzed : false
//   };
  
  
//   export const pokemonStatutAlteration = 
//   function pokemonStatutAlteration(
//     pokemon
//     ) {
  
//      if (
//         pokemon.primaryStatut === 'burning' ||
//         pokemon.primaryStatut === 'poisoned'
//         ) {
  
//           let percentage = 12.5;
//           let decreaseValue = (percentage / 100) * pokemon.stats.hpMax;
//           const newDecreaseValue = Math.round(decreaseValue);
    
//           pokemon.stats.hp -= newDecreaseValue;
//           return pokemon.stats.hp;
  
//       } else if (pokemon.primaryStatut === 'paralyzed') {
  
//           let randomNumber = Math.random();
//           console.log(randomNumber);
    
//           if (randomNumber <= 0.25) {
    
//             pokemonStatutStateVariableList.isPokemonParalyzed = true;
//             console.log(pokemonStatutStateVariableList.isPokemonParalyzed);
//             openDialogueWhenPokemonBlockedByParalyzedStatut(pokemon);
    
//           } else {
//             pokemonStatutStateVariableList.isPokemonParalyzed = false;
//             console.log(pokemonStatutStateVariableList.isPokemonParalyzed);
//             openDialogueWhenPokemonAttacksDespiteParalyzedStatut(pokemon);
//           };
  
//       } else if (pokemon.primaryStatut === 'frozen') {
        
//           let randomNumber = Math.random();
    
//           if (randomNumber <= 0.20) {
    
//             pokemonStatutStateVariableList.isPokemonFrozen = false;
//             pokemon.primaryStatut = 'normal';
//             console.log(pokemon.name, "est dégelé", "sont statut est maintenant", pokemon.primaryStatut, pokemonStatutStateVariableList.isPokemonFrozen);
//             openDialogueWhenPokemonHasThawedStatut(pokemon);
    
//           } else {
//             pokemonStatutStateVariableList.isPokemonFrozen = true;
//             console.log(pokemon.name, "est toujours", pokemon.primaryStatut, pokemonStatutStateVariableList.isPokemonFrozen);
//             openDialogueWhenPokemonBlockedByFrozenStatut(pokemon);
//           };
  
//       };
      
//   };