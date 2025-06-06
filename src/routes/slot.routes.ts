import { Router } from "express";
import { SlotController } from "../controllers/slot.controller";

const router = Router();
const controller = new SlotController();

router.post("/", controller.create);
router.get("/ground/:groundId", controller.getByGround);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
