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
