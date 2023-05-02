const userData = [
  {
    name: "Julian",
    username: "jcp215033",
    password: "abc123",
    bio: "Co-creator of Beak Talk",
    region: "NY, USA",
    posts_count: 5,
    pfp: "https://i.imgur.com/Kj0nKnH.jpeg",
  },
  {
    name: "Kristen",
    username: "kSantos",
    password: "password456",
    bio: "Co-creator of Beak Talk",
    region: "NY, USA",
    posts_count: 6,
    pfp: "https://i.imgur.com/cWBvLM1.jpeg",
  },
  {
    name: "Charlie",
    username: "charRK",
    password: "ilGattoMangiaLUcello",
    bio: "Hates birds",
    region: "NY, USA",
    posts_count: 1,
    pfp: "https://i.imgur.com/nVybRn6.jpeg",
  },
];
const postData = [
  {
    user_id: 1,
    species: "capri corgious",
    location: "Nyc",
    date: "05/02/2023",
    rating: 7.5,
    votes: 2,
    img_url: "https://i.imgur.com/mg6LBGF.jpeg",
    caption: "Caught this one on the way to school",
  },
  {
    user_id: 2,
    species: "corvus labrodous",
    location: "Nyc",
    date: "04/15/2023",
    rating: 6,
    votes: 4,
    img_url: "https://i.imgur.com/nvgcaCN.jpeg",
    caption: "Very noisy, woke me up",
  },
  {
    user_id: 3,
    species: "ucelli chiquas",
    location: "Nyc",
    date: "04/28/2023",
    rating: 9,
    votes: 1,
    img_url: "https://i.imgur.com/MC2qNKQ.jpeg",
    caption: "Pictures never really give the food any justice",
  },
];
const comms = [
  {
    user_id: 1,
    post_id: 3,
    comment: "Not a real bird",
  },
  {
    user_id: 2,
    post_id: 1,
    comment: "Poorly photoshopped bird",
  },
  {
    user_id: 3,
    post_id: 1,
    comment: "leave this website",
  },
];

module.exports = {
  userData,
  postData,
  comms,
};
