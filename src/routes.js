const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const ProdutosController = require("./controllers/ProdutosController");
const ProdutosValidator = require("./validators/ProdutosValidator");

const FavoritosController = require("./controllers/FavoritosController");
const FavoritosValidator = require("./validators/FavoritosValidator");

const SessionController = require("./controllers/SessionController");
const SessionValidator = require("./validators/SessionValidator");
const Authentication = require("./middlewares/Authentication");

// Session

routes.post("/login", SessionValidator.signIn, SessionController.signIn);

//User

routes.post("/user", UserValidator.create, UserController.create);
routes.put("/user/:user_id", UserValidator.update, UserController.update);
routes.get("/user", UserValidator.getByFields, UserController.getById);
routes.delete("/user/:user_id", UserValidator.delete, UserController.delete);

//Produtos

routes.post("/produtos", ProdutosValidator.create, ProdutosController.create);
routes.put(
  "/produtos/:produtos_id",
  ProdutosValidator.update,
  ProdutosController.update
);
routes.get(
  "/produtos",
  ProdutosValidator.getByFields,
  ProdutosController.getByFields
);
routes.get(
  "/produtos",
  ProdutosController.getById,
);

routes.delete(
  "/produtos/:produtos_id",
  ProdutosValidator.delete,
  ProdutosController.delete
);

//Favoritos

routes.post(
  "/favoritos",
  FavoritosValidator.create,
  Authentication.authenticateToken,
  FavoritosController.create
);
routes.get(
  "/favoritos/:user_id",
  FavoritosValidator.getById,
  Authentication.authenticateToken,
  FavoritosController.getById
);
routes.delete(
  "/favoritos/:produtos_id",
  FavoritosValidator.delete,
  Authentication.authenticateToken,
  FavoritosController.delete
);

module.exports = routes;
