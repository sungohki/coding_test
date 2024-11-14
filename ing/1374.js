// https://www.acmicpc.net/problem/1374

/* 입력 모듈 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const list = [];
input.map((value) => {
  list.push(value.split(' ').map(Number));
});

/* 구현 코드 */

const test = (list) => {
  if (!list.length) return 0;
  let temp = list.shift()[2];
  for (let index = 0; index < list.length; index++) {
    if (temp <= list[index][1]) {
      temp = list.splice(index, 1)[2];
      index--;
    }
  }
  return test(list) + 1;
};

const solution = (list) => {
  const N = list.shift()[0];
  const classList = [];
  let result = 0;
  for (let index = 0; index < N; index++) classList.push(list.shift());
  classList.sort((a, b) => a[2] - b[2]).sort((a, b) => a[1] - b[1]);
  result = test(classList);
  return result;
};

console.log(solution(list));
