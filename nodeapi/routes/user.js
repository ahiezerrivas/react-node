const express = require("express");
const { userById,
		allUsers ,
		getUser, 
		updateUser,
		deleteUser,
		userPhoto
		addFollowing,
		addFollower,
		removeFollowing,
		removeFollower,
       		findPeople
		} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.put("/user/follow", requireSignin, addFollowing, addFollower); 
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower); 

router.get("/users", allUsers);
router.get("/user/:userId",requireSignin, getUser);
router.put("/user/:userId",requireSignin, updateUser);
router.delete("/user/:userId",requireSignin, deleteUser);
//Photo
router.get("/user/photo/:userId", userPhoto);

//who to follow
router.get('/user/findPeople/:userId', requireSignin, findPeople)

//any route containin:userId, our app will firs execute yserById
router.param("userId", userById);

module.exports = router;
//
