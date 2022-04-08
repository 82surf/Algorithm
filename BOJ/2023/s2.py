# 시간 초과

N = int(input())

primeNums = ['1', '2', '3', '5', '7', '9']
arr = [0] * N

def isPrimeNum(num):
    for i in range(2, num//2):
        if num % (i*2-1) == 0:
            return False
    else:
        return True


def isValid(numStr):
    for i in range(1, len(numStr)+1):
        if not isPrimeNum(int(numStr[0:i])):
            return False
    else:
        return True

def DFS(curr):
    if curr == N:
        if sum(list(map(int, arr))) % 3 == 0:
            return
        ans = ''.join(arr)
        if isValid(ans):
            print(ans)
        return
    else:
        for n in primeNums:
            if curr == 0 and n == '1':
                continue
            if curr == 0 and n == '9':
                continue
            if curr != 0 and n == '2':
                continue
            arr[curr] = n
            DFS(curr + 1)

DFS(0)
