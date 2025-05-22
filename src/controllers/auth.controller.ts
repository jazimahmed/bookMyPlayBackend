import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { LoginInput } from "../types/auth.types";
import { UserInput } from "../types/user.types";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  register = async (req: Request, res: Response) => {
    try {
      const userData: UserInput = req.body;
      const result = await this.authService.register(userData);

      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const credentials: LoginInput = req.body;
      const result = await this.authService.login(credentials);

      res.status(200).json(result);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  };
}
