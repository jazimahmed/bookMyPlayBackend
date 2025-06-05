import { PrismaClient, Ground } from "@prisma/client";

const prisma = new PrismaClient();

export class GroundModel {
  async createGround(data: Omit<Ground, 'id' | 'createdAt' | 'updatedAt'>) {
    return await prisma.ground.create({ data });
  }

  async getAllGrounds() {
    return await prisma.ground.findMany({
      include: {
        owner: true,
        slots: true,
        bookings: true,
      },
    });
  }

  async getGroundById(id: string) {
    return await prisma.ground.findUnique({
      where: { id },
      include: {
        owner: true,
        slots: true,
        bookings: true,
      },
    });
  }

  async updateGround(id: string, data: Partial<Ground>) {
    return await prisma.ground.update({
      where: { id },
      data,
    });
  }

  async deleteGround(id: string) {
    return await prisma.ground.delete({
      where: { id },
    });
  }
}
