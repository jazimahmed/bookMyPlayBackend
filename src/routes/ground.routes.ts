import { Router } from "express";
import { GroundController } from "../controllers/ground.controller";

const router = Router();

// Routes for /ground
router.post("/", GroundController.create);
router.get("/", GroundController.getAll);
router.get("/:id", GroundController.getById);
router.put("/:id", GroundController.update);
router.delete("/:id", GroundController.delete);

export default router;
