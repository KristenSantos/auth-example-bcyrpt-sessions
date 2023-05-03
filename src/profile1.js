var express = require("express");
var router = express.Router();

const queries = require("./queries");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("error");
});

router.get("/:id", async function (req, res, next) {
  let u = {};
  let profiles = await queries.getProfile(req.params.id);
  u.p = profiles[0];
  let posts = await queries.getPostByUser(req.params.id);
  u.po = posts;
  console.log(u);
  res.render("profile", u);

  // queries.getProfile(req.params.id).then((profiles) => {
  //   u.p = profiles[0];
  //   queries.getPostByUser(req.params.id).then((posts) => {
  //     u.po = posts;
  //     console.log(u);
  //     res.render("profile", u);
  //   });
  // });
});

module.exports = router; //*
