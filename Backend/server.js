import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import router from "./routes/userroutes.js";
import { notfound, errorHandler } from "./middleware/errormiddleware.js";
import connectdb from "./config/db.js";

const port = process.env.PORT || 5000;

connectdb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use("/api/users", router);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notfound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started at port ${port}`));
