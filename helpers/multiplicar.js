const { Console } = require("console");
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async ( base, listar= false , hasta= 10 ) =>{

    try {
        let salida , consola = '';

            for (let i = 1; i <= hasta; i++){
                let tabla = base * i;
                salida  += `${base} x ${i} = ${tabla} \n`;
                consola += `${base} ${'x'.red} ${i} ${'='.green} ${tabla} \n`;
            }

            if (listar){
                console.log('============================================'.bold);
                console.log(`============ Tabla del ${base} ==================`.rainbow);
                console.log('============================================'.bold);
                console.log(colors.blue(consola.bold));
            }

        fs.writeFileSync(`./salida/TableDel-${base}.txt`, salida);
        return colors.red(`Table Del-${base}.txt`);

    } catch (err) {
        throw err;  
    }

} 

module.exports = {
    crearArchivo
}
