/**
 * @param {string} s
 * @return {boolean}
 */
function isValidParentheses(s) {
  const stack = [];
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];

  for(let letter of s) {
    if (open.includes(letter)) {
      stack.push(letter);
    } else if (close.includes(letter)) {
      if (!stack.length) return false;
      const top = stack[stack.length - 1];
      const expectedCloseIndex = open.indexOf(top);

      if (close[expectedCloseIndex] === letter) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length
};


function isValidParentheses(s) {
  const stack = [];
  const pairs = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for(let letter of s) {
    if ([...pairs.keys()].includes(letter)) {
      stack.push(letter);
    } else if ([...pairs.values()].includes(letter)) {
      if (!stack.length) return false;
      const top = stack[stack.length - 1];
      const closePair = pairs.get(top);

      if (closePair === letter) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length
};

console.log(isValidParentheses("qw(erqw[erasd{fasdfgsdfg}sdf]gs)"));

