import express from "express";
import users from "../database/queries/users";

const userRouter = express.Router();
userRouter.get("/", async (req, res) => {
  try {
    const allUsers = await users.getAll();
    res.json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ain't here" });
  }
});
export default userRouter;
