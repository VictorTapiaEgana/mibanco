const pool = require('../DB_CONFIG.js');

let client;

async function NuevaTransaccion (nombre,fecha,monto,corigen,cdestino){

    try {
        client = await pool.connect();

        client.query('BEGIN');
        
            // INSERT
            const consulta = `INSERT INTO transferencias (descripcion, fecha, monto, cuenta_origen, cuenta_destino) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

            const varibles = [nombre, fecha,monto,corigen,cdestino];        

            const resultado = await client.query(consulta,varibles);

            // UPDATE 1
            const consulta2 = `UPDATE cuentas SET saldo = saldo - $1 WHERE id = $2;`;

            const varibles2 = [monto, corigen];        

            const resultado2 = await client.query(consulta2,varibles2);

            // UPDATE 2
            const consulta3 = `UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2;`;

            const varibles3 = [monto, cdestino];        

            const resultado3 = await client.query(consulta3,varibles3);

        client.query('COMMIT');

        return resultado        
        
    } catch (error) {

         console.log(`X Error  al realizar la transferencia : `,error);  

    } finally {

        client.release()

    }

}

module.exports ={ NuevaTransaccion };