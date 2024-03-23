const User = require("../models/User");

/**
 * Create a new user
 * @name POST/api/users
*/
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    //* Check if all fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    //* create a new user in the database
    const user = await User.create(req.body);

    //* return the user
    res.status(201).json(user);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
