import jsonData from "http://127.0.0.1:5500/web/extractedNeighbors.js";
console.info("Loading script...");

function difference(jsonData) {
    let difference = [];

    jsonData.forEach((data) => {
        difference.push(data.difference.number);
    });
    return difference;
}

function mapped(jsonData) {
    const map = new Map();
    let difference = [];

    jsonData.forEach((data) => {
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
const map = mapped(jsonData);

var data = [
    {
        x: Array.from(map.keys()),
        y: Array.from(map.values()),
        type: "line",
    },
];
document.getElementById("avg").innerHTML = avg(difference(jsonData));
Plotly.newPlot("tester", data);
console.info("Script loaded!");
// console.log(map.keys());
// console.log(map.values());
console.log(map);
