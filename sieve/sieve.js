// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { writeFileSync } from "fs";
var max = 1000000;
var runs = 1;
var durations = [];
for (var i = 0; i < runs; i++) {
    const start = performance.now();
    runSieve(max);
    const end = performance.now();
    durations[i] = end - start;
}
var primeNumbers = runSieve(max);

writeFileSync("./sieve/sieve_primenumbers.json", JSON.stringify(primeNumbers));
writeFileSync(
    "./sieve/sieve_primeneighbors.json",
    JSON.stringify(printPrimeNeighbors(primeNumbers))
);
var averageTime = 0;
durations.forEach((duration) => (averageTime += duration));
averageTime /= runs;
durations = durations.sort((a, b) => (a < b ? -1 : 1));
console.log(`Min: ${durations[0].toFixed(10)} ms`);
console.log(`Max: ${durations[durations.length - 1].toFixed(10)} ms`);
console.log(
    `Median: ${durations[Math.floor(durations.length / 2)].toFixed(10)} ms`
);
console.log(`Average runtime: ${averageTime.toFixed(10)} ms`);
// fs.writeFileSync("./sieve/sieve_primes.json", JSON.stringify(primes));

function runSieve(max) {
    var primes = [];
    var sieve = Array(max - 2).fill(true);
    var increment = 0;
    // for (var number = 2; number < max + 1; number++) {
    //     sieve.push(true);
    // }
    var noPrimePos = 0;
    for (var index = 0; index < Math.sqrt(sieve.length); index++) {
        if (sieve[index]) {
            increment = index + 2;
            for (
                noPrimePos = index + increment;
                noPrimePos < sieve.length;
                noPrimePos = noPrimePos + increment
            ) {
                sieve[noPrimePos] = false;
            }
        }
    }
    for (var prime = 0; prime < sieve.length; prime++) {
        if (sieve[prime]) {
            primes.push(prime + 2);
        }
    }
    var primeNumbers = Array(primes.length);
    for (var index = 0; index < primes.length; index++) {
        var num = primes[index];
        var isPrime = num + 2 == primes[index + 1];
        primeNumbers[index] = {
            number: num,
            isPrime: true,
            neighbor: { number: num + 2, isPrime: isPrime },
        };
    }
    return primeNumbers;
}

function printPrimeNeighbors(primeNumbers) {
    var primeNeighbors = [];
    primeNumbers.forEach(function (prime) {
        if (prime.neighbor.isPrime === true) {
            primeNeighbors.push(prime);
        }
    });
    return primeNeighbors;
}
