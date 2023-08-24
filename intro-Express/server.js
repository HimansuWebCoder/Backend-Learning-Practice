// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// res.send("Helloo Node.js!");
// res.send("<h1>Hello Node.js</h1>");
// 	const user = {
// 		name: "Himansu",
// 		age: 22
// 	}
// 	res.send(user);
// });

// app.listen(3000);

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// 	res.send("getting root");
// });

// app.get("/profile", (req, res) => {
// 	res.send("getting profile");
// });

// we can use put, delete metod like this
// app.post("/profile", (req, res) => {
// 	const user = {
// 		name: "Himansu",
// 		age: 22
// 	}
// 	res.send(user);
// });

// app.listen(3000);

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// 	res.send("Hello Node.js");
// });

// app.listen(3000);

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   const user = {
//     name: "Himansu",
//     hobby: "Reading",
//   };
//   res.send(user);
// });

// app.listen(3000);


// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// 	const user = {
// 		name: "Himansu",
// 		age: 22,
// 		place: "Bhubaneswar"
// 	}
// 	res.send(user);
// 	res.send(user.name);
// 	res.send(`my name is ${user.name}, my age is ${user.age} and I am from ${user.place}`);
// });

// app.listen(3000);


const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("I am root page");
});

app.get("/profile", (req, res) => {
	res.send("I am profile page");
});

app.get("/blog", (req, res) => {
	res.send("I am blog page");
});

app.post("/fruit", (req, res) => {
	const fruit = {
		name: "mango"
	}
	res.send(fruit);
});

app.post("/person", (req, res) => {
	const name = "My name is Himansu";
	res.send(name);
});

app.listen(3000);