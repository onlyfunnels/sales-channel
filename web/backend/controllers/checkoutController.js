import checkoutHandler from "../functions/mutations/createCheckout.js"
import addLineItemsHandler from "../functions/mutations/addLineItemsToCheckout.js"
import updateLineItemsHandler from "../functions/mutations/updateLineItemsInCheckout.js"
import removeLineItemsHandler from "../functions/mutations/removeLineItemsFromCheckout.js"
import singleCheckoutHandler from "../functions/queries/getCheckoutById.js"
import asyncHandler from "express-async-handler"

export const getCheckoutById = asyncHandler(async (req, res) => {
  const checkout = await singleCheckoutHandler(req.query)
  res.status(200).json(JSON.parse(checkout.body))
})

export const createCheckout = asyncHandler(async (req, res) => {
  // if(!req.body.text) {
  //   res.status(400)
  //   throw new Error('Please add a text field.')
  // }

  const checkout = await checkoutHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))

  // const goal = await Goal.create({
  //   text: req.body.text
  // })
  // res.status(200).json(goal)
})

export const addLineItems = asyncHandler(async (req, res) => {
  // const goal = await Goal.findById(req.params.id)

  // if(!goal){
  //   res.status(400)
  //   throw new Error('Goal not found')
  // }

  console.log(req.body)
  const checkout = await addLineItemsHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))

  // const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
  // res.status(200).json(updatedGoal)
})

export const updateLineItems = asyncHandler(async (req, res) => {
  // const goal = await Goal.findById(req.params.id)

  // if(!goal){
  //   res.status(400)
  //   throw new Error('Goal not found')
  // }

  console.log(req.body)
  const checkout = await updateLineItemsHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))

  // const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
  // res.status(200).json(updatedGoal)
})

export const removeLineItems = asyncHandler(async (req, res) => {

  const checkout = await removeLineItemsHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))

  // const goal = await Goal.findById(req.params.id)

  // if(!goal){
  //   res.status(400)
  //   throw new Error('Goal not found')
  // }

  // // const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
  // // res.status(200).json(deletedGoal)

  // await goal.remove()
  // res.status(200).json({id: req.params.id})
})
