const axios = require("axios");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const dashboardModel = require("../models/dashboard-model");
const URL = process.env.BASE_URL;
const APP_ID = process.env.APP_ID_NUTR;
const APP_KEY = process.env.APP_KEY_NUTR;

exports.getAllUsersCalorieIntake = (_req, res) => {
  const usersCalorieIntake = dashboardModel.getUserCalorieIntake();
  res.status(200).send(usersCalorieIntake);
};

exports.getSingleUserData = (req, res) => {
  const usersCalorieIntake = dashboardModel.getUserCalorieIntake();
  const userCalorieIntake = usersCalorieIntake.find(
    (user) => user.id === req.params.id
  );
  if (!userCalorieIntake)
    return res.status(400).send("The user doesn't exist!");

  res.status(200).send(userCalorieIntake);
};

exports.postSingleUserData = (req, res) => {
  const allUsersData = JSON.parse(fs.readFileSync("./data/users.json"));
  console.log(allUsersData);

  axios
    .post(`${URL}?app_id=${APP_ID}&app_key=${APP_KEY}`, {
      title: req.body.mealName,
      ingr: req.body.ingredients,
    })
    .then((res) => {
      allUsersData.forEach((user) => {
        if (user.id === req.body.user_id) {
          const newMeal = {
            id: uuidv4(),
            name: req.body.mealName,
            totalCal: Math.floor(res.data.calories),
            ingredients: req.body.ingredients,
          };
          user.meals.push(newMeal);
          fs.writeFileSync(
            "./data/users.json",
            JSON.stringify(allUsersData, null, 2)
          );
        }
      });
    })
    .then(() => {
      res.status(201).json(allUsersData);
    });
};
