import collectionHandler from "../functions/queries/getCollectionsList.js"
import asyncHandler from "express-async-handler"

export const getCollections = asyncHandler(async (req, res) => {
  const collections = await collectionHandler(req.query)
  res.status(200).json(JSON.parse(collections.body))
})
