#!/usr/bin/env node
// #!/usr/bin/node

export function callMeMoby (numberOfIteration, cb) {
  for (i = 0; i < numberOfIteration; i++) {
    cb();
  }
}
