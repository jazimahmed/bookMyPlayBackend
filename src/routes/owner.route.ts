import { Router } from "express";
import { OwnerController } from "../controllers/owner.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();
const ownerController = new OwnerController();

router.post("/register",authenticate, ownerController.register.bind(ownerController));

export default router;
