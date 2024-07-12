export function minimumDamage(damages) {
  if (damages > 0 && damages < 0.5) {
    return (damages = 1);
  }
}
