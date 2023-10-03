function productExceptSelf1(nums: number[]): number[] {
  const result: number[] = [];

  for(let i = 0; i < nums.length; i++) {
    let product = 1;
    
    for(let k = 0; k < nums.length; k++) {
      if(i !== k) {
        product *= nums[k]
      }
    }

    result.push(product);
  }

  return result;
};

function productExceptSelf2(nums: number[]): number[] {
  const result: number[] = [];
  let prefix = 1;
  let postfix = 1;

  for(let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for(let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }

  return result;
}

function productExceptSelf3(nums: number[]): number[] {
  const length = nums.length;
  let left = new Array(length);
  let right = new Array(length);
  let prod = new Array(length);
  let i, j;


  /* Left most element of left array is always 1 */
  left[0] = 1;

  /* Right most element of right array is always 1 */
  right[length - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (j = length - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }

  for (i = 0; i < length; i++) {
    prod[i] = left[i] * right[i];
  }

  return prod;
}

function onemMore(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n).fill(1);
  let prefix = 1;
  let postfix = 1;

  for(let i = 1; i < n; i++) {
    prefix = nums[i - 1] * prefix;
    result[i] = prefix;
  }

  for(let i = n - 2; i >= 0; i--) {
    postfix = nums[i + 1] * postfix;
    result[i] = result[i] * postfix;
  }

  return result;
}

function divide(nums: number[]): number[] {
  let sum = 1;

  for(let i = 0; i < nums.length; i++) {
    sum *= nums[i];
  }

  return nums.map(num => sum/num);
}


const res = divide([1,2,3,4,5,6]);
console.log(res);
export {};