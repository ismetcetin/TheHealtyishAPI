const fs = require("fs");
const usersDataPath = "../data/users.json";

exports.getUserCalorieIntake = () => {
    const userCalorieIntake = fs.readFileSync(usersDataPath);
    return JSON.parse(userCalorieIntake);
} 

exports.saveUserCalorieIntake = (userCalorieIntake) => {
     fs.readFileSync(usersDataPath, JSON.stringify(userCalorieIntake));
} 