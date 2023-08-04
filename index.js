// const express = require("express");
// const db = require("./config/db");
// const app = express();
// const mainRouter = require("./routes/main_route");
// const bodyParser = require("body-parser");
// app.use("/", mainRouter);

// app.listen(9000, function () {
//   console.log("server started");
// });
// app.use(bodyParser.json());
// app.use(express.json());
const express = require("express");
const app = express();
const mainRouter = require("./routes/main_route");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const User = require("./models/user_model");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Flag to track the database connection status
let isDatabaseConnected = false;

// Function to start the server after the database is connected
const startServer = () => {
  if (isDatabaseConnected) {
    const port = 9000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } else {
    setTimeout(startServer, 500); // Retry after 500ms
  }
};

// Connect to the database
connectDB()
  .then(() => {
    isDatabaseConnected = true; // Set the flag to true after successful connection
    console.log("Database ready.");
    app.use("/", mainRouter);
    startServer(); // Start the server
  })
  .catch((error) => {
    console.error("Error during database connection:", error);
  });
