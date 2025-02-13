import { Router } from "express";
const userRouter = Router();
userRouter.get("/", (req, res) => res.send({ title: "fetch all users" }));
userRouter.get("/:id", (req, res) => res.send({ title: "fetch all users" }));
userRouter.post("/", (req, res) => res.send({ title: "create new users" }));
userRouter.put("/:id", (req, res) => res.send({ title: "update" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "delete a user" }));
export default userRouter;
