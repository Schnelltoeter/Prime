import { data } from "./extractedNeighbors.js";
import { prime_data } from "./sieve_primenumbers.js";
import { dft } from "./resultData.js";
var radius = [];
var theta = [];
var max_degree = 53; //if divisible by 3 or prime, will result in a line nudging around a value
var color = [];
var dftr = [];
var dftt = [];
var primes = [];
var twin_primes = [];
var twin_prime_ratio = [];
var max = 1e6;
var trace = { x: [], y: [], mode: "markers" };

for (let index = 0; index < 360; index++) {
    primes.push(0);
    twin_primes.push(0);
}

// prime numbers
for (let i = 0; i < prime_data.length; i++) {
    const prime = prime_data[i];
    if (prime.number > max) {
        break;
    }
    if (prime.number % 360 == prime.number % 360) {
        radius.push(prime.number);
        color.push("rgba(0,0,0,1)");
    }
    primes[prime.number % 360]++;
}
console.log(primes);
// prime neighbors
for (let i = 0; i < data.length; i++) {
    const Neighbor = data[i];
    if (Neighbor.current.number > max) {
        break;
    }
    if (
        Neighbor.current.number % max_degree ==
        Neighbor.current.number % max_degree
    ) {
        radius.push(Neighbor.current.number);
        color.push("rgba(255,0,0,1)");
        radius.push(Neighbor.current.next);
        color.push("rgba(255,0,0,1)");
    }
    twin_primes[Neighbor.current.number % max_degree]++;
}
console.log(twin_primes);

console.log(twin_prime_ratio);
//dft coordinates
for (let i = 0; i < dft.length; i++) {
    const element = dft[i];
    trace.x.push(element.phase);
    trace.y.push(element.amplitude);
    if (element.amplitude == 0.0008885955830607398) {
        break;
    }
}
//dft polar
for (let i = 0; i < dft.length; i++) {
    const dftelement = dft[i];
    dftr.push(dftelement.amplitude);
    dftt.push(dftelement.phase * 57.2957795);
}
var dfttype = [
    {
        type: "scatterpolar",
        mode: "markers",
        r: dftr,
        theta: dftt,
        marker: {
            color: "rgba(0,0,255,1)",
            symbol: "square",
            size: 3,
        },
    },
];
var histogramData = [];
for (let i = 0; i < radius.length; i++) {
    theta.push((radius[i] % max_degree) * (360 / max_degree));
    histogramData.push({
        radius: radius[i],
        degree: radius[i] % max_degree,
        color: color[i],
    });
}

var radialType = [
    {
        type: "scatterpolar",
        mode: "markers",
        r: radius,
        theta: theta,
        marker: {
            color: color,
            symbol: "square",
            size: 3,
        },
    },
];

var radialLayout = {
    autosize: false,
    width: 730, // value can be changed depending on the required size
    height: 730, // although both values should be equal for a square positioning
    domain: {
        x: [0.6, 1],
        y: [0, 1],
    },
    radialaxis: {
        tickfont: {
            size: 20,
        },
    },
    angularaxis: {
        tickfont: {
            size: 20,
        },
    },
};

function mapped(data) {
    const map = new Map();
    data.forEach((num) => {
        const deg = num.degree;
        if (map.get(deg) == undefined) {
            map.set(deg, 1);
        } else {
            map.set(deg, map.get(deg) + 1);
        }
    });
    const mapsort = new Map([...map.entries()].sort(([a], [b]) => a - b));
    return mapsort;
}

var histogramLayout = { barmode: "group" };

const blackPoints = mapped(
    histogramData.filter((hData) => hData.color === "rgba(0,0,0,1)")
);
const redPoints = mapped(
    histogramData.filter((hData) => hData.color === "rgba(255,0,0,1)")
);

var histogramType = [
    {
        x: Array.from(blackPoints.keys()),
        y: Array.from(blackPoints.values()),
        type: "bar",
        name: "Prime numbers",
    },
    {
        x: Array.from(redPoints.keys()),
        y: Array.from(redPoints.values()),
        type: "bar",
        name: "Prime number twins",
    },
];
Array.from(redPoints.keys()).forEach((redKey) => {
    twin_prime_ratio.push(redPoints.get(redKey) / blackPoints.get(redKey));
});
var lineRatio = [
    {
        x: Array.from(redPoints.keys()),
        y: twin_prime_ratio,
        type: "scatter",
    },
];
var lineLayout = {
    yaxis: { range: [0, 1] },
};
Plotly.newPlot("myDiv", radialType, radialLayout);
Plotly.newPlot("histogram", histogramType, histogramLayout);
Plotly.newPlot("ratio", lineRatio, lineLayout);
// Plotly.newPlot("test", dfttype, layout);
