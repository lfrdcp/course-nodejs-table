const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base para la tabla',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra en consola la tabla',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Es el limite para multiplicar',
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base tiene que ser un numero por favor';
    }
    return true;
  }).argv;

module.exports = argv;
