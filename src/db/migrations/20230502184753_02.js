/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("user_id");
      table.text("username").unique();
      table.text("password").notNullable();
      table.text("name").notNullable();
      table.text("region").notNullable();
      table.integer("posts_count").notNullable();
      table.text("pfp");
      table.text("bio");
    })
    .createTable("posts", function (table) {
      table.increments("post_id");
      table.integer("user_id").references("users.user_id").notNullable();
      table.text("species").notNullable();
      table.text("location").notNullable();
      table.text("date").notNullable();
      table.float("rating").notNullable();
      table.integer("votes").notNullable();
      table.text("img_url").notNullable();
      table.text("caption");
    })
    .createTable("comments", function (table) {
      table.increments("comment_id");
      table.integer("user_id").references("users.user_id").notNullable();
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
