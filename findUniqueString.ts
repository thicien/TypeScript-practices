export function findUniq(arr: string[]): string {
  const normalize = (str: string): string => {
    return [...new Set(
      str
        .replace(/\s+/g, "")
        .toLowerCase()
    )]
      .sort()
      .join("");
  };

  const map = new Map<string, string[]>();

  for (const str of arr) {
    const key = normalize(str);

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(str);
  }
  for (const [, group] of map) {
    if (group.length === 1) {
      return group[0];
    }
  }

  return "";
}
console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']));