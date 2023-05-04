/* eslint-disable import/extensions */
import { newPost } from "./global.js";

const main = async () => {
  document
    .querySelector("#create-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      newPost("/api/posts", event.target);
    });
};

main();
