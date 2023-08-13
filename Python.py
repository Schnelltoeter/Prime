import time
primes = [2]
max_num = 1000

starttime = time.time()

for num in range(max_num + 1):
    if num > 1:
        for i in primes:
            if(num % i) == 0:
                break
        else:
            primes.append(num)
endtime = time.time()
print(primes)
print(endtime - starttime)
