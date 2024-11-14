// https://www.acmicpc.net/problem/1083

/* 입력 모듈 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const list = [];
input.map((value) => {
  list.push(value.split(' ').map(Number));
});

/* 구현 코드 */
const solution = (list) => {
  const N = list.shift()[0]; // 배열의 크기
  const V = list.shift(); // 배열
  let S = list.shift()[0]; // 정렬 가능 횟수
  if (N === 1) return V;

  let sortedIndex = 0;
  while (S > 0 && sortedIndex < N - 1) {
    let max = sortedIndex;

    for (let index = sortedIndex + 1; index < sortedIndex + S + 1; index++) {
      if (index >= N) break;
      if (V[max] > V[index]) continue;
      if (V[max] < V[index]) max = index;
    }

    for (let index = max; index > sortedIndex; index--) {
      const temp = V[index];
      V[index] = V[index - 1];
      V[index - 1] = temp;
      S--;
      if (S <= 0) break;
    }
    sortedIndex++;
  }
  return V;
};

console.log(solution(list).join(' '));
