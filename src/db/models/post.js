const knex = require("../knex");
const authUtils = require("../../utils/auth-utils");

class Post {
  #passwordHash = null;

  // This constructor is used ONLY by the model
  // to provide the controller with instances that
  // have access to the instance methods isValidPassword
  // and update.
  constructor({ id, species, area, date, rating, votes, img_url, caption }) {
    this.id = id;
    this.species = species;
    this.area = area; //can't use "location" as variable name, don't get confused variable "area" = "location" column
    this.date = date;
    this.rating = rating;
    this.votes = votes;
    this.img_url = img_url;
    this.caption = caption;
  }

  static async list() {
    try {
      let list = {};
      const query = "SELECT * FROM posts";
      let all = await knex.raw(query);
      list.all = all.rows;
      return list;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = "SELECT * FROM posts WHERE post_id = ?";
      const rest = await knex.raw(query, [id]);
      return rest.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async findByUsername(id) {
    try {
      let u = {};
      const q1 = "SELECT * FROM users WHERE id = ?";
      let p = await knex.raw(q1, [id]);
      u.p = p.rows[0];
      const q2 = "SELECT * FROM posts WHERE id = ?";
      let po = await knex.raw(q2, [id]);
      u.po = po.rows;
      console.log(u);
      return u;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(
    id,
    species,
    area,
    date,
    rating,
    votes,
    img_url,
    caption
  ) {
    try {
      const query = `INSERT INTO posts (id, species, location, date, rating, votes, img_url, caption)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING post_id`;
      const results = await knex.raw(query, [
        id,
        species,
        area,
        date,
        rating,
        votes,
        img_url,
        caption,
      ]);
      return results.rows[0];
      // return new Post(post);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // isValidPassword = async (password) =>
  //   authUtils.isValidPassword(password, this.#passwordHash);
}

module.exports = Post;
