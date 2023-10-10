// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = new Stack();

  tokens.forEach(item => {
    if (Object.keys(OPERATORS).includes(item)) {
      const b = stack.pop();
      const a = stack.pop();

      stack.push(OPERATORS[item](a, b));
    } else {
      stack.push(Number(item));
    }
  });

  return stack.top();
};

function Stack() {
  this.stack = [];
  this.push = (val) => this.stack.push(val);
  this.pop = () => this.stack.pop();
  this.top = () => this.stack[this.stack.length - 1];
}

var OPERATORS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b),
};

const tokens1 = ["2","1","+","3","*"]; // ((2 + 1) * 3) = 9
const tokens2 = ["4","13","5","/","+"]; // (4 + (13 / 5)) = 6
const tokens3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]; // 22

console.log(evalRPN(tokens3));