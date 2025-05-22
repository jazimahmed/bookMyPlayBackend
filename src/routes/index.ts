import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import todoRoutes from "./todo.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/todos", todoRoutes);

export default router;
