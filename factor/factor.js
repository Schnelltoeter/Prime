"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var start = Date.now();
var primeNumbers = [
    { number: 2, isPrime: true, neighbor: { isPrime: false, number: 4 } },
];
var maxPrime = 1000000;
function isPrimeNumber(number) {
    var isPrime = true;
    var sqrt = Math.sqrt(number);
    for (var index = 0; index < primeNumbers.length; index++) {
        var prime = primeNumbers[index];
        if (prime.number > sqrt) {
            break;
        }
        if (number % prime.number === 0) {
            isPrime = false;
        }
    }
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
console.log("Time: ".concat(Date.now() - start));
fs.writeFileSync("primeNumbers.json", JSON.stringify(printPrimes()));
fs.writeFileSync("primeNeighbors.json", JSON.stringify(printPrimeNeighbors()));