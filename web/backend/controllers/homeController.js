const asyncHandler = require('express-async-handler')

const home = asyncHandler(async (req, res) => {
  debugger;
  res.status(200).send("Hello, this is home page")
})


module.exports = {
  home
}