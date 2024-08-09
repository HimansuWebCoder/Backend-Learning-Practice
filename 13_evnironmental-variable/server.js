// const app = require('http')
// .createServer((req, res) => res.send('oh hi there!'));


// app.listen(3000, () => {
// 	console.log(`Server is listening on port 3000`);
// });

// const a = 1;
// const b = 2;
// // these are variable in this environment
// // environmental variable own variable
// // specific location in the file
// // it is a concept

// console.log(process.env);

// const app = require('http')
// .createServer((req, res) => res.send('oh hi there!'));

// const PORT = process.env.PORT // convention here is to capitalize the variable
// app.listen(PORT, () => {
// 	console.log(`Server is listening on port ${process.env.PORT}`);
// });

// console.log(process.env);

// add PORT=3000 node server.js in bash terminal
// or 3050 play with this little bit
// but in production something look like this 
// const PORT = process.env.DATABASE_URL

const app = require('http')
.createServer((req, res) => res.send('oh hi there!'));

const DATABASE_URL = process.env.DATABASE_URL
app.listen(3000, () => {
	console.log(`Server is listening on port ${DATABASE_URL}`);
});

// add DATABASE_URL=123 node server.js
// show Server is listening on port 123

console.log(3000);

// this port kept be secret in production where this run
// dynamically run this and this would secure

// Every environment will have its own way of declaring env variables