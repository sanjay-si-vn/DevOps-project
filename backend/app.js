const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());

// Hardcoded users data
let users = [
  {
    id: 1,
    name: "Sanjay",
  },
];

// Health Check
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
  });
});

// Get All Users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add User
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
