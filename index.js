import express from "express";
import { MongoDdURL, PORT } from "./config.js";
import mongoose from "mongoose";
import itemRoutes from "./routes/itemsRoute.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
// Parse request body
app.use(express.json());
// CORS Policy
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to Bidding Application");
});

// using item routes
app.use("/items", itemRoutes);
app.use("/users", userRoutes);

mongoose
  .connect(MongoDdURL)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`App running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
