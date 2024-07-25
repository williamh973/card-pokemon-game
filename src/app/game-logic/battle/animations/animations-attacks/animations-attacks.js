import { attackNameList } from "../../../../shared/pokemon/pokemon-attacks-name-list.js";

export function startAttackAnimation(attackName) {
  if (attackNameList[attackName]) {
    attackNameList[attackName](attackName);
  }
}
