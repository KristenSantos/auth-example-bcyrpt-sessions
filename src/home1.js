var express = require("express");
var router = express.Router();

const queries = require("./queries");

router.get("/", function (req, res, next) {
  queries.getAllPosts().then((posts) => {
    let list = {};
    list.all = posts;
    console.log(list);
    res.render("home", list);
  });
});

module.exports = router;
