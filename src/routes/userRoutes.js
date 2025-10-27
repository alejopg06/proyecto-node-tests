const express = require("express");
const router = express.Router();
const service = require("../services/userService");

router.post("/", (req, res) => {
  const { name, age } = req.body;
  const user = service.addUser(name, age);
  if (!user) return res.status(400).json({ error: "Datos inválidos" });
  res.status(201).json(user);
});

router.get("/", (req, res) => {
  res.json(service.getUsers());
});

module.exports = router;

