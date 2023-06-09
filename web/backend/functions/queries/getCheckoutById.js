import { postToShopify } from "../utils/postToShopify.js"

const singleCheckoutHandler = async (query, storefront_endpoint, storefront_api_key) => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getCheckoutById($id: ID!) {
          node(id: $id) {
            id
            ... on Checkout {
              id
              webUrl
              ready
              currencyCode
              subtotalPrice {
                amount
                currencyCode
              }
              taxesIncluded
              totalTax {
                amount
                currencyCode
              }
              totalPrice {
                amount
                currencyCode
              }
              lineItems(first: 250) {
                edges {
                  node {
                    id
                    title
                    quantity
                    variant {
                      id
                      title
                      product {
                        id
                      }
                      price {
                        amount
                        currencyCode
                      }
                      compareAtPrice {
                        amount
                        currencyCode
                      }
                      image {
                        altText
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        id: query.id
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

export default singleCheckoutHandler;

