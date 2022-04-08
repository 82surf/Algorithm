# 정답
N = int(input())

def isPrimeNum(num):
    i = 2
    while i**2 <= num:
        if num % i == 0:
            return False
        i += 1
    return True

def DFS(n, ans):
    if n == N:
        for num in ans:
            print(num)
    else:
        next_arr = []
        for num in ans:
            for i in [1, 3, 7, 9]:
                tmp = num * 10 + i
                if isPrimeNum(tmp):
                    next_arr.append(tmp)
        DFS(n+1, next_arr)


DFS(1, [2, 3, 5, 7])
