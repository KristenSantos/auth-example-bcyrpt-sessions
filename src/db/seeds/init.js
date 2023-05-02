/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { userData, postData, comms } = require("../seedingData");

exports.seed = async function (knex) {
  await knex("users").del();
  await knex("posts").del();
  await knex("comments").del();
  await knex("users").insert(userData);
  await knex("posts").insert(postData);
  await knex("comments").insert(comms);
};
