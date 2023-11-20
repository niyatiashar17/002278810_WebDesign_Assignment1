const { validationResult } = require("express-validator");
const User = require("./User");
const bcrypt = require("bcryptjs");

exports.newUserCreate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(400)
        .json({ error: "A user with this email already exists" });
    }

    const password = String(req.body.password);
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    user = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: secPass,
    });
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("An error occurred");
  }
};

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res
        .status(400)
        .json({ error: "Please log in with correct credentials" });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("An error occurred");
  }
};

exports.editUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const password = String(req.body.password);
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    user.fullName = req.body.fullName;
    user.password = secPass;

    await user.save();

    console.log("User updated", user);
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("An error occurred");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.deleteOne();

    res.json({ success: "user deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("An error occurred");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("An error occurred");
  }
};
