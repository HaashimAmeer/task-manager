const express = require("express");
const app = express();
const port = 3200;

const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.end("Task Manager App");
});

// API STRUCTURE
// api.get("/api/v1/tasks)          get all the tasks
// api.post("/api/v1/tasks)         create a new task
// api.get("/api/v1/tasks/:id)      get single task
// api.patch("/api/v1/tasks/:id)    update single task
// api.delete("/api/v1/tasks/:id)   delete task

//Express router
app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`Server is listening to port ${port}...`);
});
