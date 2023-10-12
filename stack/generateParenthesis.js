//https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  const stack = [];

  function recursion(open, close) {
    if (open === close && open === n) {
      result.push(stack.join(""));
    }

    if (open < n) {
      stack.push("(");
      recursion(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(")");
      recursion(open, close + 1);
      stack.pop();
    }
  }

  recursion(0, 0);
  return result;
};


console.log(generateParenthesis(3)); // 3 = ["((()))","(()())","(())()","()(())","()()()"]
