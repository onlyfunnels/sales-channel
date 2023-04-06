import { postToShopify } from "../utils/postToShopify.js"

const singleCheckoutHandler = async (query) => {
  const id = query.id;
  console.log("*********Type of ID", typeof(id))
  console.log("*********Value of ID", id)
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query {
          node(id: "gid://shopify/Checkout/8ced4ed87880f60737140db6d5f5f6db?key=523f4e094b80f857e4dcefe188cd4f65") {
            id
            ... on Checkout {
              id
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
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
      // variables: {
      //   id: id
      // }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}

export default singleCheckoutHandler;