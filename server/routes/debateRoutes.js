import express from "express";
import {
  createDebate,
  joinDebate,
  getAllDebates,
} from "../controllers/debateController.js";

import { 
  sendMessage, 
  getMessages, 
  deleteMessage 
} from "../controllers/messageController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Debate routes
router.get("/", getAllDebates);
router.post("/create", protect, createDebate);
router.post("/:id/join", protect, joinDebate);

// Message routes
router.post("/:id/message", protect, sendMessage);
router.get("/:id/messages", getMessages);
router.delete("/message/:messageId", protect, deleteMessage);

export default router;