import { readFileSync } from "fs";

const loadJSON = (path) =>
    JSON.parse(readFileSync(new URL(path, import.meta.url)));

// const countries = loadJSON('./data/countries.json');

const primeNeighborsSieve = loadJSON("../sieve/sieve_primeneighbors.json");
const primeNeighborsFactor = loadJSON("../factor/factor_primeNeighbors.json");

if (primeNeighborsSieve.length === primeNeighborsFactor.length) {
    console.log("Length matching!");

    let matching = true;

    for (let i = 0; i < primeNeighborsSieve.length; i++) {
        const diff =
            primeNeighborsSieve[i].number - primeNeighborsFactor[i].number;
        switch (diff) {
            case 0:
                break;
            default:
                matching = false;
                console.log("NON-MATCHING PRIME NUMBERS!");
        }
    }

    if (matching) {
        console.log("Prime Numbers matching");
    }
} else {
    console.log("Length not matching!");
}
