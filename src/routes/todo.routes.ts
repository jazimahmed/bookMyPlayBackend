import { Router } from "express";
import { TodoController } from "../controllers/todo.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();
const todoController = new TodoController();

router.post("/", authenticate, todoController.createTodo);
router.get("/", authenticate, todoController.getAllTodos);
router.get("/:id", authenticate, todoController.getTodoById);
router.put("/:id", authenticate, todoController.updateTodo);
router.delete("/:id", authenticate, todoController.deleteTodo);

export default router;
