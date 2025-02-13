import { Router } from "express";
import { sighIn, sighOut, sighUp } from "../controllers/auth.controller";
const authRouter = Router();
authRouter.post("/sign-up", sighUp);
authRouter.post("/sign-in", sighIn);
authRouter.post("/sign-out", sighOut);
export default authRouter;
