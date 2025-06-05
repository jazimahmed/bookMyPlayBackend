import { Request, Response } from "express";
import { OwnerService } from "../services/owner.service";

export class OwnerController {
  private ownerService = new OwnerService();

  async register(req: Request, res: Response) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const result = await this.ownerService.registerOwner(req.body, userId);
      return res.status(201).json({ success: true, data: result });
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Registration failed", error: err.message });
    }
  }
}
