#!/usr/bin/node
// #!/usr/bin/env node

const rawArgs = process.argv.slice(2);
const numbers = rawArgs.map(Number);

if (numbers <= 1) {
  console.log(0);
} else {
  numbers.sort((a, b) => b - a);
  console.log(numbers[1]);
}
