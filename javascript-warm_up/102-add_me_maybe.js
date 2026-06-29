#!/usr/bin/env node
// #!/usr/bin/node

function addMeMaybe (number, theFunction) {
  let newNumber = number + 1;
  theFunction(newNumber);
}

module.exports = { addMeMaybe };
