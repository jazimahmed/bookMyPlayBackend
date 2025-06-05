import { Request, Response } from "express";
import { GroundService } from "../services/ground.service";

const groundService = new GroundService();

export const GroundController = {
  async create(req: Request, res: Response) {
    try {
      const ground = await groundService.create(req.body);
      res.status(201).json(ground);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req: Request, res: Response) {
    const grounds = await groundService.getAll();
    res.json(grounds);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const ground = await groundService.getById(id);
    if (!ground) return res.status(404).json({ error: "Ground not found" });
    res.json(ground);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updated = await groundService.update(id, req.body);
      res.json(updated);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await groundService.delete(id);
      res.json({ message: "Ground deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
};
