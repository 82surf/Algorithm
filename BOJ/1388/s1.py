import sys
sys.stdin = open('input.txt')

N, M = map(int, input().split())
boards = [list(input()) for _ in range(N)]

def solution():
    row, col = 0, 0
    for i in range(N):
        for j in range(M):
            if boards[i][j] == '-':
                if j == M-1 or boards[i][j+1] != '-':
                    row += 1

    for i in range(M):
        for j in range(N):
            if boards[j][i] == '|':
                if j == N-1 or boards[j+1][i] != '|':
                    col += 1
    print(row+col)

solution()