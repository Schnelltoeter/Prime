import { data as neighbor_data } from "./extractedNeighbors.js";
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

for (
    let prime = prime_data[index_primes];
    prime.number < 1000000;
    index_primes++
) {
    prime = prime_data[index_primes];
    primes.push(prime.number);
    if (isPrimeNeighbor) {
        color.push("rgba(0,0,255,1)");
        distances.push(prime.number - lastPrimeNeighbor.number);
        lastPrimeNeighbor = prime;
        Number_Neighbor++;
    } else {
        color.push("rgba(222,45,38,1)");
        distances.push(10);
    }
    isPrimeNeighbor = prime.neighbor.isPrime;
    lastPrime = prime;
}

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
