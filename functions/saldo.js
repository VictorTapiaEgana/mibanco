const pool = require('../DB_CONFIG.js');

let client;

async function saldo(cuenta){
    try {
        
        client = await pool.connect();
        const consulta =`SELECT id,saldo FROM cuentas WHERE id = $1;`;
        const variables = [cuenta];
        const resultado = await client.query(consulta,variables);
        return resultado;

    } catch (error) {

        console.log(`X Error  de conexion a la base de datos: `,error); 

    } finally{

        client.release();
    }
};

module.exports = { saldo };