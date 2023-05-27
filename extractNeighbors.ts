import * as jsonData from "./primeNeighbors.json";
import * as fs from "fs";

let theGreatNeighborString = "";
let prev_data;
let divided_six = false;

jsonData.forEach((data) => {
    if (data.number > 3) {
        if ((data.number - prev_data.number) % 6 == 0) {
            divided_six = true;
        } else {
            divided_six = false;
        }
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
