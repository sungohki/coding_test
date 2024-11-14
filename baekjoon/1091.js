// https://www.acmicpc.net/problem/1091

/* 입력 모듈 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const list = [];
input.map((value) => {
  list.push(value.split(' ').map(Number));
});

/* 구현 코드 */

const checkSuccess = (N, cards) => {
  for (let index = 0; index < N; index++)
    if (cards[index] !== index % 3) return false;
  return true;
};

const checkAnswer = (N, cards, initial) => {
  for (let i = 0; i < N; i++) if (cards[i] !== initial[i]) return false;
  return true;
};

const solution = (list) => {
  const N = list.shift()[0]; // 카드의 개수
  const P = list.shift();
  const S = list.shift();
  let result = -1;
  if (checkSuccess(N, P)) return 0;

  const shuffledPack = [...P];
  let count = 0;
  try {
    while (1) {
      const temp = [...shuffledPack];
      for (let index in S) shuffledPack[S[index]] = temp[index];
      count++;
      if (checkSuccess(N, shuffledPack)) {
        result = count;
        break;
      }
      if (checkAnswer(N, shuffledPack, P)) break;
    }
  } catch (e) {
    console.error(e);
  }
  return result;
};

console.log(solution(list));
console.log(solution(list));
