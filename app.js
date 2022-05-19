require("./db/connect");
const express = require("express");
const app = express();
const port = 3200;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const notFound = require("./middleware/not-found");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// API STRUCTURE
// api.get("/api/v1/tasks)          get all the tasks
// api.post("/api/v1/tasks)         create a new task
// api.get("/api/v1/tasks/:id)      get single task
// api.patch("/api/v1/tasks/:id)    update single task
// api.delete("/api/v1/tasks/:id)   delete task

//Express router
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening to port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

//  .then(() => {
//     console.log("CONNECTED TO THE DB...");
//   })
//   .catch((err) => console.log(err));
