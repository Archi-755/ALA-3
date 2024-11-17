console.log("Hello, world!");
console.log("Placeholder index.js file is running.");
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './src/index.js');
console.log("Resolved file path:", filePath);

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error("File not found or inaccessible:", err.message);
    } else {
        console.log("File exists and is accessible.");
    }
});
