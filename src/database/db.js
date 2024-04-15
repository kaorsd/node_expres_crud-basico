const sqlite3 = require('sqlite3').verbose();

// Crear una nueva base de datos (o abrir una existente)
const db = new sqlite3.Database('./Prueba01.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado a la base de datos SQlite.');
});

// Crear la tabla personas si no existe
db.run(`CREATE TABLE if not exists personas(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  lastname TEXT NOT NULL,
  age INTEGER
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Tabla personas creada.');
});

module.exports = db;
