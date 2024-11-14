// https://www.acmicpc.net/problem/1106

/* 입력 모듈 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const list = [];
input.map((value) => {
  list.push(value.split(' ').map(Number));
});

/* 구현 코드 */
const sortByCost = (N, list) => {
  list.sort((a, b) => a.cost - b.cost);
  list.sort((a, b) => a.cost / a.value - b.cost / b.value);
  return list;
};

const temp = (C, index, list) => {
  return;
};

const calculation = (C, N, list) => {
  let result = 0;
  let index = 0;
  while (C > 0) {
    const num = Math.floor(C / list[index].value);
    C = C % list[index].value;
    if (num) {
      result += num * list[index].cost;
      index++;
    }
  }
  return result;
};

const solution = (input) => {
  const [C, N] = input.shift();
  const list = [];
  for (let i = 0; i < N; i++) {
    const temp = input.shift();
    list.push({ cost: temp[0], value: temp[1] });
  }
  let result = calculation(C, N, sortByCost(N, list));

  // console.log(sortByCost(N, list));

  console.log(result);
  return result;
};

solution(list);
