#!/usr/bin/node
// #!/usr/bin/env node

function addMeMaybe (number, theFunction) {
  const newNumber = number + 1;
  theFunction(newNumber);
}

module.exports = { addMeMaybe };
