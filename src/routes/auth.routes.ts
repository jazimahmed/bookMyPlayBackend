import { Router } from "express";
import { sendOtp, verifyOtp } from "../controllers/auth.controller";

const router = Router();

router.post("/send-otp", sendOtp);    // Acts as login/register
router.post("/verify-otp", verifyOtp); // Acts as final login

export default router;
