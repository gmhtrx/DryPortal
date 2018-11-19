const router = require("express").Router();
const itemRoutes = require("./items");
const orderRoutes = require("./orders");
const authRoutes = require("./auth");

// Book routes
router.use("/items", itemRoutes);
router.use("/orders", orderRoutes);
router.use("/auth", authRoutes);

module.exports = router;
