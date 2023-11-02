const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 24 * 60 * 60,
  });
};
