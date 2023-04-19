import axios from "axios"
import asyncHandler from "express-async-handler"

export const createAttentiveSubscriber = asyncHandler(async (req, res) => {
  const email = req.query.email
  const endpoint = "https://api.attentivemobile.com/v1/subscriptions"
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer TnJjaTQ0ak5HRmVNUkdDVkJMSzFyaU56YnpsdXBldHJYVzg2"
    }
    const body = {
        "user": {
            "email": email
        },
        "signUpSourceId": "426289",
    }
    const response = await axios.post(endpoint, body, {
        "headers": headers
    })

  console.log(response)
  res.status(200).send(response.data)
})

// const email = "test@gmail.com"
// createAttentiveSubscriber(email).then(function (res) {
//     console.log(res)
// })
// function createAttentiveSubscriber(email) {
//     const endpoint = "https://api.attentivemobile.com/v1/subscriptions"
//     const headers = {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer TnJjaTQ0ak5HRmVNUkdDVkJMSzFyaU56YnpsdXBldHJYVzg2"
//     }
//     const body = {
//         "user": {
//             "email": email
//         },
//         "signUpSourceId": "426289",
//     }
//     return axios.post(endpoint, body, {
//         "headers": headers
//     })
// }