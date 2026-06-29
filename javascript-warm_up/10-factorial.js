#!/usr/bin/env node
// #!/usr/bin/node

const scriptArgs = process.argv;
const firstArg = parseInt(scriptArgs[2]);

function factorial (n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(firstArg));
