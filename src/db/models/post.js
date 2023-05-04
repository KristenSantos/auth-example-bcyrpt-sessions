const knex = require("../knex");
const authUtils = require("../../utils/auth-utils");

class Post {
  #passwordHash = null;

  // This constructor is used ONLY by the model
  // to provide the controller with instances that
  // have access to the instance methods isValidPassword
  // and update.
  constructor({ species, location, date, rating, votes, img, caption }) {
    this.species = species;
    this.location = location;
    this.date = date;
    this.rating = rating;
    this.votes = votes;
    this.img = img;
    this.caption = caption;
  }

  static async list() {
    try {
      const query = "SELECT * FROM posts";
      const { rows } = await knex.raw(query);
      return rows.map((post) => new Post(post));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = "SELECT * FROM posts WHERE id = ?";
      const {
        rows: [post],
      } = await knex.raw(query, [id]);
      console.log(user);
      return user ? new Post(post) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  //   static async findByUsername(username) {
  //     try {
  //       const query = "SELECT * FROM users WHERE post = ?";
  //       const {
  //         rows: [user],
  //       } = await knex.raw(query, [username]);
  //       return user ? new User(user) : null;
  //     } catch (err) {
  //       console.error(err);
  //       return null;
  //     }
  //   }

  static async create(species, location, img, caption) {
    try {
      const query = `INSERT INTO users (species, location, img, caption)
        VALUES (?, ?, ?, ?) RETURNING *`;
      const {
        rows: [post],
      } = await knex.raw(query, [species, location, img, caption]);
      return new Post(post);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteAll() {
    try {
      return knex.raw("TRUNCATE users;");
    } catch (err) {
      console.error(err);
      return null;
    }
  }



  isValidPassword = async (password) =>
    authUtils.isValidPassword(password, this.#passwordHash);
}

module.exports = Post;
