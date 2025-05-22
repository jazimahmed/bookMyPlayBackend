import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getProfile = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const userId = req.user.userId;
      const user = await this.userService.getUserById(userId);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  };

  updateProfile = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const userId = req.user.userId;
      const userData = req.body;
      const user = await this.userService.updateUser(userId, userData);

      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  deleteProfile = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const userId = req.user.userId;
      await this.userService.deleteUser(userId);

      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
}
