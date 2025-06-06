import { SlotModel } from "../models/slot.model";
import { SlotInput } from "../types/slot.types";

const slotModel = new SlotModel();

export class SlotService {
  createSlot(data: SlotInput) {
    return slotModel.create(data);
  }

  getSlotsByGround(groundId: string) {
    return slotModel.findByGround(groundId);
  }

  deleteSlot(id: string) {
    return slotModel.delete(id);
  }

  updateSlot(id: string, data: Partial<SlotInput>) {
    return slotModel.update(id, data);
  }
}
