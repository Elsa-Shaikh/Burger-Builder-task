const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const { orderBurger, readOrders } = require("../controllers/burgerController");

const router = express.Router();

router.use(validateToken);
router.route("/order").post(orderBurger);
router.route("/read").get(readOrders);

module.exports = router;
