import { prime_data } from "./sieve_primenumbers.js";
let primes = [];
let distances = [];
var index_primes = 0;
var color = [];
var isPrimeNeighbor = false;
let lastPrimeNeighbor = 0;
let lastPrime;
let Number_Neighbor = 0;

console.log("Distances loading...");

const MILLION = 1000000;

let segment = prime_data.filter(
    (element) => element.number > 9 * MILLION && element.number <= 10 * MILLION
);

console.log(segment.length);
segment.forEach((prime) => {
    primes.push(prime.number);
    if (isPrimeNeighbor) {
        color.push("rgba(0,0,255,1)");
        distances.push(prime.number - lastPrimeNeighbor.number);
        lastPrimeNeighbor = prime;
        Number_Neighbor++;
    } else {
        color.push("rgba(255,0,0,1)");
        distances.push(10);
    }
    isPrimeNeighbor = prime.neighbor.isPrime;
    lastPrime = prime;
});

// for (
//     let prime = prime_data[index_primes];
//     index_primes + 1 < prime_data.length;
//     index_primes++
// ) {
//     if (Number(prime.number) >= 9 * MILLION) {
//         testCounter++;
//         primes.push(prime.number);
//         if (isPrimeNeighbor) {
//             color.push("rgba(0,0,255,1)");
//             distances.push(prime.number - lastPrimeNeighbor.number);
//             lastPrimeNeighbor = prime;
//             Number_Neighbor++;
//         } else {
//             color.push("rgba(255,0,0,1)");
//             distances.push(10);
//         }
//         isPrimeNeighbor = prime.neighbor.isPrime;
//         lastPrime = prime;
//     }
// }

console.log(primes);
console.log(distances);
var Plotly_data = [
    {
        x: primes,
        y: distances,
        marker: {
            color: color,
        },
        type: "bar",
    },
];
console.log(Number_Neighbor);
var layout = { title: "Distances" };
Plotly.newPlot("distances", Plotly_data, layout);
console.log(Plotly_data);
console.log("Distances loaded");
