import pikachuStats from './models/pikachu.model.js';
import evoliStats from './models/evoli.model.js';
import roucoolStats from './models/roucool.model.js'
import racaillouStats from './models/racaillou.model.js';
import insecateurStats from './models/insecateur.model.js';
import sabeletteStats from './models/sabelette.model.js';

import { hp } from './cards/pikachu.card.js';


export const pokemonHealthRedCheck = 
function pokemonHealthRedCheck() {

  if (
    pikachuStats.stats.hp  <= 0.2 * 35 ||
    evoliStats.stats.hp  <= 0.2 * 55 ||
    roucoolStats.stats.hp  <= 0.2 * 40 ||
    racaillouStats.stats.hp  <= 0.2 * 40 ||
    insecateurStats.stats.hp  <= 0.2 * 70 ||
    sabeletteStats.stats.hp  <= 0.2 * 50  
    ) {
    hp.style.color = 'red';
  };

}

export const pokemonHealthOrangeCheck = 
function pokemonHealthOrangeCheck() {

  if (
    pikachuStats.stats.hp  <= 0.5 * 35 ||
    evoliStats.stats.hp  <= 0.5 * 55 ||
    roucoolStats.stats.hp  <= 0.5 * 40 ||
    racaillouStats.stats.hp  <= 0.5 * 40 ||
    insecateurStats.stats.hp  <= 0.5 * 70 ||
    sabeletteStats.stats.hp  <= 0.5 * 50  
    ) {
    hp.style.color = 'orange';
  };
}


  export const pokemonHealthBlackCheck = 
function pokemonHealthBlackCheck() {

  if (
    pikachuStats.stats.hp  > 0.5 * 35 ||
    evoliStats.stats.hp  > 0.5 * 55 ||
    roucoolStats.stats.hp  > 0.5 * 40 ||
    racaillouStats.stats.hp  > 0.5 * 40 ||
    insecateurStats.stats.hp  > 0.5 * 70 ||
    sabeletteStats.stats.hp  > 0.5 * 50  
    ) {
    hp.style.color = 'black';
  };


}