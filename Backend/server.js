import express from "express";
import dotenv from "dotenv";
import router from "./routes/userroutes.js";
import { notfound, errorHandler } from "./middleware/errormiddleware.js";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use("/api/users", router);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notfound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started at port ${port}`));
