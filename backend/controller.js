const userService = require("./services");

exports.loginUser = async (req, res) => {
  try {
    const result = await userService.loginUser(req.body);
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("An error occurred");
  }
};
