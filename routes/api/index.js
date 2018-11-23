const router = require("express").Router();
const itemRoutes = require("./items");
const orderRoutes = require("./orders");
const authRoutes = require("./auth");



router.use("/items", itemRoutes)

router.use("/order", orderRoutes)

router.use("/auth", authRoutes);



module.exports = router;
