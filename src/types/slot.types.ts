export interface SlotInput {
    day: string;
    startTime: string;
    endTime: string;
    rate: number;
    groundId: string;
  }
  
  export interface SlotOutput extends SlotInput {
    id: string;
  }
  