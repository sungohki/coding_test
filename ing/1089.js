// https://www.acmicpc.net/problem/1089

/* 입력 모듈 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const list = [];
input.map((value) => {
  list.push(value);
});

/* 구현 코드 */
const checkDiff = (arr, filter) => {
  const result = [];
  filter.map((value) => {
    if (arr.indexOf(value) != -1) result.push(value);
  });
  return result;
};

const detectNumber = (list) => {
  if (list[1][1] == '#' || list[3][1] == '#') return -1;

  let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if ((list[0][0] = '#')) {
    result = [0, 2, 3, 4, 5, 6, 7, 8, 9];
  } else if ((list[0][1] = '#')) {
    result = [0, 2, 3, 5, 6, 7, 8, 9];
  }

  if (list[1][0] == '#' && list[1][2] == '#') {
    result = checkDiff(result, [0, 4, 8, 9]);
  } else if (list[1][0] == '#') {
    result = checkDiff(result, [5, 6]);
  } else if (list[1][2] == '#') {
    result = checkDiff(result, [1, 2, 3, 7]);
  }

  if (list[2][1] == '#') {
    result = checkDiff(result, [0, 4, 8, 9]);
  } else if (list[2][0] == '#') {
    result = checkDiff(result, [5, 6]);
  } else if (list[2][2] == '#') {
    result = checkDiff(result, [1, 2, 3, 7]);
  }
};

const solution = (list) => {
  const boardLen = 4 * list.shift()[0] - 1;
  const boardInfo = [];
  let index = list.shift();
  while (index) {
    console.log(index.trim());
    boardInfo.push(index.trim());
    index = list.shift();
  }
  let result = 0;
  return result;
};

console.log(solution(list));
