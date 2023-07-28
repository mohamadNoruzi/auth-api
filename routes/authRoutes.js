const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  signup,
  loginUser,
  getProfile,
  logout,
} = require("../controllers/authController");

// mid

router.use(
  cors({
    credentials: true,
    origin: "https://client-auth-react.onrender.com",
    methods: ['GET', 'POST'],
  })
);

router.get("/", test);
router.post("/signup", signup);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.post("/logout", logout);

module.exports = router;
