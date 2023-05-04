const showPost = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;
  if (!session.userId) return res.sendStatus(401);
  let post = await Post.find(id);
  res.render("post", post);
};

module.exports = showPost;
