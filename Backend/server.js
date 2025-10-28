import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/userroutes.js";
import { notfound, errorHandler } from "./middleware/errormiddleware.js";
import connectdb from "./config/db.js";

const port = process.env.PORT || 5000;

connectdb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/users", router);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notfound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started at port ${port}`));
