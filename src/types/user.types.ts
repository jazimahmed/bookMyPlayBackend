import { Role } from "@prisma/client";

export interface UserInput {
  email: string;
  password: string;
  name: string;
  role?: Role;
  
}

export interface UserOutput {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}
