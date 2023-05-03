var express = require("express");
var router = express.Router();

const queries = require("./queries");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("error");
});

router.get("/:id", function (req, res, next) {
  queries
    .getPost(req.params.id)
    .then((profiles) => {
      return profiles;
    })
    .then((user) => {
      res.render("post", user[0]);
    });
});

module.exports = router;
