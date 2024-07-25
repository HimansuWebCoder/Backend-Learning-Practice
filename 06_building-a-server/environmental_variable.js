const app = require("http")
.createServer((req, res) => res.send("oh hi there!"));

// app.listen(3000, () => {
// 	console.log(`Server is listening on port 3000`);
// })

// ENVIRONMENTAL VARIABLE

// const PORT = process.env.PORT // Convention here is to capitalize the variable
const DATABASE_URL = process.env.DATABASE_URL // set in terminal bash DATABASE_URL=123 node environmental_variable.js
app.listen(3000, () => {
	console.log(`Server is listening on port ${DATABASE_URL}`); // Server is listening on port undefined (now)
});

// const a = 1;
// const b = 2;

// we can create our own environvironmental variable
// console.log(process.env); 
// console.log(3000); // now after set PORT=3000 node environmental.js 
// this show Server is listening on port 3000

console.log(3000) // after set DATABASE_URL this show Server listening on port 123 
// set also play with this like DATABASE_URL='HELLO' like this
// this show Server is listening on port HELLO
// every environment will have its own way of declaring env variables