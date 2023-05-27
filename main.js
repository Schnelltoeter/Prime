"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var start_date = new Date();
console.log("Start time: ".concat(start_date.toLocaleTimeString("de-de")));
var primeNumbers = [
    { number: 2, isPrime: true, neighbor: { isPrime: false, number: 4 } },
];
var maxPrime = 1000000;
function isPrimeNumber(number) {
    var isPrime = true;
    primeNumbers.forEach(function (prime) {
        if (number % prime.number === 0) {
            isPrime = false;
        }
    });
    return isPrime;
}
for (var number = 3; number <= maxPrime; number += 2) {
    primeNumbers.push({
        number: number,
        isPrime: isPrimeNumber(number),
        neighbor: { number: number + 2, isPrime: isPrimeNumber(number + 2) },
    });
}
function printPrimes() {
    var primes = [];
    primeNumbers.forEach(function (prime) {
        if (prime.isPrime === true) {
            primes.push(prime);
        }
    });
    return primes;
}
function printPrimeNeighbors() {
    var primeNeighbors = [];
    primeNumbers.forEach(function (prime) {
        if (prime.isPrime === true && prime.neighbor.isPrime === true) {
            primeNeighbors.push(prime);
        }
    });
    return primeNeighbors;
}
var end_date = new Date();
console.log("End time: ".concat(end_date.toLocaleTimeString("de-de")));
fs.writeFileSync("primeNumbers.json", JSON.stringify(printPrimes()));
fs.writeFileSync("primeNeighbors.json", JSON.stringify(printPrimeNeighbors()));
