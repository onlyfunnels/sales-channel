import express from "express";
const router = express.Router()
import { createAttentiveSubscriber } from "../controllers/attentiveMobileController.js"

router.get('/subscription_detail/', createAttentiveSubscriber)

export default router;