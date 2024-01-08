import { data } from "./extractedNeighbors.js";
let primeNeighbors = [];
let distances = [];

console.log("Distances loading...");

for (let index = 0; index < data.length; index++) {
    const dataset = data[index];
    if (dataset.current.next > 2000) {
        break;
    }
    primeNeighbors.push(dataset.current.number);
    distances.push(dataset.difference.number);
    primeNeighbors.push(dataset.current.next);
    distances.push(dataset.difference.number);
}
console.log(primeNeighbors);
console.log(distances);
var Plotly_data = [
    {
        x: primeNeighbors,
        y: distances,
        type: "bar",
    },
];
Plotly.newPlot("distances", Plotly_data);
console.log(Plotly_data);
console.log("Distances loaded");
