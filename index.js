// server.js
const express = require("express");
const app = express();

const { userRoute, router } = require("./routes");
const { app_port, app_name, origins } = require("./src/config");

const corsOptions = {
  origin: origins,
  credentials: true,
};

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors(corsOptions));


// Use routes
app.use('/', router);
app.use('/users', userRoute);


// Start server
app.listen(PORT, () => {
  console.log(`${app_name} Server is running on port ${app_port}`);
});
