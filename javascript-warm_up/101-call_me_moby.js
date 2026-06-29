#!/usr/bin/env node
// #!/usr/bin/node

function callMeMoby (numberOfIteration, theFunction) {
  for (let i = 0; i < numberOfIteration; i++) {
    theFunction();
  }
}

module.exports = { callMeMoby };
