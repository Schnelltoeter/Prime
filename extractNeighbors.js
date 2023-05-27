"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonData = require("./primeNeighbors.json");
var fs = require("fs");
var theGreatNeighborString = "";
var prev_data;
var divided_six = false;
jsonData.forEach(function (data) {
    if (data.number > 3) {
        if ((data.number - prev_data.number) % 6 == 0) {
            divided_six = true;
        }
        else {
            divided_six = false;
        }
        theGreatNeighborString += "".concat(data.number, "  ||  ").concat(data.neighbor.number, "   Previous: ").concat(prev_data.number, "  ||  ").concat(prev_data.neighbor.number, "    Difference: ").concat(data.number - prev_data.number, " ").concat(divided_six, "\n");
    }
    else {
        theGreatNeighborString += "".concat(data.number, "  ||  ").concat(data.neighbor.number, "   \n");
    }
    prev_data = data;
});
fs.writeFileSync("extractedNeighbors.txt", theGreatNeighborString);
