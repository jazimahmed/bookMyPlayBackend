import { User } from "@prisma/client";

export type UserOutput = User;

export type UserInput = {
  name: string;
  phone: string;
  otp?: string;
  role?: "PLAYER" | "OWNER";
  isActive?: boolean;
};