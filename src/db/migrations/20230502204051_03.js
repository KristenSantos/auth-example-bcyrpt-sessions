/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id");
      table.text("username").unique();
      table.text("password_hash").notNullable();
      table.text("name");
      table.text("region");
      table.integer("posts_count");
      table.text("pfp");
      table.text("bio");
    })
    .createTable("posts", function (table) {
      table.increments("post_id");
      table.integer("id").references("users.id").notNullable();
      table.text("species").notNullable();
      table.text("location").notNullable();
      table.text("date")
      table.float("rating")
      table.integer("votes")
      table.text("img_url").notNullable();
      table.text("caption");
    })
    .createTable("comments", function (table) {
      table.increments("comment_id");
      table.integer("id").references("users.id").notNullable();
      table.integer("post_id").references("posts.post_id").notNullable();
      table.text("comment").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
    .dropTable("posts")
    .dropTable("comments");
};
