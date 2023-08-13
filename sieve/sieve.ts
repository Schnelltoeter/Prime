import * as fs from "fs";
import { PrimeNumbers } from "../factor/factor.js";

let start = Date.now();

const max: number = 10000000;
const primes: number[] = [];
const sieve: boolean[] = [];
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

fs.writeFileSync("./sieve/sieve_primes.json", JSON.stringify(primes));
console.log(`Time: ${Date.now() - start}ms`);
