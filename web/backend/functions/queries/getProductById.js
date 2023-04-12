import { postToShopify } from "../utils/postToShopify.js"

const productHandler = async (query, storefront_endpoint, storefront_api_key) => {
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
                price {
                  amount
                  currencyCode
                }

                product {
                  id
                }
              }
            }

            media(first: 10) {
              edges {
                node {
                  mediaContentType
                  alt
                  ...mediaFieldsByType
                }
              }
            }
          }
        }

        fragment mediaFieldsByType on Media {
          ... on ExternalVideo {
            id
            embeddedUrl
          }
          ... on MediaImage {
            image {
              url
            }
          }
          ... on Model3d {
            sources {
              url
              mimeType
              format
              filesize
            }
          }
          ... on Video {
            sources {
              url
              mimeType
              format
              height
              width
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

export default productHandler;