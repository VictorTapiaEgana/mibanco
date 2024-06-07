const pool = require('../DB_CONFIG.js');

let client;

async function consultar(){

    try {

        client = await pool.connect();
        const resultado = await  client.query (`SELECT descripcion,fecha,monto,cuenta_origen,cuenta_destino FROM transferencias ORDER BY fecha DESC LIMIT 10;`);
        return resultado.rows;
        
    } catch (error) {

        console.log(`X Error  de conexion a la base de datos: `,error); 
        
    } finally{

        client.release();

    }
};

module.exports = { consultar };