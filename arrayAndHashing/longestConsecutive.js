function longestConsecutive(nums) {
  if(!nums.length) return 0;

  const counters = [];
  let counter = 1;
  const sorted = [...new Set(nums)].sort((a,b)=>a-b);

  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] + 1 === sorted[i+1]) {
      counter++;
    } else {
      counters.push(counter);
      counter = 1
    }
  }

  return Math.max(...counters);
};

function longestConsecutive2(nums) {
  if(!nums.length) return 0;

  let result = 0;
  let counter = 1;
  const sorted = [...new Set(nums)].sort((a,b)=>a-b);

  for(let i = 0; i < sorted.length; i++) {
    if(sorted[i] + 1 === sorted[i+1]) {
      counter++;
    } else {
      result = counter > result ? counter : result;
      counter = 1
    }
  }

  return result;
};

const res = longestConsecutive2([0,3,7,2,5,8,4,6,0,1]);
// const res = longestConsecutive([0,-1]);
// const res = longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]);
// const res = longestConsecutive2([1,2,0,1]);
console.log(res);