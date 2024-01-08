// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { forEach } from "./primeNeighbors.json";
import { writeFileSync } from "fs";
// 99999587  ||  99999589   Previous: 99999539  ||  99999541    Difference: 48 true
// current   ||  +2         Previous: prevNum   ||  prevNum+2   Difference: df div6
var theGreatNeighborString = "";
var prev_data;
var divided_six = false;
var primeData = [];
forEach(function (data) {
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
        theGreatNeighborString += ""
            .concat(data.number, "  ||  ")
            .concat(data.neighbor.number, "   Previous: ")
            .concat(prev_data.number, "  ||  ")
            .concat(prev_data.neighbor.number, "    Difference: ")
            .concat(data.number - prev_data.number, " ")
            .concat(divided_six, "\n");
    } else {
        theGreatNeighborString += ""
            .concat(data.number, "  ||  ")
            .concat(data.neighbor.number, "   \n");
    }
    prev_data = data;
});
writeFileSync("extractedNeighbors.txt", theGreatNeighborString);
writeFileSync("extractedNeighbors.json", JSON.stringify(primeData));
