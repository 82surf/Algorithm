const PATH = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [V, E, ...edges] = require('fs')
  .readFileSync(PATH)
  .toString()
  .trim()
  .split('\r\n');

V = +V;
edges = edges.map((edge) => edge.split(' ').map((val) => +val));

const graph = Array.from({ length: V + 1 }, () => []);

for (const [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array.from({ length: V + 1 }, () => 0);

let ans = 0;
const DFS = (s) => {
  visited[s] = 1;
  for (const node of graph[s]) {
    if (!visited[node]) {
      ans++;
      DFS(node);
    }
  }
};

DFS(1);
console.log(ans);
