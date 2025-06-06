import { Request, Response } from "express";
import { SlotService } from "../services/slot.service";

const slotService = new SlotService();

export class SlotController {
  async create(req: Request, res: Response) {
    try {
      const slot = await slotService.createSlot(req.body);
      res.status(201).json(slot);
    } catch (err) {
      res.status(500).json({ message: "Error creating slot", error: err });
    }
  }

  async getByGround(req: Request, res: Response) {
    try {
      const { groundId } = req.params;
      const slots = await slotService.getSlotsByGround(groundId);
      res.json(slots);
    } catch (err) {
      res.status(500).json({ message: "Error fetching slots", error: err });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await slotService.deleteSlot(id);
      res.json(deleted);
    } catch (err) {
      res.status(500).json({ message: "Error deleting slot", error: err });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updated = await slotService.updateSlot(id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ message: "Error updating slot", error: err });
    }
  }
}
