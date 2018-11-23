const router = require("express").Router();
const orderController = require("../../controllers/orderController");
const passport = require("../../config/passport");
require("../../config/passport")(passport);
// Matches with "/api/books"
router.route("/")
  .get(orderController.findAll)
  .post(orderController.create)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(orderController.findById)
  .put(orderController.update)

module.exports = router;
