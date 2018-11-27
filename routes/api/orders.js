const router = require("express").Router();
const orderController = require("../../controllers/orderController");


router.route("/")
  .get(orderController.findAll)
  .post(orderController.create)

router
  .route("/:id")
  .get(orderController.findById)
  .put(orderController.update)

  
module.exports = router;
