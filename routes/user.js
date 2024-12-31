// backend/routes/user.js
import express from "express";
const userRouter = express.Router();
const { User, location } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const authMiddleware = require("../middleware");
console.log("Server is up");
const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
});

userRouter.post("/signup", async function (req, res) {
  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  const userId = user._id;
  console.log(userId);

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  await location.create({
    userId,
    balance: "mylocation",
  });
  res.json({
    message: "User created successfully",
    token: token,
  });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

userRouter.post("/signin", async function (req, res, next) {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

const updateBody = zod.object({
  username: zod.string().optional(),
  firstName: zod.string().optional(),
  lastname: zod.string().optional(),
});

userRouter.put("/", authMiddleware, async (req, res) => {
  console.log("Working put");
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.json({
      msg: "Illegal input",
    });
  }

  await User.updateOne(
    {
      _id: req.userId,
    },
    req.body
  );
  console.log(User);

  res.json({
    msg: "Information updated",
  });
});
///////////
userRouter.get("/bulk", async (req, res) => {
  const filter = req.query.params || "";
  const user = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
    ],
  });
  res.json({
    user: User.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});
export default userRouter;
