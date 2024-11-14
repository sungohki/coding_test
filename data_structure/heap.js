/* 입력 모듈 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const list = [];
input.map((value) => {
  list.push(value.split(' ').map(Number));
});

/* 구현 코드 */
const heapify = (list, index) => {
  const pointer = list[index];
  const left = 2 * index;
  const right = 2 * index + 1;
  let best = index;
  let result = list;

  // 현재 노드를 좌측 자식 노드와 비교
  if (left <= list.length && list[best] < list[left]) best = 2 * index;
  // 현재 노드/좌측 자식 노드를 우측 자식 노드와 비교
  if (right <= list.length && list[best] < list[right]) best = 2 * index + 1;

  // 만약 현재 노드가 자식 노드보다 작은 경우
  if (best !== index) {
    list[index] = list[best];
    list[best] = pointer;
    result = heapify(list, best); // 값을 교체한 자식 노드로 재귀
  }

  return result;
};

const buildHeap = (list) => {
  let result = [-Math.max(), ...list];
  for (let index = list.length / 2; index >= 1; index--) {
    // console.log(`# index : ${index} / node : ${result[index]}`);
    result = heapify(result, index);
  }
  return result;
};

const peekNode = (list) => {
  return list[1];
};

const extractNode = (list) => {
  list[1] = list[list.length - 1];
  list.pop();
  heapify(list, 1);
  return list;
};

const increaseValue = (list, index, value) => {
  list[index] = value;
  while (index > 1) {
    // console.log(list);
    const parentIndex = Math.floor(index / 2);
    if (list[index] < list[parentIndex]) break;
    const temp = list[index];
    list[index] = list[parentIndex];
    list[parentIndex] = temp;
    index = parentIndex;
  }
  return list;
};

const insertNode = (list, value) => {
  list.push(value);
  increaseValue(list, list.length - 1, value);
  return list;
};

const deleteNode = (list, index) => {
  increaseValue(list, index, list[1] + 1);
  return extractNode(list);
};

const solution = (list) => {
  // buildHeap: 배열의 Heap 자료구조화
  const arr = list.shift();
  console.log(arr);
  const heap = buildHeap(arr);
  console.log(heap);

  console.log('---');
  // peek: Heap의 루트 노드 값 반환
  // console.log(peekNode(heap));
  // extract: Heap의 루트 노드 추출
  // console.log(extractNode(heap));
  // increaseNode: 노드 위치 조정
  // console.log(increaseValue(heap, 4, 50));
  // insert: 새로운 노드 추가
  // console.log(insertNode(heap, 100));
  // delete: 기존의 노드 제거
  // console.log(deleteNode(heap, 3));

  return arr;
};

solution(list);
