// const http = require("http"); // built-in node module

// const server = http.createServer(() => {
	// console.log("I hear you Himansu, I am Node.js");
// 	console.log("I hear you!. thanks for the request.");
// });

// server.listen(3000);

// const http = require("http");

// const server = http.createServer((request, response) => {
// 	response.setHeader("Content-Type", "text/html");
// 	response.end("<h1>Hellloooo Node.js</h1>");
// })

// server.listen(3000);


// const http = require("http");

// const server = http.createServer((request, response) => {
// 	console.log("headers", request.headers);
// 	console.log("method", request.method);
// 	console.log("url", request.url);
// 	const user = {name: "Himansu", hobby: "Reading"};
// 	response.setHeader("Content-Type", "text/html");
// 	response.setHeader("Content-Type", "application/json");
// 	response.end(JSON.stringify(user));
// })

// server.listen(3000);

// const http = require("http");

// const server = http.createServer((req, res) => {
// 	console.log("Hellooo I am learning Node.js");
// });

// server.listen(2000);

// const http = require("http");

// const server = http.createServer((req, res) => {
// 	res.setHeader("Content-Type", "text/html");
// 	res.end("<h1>Hiii Node.js</h1>");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
// 	console.log("Headers", req.headers);
// 	console.log("Method", req.method);
// 	console.log("URL", req.url);
// });

// server.listen(3000);

// const http = require("http");

// const server = http.createServer((req, res) => {
// 	console.log("headers", req.headers);
// 	console.log("url", req.url);
// 	console.log("method", req.method);
// 	res.setHeader("Content-Type", "text/html");
// 	res.end("<h1>Hello Node.js, I am learning you!");
// });

// server.listen(3000);


// server.listen(3000);

// const http = require("http");

// const server = http.createServer((req, res) => {
// 	const user = {
// 		name: "Himansu",
// 		age: 22
// 	}
// 	res.setHeader("Content-Type", "application/json");
// 	res.end(JSON.stringify(user));
// });

// server.listen(3000);

// const http = require("http");

// const server = http.createServer((req, res) => {
// 	const user = {
// 		name: "Himansu",
// 		age: 22,
// 		place: "Bhubaneswar"
// 	}
// 	res.setHeader("Content-Type", "application/json");
// 	res.end(JSON.stringify(user));
// 	res.end(JSON.stringify(user.name));
// 	res.end(JSON.stringify(`My age is ${user.age}`));
// 	res.end(JSON.stringify(`${user.name}, ${user.place}`));
// 	res.end(JSON.stringify(`Hii my name is ${user.name}, my age is ${user.age} and I am from ${user.place}`));
// });

// server.listen(2000);