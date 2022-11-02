//define
const router = require("express").Router();
const { Comment, Post, User } = require("../../models");

//create post
router.post("/", async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//delete posts
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post found!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//update posts
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
