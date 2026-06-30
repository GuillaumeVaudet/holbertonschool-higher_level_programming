#!/usr/bin/node
// #!/usr/bin/env node

const scriptArgs = process.argv;
const myNumber = parseInt(scriptArgs[2]);

if (isNaN(myNumber)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${myNumber}`);
}
