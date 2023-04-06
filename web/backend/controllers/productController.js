import productHandler from "../functions/queries/getProductsList.js"
import singleProductHandler from "../functions/queries/getProductById.js"
import productVariantHandler from "../functions/queries/getProductVariants.js"
import asyncHandler from "express-async-handler"

export const getProducts = asyncHandler(async (req, res) => {
  const products = await productHandler(req.query)
  res.status(200).json(JSON.parse(products.body))
})

export const getProductById = asyncHandler(async (req, res) => {
  const product = await singleProductHandler(req.query)
  res.status(200).json(JSON.parse(product.body))
})

export const getProductVariants = asyncHandler(async (req, res) => {
  const variants = await productVariantHandler()
  res.status(200).json(JSON.parse(variants.body))
})

// const setGoal = asyncHandler(async (req, res) => {
//   if(!req.body.text) {
//     res.status(400)
//     throw new Error('Please add a text field.')
//   }

//   const goal = await Goal.create({
//     text: req.body.text
//   })
//   res.status(200).json(goal)
// })

// const updateGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id)

//   if(!goal){
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
//   res.status(200).json(updatedGoal)
// })

// const deleteGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id)

//   if(!goal){
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   // const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
//   // res.status(200).json(deletedGoal)

//   await goal.remove()
//   res.status(200).json({id: req.params.id})
// })
