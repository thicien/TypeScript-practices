export function duplicateCount(text: string): number {
  const lowerText = text.toLowerCase();   
  const charCount: Record<string, number> = {};

  for (const char of lowerText) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let duplicates = 0;
  for (const key in charCount) {
    if (charCount[key] > 1) {
      duplicates++;
    }
  }

  return duplicates;
}
