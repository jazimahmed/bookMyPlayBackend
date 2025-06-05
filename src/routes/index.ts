import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import groundRoutes from "./ground.routes"
import ownerRoutes from "./owner.route";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/grounds", groundRoutes);
router.use("/owners", ownerRoutes);

export default router;