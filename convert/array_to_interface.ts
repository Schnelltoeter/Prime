const jsonData = require("../sieve/sieve_primes.json");
import * as fs from "fs";
import { PrimeNumbers } from "../factor/factor.js";

const primeNumbers: PrimeNumbers[] = [];

jsonData.forEach((num: number) => {
    var isPrime = false;
    if (num + 2 in jsonData) {
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
