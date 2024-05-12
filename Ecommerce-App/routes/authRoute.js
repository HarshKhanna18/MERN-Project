import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//router Object
const router = express.Router();

//roting
//REGISTER || METHOD POST
router.post("/register", registerController);

//Forgot password || POST
router.post("/forgot-password", forgotPasswordController);

//LOGIN || POST
router.post("/login", loginController);

//TEST || GET
router.get("/test", requireSignIn, isAdmin, testController);

//Private User Route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//Private Admin Route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
