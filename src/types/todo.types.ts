export interface TodoInput {
  title: string;
  description?: string;
  completed?: boolean;
}

export interface TodoOutput {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
