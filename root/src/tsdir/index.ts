import userRoutes from "./routes/users";
import express from "express";

const app = express();

app.use("/users", userRoutes);
