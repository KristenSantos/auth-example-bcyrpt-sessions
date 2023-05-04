const showMe = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;
  if (!session.userId) return res.sendStatus(401);

  let home = await Post.list();
  res.render("home", home);
};

module.exports = showMe;
