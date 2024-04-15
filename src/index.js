import express from 'express'
import morgan from 'morgan'
import {engine} from 'express-handlebars'
import {fileURLToPath} from 'url'
import {join, dirname} from 'path'
import routePersonas from './routes/personas.js'



// Crear una instancia de Express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));

app.engine('.hbs', engine({
  defaultLayout: 'main',
  layoutsDir: join (app.get('views'), 'layouts'),
  partialsDir: join (app.get('views'), 'partials'),
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

//midlawrees
app.use(morgan('test'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//rutas
app.get('/', (re, res)=>{
  res.render('index');
})

app.use(routePersonas);


//public files
app.use(express.static(join(__dirname, ' public')));


// Configurar Morgan para el logging







// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

