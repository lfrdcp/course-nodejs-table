const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');
console.clear();

// const base = 2;

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nameFile) => console.log(nameFile.rainbow, 'perfecto'))
  .catch((error) => console.log(error));
