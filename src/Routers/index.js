const router = require("express").Router();
const users = require("../models/users.js");

router.get("/tickets", (req, res, next) => {});
router.get("/customers", (req, res, next) => {
  res.json("clientes ");
});

router.get("/users/:id", async (req, res, next) => {
  const id = req.params.id;
  const respuesta = await users.findOne({ where: { id: id } });
  console.log(respuesta);
  res.json(respuesta);
});
router.get("/users", async (req, res, next) => {
  const respuesta = await users.findAll();
  console.log(respuesta.length);
  res.json(respuesta[0]);
});

module.exports = router;
