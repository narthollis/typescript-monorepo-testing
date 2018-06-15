import path from 'path';

import { foo } from 'x-core';

const args = process.argv.slice(process.argv.findIndex(arg => path.normalize(arg) === __filename) + 1)

console.log(`a.len - b.len = ${foo(args[0], args[1])}`)
