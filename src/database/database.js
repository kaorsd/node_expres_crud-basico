//archivo de conexión a mysql2 (mysql-server)

//instalar en ubuntu: sudo apt install mysql-server
//configurar: sudo mysql_secure_installation
//establecer contraseña para root: sudo mysql -u / sudo mysql -u root -p
//sql: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "contraseña_segun_secure_installation"
//refrescar: FLUSH PRVILEGES;
//crear bd: sudo mysql -u root 
//CREATE DATABASE ...etc


//importar funcion 
import { createPool } from "mysql2/promise";

//conexion bd
const pool = createPool({
    host: 'localhost',
    port:'3306',
    user:'root',
    password:'Leic@666',
    database:'Prueba01'
});

//para verificar conexion a la bd (poner codigo completo de este archivo en el index.js)
pool.getConnection()
    .then(() => {
        console.log('Conectado correctamente a la base de datos MySQL.');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

export default pool;