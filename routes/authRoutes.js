const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  signup,
  loginUser,
  getProfile,
} = require("../controllers/authController");

// mid

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ['GET', 'POST'],
  })
);

router.get("/", test);
router.post("/signup", signup);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
