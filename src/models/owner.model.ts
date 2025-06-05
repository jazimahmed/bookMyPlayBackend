import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class OwnerModel {
  // Use this if you need to register both user + owner (e.g., admin creates both)
  async createUserAndOwner(data: any) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        phone: data.phone,
        otp: data.otp,
        role: "OWNER",
        isActive: true,
      },
    });

    const owner = await prisma.owner.create({
      data: {
        uId: user.id,
        nic: data.nic,
        profilePic: data.profilePic || null,
        bio: data.bio || null,
        bankAcc: data.bankAcc,
        bankName: data.bankName,
        bankCode: data.bankCode,
        isActive: true,
      },
    });

    return { user, owner };
  }

  // Use this for logged-in user creating their owner profile
  async createOwnerOnly(data: any, userId : string) {
    const owner = await prisma.owner.create({
      data: {
        uId: userId, // from token
        nic: data.nic,
        profilePic: data.profilePic || null,
        bio: data.bio || null,
        bankAcc: data.bankAcc,
        bankName: data.bankName,
        bankCode: data.bankCode,
        isActive: true,
      },
    });

    return owner;
  }
}
