const router = require("express").Router();
const itemController = require("../../controllers/itemController");
const test = require("../../controllers/test")
const passport = require("passport");
const db = require("../../models");
require("../../config/passport")(passport);


router.get("/", passport.authenticate('jwt', { session: false }), function (req, res) {
  console.log("~~~~~~~~items~~~~~~~~")
  var token = getToken(req.headers);
  if (token) { 
    db.Item.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });

  }
  else {
      console.log("error")
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }

})

getToken = function (headers) {
  if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
          return parted[1];
      } else {
          return null;
      }
  } else {
      return null;
  }
};

module.exports = router;
