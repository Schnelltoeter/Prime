import { data } from "./extractedNeighbors.js";
console.info("Loading script...");
const MILLION = 1000000;
let segment = data.filter(
    (element) =>
        element.current.number > 0 * MILLION &&
        element.current.number <= 20 * MILLION
);

function difference(data) {
    let difference = [];

    data.forEach((data) => {
        difference.push(data.difference.number);
    });
    return difference;
}

function mapped(data) {
    const map = new Map();
    let difference = [];

    data.forEach((data) => {
        difference.push(data.difference.number);
    });
    difference.forEach((num) => {
        if (map.get(num) == undefined) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    });
    const mapsort = new Map([...map.entries()].sort(([a], [b]) => a - b));
    return mapsort;
}
function avg(array) {
    var sum = array.reduce(function (partialSum, a) {
        return partialSum + a;
    }, 0);
    var test = sum / array.length;
    return test;
}
const map = mapped(segment);

console.log(map.get(30));

var Plotly_data = [
    {
        x: Array.from(map.keys()),
        y: Array.from(map.values()),
        type: "bar",
    },
];
var layout = { title: "Distribution of Distances" };
// document.getElementById("avg").innerHTML = avg(difference(data));
// Plotly.newPlot("tester", Plotly_data, layout);
// console.info("Script loaded!");
