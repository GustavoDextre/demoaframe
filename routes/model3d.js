const router = require("express").Router();
const { ModeloController } = require("../controller");

router.get("/", ModeloController.index);

module.exports = router;