require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080

const dashboardRoute = require("./routes/dashboard-route.js");
app.use("/dashboard", dashboardRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `)
    });  