import * as fs from "fs";
import { PrimeNumbers } from "../factor/factor.js";

let start = Date.now();

const max: number = 1000000;
const primes: number[] = [];
const sieve: boolean[] = [];
const primeNumbers: PrimeNumbers[] = [];
var increment: number = 0;

for (let number = 2; number < max + 1; number++) {
    sieve.push(true);
}

for (let index = 0; index < Math.sqrt(sieve.length); index++) {
    if (sieve[index]) {
        increment = index + 2;
        for (
            let noPrimePos = index + increment;
            noPrimePos < sieve.length;
            noPrimePos = noPrimePos + increment
        ) {
            sieve[noPrimePos] = false;
        }
    }
}

for (let prime = 0; prime < sieve.length; prime++) {
    if (sieve[prime]) {
        primes.push(prime + 2);
    }
}

primes.forEach((num: number) => {
    var isPrime = false;
    if (primes.includes(num + 2)) {
        isPrime = true;
    }
    primeNumbers.push({
        number: num,
        isPrime: true,
        neighbor: { number: num + 2, isPrime: isPrime },
    });
});
function printPrimeNeighbors() {
    const primeNeighbors: PrimeNumbers[] = [];

    primeNumbers.forEach((prime) => {
        if (prime.neighbor.isPrime === true) {
            primeNeighbors.push(prime);
        }
    });

    return primeNeighbors;
}
fs.writeFileSync(
    "./sieve/sieve_primenumbers.json",
    JSON.stringify(primeNumbers)
);
fs.writeFileSync(
    "./sieve/sieve_primeneighbors.json",
    JSON.stringify(printPrimeNeighbors())
);

// fs.writeFileSync("./sieve/sieve_primes.json", JSON.stringify(primes));
console.log(`Time: ${Date.now() - start}ms`);
