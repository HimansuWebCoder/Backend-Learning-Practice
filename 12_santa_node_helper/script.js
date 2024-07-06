const fs = require("fs");
fs.readFile("./hello.txt", (err, data) => {
	console.time("funchallenge");
	if (err) {
		console.log("Error");
	}
	console.log("Async", data.toString("utf-8"));
	console.timeEnd("funchallenge");
});

const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());