#!/usr/bin/env node
// #!/usr/bin/node

const iteratorToPrint = process.argv[2];
const integerIterator = parseInt(iteratorToPrint);

if (isNaN(integerIterator)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < integerIterator; i++) {
    let row = '';
    for (let j = 0; j < integerIterator; j++) {
      row += 'x';
    }
    console.log(row);
  }
}
