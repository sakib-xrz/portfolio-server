const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const projects = require("./data/project.json");

app.get("/", (req, res) => {
  res.send("Portfolio Server is running...");
});

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  const projectsById = projects.find((p) => p.id === id);
  res.send(projectsById);
});

app.listen(port, () => {
  console.log(`Portfolio app listening on port ${port}`);
});
