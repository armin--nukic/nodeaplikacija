const express = require("express");
const app = express();
const port = 3004;

app.use(express.json());
app.use(express.static("public"));

let users = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Smith", email: "jane@example.com" },
  { name: "Bob Johnson", email: "bob@example.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.delete("/users/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user) => user.email !== email);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// app.js
function addNumbers(a, b) {
  return a + b;
}

module.exports = {
  addNumbers,
};
