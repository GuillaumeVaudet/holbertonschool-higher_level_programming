#!/usr/bin/node
// #!/usr/bin/env node

const iteratorToPrint = process.argv[2];
const integerIterator = parseInt(iteratorToPrint);
let i = 0;

if (isNaN(integerIterator)) {
  console.log('Missing number of occurences');
} else {
  while (i < integerIterator) {
    console.log('C is fun');
    i++;
  }
}
