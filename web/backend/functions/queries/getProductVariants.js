import { postToShopify } from "../utils/postToShopify.js"

const productVariantHandler = async (query, storefront_endpoint, storefront_api_key) => {
  const id = query.id;
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
            
            variants(first: 100) {
              nodes {
                id
                title
                price {
                  amount
                  currencyCode
                }

                compareAtPrice {
                  amount
                  currencyCode
                }

                product {
                  id
                }

                image {
                  altText
                  url
                }
              }
            }
          }
        }
      `,
      variables: {
        id: id
      }
    }, storefront_endpoint, storefront_api_key)

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}

export default productVariantHandler;