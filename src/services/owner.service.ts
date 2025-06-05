import { OwnerModel } from "../models/owner.model";

export class OwnerService {
    private ownerModel = new OwnerModel();
  
    async registerOwner(data: any, userId : string) {
      // Only creating the owner — user is already logged in
      return this.ownerModel.createOwnerOnly(data, userId);
    }
  }
  