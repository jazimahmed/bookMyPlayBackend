import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import groundRoutes from "./ground.routes"
import ownerRoutes from "./owner.route";
import slotRoutes from "./slot.routes";

import { authenticate } from "../middlewares/auth.middleware";
import { isOwner } from "../middlewares/isOwner.middleware";


const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/grounds", authenticate, isOwner, groundRoutes);
router.use("/owners", ownerRoutes);
router.use("/slots",authenticate, isOwner, slotRoutes);

export default router;