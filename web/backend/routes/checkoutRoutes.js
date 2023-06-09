import express from "express";
const router = express.Router()
import { getCheckoutById, createCheckout, addLineItems, updateLineItems, removeLineItems, applyDiscountCode, removeDiscountCode } from "../controllers/checkoutController.js"

router.get('/single_checkout/', getCheckoutById)
router.post('/', createCheckout)
router.put('/add_line_items/', addLineItems)
router.put('/update_line_items/', updateLineItems)
router.delete('/remove_line_items/', removeLineItems)
router.put('/apply_discount_code/', applyDiscountCode)
router.put('/remove_discount_code/', removeDiscountCode)
// router.get('/single_product/', getProductById)
// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

export default router;