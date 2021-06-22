const fs = require('fs');
const colors = require('colors');
let salida = '';
let consola = '';

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if (listar) {
      console.log('------------------'.blue);
      console.log('Tabla del '.blue, colors.red(base));
      console.log('------------------'.blue);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `se creo la tabla del ${base}`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
