// middleware/isOwner.ts
import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

declare global {
  namespace Express {
    interface Request {
        user?: {
            userId: string;
            phone: string;
          };
      owner?: any; // You can type this more precisely if you want
    }
  }
}

export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user?.userId;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const owner = await prisma.owner.findUnique({
      where: { uId: userId },
    });

    if (!owner) {
      return res.status(403).json({ message: "Access denied: Not an owner" });
    }

    req.owner = owner; // Save owner info in req for later use
    next();
  } catch (error) {
    console.error("Error in isOwner middleware:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
