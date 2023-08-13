"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function findPrimes(n) {
    var primes = [];
    var isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (var i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (var j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return primes;
}
var start_date = new Date();
console.log("Start time: ".concat(start_date.toLocaleTimeString("de-de")));
var primes = findPrimes(100000000);
var end_date = new Date();
console.log("End time: ".concat(end_date.toLocaleTimeString("de-de")));
fs.writeFileSync("./primeNumberstest2.json", JSON.stringify(primes));
