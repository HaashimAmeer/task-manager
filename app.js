const express = require("express");
const app = express();
const port = 3200;

//routes
app.get("/home", (req, res) => {
  res.end("Task Manager App");
});

// api.get("/api/v1/tasks)          get all the tasks
// api.post("/api/v1/tasks)         create a new task
// api.get("/api/v1/tasks/:id)      get single task
// api.put("/api/v1/tasks/:id)      update single task
// api.delete("/api/v1/tasks/:id)   delete task

app.listen(port, () => {
  console.log(`Server is listening to port ${port}...`);
});
