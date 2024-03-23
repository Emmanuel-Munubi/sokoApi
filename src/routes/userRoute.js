const express = require("express");
const router = express.Router();

// Import userRoute
const userRoute = require("./userRoute");

// Define root route
router.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export routes
module.exports = {
  userRoute,
  router, // Export the router containing all defined routes
};
