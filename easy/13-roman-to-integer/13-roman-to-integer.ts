function romanToInt(s: string): number {
  const romanValues: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const current = romanValues[s[i]];
    const next = romanValues[s[i + 1]];
    total += current < next ? -current : current;
  }
  return total;
}