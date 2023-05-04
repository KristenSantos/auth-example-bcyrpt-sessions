const { isAuthorized } = require("../../utils/auth-utils");

const createPost = async (req, res) => {
  const {
    session,
    db: { Post },
    body: {
      id = session.userId,
      species,
      area,
      date,
      rating,
      votes = 1,
      img_url,
      caption,
    },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const post = await Post.create(
    id,
    species,
    area,
    date,
    rating,
    votes,
    img_url,
    caption
  );
  res.send(post);
};

module.exports = createPost;
