export interface UserInput {
  email: string;
  password: string;
  name: string;
}

export interface UserOutput {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
