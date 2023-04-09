import express from "express";
const router = express.Router()
import { getCollections } from "../controllers/collectionController.js"

router.get('/', getCollections)

export default router;
