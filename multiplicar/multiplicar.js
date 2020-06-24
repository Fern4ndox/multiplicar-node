const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log(`=============================================`.blue);
    console.log(`=============== Tabla del ${base} ==================`.blue);
    console.log(`=============================================`.blue);
    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${base*i}\n`.green);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un dato numérico`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} *  ${i} = ${base*i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            resolve(`tabla-${base}.txt`.blue)
        });
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}