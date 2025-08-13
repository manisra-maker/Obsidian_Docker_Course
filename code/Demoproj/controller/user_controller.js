const { upsertUserByEmail } = require("../models/userModal");

async function Addupdateuser(req, res) {
  try {
    const result = await upsertUserByEmail(req.body);
    res.status(201).json({ message: "User saved", id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { Addupdateuser };
