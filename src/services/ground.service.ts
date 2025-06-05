import { GroundModel } from "../models/GroundModel";

const groundModel = new GroundModel();

export class GroundService {
  create(data: any) {
    return groundModel.createGround(data);
  }

  getAll() {
    return groundModel.getAllGrounds();
  }

  getById(id: string) {
    return groundModel.getGroundById(id);
  }

  update(id: string, data: any) {
    return groundModel.updateGround(id, data);
  }

  delete(id: string) {
    return groundModel.deleteGround(id);
  }
}
