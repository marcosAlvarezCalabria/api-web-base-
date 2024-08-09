const express = require ('express');
const router = express.Router();
const user = require ("../controllers/users.controllers");
const authMiddleware = require ( "../midlewares/auth.middleware")


/***************user********************* */

router.post("/user", user.create);
router.get("/profile",authMiddleware.checkAuth, user.profile);
router.post("/login", user.login)
router.patch("/profile" ,authMiddleware.checkAuth, user.update)//update
router.delete("/user",authMiddleware.checkAuth, user.delete)












module.exports = router;