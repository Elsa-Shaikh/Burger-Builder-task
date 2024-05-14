const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const { orderBurger } = require("../controllers/burgerController");

const router = express.Router();

router.use(validateToken);
router.route("/order").post(orderBurger);

module.exports = router;
