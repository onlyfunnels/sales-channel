import express from "express";
const router = express.Router()
import { getProducts, getProductById, getProductVariants } from "../controllers/productController.js"

router.get('/', getProducts)
router.get('/single_product/', getProductById)
router.get('/product_variants/', getProductVariants)
// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

export default router;