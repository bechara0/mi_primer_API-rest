const express = require("express"); //requiero express
const app = express(); //ejecuto express
const morgan = require("morgan"); //morgan permite ver por consola lo que llega al servidor


// SECCION DE CONFIGURACIONES
app.set("port", process.env.PORT || 3000); // si se requiere un puerto especial (ej serv en la nube) que lo tome, sino pasa al port 3000
app.set("jason spaces", 2);
// SECCION MIDDLEWARES
app.use(morgan("dev")); //dev es el formato en que morgan muestra la informacion de consola.
app.use(express.urlencoded({ extended: false })); // esto es para que el servidor entienda datos de formularios tipo imputs, no de imagenes y cosas pesadas
app.use(express.json()); // para que el server entienda el formato json, que es el que vamos a enviar y recibir.

// RUTAS => lo mande a src/routes/index.js
app.use(require("./routes/index")); // le pido a app que use las rutas almacenadas en esa carpeta
app.use("/api/movies", require("./routes/movies")); // "/api/movies" lo pongo para q todo pase por localhost:3000/api/
app.use("/api/users", require("./routes/users"));

//SECCION EMPEZANDO EL SERVIDOR
app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
}); // le pido que app sea escuchada en servidor 3000 y creo una funcion para que imprima ese mensaje.
