import express from "express"
import mongoose from "mongoose"
import userRoutes from "./controller/userRoute.js"
import cookieParser from "cookie-parser"


const app = express()
app.use(express.json())
app.use(cookieParser())


app.listen(4000, ()=>{console.log(" listening on port 4000")})

mongoose.connect("mongodb://localhost:27017/Twitteruser").then(()=>{
    console.log("this is connected to mongoD")
}).catch((error)=>{
    console.log(error)
})

app.use("/", userRoutes)