import { data } from "./extractedNeighbors.js";
console.info("Loading script...");

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
const map = mapped(data);

var Plotly_data = [
    {
        x: Array.from(map.keys()),
        y: Array.from(map.values()),
        type: "line",
    },
];
var layout = { title: "Distribution of Distances" };
document.getElementById("avg").innerHTML = avg(difference(data));
Plotly.newPlot("tester", Plotly_data, layout);
console.info("Script loaded!");
// console.log(map.keys());
// console.log(map.values());
// console.log(map);
