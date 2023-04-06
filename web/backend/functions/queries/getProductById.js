import { postToShopify } from "../utils/postToShopify.js"

const productHandler = async (query) => {
  const id = query.id;
  console.log("*********Type of ID", typeof(id))
  console.log("*********Value of ID", id)
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getProductById($id: ID!) {
          product(id: $id) {
            id
            handle
            description
            title
            productType
            totalInventory
          }
        }
      `,
      variables: {
        id: id
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}

export default productHandler;