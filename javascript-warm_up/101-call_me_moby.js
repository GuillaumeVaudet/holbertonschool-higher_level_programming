#!/usr/bin/node
// #!/usr/bin/env node

function callMeMoby (numberOfIteration, theFunction) {
  for (let i = 0; i < numberOfIteration; i++) {
    theFunction();
  }
}

module.exports = { callMeMoby };
