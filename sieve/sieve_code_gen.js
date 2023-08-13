"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
const { json } = require("stream/consumers");
var max = 100000000;
var code = ``;
var trues = ``;

// initializing
code =
    code +
    `"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\nvar fs = require("fs");\nvar start_date = new Date();\nconsole.log("Start time: ".concat(start_date.toLocaleTimeString("de-de")));\nvar max = ${max};\nvar primes = [];\n`;

for (let i = 0; i < 1000; i++) {
    trues = trues + `true, `;
}
code = code + `const trues = [${trues}]\n\n`;

//array creation
for (let i = 0; i < max / 100000000; i++) {
    code = code + `const sieve${i} = []\n`;
}

// array filling
code = code + `\nfor (let j = 0; j < max / 100000000; j++) {\n`;
code = code + `    for (var number = 2; number < 100000000 + 1; number++) {\n`;
code = code + `        eval(\`sieve\${j}.push(trues);\`);\n`;
code = code + `}}`;

// code = code + `for (var index = 0; index < Math.sqrt(sieve.length); index++) {\n`

// writing
fs.writeFileSync(
    "C:/Users/Julian/Desktop/Visual Studio Projects/prime_numbers/sieb/code.js",
    code
);
