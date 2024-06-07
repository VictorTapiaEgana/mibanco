const { NuevaTransaccion } = require('./functions/nuevatransaccion.js');
const { consultar } = require ('./functions/consultar.js');
const { saldo } = require('./functions/saldo.js')

const accion = process.argv.splice(2)

 async function llamarTransaccion(){
       const resultado = await NuevaTransaccion(accion[1],accion[2],accion[3],accion[4],accion[5]);
       console.log(`ULTIMA TRANSFERENCIA:`);
       console.table(resultado.rows);
 }  

 async function cosultar(){
       const resultado = await consultar();
       console.log(`ULTIMAS 10 TRANSFERENCIAS:`);
       console.table(resultado);
 }

 async function  consultarsaldo(cuenta)  {  
       const resultado = await saldo(cuenta);
       console.log(`SALDO DE LA CUENTA "${cuenta}":`);
       console.table(resultado.rows);
 }

 switch (accion[0]) {    

    case 'transferir':     
        llamarTransaccion();
        break;

    case 'consultar':  
        cosultar();
        break;

    case 'saldo':
        consultarsaldo( accion[1]);
        break;

    default:
        console.log(`Ingrese una opcion seguida del parametro`)
        break;
};