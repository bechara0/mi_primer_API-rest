const { Router } = require("express");
const router = Router();

const axios = require("axios");

router.get("/", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  ); //esto me devuelve un string, debo pasarlo a json
  const users = await response.data; // aca los convierto de string a json
  res.send(users);
});

module.exports = router;
