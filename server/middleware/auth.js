import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("authorization");
    if (!token) {
      return res.status(403).send("access denied");
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.SECRET_STR);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
