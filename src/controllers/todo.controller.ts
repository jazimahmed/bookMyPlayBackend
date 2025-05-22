import { Request, Response } from "express";
import { TodoService } from "../services/todo.service";
import { TodoInput } from "../types/todo.types";

export class TodoController {
  private todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
  }

  createTodo = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const todoData: TodoInput = req.body;
      const userId = req.user.userId;

      const todo = await this.todoService.createTodo(todoData, userId);

      res.status(201).json(todo);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getTodoById = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const todoId = req.params.id;
      const userId = req.user.userId;

      const todo = await this.todoService.getTodoById(todoId, userId);

      res.status(200).json(todo);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  };

  getAllTodos = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const userId = req.user.userId;
      const todos = await this.todoService.getAllTodos(userId);

      res.status(200).json(todos);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  updateTodo = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const todoId = req.params.id;
      const userId = req.user.userId;
      const todoData: Partial<TodoInput> = req.body;

      const todo = await this.todoService.updateTodo(todoId, userId, todoData);

      res.status(200).json(todo);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  deleteTodo = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const todoId = req.params.id;
      const userId = req.user.userId;

      await this.todoService.deleteTodo(todoId, userId);

      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
}
