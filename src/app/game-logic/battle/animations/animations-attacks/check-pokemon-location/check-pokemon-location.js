export function getFirstAttackerBoundingClientRectLocation() {
  const locationRect = firstAttackerLocation.getBoundingClientRect();
  return locationRect;
}

export function getFirstAttackerBoundingClientRectCard(firstAttackerCard) {
  const cardRect = firstAttackerCard.getBoundingClientRect();
  return cardRect;
}

export function getSecondAttackerBoundingClientRectLocation() {
  const locationRect = secondAttackerLocation.getBoundingClientRect();
  return locationRect;
}

export function getSecondAttackerBoundingClientRectCard(secondAttackerCard) {
  const cardRect = secondAttackerCard.getBoundingClientRect();
  return cardRect;
}
