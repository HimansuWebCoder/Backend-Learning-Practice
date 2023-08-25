// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
// 	res.send("getting root");
// });

// app.get("/profile", (req, res) => {
// 	res.send("getting profile");
// });

// app.post("/profile", (req, res) => {
// 	console.log(req.body);
// 	const user = {
// 		name: "Himansu",
// 		hobby: "Reading"
// 	}
// 	res.send(user);
// 	res.send("Succeed");
// });

// app.listen(3000);

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// 	res.send("I am root");
// });

// app.get("/profile", (req, res) => {
// 	res.send("I am profile");
// });

// app.post("/app", (req, res) => {
// 	const user = {
// 		name: "Himansu",
// 		age: 22
// 	}
// 	res.send(user);
// })

// app.listen(3000);

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// 	res.send("I am root");
// });

// app.get("/profile", (req, res) => {
// 	res.send("I am profile");
// });

// app.post("/app", (req, res) => {
// 	res.send(user); // user is not defined slow put value in postman name : rinky in urlencoded
// })

// app.listen(3000);


// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

// app.get("/", (req, res) => {
// 	res.send("I am root");
// });

// app.get("/profile", (req, res) => {
// 	res.send("I am profile");
// });

// app.post("/app", (req, res) => {
// 	console.log(req.body);
// 	const user = {
// 		name: "Himansu",
// 		age: 22
// 	}
// 	res.send(user);
// });

// app.listen(3000);

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

// app.post("/app", (req, res) => {
// 	console.log(req.body);
// 	const user = {
// 		name: "Himansu",
// 		age: 33
// 	}
// 	res.send(user);
// });

// app.listen(3000); // result {}

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

// app.post("/app", (req, res) => {
// 	console.log(req.body);
// });

// app.listen(3000); // {}


// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

// app.post("/app", (req, res) => {
// 	console.log(req.body);
// });

// app.listen(3000); // {name : "sipu"} postman key-value

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.post("/app", (req, res) => {
// 	console.log(req.body);
// });

// app.listen(3000); // {study : "javascript"} postman raw, json value

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.post("/app", (req, res) => {
// 	console.log(req.body);
// 	res.send("Succeed");
// });

// app.listen(3000); // succeed in postman and result in cmd

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
// 	res.send("I am root");
// });

// app.get("/profile", (req, res) => {
// 	res.send("I am profile");
// });

// app.post("/blog", (req, res) => {
// 	console.log(req.body);
// 	const fruit = {
// 		name: "Mango",
// 		place: "Dhenkanal"
// 	}
// 	res.send(fruit);
// 	res.send("Succeed");
// });

// app.listen(3000);

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
// 	res.send("I am root page");
// });

// app.get("/profile", (req, res) => {
// 	res.send("I am profile page");
// });

// app.post("/app", (req, res) => {
// 	console.log(req.body);
// 	const user = {
// 		name: "Himansu",
// 		hobby: "Coding"
// 	}
// 	res.send(user);
// 	res.send("Succeed");
// });

// app.listen(3000);

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("I am root page");
// });

// app.get("/profile", (req, res) => {
//   res.send("I am profile page");
// });

// app.post("/application", (req, res) => {
//   console.log(req.body);
//   const user = {
//     name: "Himansu",
//     hobby: "reading",
//   };
//   res.send(user);
//   res.send("Succeed");
// });

// app.listen(3000);


// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
// 	res.send("I am root router page");
// });

// app.get("/profile", (req, res) => {
// 	res.send("I am profile router page");
// });

// app.post("/blog", (req, res) => {
// 	console.log(req.body);
// 	const fruit = {
// 		name: "mango",
// 		plcae: "bhubaneswar"
// 	}
// 	res.send(fruit);
// 	res.send("Succeed");
// });

// app.listen(3000);

// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.post("/app", (req, res) => {
// 	console.log(req.body);
// 	const user = {
// 		name: "Sipu",
// 		age: 18
// 	}
// 	res.send(user);
// });

// app.listen(3000);