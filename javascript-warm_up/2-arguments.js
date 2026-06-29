#!/usr/bin/node
// #!/usr/bin/env node

const scriptArgs = process.argv;
const argsLength = scriptArgs.length;

if (argsLength === 3) {
  console.log('Argument found');
} else if (argsLength > 3) {
  console.log('Arguments found');
} else {
  console.log('No argument');
}
