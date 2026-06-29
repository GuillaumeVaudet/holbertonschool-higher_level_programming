#!/usr/bin/env node
// #!/usr/bin/node

const scriptArgs = process.argv;
const myNumber = parseInt(scriptArgs[2]);

if (isNaN(myNumber)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${myNumber}`);
}
