const { Router } = require("express");
const router = Router(); // línea 1 y linea 2 llamo a express para que me funcionen las rutas en este archivo a parte

// app.get("/", (req, res) => {
//   res.send("Hello World");
// }); //lo leo: a traves de mi aplicacion, mediante el método get, cuando visite la ruta inicial, voy a responder con el mensaje
router.get("/", (req, res) => {
  res.json({ title: "Hello world" });
});
// voy a hacer otro tipo de peticion:
router.get("/test", (req, res) => {
  const data = {
    name: "Juan",
    age: 40,
  };
  res.json(data);
}); // para ver esto en el navegados es localhost:3000/test
module.exports = router;
