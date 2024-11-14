// https://www.acmicpc.net/problem/1916

// 입력 받기
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, M, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

N = +N; // 도시의 개수
M = +M; // 버스의 개수
let [A, B] = input.pop().split(' ').map(Number);
input = input.map((v) => v.split(' ').map(Number));

let busInfo = Array.from({ length: N + 1 }, () => []);
for (let [a, b, c] of input) {
  busInfo[a].push({ nextNode: b, cost: c });
}

let cost = Array.from({ length: N + 1 }).fill(Infinity);
let visited = Array.from({ length: N + 1 }).fill(false);

// console.log(dist);
// console.log(visited);

function findSmallestNode() {
  let minCost = Infinity;
  let minIndex = 0;
  for (let index = 1; index <= N; index++) {
    if (!visited[index] && cost[index] < minCost) {
      // 방문한 적 없고 최소 코스트보다 작은 경우, 최소 코스트 최신화
      minCost = cost[index];
      minIndex = index;
    }
  }
  return minIndex;
}

function solution() {
  // 시작 점 A 전처리
  cost[A] = 0;
  visited[A] = true;

  // console.log(busInfo[A]);
  // console.log(cost);
  busInfo[A].forEach((value) => {
    cost[value.nextNode] = Math.min(cost[value.nextNode], value.cost);
  });
  // console.log(cost);

  for (let index = 1; index <= N; index++) {
    let nowNode = findSmallestNode();
    visited[nowNode] = true;

    busInfo[nowNode].forEach((next) => {
      const acc = cost[nowNode] + next.cost;
      if (acc < cost[next.nextNode] && !visited[next.nextNode]) {
        cost[next.nextNode] = acc;
      }
    });
  }
}

solution();

// console.log(cost);
// console.log(cost[B]);
