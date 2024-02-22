import express from "express";
import morgan from "morgan";
import cors from "cors";
import Prisma from "./utils/prisma.js";
import errandRouter from './Routes/errands.routes.js'
import userRouter from "./Routes/user.routes.js"


const app = express();

const PORT = 6010;

Prisma
.$connect()
.then(() => {
    console.log("connected");
})
.catch((error) => {
    console.log("Error connecting to DG", error);
})

app.use(express.json());
app.use(express.urlencoded ({ extended: false, limit: "50mb"}));
app.use(morgan("dev"))
app.use(cors())

app.use(express.json());



app.use('/errands', errandRouter)
app.use("/user", userRouter)


app.listen(PORT, () => console.log("DATABASE IS RUNNING", PORT));
