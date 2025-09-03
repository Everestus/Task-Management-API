import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getTasksByCategory,
  markTaskComplete,
} from "../controllers/taskController.js";

const router = express.Router();

// ✅ All tasks for logged-in user
router.route("/")
  .get(protect, getTasks)
  .post(protect, createTask);

// ✅ Filter tasks by category (keep before :id routes to avoid conflict)
router.get("/category/:category", protect, getTasksByCategory);

// ✅ Single task actions
router.route("/:id")
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

// ✅ Mark complete/incomplete
router.patch("/:id/complete", protect, markTaskComplete);

export default router;
