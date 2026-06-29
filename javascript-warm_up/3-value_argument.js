#!/usr/bin/env node
// #!/usr/bin/node

const scriptArgs = process.argv;
const argsLength = scriptArgs.length;

if (argsLength === 2) {
  console.log('No argument');
} else {
  console.log(scriptArgs[2]);
}
