const express = require("express");
const { getPosts,
      createPosts,
       postByUser, 
       postById,
       isPoster,
       updatePost,
       deletePost,
       photo,
       singlePost,
       like,
       unlike
      } = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require('../validator');

const router = express.Router();

router.get("/posts", getPosts);

//like unlike
router.put("/post/like", requireSignin, like);
router.put("/post/unlike", requireSignin, unlike);


router.post(
     "/post/new/:userId", 
     requireSignin,
     createPosts,
     createPostValidator 
     );

router.get("/posts/by/:userId", requireSignin,postByUser )
router.get("/post/:postId", singlePost);
router.put('/post/:postId', requireSignin, isPoster, updatePost)
router.delete('/post/:postId', requireSignin, isPoster, deletePost)
//Photo
router.get("/post/photo/:postId", photo);

// any route containing : userId, our app will first execute userById()
router.param("userId", userById);
// any route containing : userId, our app will first execute postById()
router.param("postId", postById);

module.exports = router;
