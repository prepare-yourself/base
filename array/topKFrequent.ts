function topKFrequent(nums: number[], k: number): number[] {
  const hash = new Map();

  nums.forEach(num => hash.set(num, hash.get(num) ? hash.get(num) + 1 : 1));
  const sorted = [...hash.entries()].sort((a, b) => b[1] - a[1]);
  const sortedValues = sorted.map(item => item[0]);

  return sortedValues.slice(0, k);
};

const res = topKFrequent([1,1,1,2,2,3], 2);
console.log(res);
export {};