// import JWT_SECRET from ".env";
const JWT_SECRET = "kartikeynamdev";
// import { JWT_SECRET } from ".env";
// import { verify } from "jsonwebtoken";
import verify from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }
  const token = authHeader.split(" ")[1];

  const decoded = verify(token, JWT_SECRET);

  // console.log(decoded);
  req.userId = decoded.userId;

  next();
};

export default authMiddleware;
