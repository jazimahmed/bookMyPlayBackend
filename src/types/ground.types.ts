export interface CreateGroundDTO {
    name: string;
    desc?: string;
    capacity?: number;
    surfaceType?: string;
    status?: "pending" | "approved" | "rejected";
    isVerified?: boolean;
    ownerId: string;
  }
  
  export interface UpdateGroundDTO extends Partial<CreateGroundDTO> {}
  