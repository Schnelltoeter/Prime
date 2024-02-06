// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { writeFileSync } from "fs";
console.time("factor");
var max = 1000000;
var primes = [];
var sieve = [];
var primeNumbers = [];
var increment = 0;
for (var number = 2; number < max + 1; number++) {
    sieve.push(true);
}
for (var index = 0; index < Math.sqrt(sieve.length); index++) {
    if (sieve[index]) {
        increment = index + 2;
        for (
            var noPrimePos = index + increment;
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
for (var index = 0; index < primes.length; index++) {
    var num = primes[index];
    var isPrime = false;
    if (num + 2 == primes[index + 1]) {
        isPrime = true;
    }
    primeNumbers.push({
        number: num,
        isPrime: true,
        neighbor: { number: num + 2, isPrime: isPrime },
    });
}
function printPrimeNeighbors() {
    var primeNeighbors = [];
    primeNumbers.forEach(function (prime) {
        if (prime.neighbor.isPrime === true) {
            primeNeighbors.push(prime);
        }
    });
    return primeNeighbors;
}
writeFileSync("./sieve/sieve_primenumbers.json", JSON.stringify(primeNumbers));
writeFileSync(
    "./sieve/sieve_primeneighbors.json",
    JSON.stringify(printPrimeNeighbors())
);
// fs.writeFileSync("./sieve/sieve_primes.json", JSON.stringify(primes));
console.timeEnd("factor");
