const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(PATH).toString().trim().split('\n');

const n = +input.shift();
const [p1, p2] = input
  .shift()
  .split(' ')
  .map((v) => +v);

const E = input.shift();

const edges = input.map((edge) => edge.split(' ').map((v) => +v));

const graph = Array.from({ length: n + 1 }, () => []);
for (const [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array.from({ length: n + 1 }, () => false);

let ans = -1;

/**
 *
 * @param {Number} s 시작 노드 번호
 * @param {Number} e 종료 노드 번호
 * @param {Number} d 재귀 깊이
 */
const DFS = (s, e, d) => {
  visited[s] = true;
  if (s === e) {
    ans = d;
  } else {
    for (const node of graph[s]) {
      if (!visited[node]) {
        DFS(node, e, d + 1);
      }
    }
  }
};

DFS(p1, p2, 0);
console.log(ans);
