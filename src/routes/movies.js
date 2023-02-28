const { Router } = require("express");
const router = Router();

const movies = require("../sample.json");

const _ = require("underscore");

// TOMAR DATOS
router.get("/", (req, res) => {
  res.send(movies);
});

//AGREGAR DATOS
router.post("/", (req, res) => {
  const { title, director, year, rating } = req.body; // toma todos los datos que le envia postman al server
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id }; // si se cumple el if, guarda esos datos en la constante
    movies.push(newMovie); // agrega la nuevo info a la constante newMovies
    res.json(movies); // responde con la base de dato actualizada, en este caso como es base de datos simulada se guarda en la memoria pero no modifica sample.json
  } else {
    res.status(500).json({ error: "Hubo un error." });
  }
});

// ELIMINAR DATOS
router.delete("/:id", (req, res) => {
  const { id } = req.params; //para obtener el ID a eliminar
  _.each(movies, (movie, i) => {
    // con underscore (_each) recorro el arreglo de movies, obtengo una movie por cada recorrido (movie, i)
    if (movie.id == id) {
      // si coincide el id ingresado con el del arreglo ...
      movies.splice(i, 1); // elimino el objeto correspondiente, el 1 es para que solo elimine ese
    }
  });
  res.send(movies); // envio el arreglo actualizado
});

//ACTUALIZAR DATOS
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    _.each(movies, (movie, i) => {
      if (movie.id == id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json(movies);
  } else {
    res.status(500).json({ error: "Hubo un error." });
  }
});

module.exports = router;
