const express = require("express"),
routes = express.Router(),
devController = require("./controllers/devController"),
likeController = require("./controllers/likeController"),
dislikeController = require("./controllers/dislikeController")

routes.get("/devs", devController.index)
routes.post("/devs", devController.store)
routes.post("/devs/:devId/likes", likeController.store)
routes.post("/devs/:devId/dislikes", dislikeController.store)

module.exports = routes
