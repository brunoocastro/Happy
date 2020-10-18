const express = require("express");
const path = require("path");
const pages = require("./pages");

/* Iniciando o server express */
const server = express();

server
  // Utilizar body da requisição
  .use(express.urlencoded({ extended: true }))

  // Utilizando arquivos estáticos
  .use(express.static("public"))

  // Configurando template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // Rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage)
  .get("/city", pages.city);

server.listen(5500);
