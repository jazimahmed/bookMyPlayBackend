import jwt, { Secret } from "jsonwebtoken";
import config from "../config";
import { TokenPayload } from "../types/auth.types";

const jwtSecret: Secret = config.jwt.secret as Secret;
//const jwtExpiry: string | number = config.jwt.expiresIn as string;

export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, jwtSecret, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, jwtSecret) as TokenPayload;
  } catch (error) {
    return null;
  }
};
