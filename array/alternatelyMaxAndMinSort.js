function alternatelyMaxAndMinSort(arr) {
  const result = [];

  for(let i = 0; i < Math.floor(arr.length / 2); i++) {
    result.push(arr[arr.length - 1 - i], arr[i]);
  }
  
  return result;
}

const res = alternatelyMaxAndMinSort([1, 2, 3, 4, 5, 6, 7]);
console.log(res);