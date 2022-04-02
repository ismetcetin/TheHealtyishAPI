const dashboardModel = require ("../models/dashboard-model");

exports.getAllUsersCalorieIntake = (_req, res) => {
    const usersCalorieIntake = dashboardModel.getUserCalorieIntake();
    res.status(200).send(userCalorieIntake);
  };
  
  exports.getSingleUserData = (req, res) => {
    const usersCalorieIntake = dashboardModel.getUserCalorieIntake();
    const userCalorieIntake = usersCalorieIntake.find(
      (user) => user.id === req.params.id
    );
    if (!userCalorieIntake) return res.status(400).send("The user doesn't exist!");
  
    res.status(200).send(userCalorieIntake);
  };
  