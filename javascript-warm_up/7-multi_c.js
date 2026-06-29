#!/usr/bin/env node
// #!/usr/bin/node

const iterator_to_print = process.argv[2];
const integer_iterator = parseInt(iterator_to_print);
let i = 0;

if (isNaN(integer_iterator)) {
  console.log('Missing number of occurences');
} else {
  while (i < integer_iterator) {
    console.log('C is fun');
    i++;
  }
}
