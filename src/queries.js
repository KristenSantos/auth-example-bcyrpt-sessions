const knex = require("./db/knex");

module.exports = {
  getAll() {
    return knex("users").select("username");
  },
  getProfile(id) {
    return knex("users").select("*").where("id", id);
  },
  getPost(id) {
    return knex("posts").select("*").where("post_id", id);
  },
  getAllPosts() {
    return knex("posts").select("*");
  },
  getPostByUser(id) {
    return knex("posts").select("*").where("id", id);
  },
};
