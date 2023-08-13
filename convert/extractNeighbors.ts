const jsonData = require("./primeNeighbors.json");
import * as fs from "fs";
import { PrimeNumbers } from "../factor/factor";

interface PrimeData {
    current: {
        number: number;
        next: number;
    };
    previous: {
        number: number;
        next: number;
    };
    difference: {
        number: number;
        divisible_by_6: boolean;
    };
}

// 99999587  ||  99999589   Previous: 99999539  ||  99999541    Difference: 48 true
// current   ||  +2         Previous: prevNum   ||  prevNum+2   Difference: df div6

let theGreatNeighborString = "";
let prev_data: PrimeNumbers;
let divided_six = false;
const primeData: PrimeData[] = [];

jsonData.forEach((data: PrimeNumbers) => {
    if (data.number > 3) {
        if ((data.number - prev_data.number) % 6 == 0) {
            divided_six = true;
        } else {
            divided_six = false;
        }
        primeData.push({
            current: {
                number: data.number,
                next: data.neighbor.number,
            },
            previous: {
                number: prev_data.number,
                next: prev_data.neighbor.number,
            },
            difference: {
                number: data.number - prev_data.number,
                divisible_by_6: divided_six,
            },
        });
        theGreatNeighborString += `${data.number}  ||  ${
            data.neighbor.number
        }   Previous: ${prev_data.number}  ||  ${
            prev_data.neighbor.number
        }    Difference: ${data.number - prev_data.number} ${divided_six}\n`;
    } else {
        theGreatNeighborString += `${data.number}  ||  ${data.neighbor.number}   \n`;
    }

    prev_data = data;
});

fs.writeFileSync("extractedNeighbors.txt", theGreatNeighborString);
fs.writeFileSync("extractedNeighbors.json", JSON.stringify(primeData));
