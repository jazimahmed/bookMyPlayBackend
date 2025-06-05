import { PrismaClient,Role  } from "@prisma/client";
const prisma = new PrismaClient();

export class UserModel {
    async createUser(data: {
        name: string;
        phone: string;
        otp?: string;
        role?: Role;
        isActive?: boolean;
      }) {
        return await prisma.user.create({
          data: {
            name: data.name,
            phone: data.phone,
            otp: data.otp,
            role: data.role || Role.PLAYER,
            isActive: data.isActive ?? false,
          },
        });
      }
      
}
