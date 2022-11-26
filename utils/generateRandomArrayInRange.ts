export default function generateRandomArrayInRange(
  start: number,
  end: number,
  howMany: number
): number[] {
  if (howMany > end - start) {
    throw new Error(
      `cannot generate array of ${howMany} unique integers from the range [${start}, ${end}]`
    );
  }
  const s = new Set<number>();
  while (s.size < howMany) {
    const randNum = start + Math.floor(Math.random() * (end - start));
    s.add(randNum);
  }
  return Array.from(s);
}
