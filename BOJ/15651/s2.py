# 정답

N, M = map(int, input().split())

arr = [0] * M

def DFS(curr):
    if curr == M:
        print(' '.join(arr))
        return
    else:
        for i in range(1, N+1):
            arr[curr] = str(i)
            DFS(curr + 1)

DFS(0)