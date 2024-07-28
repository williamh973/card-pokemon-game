export function checkMinimumDamage(damages) {
  if (damages > 0 && damages < 1) {
    return 1;
  } else {
    return damages;
  }
}
