import * as fs from "fs";

let start_date = new Date();
console.log(`Start time: ${start_date.toLocaleTimeString("de-de")}`);

export declare interface PrimeNumbers {
    number: number;
    isPrime: boolean;
    neighbor: PrimeNeighbor;
}

interface PrimeNeighbor {
    number: number;
    isPrime: boolean;
}

const primeNumbers: PrimeNumbers[] = [
    { number: 2, isPrime: true, neighbor: { isPrime: false, number: 4 } },
];
const maxPrime = 1000000;

function isPrimeNumber(number: number) {
    let isPrime = true;
    primeNumbers.forEach((prime) => {
        if (number % prime.number === 0) {
            isPrime = false;
        }
    });

    return isPrime;
}

for (let number = 3; number <= maxPrime; number += 2) {
    primeNumbers.push({
        number: number,
        isPrime: isPrimeNumber(number),
        neighbor: { number: number + 2, isPrime: isPrimeNumber(number + 2) },
    });
}

function printPrimes() {
    const primes: PrimeNumbers[] = [];

    primeNumbers.forEach((prime) => {
        if (prime.isPrime === true) {
            primes.push(prime);
        }
    });

    return primes;
}

function printPrimeNeighbors() {
    const primeNeighbors: PrimeNumbers[] = [];

    primeNumbers.forEach((prime) => {
        if (prime.isPrime === true && prime.neighbor.isPrime === true) {
            primeNeighbors.push(prime);
        }
    });

    return primeNeighbors;
}

let end_date = new Date();
console.log(`End time: ${end_date.toLocaleTimeString("de-de")}`);

fs.writeFileSync("primeNumbers.json", JSON.stringify(printPrimes()));
fs.writeFileSync("primeNeighbors.json", JSON.stringify(printPrimeNeighbors()));
