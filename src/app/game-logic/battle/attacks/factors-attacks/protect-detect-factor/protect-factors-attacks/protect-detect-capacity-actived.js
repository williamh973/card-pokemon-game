import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

export function disabledProtectCapacity() {
  if (pokemonVariables.isProtectOrDetectCapacityActived) {
    return (pokemonVariables.isProtectOrDetectCapacityActived = false);
  }
}
