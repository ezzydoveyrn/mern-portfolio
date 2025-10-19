import express from "express";
import { getUser, loginUser, signUpUser } from "../controller/userController.js";

const router =  express.Router();

router.get("/:id", getUser);
router.post("/signup", signUpUser);
router.post("/signin", loginUser);

export default router;