const { login } = require("../controllers/tellerController");
const { verifyUser } = require("../middlewares/requireAuth");

const router = require("express").Router();

router.post("/", verifyUser);

router.post("/login", login);
module.exports = router;
