const jwt = require("jsonwebtoken");
const createError = require("./create-error");

function authorizeUser(req, res, next) {
  if (!req.cookies || !req.cookies.token) { return next(createError(401, "No cookie set")); }
  
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
    if (err) { return next(createError(401, "Unauthorized")); }

    const userId = parseInt(payload.userId);
    if (isNaN(userId) || userId < 0) { return next(createError(401, "Invalid user ID")); }
  
    req.claim = payload;
    
    next();
  });
}

module.exports = authorizeUser;