import { Role } from "@prisma/client";

export type TokenPayload = {
  userId: string;
  phone: string;
};

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    phone: string;
    name: string;
    role: Role;
  };
};
