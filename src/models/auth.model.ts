import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class AuthModel {
  async findByPhone(phone: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { phone },
    });
  }

  // Accept 'name' as an optional parameter (default: "New User")
  async upsertUser(phone: string, otp: string, name: string = "New User"): Promise<User> {
    return prisma.user.upsert({
      where: { phone },
      update: { otp },
      create: {
        phone,
        name,
        otp,
        role: "PLAYER",
      },
    });
  }

  async verifyOtp(phone: string, otp: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { phone } });
    if (user && user.otp === otp) {
      return prisma.user.update({
        where: { phone },
        data: {
          isActive: true,
          otp: null,
        },
      });
    }
    return null;
  }
}
