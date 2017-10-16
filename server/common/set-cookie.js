const jwt = require("jsonwebtoken");

module.exports = function setCookie(claim, res, router) {
  const token = jwt.sign(claim, process.env.JWT_KEY, { expiresIn: "30 days"} );

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),  // 30 days
    secure: router.get("env") === "production"
  });
}