export function isStatusValidForParalyzed(secondAttacker) {
  return (
    secondAttacker.primaryStatut !== "burning" &&
    secondAttacker.primaryStatut !== "paralyzed" &&
    secondAttacker.primaryStatut !== "asleep" &&
    secondAttacker.primaryStatut !== "poisoned" &&
    secondAttacker.primaryStatut !== "frozen"
  );
}
