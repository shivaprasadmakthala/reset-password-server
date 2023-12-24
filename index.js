const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/connect");
const userRouter = require("./routes/userRouter");
const { notFound } = require("./middlewares/errorMiddleware");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/user", userRouter);

app.use(notFound);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});