function isValid(part: string[][]) {
  const emptyCell = ".";

  for (let i = 0; i < part.length; i++) {
    const numbers = [...part[i]].filter(num => num !== emptyCell);
    if (new Set(numbers).size !== numbers.length) {
      return false;
    }
  }

  return true
}

function isValidSudoku(board: string[][]): boolean {
  const init: any = {
    rows: [],
    columns: [],
    boxes: []
  };

  const { rows, columns, boxes }: any = board.reduce((acc, row, index) => {
    const rows = [...acc.rows, row];

    const column = board.map(row => row[index]);
    const columns = [...acc.columns, column];

    const newBoxes: string[][] = [];
    if (index % 3 === 0) {
      const first = [...board[index].slice(0, 3), ...board[index + 1].slice(0, 3), ...board[index + 2].slice(0, 3)];
      const second = [...board[index].slice(3, 6), ...board[index + 1].slice(3, 6), ...board[index + 2].slice(3, 6)];
      const third = [...board[index].slice(6, 9), ...board[index + 1].slice(6, 9), ...board[index + 2].slice(6, 9)];

      newBoxes.push(first, second, third);
    }
    const boxes = [...acc.boxes, ...newBoxes]

    return {
      ...acc,
      rows,
      columns,
      boxes
    }
  }, init);

  return isValid(rows) && isValid(columns) && isValid(boxes);
};

function isValidSudoku2(board: string[][]): boolean {
  const boardLength = board.length;
  const rows: any = {};
  const cols: any = {};
  const squares: any = {};

  for (let r = 0; r < boardLength; r++) {
    for(let c = 0; c < boardLength; c++) {
      const num = board[r][c];

      if (num === '.') {
        continue;
      }

      const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

      if (!cols[c]) cols[c] = new Set();
      if (!rows[r]) rows[r] = new Set();
      if (!squares[grid])squares[grid] = new Set();

      if (
        rows[r].has(num) ||
        cols[c].has(num) ||
        squares[grid].has(num)
      ) {
        return false;
      }

      cols[c].add(num);
      rows[r].add(num);
      squares[grid].add(num);
    }
  }

  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

const board2 = [ // false
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."], 
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
];

const res = isValidSudoku2(board2);
console.log(res);
export { };