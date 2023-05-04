/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  logOutHandler,
  updateUsernameHandler,
  setNav,
} from "./global.js";

const isAuthError = (err) => err.status === 401 || err.status === 403;
const redirectToLogin = () => window.location.assign("/login.html");
const renderUsername = (username) => {
  document.querySelector("#username").textContent = username;
};
const renderUserRegion = (region) => {
  document.querySelector("#region").textContent = region;
};
const renderUserBio = (bio) => {
  document.querySelector("#bio").textContent = bio;
};
// const renderUserData = (username, region, bio) => {
//   document.querySelector("#username").textContent = username;
//   document.querySelector("#region").textContent = region;
//   document.querySelector("#bio").textContent = bio;
// };

const main = async () => {
  const user = await fetchLoggedInUser();
  if (!user) return redirectToLogin();

  const logoutForm = document.querySelector("#logout-form");
  const updateUsernameForm = document.querySelector("#username-form");

  logoutForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    logOutHandler();
  });

  updateUsernameForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const [response, err] = await updateUsernameHandler(event.target);

    if (err)
      return isAuthError(err)
        ? redirectToLogin()
        : alert("Something went wrong");
    // renderUserData(response.username, response.region, response.bio);
    renderUsername(response.username);
    renderUserRegion(response.region);
    renderUserBio(response.bio);

    event.target.reset();
  });

  updateUsernameForm.dataset.userId = user.id;

  setNav(!!user);
  console.log(user);
  // renderUserData(user.username, user.region, user.bio);
  renderUsername(user.username);
  renderUserRegion(user.region);
  renderUserBio(user.bio);
};

main();
