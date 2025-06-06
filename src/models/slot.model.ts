import { PrismaClient } from "@prisma/client";
import { SlotInput, SlotOutput } from "../types/slot.types";

const prisma = new PrismaClient();

export class SlotModel {
  async create(data: SlotInput): Promise<SlotOutput> {
    return prisma.slot.create({ data });
  }

  async findByGround(groundId: string): Promise<SlotOutput[]> {
    return prisma.slot.findMany({ where: { groundId } });
  }

  async delete(id: string): Promise<SlotOutput> {
    return prisma.slot.delete({ where: { id } });
  }

  async update(id: string, data: Partial<SlotInput>): Promise<SlotOutput> {
    return prisma.slot.update({ where: { id }, data });
  }
}
