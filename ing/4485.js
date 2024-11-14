// https://www.acmicpc.net/problem/4485

/* 입력 모듈 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const list = [];
input.map((value) => {
  list.push(value.split(' ').map(Number));
});

/* 구현 코드 */
const temp = (x, y, list) => {
  const len = list.length;
  let min = 10;
  let result;
  const up = y > 0 ? list[y - 1][x] : 10;
  const down = y < len ? list[y + 1][x] : 10;
  const left = x > 0 ? list[y][x - 1] : 10;
  const right = x < len ? list[y][x + 1] : 10;
};

const solution = (list) => {
  let number = 1;
  while (list[0][0]) {
    const N = list.shift()[0];
    const caveMap = [];
    for (let index = 0; index < N; index++) caveMap.push(list.shift());
    let result = 0;
    let x = 0;
    let y = 0;

    while (caveMap[N - 1][N - 1] === 10) {}

    //
    console.log(caveMap);
    console.log(`Problem ${number++}: ${result}`);
  }
};

solution(list);
