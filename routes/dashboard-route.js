const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const dashboardController = require("../controllers/dashboard-controller");

router 
    .route("/:id")
    .get(dashboardController.getSingleUserData)
    .post(dashboardController.postSingleUserData)

module.exports = router ;    