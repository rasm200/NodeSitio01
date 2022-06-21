require('dotenv').config();

const { response } = require('express');

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

/** Handlebars.js */
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

/**Servir contenido estático : Se realiza mediante un midleware - algo que se ejecuta antes de servir los archivos */
//app.use( '/static', express.static(__dirname + '/public'));
//app.use( '/static', express.static(__dirname + '/hola-mundo'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  // La siguiente instrucción renderiza la vista: views\home.hbs => no hace falta indicar la extensión
  res.render('home', {
    'titulo': 'Curso de node',
    'nombre': 'Fernando Herrera'
  });
})

//app.use( express.static('hola-mundo'));

/* Lo siguiente no se ejecuta cuando se ha especificado algún contendido, como en el punto anterior */
// app.get('/', (req,res) => {
//   res.send('Home Page!')
// })

// app.get('/hola-mundo', (req, res)=>{
//    res.send('Hola mundo - no es página');
// })

app.get('/generic', (req, res) => {
  res.render('generic', {
    'titulo': 'Curso de node',
    'nombre': 'Fernando Herrera'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    'titulo': 'Curso de node',
    'nombre': 'Fernando Herrera'
  });
})


app.get('*', (req, res) => {

  //res.send('401 | No existe pagina solicitada');

  res.sendFile(__dirname + '/public/404.html');

})

app.listen(port, () => {
  console.log(`Ejemplo de APP , escuchando desde el puerto ${port}`);
})

