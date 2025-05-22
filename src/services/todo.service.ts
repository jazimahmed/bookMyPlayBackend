import { TodoModel } from "../models/todo.model";
import { TodoInput, TodoOutput } from "../types/todo.types";

export class TodoService {
  private todoModel: TodoModel;

  constructor() {
    this.todoModel = new TodoModel();
  }

  async createTodo(data: TodoInput, userId: string): Promise<TodoOutput> {
    return this.todoModel.create(data, userId);
  }

  async getTodoById(id: string, userId: string): Promise<TodoOutput> {
    const todo = await this.todoModel.findById(id, userId);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }

  async getAllTodos(userId: string): Promise<TodoOutput[]> {
    return this.todoModel.findAll(userId);
  }

  async updateTodo(
    id: string,
    userId: string,
    data: Partial<TodoInput>
  ): Promise<TodoOutput> {
    const todo = await this.todoModel.update(id, userId, data);

    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }

  async deleteTodo(id: string, userId: string): Promise<boolean> {
    const deleted = await this.todoModel.delete(id, userId);

    if (!deleted) {
      throw new Error("Todo not found");
    }

    return true;
  }
}
