function allZeroesToEnd(arr) {
  let zeroCount = 0;
  const filtered = arr.filter(num => {
    if(!num) {
      zeroCount++;
      return false;
    } else {
      return true;
    }
  })

  return [...filtered, ...new Array(zeroCount).fill(0)];
}

const res = allZeroesToEnd([0,1,2,0,0,6,0,5,0,6,7,8,4,3,2]);
console.log(res);
