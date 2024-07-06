const response = await fetch("https://jsonplaceholder.typicode.com/users");

const data = await response.json();

console.log(data);

//?SyntaxError: await is only valid in async functions and the top level bodies of modules
