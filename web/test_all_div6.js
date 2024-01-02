import { data } from "./extractedNeighbors.js";
data.forEach((dataset) => {
    if (dataset.difference.divisible_by_6 == false) {
        console.log(dataset);
    }
});
