const { insertUser } = require("../models/userModal");

async function addUser(req, res) {
  try {
    const result = await insertUser(req.body);
    res.status(201).json({ message: "User saved", id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { addUser };
