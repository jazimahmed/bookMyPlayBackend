import { UserModel } from "../models/user.model";
import { UserInput, UserOutput } from "../types/user.types";

export class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  async getUserById(id: string): Promise<UserOutput> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async updateUser(id: string, data: Partial<UserInput>): Promise<UserOutput> {
    const user = await this.userModel.update(id, data);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async deleteUser(id: string): Promise<UserOutput> {
    const user = await this.userModel.delete(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}
