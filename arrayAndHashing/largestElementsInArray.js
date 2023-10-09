function largestElementsInArray(arr, k) {
  let result = [];
  const sorted = [...new Set(arr)].sort((a,b) => b-a);

  for(let i = 0; i < k; i++) {
    result.push(sorted[i])
  }

  return result;
}

console.log(largestElementsInArray([0, 1, 5, 225, , 0, 7, -7, 0, 1, 225, 1000, 0.001, "9999", 9076, 8909876654457], 3));