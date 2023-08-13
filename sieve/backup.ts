import * as fs from "fs";

let start_date = new Date();
console.log(`Start time: ${start_date.toLocaleTimeString("de-de")}`);

const max: number = 100000000; // Grenze
const primes: number[] = []; // primzahlen
const sieve: boolean[] = []; // Sieb
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

// console.log(sieve);
// console.log(primes);
fs.writeFileSync("./primeNumberstest.json", JSON.stringify(primes));

let end_date = new Date();
console.log(`End time: ${end_date.toLocaleTimeString("de-de")}`);
