## Node Learning Step by Step
# Backend Learning (JS)
```javascript 1 + 1
"Himansu"
console.log("Hello Node.js")
Boolean(2)
Boolean(2 === 2)
Boolean(2 == "2")
global
global.fetch
document
process.exit()
global.setTimeout
```

## chrome dev tools check
```javascript globalThis
globalThis === window
globalThis
window // in node show not defined
```
// instead node uses
global
module 
ES6 Module
import - SyntaxError: Cannot use import statement outside a module

convert script.js, script2.js to script.mjs, script2.mjs

## npm init -y , package.json install
type-module
"type": "module"

top-level-await
SyntaxError: await is only valid in async functions and the top level bodies of modules

fs module
http module
("fs").readFile

## build a server
resp.setHeader
resp.end
headers, url, method
"Content-Type", "text/html"
"Content-Type", "application/json"
res.end(JSON.stringify(obj))
res.headers
res.url
res.method

## express install- npm install express

res.send

middleware, app.use-keep going down all get/post/put/delete passes the next function (generate express)

postman- body-parser
install- npm install body-parser

## RESTful-API
/profile

Node-File-System-Module
readFile- asynchronous function
readFileSync- synchronous
