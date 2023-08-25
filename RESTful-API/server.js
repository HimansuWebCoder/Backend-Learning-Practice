// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get("/:id", (req, res) => {
	// console.log(req.query);// localhost:2000/?name=himansu&age=22, see result in cmd
	// req.body;
	// console.log(req.headers); 
	// console.log(req.params);
	// res.send("getting root");
// });

// app.get("/:id", (req, res) => {
// 	console.log(req.params);
// 	res.status(404).send("not found");
// })

// app.use(express.static(__dirname + "/public"));

// app.listen(2000);

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// 	console.log(req.query);
// });

// app.listen(2000);


// const express = require("express");

// const app = express();

// app.get('/', (req, res) => {
// 	console.log(req.query);
// 	res.send("Getting root");
// });

// app.listen(2000);


// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
// 	console.log(req.headers);
// 	res.send("Getting root");
// });

// app.listen(2000);


// const express = require("express");

// const app = express();

// app.get("/:id", (req, res) => {
// 	console.log(req.params);
// 	res.send("getting id");
// });

// app.listen(2000);


// const express = require("express");

// const app = express();

// app.get("/:id", (req, res) => {
// 	console.log(req.params);
// 	res.status(404).send("not found");
// });

// app.listen(3000);


// const express = require("express");

// const app = express();

// app.use("/:id", (req, res) => {
// 	console.log(req.params);
// 	res.status(404).send("Not Found");
// });

// app.listen(3000);



// const express = require("express");

// const app = express();

// app.use(express.static(__dirname + "/public"));

// app.listen(3000);



// const express = require("express");

// const app = express();

// app.use(express.static(__dirname + "/public"));

// app.listen(2000);