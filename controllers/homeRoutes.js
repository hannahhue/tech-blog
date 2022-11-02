//define
const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

//get all uposts
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {
        model: User,
        attributes: ["username"],
      },
      raw: true,
      nest: true,
    });

    res.render("homepage", {
      postData,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//get all user posts
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: { user_id: req.session.user_id },
      raw: true,
    });
    console.log(userPosts);
    res.render("dashboard", {
      userPosts,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
