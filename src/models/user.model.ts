// src/models/user.model.ts
import { PrismaClient } from "@prisma/client";
import { UserInput, UserOutput } from "../types/user.types";

const prisma = new PrismaClient();

export class UserModel {
  async findById(id: string): Promise<UserOutput | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<UserInput>): Promise<UserOutput | null> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<UserOutput | null> {
    return prisma.user.delete({
      where: { id },
    });
  }
}
