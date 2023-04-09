import checkoutHandler from "../functions/mutations/createCheckout.js"
import addLineItemsHandler from "../functions/mutations/addLineItemsToCheckout.js"
import updateLineItemsHandler from "../functions/mutations/updateLineItemsInCheckout.js"
import removeLineItemsHandler from "../functions/mutations/removeLineItemsFromCheckout.js"
import applyDiscountCodeHandler from "../functions/mutations/applyDiscountCode.js"
import removeDiscountCodeHandler from "../functions/mutations/removeDiscountCode.js"
import singleCheckoutHandler from "../functions/queries/getCheckoutById.js"
import asyncHandler from "express-async-handler"

export const getCheckoutById = asyncHandler(async (req, res) => {
  const checkout = await singleCheckoutHandler(req.query)
  res.status(200).json(JSON.parse(checkout.body))
})

export const createCheckout = asyncHandler(async (req, res) => {
  const checkout = await checkoutHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))
})

export const addLineItems = asyncHandler(async (req, res) => {
  const checkout = await addLineItemsHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))
})

export const updateLineItems = asyncHandler(async (req, res) => {
  const checkout = await updateLineItemsHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))
})

export const removeLineItems = asyncHandler(async (req, res) => {
  const checkout = await removeLineItemsHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))
})

export const applyDiscountCode = asyncHandler(async (req, res) => {
  const checkout = await applyDiscountCodeHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))
})

export const removeDiscountCode = asyncHandler(async (req, res) => {
  const checkout = await removeDiscountCodeHandler(req.body)
  res.status(200).json(JSON.parse(checkout.body))
})
