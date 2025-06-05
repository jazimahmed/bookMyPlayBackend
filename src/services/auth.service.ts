import { PrismaClient } from "@prisma/client";
import { generateToken } from "../utils/jwt.utils";
import { AuthResponse } from "../types/auth.types";
import { sendOtpSms } from "../utils/sms.utils";

const prisma = new PrismaClient();

export class AuthService {
  async sendOtp(phone: string, name: string = "New User"): Promise<{ message: string }> {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.user.upsert({
      where: { phone },
      update: { otp },
      create: {
        phone,
        name,
        otp,
        role: "PLAYER",
      },
    });

    // Simulate OTP sending
    await sendOtpSms(phone, otp);

    //console.log(`OTP sent to ${phone}: ${otp}`);
    return { message: "OTP sent successfully" };
    
  }

  async verifyOtp(phone: string, otp: string): Promise<AuthResponse> {
    const user = await prisma.user.findUnique({
      where: { phone },
    });

    if (!user || user.otp !== otp) {
      throw new Error("Invalid phone number or OTP");
    }

    const updatedUser = await prisma.user.update({
      where: { phone },
      data: {
        isActive: true,
        otp: null,
      },
    });

    const token = generateToken({
      userId: updatedUser.id,
      phone: updatedUser.phone,
    });

    return {
      token,
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        phone: updatedUser.phone,
        role: updatedUser.role,
      },
    };
  }
}
