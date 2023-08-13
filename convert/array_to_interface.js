"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonData = require("../sieve/sieve_primes.json");
var fs = require("fs");
var primeNumbers = [];
jsonData.forEach(function (num) {
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
    var primeNeighbors = [];
    primeNumbers.forEach(function (prime) {
        if (prime.neighbor.isPrime === true) {
            primeNeighbors.push(prime);
        }
    });
    return primeNeighbors;
}
fs.writeFileSync("./sieve/sieve_primenumbers.json", JSON.stringify(primeNumbers));
fs.writeFileSync("./sieve/sieve_primeneighbors.json", JSON.stringify(printPrimeNeighbors()));
