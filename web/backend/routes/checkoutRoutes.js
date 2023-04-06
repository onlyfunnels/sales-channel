import express from "express";
const router = express.Router()
import { getCheckoutById, createCheckout } from "../controllers/checkoutController.js"

router.get('/single_checkout/', getCheckoutById)
router.post('/', createCheckout)
// router.get('/single_product/', getProductById)
// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

export default router;