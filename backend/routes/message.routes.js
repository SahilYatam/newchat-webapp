import { Router } from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/:id", verifyJWT, getMessages);
router.post("/send/:id", verifyJWT, sendMessage);

export default router;