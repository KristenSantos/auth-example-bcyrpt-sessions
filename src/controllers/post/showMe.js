const showMe = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
  } = req;
  if (!session.userId) return res.sendStatus(401);

  let me = await Post.findByUsername(id);
  res.render("profile", me);
};

module.exports = showMe;
