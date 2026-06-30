#!/usr/bin/node
// #!/usr/bin/env node

const scriptArgs = process.argv;
const firstArg = parseInt(scriptArgs[2]);
const secondArg = parseInt(scriptArgs[3]);

function add (a, b) {
  console.log(a + b);
}

if (isNaN(firstArg) || isNaN(secondArg)) {
  console.log(NaN);
} else {
  add(firstArg, secondArg);
}
