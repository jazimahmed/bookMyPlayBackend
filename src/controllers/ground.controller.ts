import { Request, Response } from "express";
import { GroundService } from "../services/ground.service";
import { Owner } from "@prisma/client";

const groundService = new GroundService();

export const GroundController = {
  // Create a new ground — only for authenticated owners
  async create(req: Request, res: Response) {
    try {
      // Use req.owner set by middleware
      const owner = (req as Request & { owner?: Owner }).owner;

      if (!owner) {
        return res.status(403).json({ error: "Access denied: Owner only" });
      }

      const groundData = {
        ...req.body,
        ownerId: owner.id, // Attach owner ID from middleware
      };

      const ground = await groundService.create(groundData);
      res.status(201).json(ground);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all grounds
  async getAll(req: Request, res: Response) {
    try {
      const grounds = await groundService.getAll();
      res.json(grounds);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get one ground by ID
  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const ground = await groundService.getById(id);

      if (!ground) {
        return res.status(404).json({ error: "Ground not found" });
      }

      res.json(ground);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a ground — optionally check owner
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updated = await groundService.update(id, req.body);
      res.json(updated);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a ground — optionally check owner
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await groundService.delete(id);
      res.json({ message: "Ground deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },
};
