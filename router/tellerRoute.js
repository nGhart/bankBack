const router = require("express").Router();
const {
  addTeller,
  //login,
  deleteTeller,
  updateTeller,
  changePassword,
} = require("../controllers/tellerController");
//const { verifyUser } = require("../middlewares/requireAuth");

router.post("/signup", addTeller);
//router.post("/login", login);
router.post("/delete", deleteTeller);
router.patch("/update", updateTeller);
router.patch("/change", changePassword);
//router.post("/", verifyUser);

module.exports = router;
